import { bindKey } from 'core/input/Keyboard';
import Game from 'core/Game';
import Component from 'core/components/Component';
import Gravity from './Gravity';

var enter = bindKey('enter');
var down = bindKey('down');
var left = bindKey('left');
var right = bindKey('right');
var space = bindKey('spacebar');
var nextLevel = bindKey('1');
var pause = bindKey('2');
var restart = bindKey('3');
var reverseControls = bindKey('4');

export default class Controls extends Component {
  update() {
    var entity = this.parent;
    if (left.pressed) {
      entity.x -= 7;
    }
    if (right.pressed) {
      entity.x += 7;
    }
    if (entity.x <= 0) {
      entity.x = 0;
    }
    if (entity.x + entity.width >=700) {
      entity.x = 700 - entity.width;
    }
    if (entity.isJumping) {
      entity.y -= 10;
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
  }
}

enter.event = function() {
  if (!Game.isRunning) {
    Game.setScene('game');
    Game.isRunning = true;
  }
};
nextLevel.event = function() {
  Game.levelNumber++;
  Game.resetScene();
};
pause.event = function() {
  Game.paused = !Game.paused;
};
restart.event = function() {
  Game.deaths++;
  Game.score -= 100;
  Game.resetScene();
};
var playerControlsFlag = false;
reverseControls.event = function() {
  var player = Game.getScene().findEntityById('player');
  var exit = Game.getScene().findEntityById('exit');
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
