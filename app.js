//Event Handeling
var singleClickBtn = document.querySelector('.single-click-btn');
var doubleClickBtn = document.querySelector('.double-click-btn');
var mouseOnBtn = document.querySelector('.mouse-on-btn');
var mouseOffBtn = document.querySelector('.mouse-off-btn');

function pickRandomBackgroundColor() {
  const colorOptions = ['#303F9F', '#00897B', '#3D3F9F', '#C62828', '#673AB7'];
  let randomColorIndex = Math.floor(Math.random() * colorOptions.length + 1);
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
