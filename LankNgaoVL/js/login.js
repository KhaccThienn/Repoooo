var username = prompt("Nhap Username di, can than pay mau =))");
var password = prompt("Nhap Password di, de nho thoi =))");

$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  if (userName == username && pwd == password) {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    requestFullScreen();
    setTimeout(function () {
      location.href = "BirthdayCake.html";
    }, 2000);
  } else {
    alert("Wrong Password, hay thu lai =))");
  }
});

function requestFullScreen(element) {
  var element = document.documentElement;
  var requestMethod =
    element.requestFullScreen || //W3C
    element.webkitRequestFullScreen || //Chrome
    element.mozRequestFullScreen || //FireFox
    element.msRequestFullScreen; //IE11
  if (requestMethod) {
    requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") {
    //for Internet Explorer
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}
