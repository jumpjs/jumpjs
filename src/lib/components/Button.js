var Component = require('./Component');
var Text = require('./Text');
var Rect = require('./Rect');

function Button(x, y, w, h) {
  Entity.call(this, x, y, w, h);
  this.addComponent('rect', new Rect());
  this.addComponent('text', new Text());
}

Button.prototype = Object.create(Component.prototype);
Button.prototype.constructor = Button;

module.exports = Button;
