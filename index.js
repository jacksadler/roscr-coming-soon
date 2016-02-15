import $ from './initJquery';
import jQueryMigrate from './jqueryMigrate';
import bootstrap from 'bootstrap';
import bootstrapHoverDrown from './resources/js/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js';
import jQuerySlimscroll from './resources/js/jquery-slimscroll/jquery.slimscroll.min.js';
import countdown from './resources/js/countdown/jquery.countdown.js';
import backstretch from './resources/js/backstretch/jquery.backstretch.min.js';

window.jQuery(document).ready(function () {
  const elemCache = {
    days: $('#daysCount'),
    hours: $('#hoursCount'),
    minutes: $('#minutesCount'),
    seconds: $('#secondsCount')
  };

  const finalDate = '2016/03/16 15:30:00';

  $('#coming-soon-countdown').countdown(finalDate, {
    precision: 1000
  }).on('update.countdown', function (event) {
    elemCache.days.find('.value').text(event.offset.totalDays);
    elemCache.hours.find('.value').text(event.offset.hours);
    elemCache.minutes.find('.value').text(event.offset.minutes);
    elemCache.seconds.find('.value').text(event.offset.seconds);
  });

  $('#subscribe').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // init background slide images
  $.backstretch([
    './resources/img/backgrounds/3.jpg',
    './resources/img/backgrounds/4.jpg',
    './resources/img/backgrounds/5.jpg',
    './resources/img/backgrounds/7.jpg'
  ], {
    fade: 2000,
    duration: 9000
  });
});
