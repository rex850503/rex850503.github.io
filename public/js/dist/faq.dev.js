"use strict";

$(window).ready(function () {
  var rolewrapIndex = 0;
  $(".faqList li, .rolewrap button").click(function () {
    if ($(this).hasClass("active") == true) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active").siblings().removeClass("active");
    }
  });
  $(".rolewrap button").click(function () {
    rolewrapIndex = $(this).index();
    $(".faqList").eq(rolewrapIndex).addClass("active").siblings().removeClass("active");
  });
});