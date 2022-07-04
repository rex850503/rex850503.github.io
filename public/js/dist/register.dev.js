"use strict";

$(window).ready(function () {
  var passwordtype = $("#registerPassword input");
  $(".registerNext").click(function () {
    var step = $(this).data("step");
    var nextstep = $(this).data("nextstep");
    var registerStepIndex = $(this).parent().index();

    if (step == "#registerWay" && $("#registerWay input").val() == "") {
      alert("請填寫電話號碼");
    } else if (step == "#verification" && $("#verification input").val() == "") {
      console.log($("#verification input").val());
      alert("請填寫驗證碼");
    } else if (step == "#registerPassword" && $("#registerPassword input").val() == "") {
      alert("請填寫密碼");
    } else {
      $(this).parent().removeClass("active");
      $(nextstep).addClass("active");
      $(".stepwrap li").eq(registerStepIndex + 1).addClass("active").siblings().removeClass("active");
    }
  });
  $(".viewtext").click(function () {
    if (passwordtype.val() != "") {
      if (passwordtype.attr("type") == "password") {
        $(passwordtype).attr("type", "text");
      } else {
        $(passwordtype).attr("type", "password");
      }
    }
  });
});