import $ from './initJquery';
import jQueryMigrate from './jqueryMigrate';
import bootstrap from 'bootstrap';
import bootstrapHoverDropDown from './resources/js/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js';
import jQuerySlimscroll from './resources/js/jquery-slimscroll/jquery.slimscroll.min.js';
import countdown from './resources/js/countdown/jquery.countdown.min.js';
import backstretch from './resources/js/backstretch/jquery.backstretch.min.js';

jQuery(document).ready(function() {
  var austDay = new Date();
  austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
  $('#defaultCountdown').countdown({until: austDay});
  $('#year').text(austDay.getFullYear());
  // init background slide images
  $.backstretch([
    './resources/img/backgrounds/3.jpg',
    './resources/img/backgrounds/4.jpg',
    './resources/img/backgrounds/5.jpg',
    './resources/img/backgrounds/7.jpg',
    './resources/img/backgrounds/8.jpg'
  ], {
    fade: 1000,
    duration: 10000
  });
});
