var Game = require('../core/Game');
var Component = require('../components/Component');

function Rect(color) {
  Component.call(this);
  this.color = color || 'black';
  this.onUpdate = onUpdate;
  this.fill = true;
}

Rect.prototype = Object.create(Component.prototype);
Rect.prototype.constructor = Rect;

var onUpdate = function (_entity) {
  var transform = _entity.transform;
  var ctx = Game.getContext();
  if (this.fill) {
    ctx.fillStyle = this.color;
    ctx.fillRect(transform.x, transform.y, transform.width, transform.height);
  } else {
    ctx.strokeRect(transform.x, transform.y, transform.width, transform.height);
  }
};

module.exports = Rect;
