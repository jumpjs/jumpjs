var jumpjs = window.jumpjs;
var Entity = jumpjs.entities.Entity;
var Rect = jumpjs.components.Rect;

function Ledge(x, y, w, h) {
  Entity.call(this, x || 0, y || 0, w || 0, h || 0);
  this.addComponent('rect', new Rect());
}

Ledge.prototype = Object.create(Entity.prototype);
Ledge.prototype.constructor = Ledge;

module.exports = Ledge;
