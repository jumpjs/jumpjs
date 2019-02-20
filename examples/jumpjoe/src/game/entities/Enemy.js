import Component from 'core/components/Component';
import BoxCollider2D from 'core/components/BoxCollider2D';
import SpriteMap from '../sprites/SpriteMap';

export default class Enemy extends Component {
  constructor(options) {
    super(options);
    var sprite = SpriteMap.getSprite('enemy');
    this.addComponent('sprite', sprite);
    this.addComponent('boxcollider', new BoxCollider2D({ width: -5, height: -5 }));
    this.direction = 'left';
    this.ledge = null;
  }
  update({ Game }) {
    if (Game.paused) {
      return;
    }
    if (this.direction === 'left') {
      this.x -= 5;
    } else if (this.direction === 'right') {
      this.x += 5;
    }
    var x = 0;
    var y = 700;
    var ledge = Game.getScene().findComponentById('ledge_' + this.ledge);
    if (ledge) {
      x = ledge.x;
      y = ledge.x + ledge.width;
    }
    if (this.x <= x) {
      this.direction = 'right';
    } else if (this.x + this.width >= y) {
      this.direction = 'left';
    }
  };
};
