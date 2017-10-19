var Game = require('../core/Game');
var Component = require('./Component');

function BoxCollider2D(x, y, w, h) {
  Component.call(this);
  this.x = x || 0;
  this.y = y || 0;
  this.width = w || 0;
  this.height = h || 0;
  this.onUpdate = onUpdate;
}

BoxCollider2D.prototype = Object.create(Component.prototype);
BoxCollider2D.prototype.constructor = BoxCollider2D;

module.exports = BoxCollider2D;

var onUpdate = function (entity1) {
  var transform1 = entity1.components.transform;
  var x1 = transform1.x + this.x;
  var y1 = transform1.y + this.y;
  var w1 = transform1.width + this.width;
  var h1 = transform1.height + this.height;
  var colliders = Game.getCurrentScene().findEntityByComponentType(BoxCollider2D);
  for (var i = 0; i < colliders.length; i++) {
    var entity2 = colliders[i];
    if (entity1 === entity2) {
      continue;
    }
    var transform2 = entity2.components.transform;
    var boxCollider = entity2.components.boxcollider;
    var x2 = transform2.x + boxCollider.x;
    var y2 = transform2.y + boxCollider.y;
    var w2 = transform2.width + boxCollider.width;
    var h2 = transform2.height + boxCollider.height;
    if((y1 +  h1 >= y2 &&
        y1 <= y2 +  h2) &&
  	   (x1 +  w1 >= x2 &&
        x1 <= x2 +  w2)){
  		entity1.emit('collision2D', entity2);
      entity2.emit('collision2D', entity1);
  	}
  }
}
