"use strict";

$(window).ready(function () {
  $(".registerNext").click(function () {
    var step = $(".registerNext").data("step");
    console.log(step);
    $(this).parent().removeClass("active");
    $(step).addClass("active");
  });
});