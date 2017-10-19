var Component = require('./Component');

function Circle(x, y, w, h, radius, color, fill) {
  Component.call(this, x, y, w, h);
  this.color = color || 'black';
  this.fill = fill || false;
  this.radius = radius;
}

Circle.prototype = Object.create(Component.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.render = function(ctx, scene) {
  ctx.beginPath();
  ctx.arc(scene.x + this.x, scene.y + this.y, this.radius, 0, 2 * Math.PI, false);
  if (this.fill) {
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  ctx.stroke();
}

module.exports = Circle;
