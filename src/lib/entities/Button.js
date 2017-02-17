var Entity = require('./Entity');
var Text = require('../components/Text');
var Rect = require('../components/Rect');

function Button(x, y, w, h) {
  Entity.call(this, x, y, w, h);
  this.addComponent('rect', new Rect());
  this.addComponent('text', new Text());
}

Button.prototype = Object.create(Entity.prototype);
Button.prototype.constructor = Button;

module.exports = Button;
