"use strict";

$(window).ready(function () {
  //計算 filter父層的高度 - header高度
  var filter = $("#filterStoreWrap").offset().top;
  filter = filter - 100;
  $("#filterPopup").click(function () {
    $(".filterWrap, body").addClass("open");
  }); //#filterPopup end

  $(".scoreLike").click(function () {
    var store = $(this).parent();
    var storeIndex = store.index();
    $(".store").eq(storeIndex).find(".scoreLike").toggleClass("active");
  });
  var filterFixed = $(window).scroll(function () {
    if ($(this).scrollTop() >= filter) {
      $(".filterWrap").addClass("navfixed");
    } else {
      $(".filterWrap").removeClass("navfixed");
    }
  }); //filterFixed end

  $(window).resize(function () {
    //計算 filter父層的高度 - header高度
    filter = $("#filterStoreWrap").offset().top;
    filter = filter - 100;

    if ($(window).width() >= 992) {
      $("body, .filterWrap").removeClass("open");
    }

    filterFixed();
  }); //window resize filterFixed end
});