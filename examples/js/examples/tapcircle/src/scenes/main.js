var jumpjs = window.jumpjs;
var components = jumpjs.components;
var core = jumpjs.core;

core.Game.backgroundColor = 'black';

var width = 700;
var height = 500;
var x = Math.round(window.innerWidth / 2) - Math.round(width / 2);
var y = Math.round(window.innerHeight / 2) - Math.round(height / 2);
var scene = new core.Scene(x, y, width, height, 'white');

var circles = [];
for (var i = 0; i < 4; i++) {
  circles[i] = new components.Circle(25, 25, 25, 25, 50, 'green', true);
  circles[i].visible = false;
  scene.addComponent(circles[i]);
}


scene.on('resize', function(w, h) {
  scene.x = Math.round(w / 2) - Math.round(width / 2);
  scene.y = Math.round(h / 2) - Math.round(height / 2);
});

scene.on('touchstart', function(x, y, event, i) {
  circles[i].visible = true;
  circles[i].x = x;
  circles[i].y = y;
});

scene.on('touchmove', function(x, y, event, i) {
  circles[i].x = x;
  circles[i].y = y;
});

scene.on('touchend', function(x, y, event, i) {
  circles[i].visible = false;
});

scene.on('click', function (x, y, event) {
  circles[0].visible = true;
  circles[0].x = x;
  circles[0].y = y;
});

var circle2 = new components.Circle(125, 125, 25, 25, 50, 'blue', true);
scene.addComponent(circle2);

circle2.on('click', function(event) {
  circle2.visible = false;
});

circle2.on('touchstart', function(event) {
  circle2.visible = false;
});

module.exports = scene;
