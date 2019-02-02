var Game = require('../core/Game');
var Component = require('../components/Component');

function Rect(x, y, w, h, color, fill) {
  Component.call(this, x, y, w, h);
  this.color = color || 'black';
  this.fill = fill || true;
}

Rect.prototype = Object.create(Component.prototype);
Rect.prototype.constructor = Rect;

Rect.prototype.render = function(ctx, scene) {
  if (this.fill) {
    ctx.fillStyle = this.color;
    ctx.fillRect(scene.x + this.x, scene.y + this.y, this.width, this.height);
  } else {
    ctx.strokeRect(scene.x + this.x, scene.y + this.y, this.width, this.height);
  }
}

module.exports = Rect;
