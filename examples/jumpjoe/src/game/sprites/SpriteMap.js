import SpriteSheet from 'core/graphics/SpriteSheet';
var map = require('./mapData');
var spriteSheet = new SpriteSheet({
  src: `${process.env.PUBLIC_URL}/img/spritesheet.png`, 
  map,
});

export default spriteSheet;
