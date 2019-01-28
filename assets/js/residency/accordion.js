$(document).ready(function($) {
    $('.residency__accordion').find('.residency__accordion__toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".residency__accordion__content").not($(this).next()).slideUp('fast');

    });
  });