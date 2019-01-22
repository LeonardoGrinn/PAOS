$(document).ready(function($) {
    $('.accordion').find('.accordion__toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion__content").not($(this).next()).slideUp('fast');

    });
  });