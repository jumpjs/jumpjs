import Component from 'core/components/Component';
import BoxCollider2D from 'core/components/BoxCollider2D';
import SpriteMap from '../sprites/SpriteMap';

export default class Exit extends Component {
  constructor(options) {
    super(options);
    var sprite = SpriteMap.getSprite('exit');
    this.setId('exit');
    this.addComponent('sprite', sprite);
    this.addComponent('boxcollider', new BoxCollider2D());
    this.dropThrough = false;
    this.isGrounded = false;
    this.isJumping = false;
    this.jumpingTimes = 0;
  }
};

// var level7x = 0;
// var level7y = 0;
// var timer;
// var exitMovement = new Component();
// exitMovement.update = function({ Game }) {
//   var scene = Game.getScene();
//   if (scene.locals.levelNumber === 7) {
//     createExitMovementTimer();
//     this.parent.x = level7x;
//     this.parent.y = level7y;
//   } else {
//     clearInterval(timer);
//   }
// };


// var createExitMovementTimer = function() {
//   timer = setInterval(function () {
//     level7x = Math.round((Math.random() % 100) * (700 - 40));
//     level7y = Math.round((Math.random() % 100) * (500 - 100)) + 100;
//   }, 5000);
// };
