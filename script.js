$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    //toggle menu/navbar script
    // scroll-up button show/hide script
    // if (this.scrollY > 500) {
    //   $(".scroll-up-btn").addClass("show");
    // } else {
    //   $(".scroll-up-btn").removeClass("show");
    // }
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
