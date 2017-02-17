var jumpjs = window.jumpjs;
var Game = jumpjs.core.Game;
var Component = jumpjs.components.Component;
var Ledge = require('../entities/Ledge');

function Gravity() {
  Component.call(this);
  this.onUpdate = onUpdate;
}

Gravity.prototype = Object.create(Component.prototype);
Gravity.prototype.constructor = Gravity;

module.exports = Gravity;

var onUpdate = function (entity) {
  if (!entity.isJumping) {
    var transform = entity.transform;
    for (var j = 0; j < 3; j++) {
      if (!entity.dropThrough) {
        var ledges = Game.getCurrentScene().findEntityByType(Ledge);
        if (!ledges) {
          continue;
        }
        for (var i = 0; i < ledges.length; i++) {
          var ledge = ledges[i];
          if (ledge.getId() === 'fake_ledge') {
            continue;
          }
          if (transform.y + transform.height === ledge.transform.y &&
      		   transform.x <= ledge.transform.x + ledge.transform.width &&
      		   transform.x + transform.width >= ledge.transform.x) {
            entity.isGrounded = true;
      			return;
      		}
        }
      }
      transform.y += 2;
      if (transform.y + transform.height >= 500) {
        transform.y = 500 - transform.height;
        entity.isGrounded = true;
      }
    }
    entity.dropThrough = false;
  }
};
