var jumpjs = window.jumpjs;
var Game = jumpjs.core.Game;
var Scene = jumpjs.core.Scene;
var Entity = jumpjs.entities.Entity;
var Component = jumpjs.components.Component;
var Text = jumpjs.components.Text;
var entities = require('../../entities');
var levels = require('./levels');

var scene = new Scene();
scene.locals = {
  deaths: 0,
  score: 0,
  levelNumber: 0
};

var player = new entities.Player();
var exit = new entities.Exit();

var deaths = new Entity(220, 5, 100, 10);
deaths.addComponent('text', new Text());
deaths.text.font = '16px Georgia';

var score = new Entity(320, 5, 100, 10);
score.addComponent('text', new Text());
score.text.font = '16px Georgia';

var levelText = new Entity(420, 5, 100, 10);
levelText.addComponent('text', new Text());
levelText.text.font = '16px Georgia';

var enemies = [];
for (var i = 0; i < 10; i++) {
  var enemy = new entities.Enemy();
  enemy.setId('enemy_' + i);
  enemies.push(enemy);
}

var ledgeCount = 0;

var ledges = [];
for (var i = 0; i < 20; i++) {
  var ledge = new entities.Ledge();
  ledge.setId('ledge_' + ledgeCount++);
  ledges.push(ledge);
}

var hiddenLedges = [];
for (var i = 0; i < 20; i++) {
  var hiddenLedge = new entities.Ledge();
  hiddenLedge.removeComponent('rect');
  hiddenLedge.setId('ledge_' + ledgeCount++);
  hiddenLedges.push(hiddenLedge);
}

var fakeLedges = [];
for (var i = 0; i < 20; i++) {
  var fakeLedge = new entities.Ledge();
  fakeLedge.setId('fake_ledge');
  fakeLedges.push(fakeLedge);
}

var addLedgesToScene = function (arr, info, time) {
  for (var i = 0; i < arr.length; i++) {
    var ledge = arr[i];
    var ledgeInfo = info[i];
    if (ledgeInfo) {
      ledge.transform.x = ledgeInfo[2];
      ledge.transform.y = ledgeInfo[3];
      ledge.transform.width = ledgeInfo[0];
      ledge.transform.height = ledgeInfo[1];
      scene.addEntity(ledge, time);
    }
  }
};

scene.onSetup = function () {

  var level = levels[scene.locals.levelNumber];

  if (!level) {
    scene.locals.levelNumber = 0;
    level = levels[scene.locals.levelNumber];
  }

  player.transform.x = level.joe[0];
  player.transform.y = level.joe[1];
  scene.addEntity(player);

  exit.transform.x = level.exit[0];
  exit.transform.y = level.exit[1];
  scene.addEntity(exit);

  for (var i = 0; i < enemies.length; i++) {
    var enemy = enemies[i];
    var enemyInfo = level.enemies[i];
    if (enemyInfo) {
      enemy.transform.x = enemyInfo[0];
      enemy.transform.y = enemyInfo[1];
      enemy.ledge = enemyInfo[2];
      scene.addEntity(enemy);
    }
  }

  addLedgesToScene(ledges, level.ledges);
  if (level.hiddenLedges) {
    addLedgesToScene(hiddenLedges, level.hiddenLedges);
  }
  if (level.fakeLedges) {
    var time = null;
    if (scene.locals.levelNumber === 5) {
      time = 2000;
    }
    addLedgesToScene(fakeLedges, level.fakeLedges, time);
  }

  deaths.text.setText('Deaths: ' + scene.locals.deaths);
  scene.addEntity(deaths);

  score.text.setText('Score: ' + scene.locals.score);
  scene.addEntity(score);

  levelText.text.setText('Level: ' + (scene.locals.levelNumber + 1));
  scene.addEntity(levelText);

}

module.exports = scene;
