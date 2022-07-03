"use strict";

$(window).ready(function () {
  var passwordtype = $("#registerPassword input");
  $(".registerNext").click(function () {
    var step = $(this).data("step");
    var registerStepIndex = $(this).parent().index();
    console.log(registerStepIndex);
    $(this).parent().removeClass("active");
    $(step).addClass("active");
    $(".stepwrap li").eq(registerStepIndex + 1).addClass("active").siblings().removeClass("active");
  });
  $(".viewtext").click(function () {
    if (passwordtype.attr("type") == "password") {
      $(passwordtype).attr("type", "text");
    } else {
      $(passwordtype).attr("type", "password");
    }
  });
});