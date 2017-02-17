var jumpjs = window.jumpjs;
var Game = jumpjs.core.Game;
var Scene = jumpjs.core.Scene;
var Entity = jumpjs.entities.Entity;
var Button = jumpjs.entities.Button;
var Text = jumpjs.components.Text;
var Rect = jumpjs.components.Rect;
var Keyboard = jumpjs.input.Keyboard;
var BoxCollider2D = jumpjs.components.BoxCollider2D;
var entities = require('../entities');

var scene = new Scene();
var player = new entities.Player(135, 250);
var ledge = new entities.Ledge(110, 300, 100, 5);
var ledge2 = new entities.Ledge(240, 370, 100, 5);
var ledge3 = new entities.Ledge(75, 440, 100, 5);

var title = new Entity(305, 140, 200, 100);
title.addComponent('text', new Text());
title.text.font = '64px Georgia';
if (Game.isMobile.any()) {
  title.text.setText('Jump Joe mobile');
} else {
  title.text.setText('Jump Joe');
}

var msgToStart = new Entity(340, 210, 200, 100);
msgToStart.addComponent('text', new Text());
msgToStart.text.font = '24px Georgia';
msgToStart.text.setText('Press enter or click');

var startBtn = new Button(440, 305, 100, 35);
startBtn.addComponent('boxcollider', new BoxCollider2D());
startBtn.text.setText('Start');
startBtn.text.font = '32px Georgia';
startBtn.rect.color = '#6996F9';
startBtn.on('collision2D', function() {
  Game.setCurrentScene('game');
});
startBtn.on('click', function() {
  Game.setCurrentScene('game');
});

scene.onSetup = function () {
  scene.addEntity(player);
  scene.addEntity(ledge);
  scene.addEntity(ledge2);
  scene.addEntity(ledge3);
  scene.addEntity(title);
  scene.addEntity(msgToStart);
  scene.addEntity(startBtn);
}

module.exports = scene;
