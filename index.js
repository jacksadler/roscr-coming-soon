import $ from './initJquery';
import jQueryMigrate from './jqueryMigrate';
import bootstrap from 'bootstrap';
import bootstrapHoverDrown from './resources/js/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js';
import jQuerySlimscroll from './resources/js/jquery-slimscroll/jquery.slimscroll.min.js';
import countdown from './resources/js/countdown/jquery.countdown.js';
import bgCycler from './resources/js/bg-cycler.js';

window.jQuery(document).ready(function () {
  const elemCache = {
    days: $('#daysCount'),
    hours: $('#hoursCount'),
    minutes: $('#minutesCount'),
    seconds: $('#secondsCount'),
    emailForm: $('form'),
    emailInput: $('form input'),
    submitBtn: $('#subscribe')
  };

  const finalDate = '2016/03/16 15:30:00';

  function validateEmail (emailStr) {
    var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|co.uk)\b/;
    return emailRegex.test(emailStr);
  }

  function submitEmail (email) {
    $.ajax({
      url:'email',
      method:'POST',
      data:{email}
    })
    .done(()=>{
      elemCache.emailInput.attr('disabled', true)
      elemCache.submitBtn.addClass('disabled')
    })
    .fail(function() {});
  }

  $('#coming-soon-countdown').countdown(finalDate, {
    precision: 1000
  }).on('update.countdown', function (event) {
    elemCache.days.find('.value').text(event.offset.totalDays);
    elemCache.hours.find('.value').text(event.offset.hours);
    elemCache.minutes.find('.value').text(event.offset.minutes);
    elemCache.seconds.find('.value').text(event.offset.seconds);
  });

  elemCache.emailInput.keyup(function (e) {
    elemCache.emailForm.toggleClass('has-error', !validateEmail(e.target.value.trim()));
  });

  $('#subscribe').click(function (e) {
    const email = elemCache.emailInput.val().trim();
    e.preventDefault();
    e.stopPropagation();
    elemCache.emailForm.addClass('submitted');
    if (validateEmail(email)) {
      submitEmail(email);
    }
  });

  bgCycler();
});
