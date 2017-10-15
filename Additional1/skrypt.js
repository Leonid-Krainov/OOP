
document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';


document.body.onkeydown = function (e) {
var el = document.getElementById('player');
var b = document.querySelector('body');

var KEYCODE_LEFT = 37;
var KEYCODE_RIGHT = 39;
var KEYCODE_UP = 38;
var KEYCODE_DOWN = 40;
var KEYCODE_FIRE = 32;

if (e.keyCode == KEYCODE_LEFT) {
  el.style.left = (parseInt(el.style.left) - 10) + 'px';
}
else if (e.keyCode == KEYCODE_RIGHT) {
  el.style.left = (parseInt(el.style.left) + 10) + 'px';
}
else if (e.keyCode == KEYCODE_UP) {
  el.style.top = (parseInt(el.style.top) - 10) + 'px';
}
else if (e.keyCode == KEYCODE_DOWN) {
  el.style.top = (parseInt(el.style.top) + 10) + 'px';
}
if (e.keyCode == KEYCODE_FIRE) {
  console.log (el);
    var bullet = document.createElement("div");
    var newImg = b.appendChild(bullet);
    newImg.className = "bullet";
    newImg.style.top = (parseInt(el.style.top) + 100) + 'px';
    newImg.style.left = (parseInt(el.style.left) + 400) + 'px';
  }
}