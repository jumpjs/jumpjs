var jumpjs = window.jumpjs;
var Game = jumpjs.core.Game;
var Entity = jumpjs.entities.Entity;
var Component = jumpjs.components.Component;
var BoxCollider2D = jumpjs.components.BoxCollider2D;
var sprites = require('../sprites');
var sprite = sprites('enemy');

function Enemy() {
  Entity.call(this, 0, 0, sprite.width, sprite.height);
  this.addComponent('movement', enemyMovement);
  this.addComponent('sprite', sprite);
  this.addComponent('boxcollider', new BoxCollider2D());
  this.boxcollider.width = -5;
  this.boxcollider.height = -5;
  this.direction = 'left';
  this.ledge = null;
}

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

module.exports = Enemy;

var enemyMovement = new Component();
enemyMovement.onUpdate = function(_entity) {
  if (Game.paused) {
    return;
  }
  if (_entity.direction === 'left') {
    _entity.transform.x -= 5;
  } else if (_entity.direction === 'right') {
    _entity.transform.x += 5;
  }
  var x = 0;
  var y = 700;
  var ledge = Game.getCurrentScene().findEntityById('ledge_' + _entity.ledge);
  if (ledge) {
    x = ledge.transform.x;
    y = ledge.transform.x + ledge.transform.width;
  }
  if (_entity.transform.x <= x) {
    _entity.direction = 'right';
  } else if (_entity.transform.x + _entity.transform.width >= y) {
    _entity.direction = 'left';
  }
};
