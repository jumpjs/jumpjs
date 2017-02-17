var jumpjs = window.jumpjs;
var Entity = jumpjs.entities.Entity;
var Component = jumpjs.components.Component;
var BoxCollider2D = jumpjs.components.BoxCollider2D;
var sprites = require('../sprites');
var components = require('../components');
var Controls = components.Controls;
var Gravity = components.Gravity;

function Exit() {
  var sprite = sprites('exit');
  Entity.call(this, 0, 0, sprite.width, sprite.height);
  this.setId('exit');
  this.addComponent('sprite', sprite);
  this.addComponent('boxcollider', new BoxCollider2D());
  this.dropThrough = false;
  this.isGrounded = false;
  this.isJumping = false;
  this.jumpingTimes = 0;
}

Exit.prototype = Object.create(Entity.prototype);
Exit.prototype.constructor = Exit;

module.exports = Exit;

var level7x = 0;
var level7y = 0;
var timer;
var exitMovement = new Component();
exitMovement.onUpdate = function(_entity) {
  var scene = Game.getCurrentScene();
  if (scene.locals.levelNumber === 7) {
    createExitMovementTimer();
    _entity.transform.x = level7x;
    _entity.transform.y = level7y;
  } else {
    clearInterval(timer);
  }
};


var createExitMovementTimer = function() {
  timer = setInterval(function () {
    level7x = Math.round((Math.random() % 100) * (700 - 40));
    level7y = Math.round((Math.random() % 100) * (500 - 100)) + 100;
  }, 5000);
};
