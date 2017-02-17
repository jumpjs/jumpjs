var jumpjs = window.jumpjs;
var Game = jumpjs.core.Game;
var Keyboard = jumpjs.input.Keyboard;
var Component = jumpjs.components.Component;

var Gravity = require('./Gravity');

var enter = Keyboard.bindKey('enter');
var down = Keyboard.bindKey('down');
var left = Keyboard.bindKey('left');
var right = Keyboard.bindKey('right');
var space = Keyboard.bindKey('spacebar');
var nextLevel = Keyboard.bindKey('1');
var pause = Keyboard.bindKey('2');
var restart = Keyboard.bindKey('3');
var reverseControls = Keyboard.bindKey('4');

function Controls(x, y, w, h) {
  Component.call(this);
  this.onUpdate = onUpdate;
}

Controls.prototype = Object.create(Component.prototype);
Controls.prototype.constructor = Controls;

module.exports = Controls;

var onUpdate = function (entity) {
  var transform = entity.transform;
  if (left.pressed) {
    transform.x -= 7;
  }
  if (right.pressed) {
    transform.x += 7;
  }
  if (transform.x <= 0) {
    transform.x = 0;
  }
  if (transform.x + transform.width >= 700) {
    transform.x = 700 - transform.width;
  }
  if (entity.isJumping) {
    transform.y -= 10;
    if (++entity.jumpingTimes === 7) {
      entity.isJumping = false;
      entity.jumpingTimes = 0;
    }
  } else if (entity.isGrounded) {
    if (space.pressed) {
      entity.isJumping = true;
      entity.isGrounded = false;
    }
    if (down.pressed) {
      entity.isJumping = false;
      entity.isGrounded = false;
      entity.dropThrough = true;
    }
  }
};

enter.event = function() {
  if (!Game.isRunning) {
    Game.setCurrentScene('game');
    Game.isRunning = true;
  }
}
nextLevel.event = function() {
  Game.levelNumber++;
  Game.resetCurrentScene();
};
pause.event = function() {
  Game.paused = !Game.paused;
};
restart.event = function() {
  Game.deaths++;
  Game.score -= 100;
  Game.resetCurrentScene();
};
var playerControlsFlag = false;
reverseControls.event = function() {
  var player = Game.getCurrentScene().findEntityById('player');
  var exit = Game.getCurrentScene().findEntityById('exit');
  if (!playerControlsFlag) {
    player.removeComponent('controls');
    player.removeComponent('gravity');
    exit.addComponent('controls', new Controls());
    exit.addComponent('gravity', new Gravity());
    playerControlsFlag = true;
  } else {
    exit.removeComponent('controls');
    exit.removeComponent('gravity');
    player.addComponent('controls', new Controls());
    player.addComponent('gravity', new Gravity());
    playerControlsFlag = false;
  }
};
