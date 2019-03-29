import Component from 'core/components/Component';
import BoxCollider2D from 'core/components/BoxCollider2D';
import SpriteMap from '../sprites/SpriteMap';
import Exit from './Exit';
import Enemy from './Enemy';
import Controls from '../components/Controls';
import Gravity from '../components/Gravity';

export default class Player extends Component {
  constructor(options) {
    super(options);
    var sprite = SpriteMap.getSprite('joe');
    this.id = 'player';
    this.addComponent('controls', new Controls());
    this.addComponent('gravity', new Gravity());
    this.addComponent('boxcollider', new BoxCollider2D());
    this.on('collision2D', ({ Game, entity }) => {
      var scene = Game.getScene();
      if (entity instanceof Exit) {
        scene.locals.levelNumber++;
        scene.locals.score += 1000;
        scene.reset();
      } else if (entity instanceof Enemy) {
        scene.locals.deaths++;
        scene.locals.score -= 100;
        scene.reset();
      }
    });
    this.addComponent('sprite', sprite);
    this.dropThrough = false;
    this.isGrounded = false;
    this.isJumping = false;
    this.jumpingTimes = 0;
  }
};
