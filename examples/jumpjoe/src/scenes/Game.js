import Scene from 'core/Scene';
import Ledge from '../entities/Ledge';
import Exit from '../entities/Exit';
import Player from '../entities/Player';
import Enemy from '../entities/Enemy';
import Text from 'core/components/Text';

var levels = require('../data/levels');

var scene = new Scene({ x: 0, y: 0, width: 700, height: 500 });
scene.locals = {
  deaths: 0,
  score: 0,
  levelNumber: 0,
};

scene.on('setup', () => {
  
  var player = new Player({ x: 135, y: 250, width: 24, height: 36 });
  var exit = new Exit();

  var deaths = new Text({ x: 220, y: 5, width: 100, height: 10 });
  deaths.font = '16px Georgia';

  var score = new Text({ x: 320, y: 5, width: 100, height: 10 });
  score.font = '16px Georgia';

  var levelText = new Text({ x: 420, y: 5, width: 100, height: 10 });
  levelText.font = '16px Georgia';

  var enemies = [];
  for (var i = 0; i < 10; i++) {
    var enemy = new Enemy();
    enemy.setId('enemy_' + i);
    enemies.push(enemy);
  }

  var ledgeCount = 0;

  var ledges = [];
  for (let i = 0; i < 20; i++) {
    var ledge = new Ledge();
    ledge.setId('ledge_' + ledgeCount++);
    ledges.push(ledge);
  }

  var hiddenLedges = [];
  for (let i = 0; i < 20; i++) {
    var hiddenLedge = new Ledge();
    hiddenLedge.removeComponent('rect');
    hiddenLedge.setId('ledge_' + ledgeCount++);
    hiddenLedges.push(hiddenLedge);
  }

  var fakeLedges = [];
  for (let i = 0; i < 20; i++) {
    var fakeLedge = new Ledge();
    fakeLedge.setId('fake_ledge');
    fakeLedges.push(fakeLedge);
  }

  var addLedgesToScene = function(arr, info, time) {
    for (let i = 0; i < arr.length; i++) {
      var ledge = arr[i];
      var ledgeInfo = info[i];
      if (ledgeInfo) {
        ledge.x = ledgeInfo[2];
        ledge.y = ledgeInfo[3];
        ledge.width = ledgeInfo[0];
        ledge.height = ledgeInfo[1];
        scene.addComponent(ledge, time);
      }
    }
  };

  var level = levels[scene.locals.levelNumber];

  if (!level) {
    scene.locals.levelNumber = 0;
    level = levels[scene.locals.levelNumber];
  }

  player.x = level.joe[0];
  player.y = level.joe[1];
  scene.addComponent(player);

  exit.x = level.exit[0];
  exit.y = level.exit[1];
  scene.addComponent(exit);

  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    var enemyInfo = level.enemies[i];
    if (enemyInfo) {
      enemy.x = enemyInfo[0];
      enemy.y = enemyInfo[1];
      enemy.ledge = enemyInfo[2];
      scene.addComponent(enemy);
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

  deaths.setText('Deaths: ' + scene.locals.deaths);
  scene.addComponent(deaths);

  score.setText('Score: ' + scene.locals.score);
  scene.addComponent(score);

  levelText.setText('Level: ' + (scene.locals.levelNumber + 1));
  scene.addComponent(levelText);
});

export default scene;
