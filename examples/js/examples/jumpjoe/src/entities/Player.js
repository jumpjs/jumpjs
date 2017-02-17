var jumpjs = window.jumpjs;
var Game = jumpjs.core.Game;
var Entity = jumpjs.entities.Entity;
var BoxCollider2D = jumpjs.components.BoxCollider2D;
var sprites = require('../sprites');
var components = require('../components');
var Exit = require('./Exit');
var Enemy = require('./Enemy');
var Controls = components.Controls;
var Gravity = components.Gravity;

function Player(x, y) {
  var sprite = sprites('joe');
  Entity.call(this, x, y, sprite.width, sprite.height);
  var self = this;
  self.id = 'player';
  this.addComponent('sprite', sprite);
  this.addComponent('controls', new Controls());
  this.addComponent('gravity', new Gravity());
  this.addComponent('boxcollider', new BoxCollider2D());
  this.on('collision2D', function (entity) {
    var scene = Game.getCurrentScene();
    if (entity instanceof Exit) {
      scene.locals.levelNumber++;
      scene.locals.score += 1000;
      Game.resetCurrentScene();
    } else if (entity instanceof Enemy) {
      scene.locals.deaths++;
      scene.locals.score -= 100;
      Game.resetCurrentScene();
    }
  });
  this.dropThrough = false;
  this.isGrounded = false;
  this.isJumping = false;
  this.jumpingTimes = 0;
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

module.exports = Player;
