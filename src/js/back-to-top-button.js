// Scroll to top button if present in page
$(document).ready(function () {
  var backToTopButtonScrollTrigger = $(window).height();

  if ($('.back-to-top').length) {

    var backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > backToTopButtonScrollTrigger) {
        $('.back-to-top').addClass('show');
      } else {
        $('.back-to-top').removeClass('show');
      }
    };

    backToTop();

    $(window).on('scroll', function () {
      backToTop();
    });

    $('.back-to-top').on('click', function (e) {

      e.preventDefault();

      $('html,body').animate({
        scrollTop: 0,
      }, 700);
    });
  }
});
