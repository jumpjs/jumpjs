var Game = require('../core/Game');
var Component = require('../components/Component');
var defaultFont = '14px Georgia';

function Text(text, fillStyle) {
  Component.call(this);
  this.text = text;
  this.font = null;
  this.fillStyle = fillStyle || '#000000';
  this.textAlign = 'center';
  this.onUpdate = onUpdate;
}

Text.prototype = Object.create(Component.prototype);
Text.prototype.constructor = Text;

Text.prototype.setText = function(text) {
  this.text = text;
};

var onUpdate = function (_entity) {
  var ctx = Game.getContext();
  if (this.font) {
    ctx.font = this.font;
  }
  ctx.fillStyle = this.fillStyle;
  ctx.textAlign = this.textAlign;
  ctx.textBaseline = 'middle';
  ctx.fillText(
    this.text,
    _entity.transform.x + Math.floor(_entity.transform.width / 2),
    _entity.transform.y + Math.floor(_entity.transform.height / 2)
  );
  ctx.font = defaultFont;
};

module.exports = Text;
