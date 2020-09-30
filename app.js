//Event Handeling
var singleClickBtn = document.querySelector('.single-click-btn');
var doubleClickBtn = document.querySelector('.double-click-btn');
var mouseOnBtn = document.querySelector('.mouse-on-btn');
var mouseOffBtn = document.querySelector('.mouse-off-btn');

function pickRandomBackgroundColor() {
  const colorOptions = ['#303F9F', '#00897B', '#3D3F9F', '#C62828', '#673AB7'];
  let randomColorIndex = Math.floor(Math.random() * colorOptions.length);
  return colorOptions[randomColorIndex];
}

singleClickBtn.addEventListener('click', () => {
  singleClickBtn.style.backgroundColor = pickRandomBackgroundColor();
});
doubleClickBtn.addEventListener('dblclick', (e) => {
  doubleClickBtn.style.backgroundColor = pickRandomBackgroundColor();
});
mouseOnBtn.addEventListener('mouseover', (e) => {
  mouseOnBtn.style.backgroundColor = pickRandomBackgroundColor();
});
mouseOffBtn.addEventListener('mouseout', (e) => {
  mouseOffBtn.style.backgroundColor = pickRandomBackgroundColor();
});

//Event Propegation

var boxWrapper = document.querySelector('.box-wrapper');

boxWrapper.addEventListener('click', (e) => {
  e.target.style.backgroundColor = pickRandomBackgroundColor();
});

//Paint Project

const colorCode_1 = '#303F9F';
const colorCode_2 = '#BDBDBD';
const colorCode_3 = '#00897B';
const colorCode_4 = '#3D3F9F';
const colorCode_5 = '#C62828';
const colorCode_6 = '#673AB7';
const canvas = document.querySelector('.paint-display');
const clearBtn = document.querySelector('.clear-btn');
const ctx = canvas.getContext('2d');
var active_color = '#303F9F';
var colorPick = document.querySelector('.color-picker-wrapper');
var width = 900;
var height = 500;

let curX;
let curY;
let pressed = false;

colorPick.addEventListener('click', (e) => {
  active_color = e.target.innerText;
  console.log(active_color);
});

document.onmousemove = function (e) {
  curX = window.Event
    ? e.pageX
    : e.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  curY = window.Event
    ? e.pageY
    : e.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);
};

canvas.onmousedown = function () {
  pressed = true;
};

canvas.onmouseup = function () {
  pressed = false;
};

clearBtn.onclick = function () {
  ctx.fillStyle = ' #121212';
  ctx.fillRect(0, 0, width, height);
};

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function draw() {
  if (pressed) {
    ctx.fillStyle = active_color;
    ctx.beginPath();
    ctx.arc(curX - 60, curY - 866, 5, degToRad(0), degToRad(360), false);
    ctx.fill();
    console.log(curX, curY);
  }

  requestAnimationFrame(draw);
}

draw();
