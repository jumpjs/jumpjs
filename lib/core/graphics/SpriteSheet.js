import Sprite from '../components/Sprite';

export default class SpriteSheet {
  constructor(options) {
    this.map = options.map || [];
    this.img = new Image();
    this.img.src = options.src;
    this.sprites = {};
    for (var i = 0; i < this.map.length; i++) {
      var info = this.map[i];
      this.sprites[info.name] = new Sprite({
        img: this.img, 
        ...info
      });
    };
  }
  getSprite(name) {
    return this.sprites[name]; 
  }
}