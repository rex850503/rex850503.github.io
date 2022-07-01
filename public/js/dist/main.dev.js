"use strict";

$(window).ready(function () {
  //計算 filter父層的高度 - header高度
  var filter = $("#filterStoreWrap").offset().top - 100;
  $("#loginBtn, #sideListLogin").click(function () {
    $("#login, body").addClass("open");

    if ($("#sideMenu").hasClass("active")) {
      $("#sideMenu").removeClass("active");
    }
  });
  $("#login").on("click", closePopup);
  $("#login .close").on("click", closePopup);
  $(".filterWrap").on("click", closePopup);
  $(".filterWrap .close").on("click", closePopup);

  function closePopup(e) {
    console.log(e.target); //可以知道被點擊的目標是誰

    if (this == e.target) {
      $("body, #login, .filterWrap").removeClass("open");
    }
  }

  ; //#loginBtn end

  $("#burger").click(function () {
    $("#sideMenu").addClass("active");
  });
  $("#sideMenu .close").click(function () {
    $("#sideMenu").removeClass("active");
  }); //#burger end

  $("#filterPopup").click(function () {
    $(".filterWrap, body").addClass("open");
  }); //#filterPopup end

  var filterFixed = $(window).scroll(function () {
    if ($(this).scrollTop() >= filter) {
      $(".filterWrap").addClass("navfixed");
    } else {
      $(".filterWrap").removeClass("navfixed");
    }
  }); //filterFixed end

  $(window).resize(function () {
    //計算 filter父層的高度 - header高度
    filter = $("#filterStoreWrap").offset().top - 100;

    if ($(window).width() >= 992) {
      $("body, .filterWrap").removeClass("open");
    }

    filterFixed();
  }); //window resize filterFixed end
});