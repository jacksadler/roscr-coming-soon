module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/dist.min.css': [
            'resources/fonts/PT_Sans/stylesheet.css',
            'resources/fonts/simple-line-icons/css/simple-line-icons.css',
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'resources/fonts/font-awesome-4.5.0/css/font-awesome.css',
            'resources/css/*.css'
          ]
        }
      }
    },
    webpack: {
      dev: {
        entry: "./index.js",

        output: {
            path: "build/",
            filename: "dist.min.js",
        },

        stats: {
            // Configure the console output
            colors: false,
            modules: true,
            reasons: true
        },

        devtool: 'source-map',
        
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference 
              query: {
                presets: ['react', 'es2015']
              }
            }
          ]
        }
      },
    },
    watch: {
      scripts: {
        files: '**/*.js',
        tasks: ['webpack:dev']
      },
      css: {
        files: 'resources/css/*.css',
        tasks: ['cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-webpack');
};
