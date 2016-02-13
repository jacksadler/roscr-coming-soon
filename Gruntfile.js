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
            'node_modules/simple-line-icons/css/simple-line-icons.css',
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'resources/fonts/font-awesome-4.5.0/css/font-awesome.css',
            'resources/css/*.css'
          ]
        }
      }
    },
    watch: {}
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
