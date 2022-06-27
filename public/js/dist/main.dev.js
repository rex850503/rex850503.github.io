"use strict";

$(document).ready(function () {
  $("#burger").click(function () {
    $("#sideMenu").addClass("active");
  });
  $("#sideMenu .close").click(function () {
    $("#sideMenu").removeClass("active");
  });
});