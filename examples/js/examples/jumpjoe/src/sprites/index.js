var jumpjs = window.jumpjs;
var SpriteSheet = jumpjs.graphics.SpriteSheet;
var spriteMap = require('./spriteMap');
var spriteSheet = new SpriteSheet('img/spritesheet.png', spriteMap);

module.exports = function (name) {
  return spriteSheet.sprites[name]; 
}
