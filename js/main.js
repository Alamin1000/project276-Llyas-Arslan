(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".rt-result-slider-active").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    center: true,
    navText: [
      '<span class="far fa-chevron-left"></span>',
      '<span class="far fa-chevron-right"></span>',
    ],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
  $(".testimonial-slider-active").owlCarousel({
    loop: true,
    margin: 20,
    items: 2,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<span class="far fa-chevron-left"></span>',
      '<span class="far fa-chevron-right"></span>',
    ],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });

  //magnificPopup
  $(".popup-img").magnificPopup({
    type: "image",
  });
  $(".popup-video").magnificPopup({
    type: "iframe",
  });
  // magnific-popup-img-gallery
  $(".album-img a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //multiple-img-gallery
  $(".image-box").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: ".img", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });

  // custom step-progress
  $("body").addClass("step1").attr("step-progress", "1");
  $(".step-progress-next").click(function () {
    var stepCurrent = $("body").attr("step-progress");
    $("body").attr("step-progress", stepCurrent - "-1");
  });
  $(".step-progress-next").click(function () {
    var stepCurrent2 = $("body").attr("step-progress");
    $("body").addClass("step" + stepCurrent2);
    var selector = ".all-step-progress .step:nth-child(" + stepCurrent2 + ")";
    $(selector).addClass("active");
    $(".all-step-progress .step").removeClass("current");
    $(selector).addClass("current");
    var selector2 = ".all-step-content .step:nth-child(" + stepCurrent2 + ")";
    $(".all-step-content .step").removeClass("active");
    $(selector2).addClass("active");
  });
  $(".step-progress-prev").click(function () {
    var stepCurrent = $("body").attr("step-progress");
    var stepCurrent3 = $("body").attr("step-progress");
    var one = 1;
    if (stepCurrent3 > one) {
      $("body").attr("step-progress", stepCurrent - "1");
    }
  });
  $(".step-progress-prev").click(function () {
    var stepCurrent2 = $("body").attr("step-progress");
    $("body").removeClass("step" + (stepCurrent2 - "-1"));
    var selector =
      ".all-step-progress .step:nth-child(" + (stepCurrent2 - -1) + ")";
    var prevSelector =
      ".all-step-progress .step:nth-child(" + (stepCurrent2 - 0) + ")";
    $(selector).removeClass("active");
    $(selector).removeClass("current");
    $(prevSelector).addClass("current");
    var selector2 = ".all-step-content .step:nth-child(" + stepCurrent2 + ")";
    $(".all-step-content .step").removeClass("active");
    $(selector2).addClass("active");
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);
});
