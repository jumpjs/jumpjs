import Component from 'core/components/Component';
import Ledge from '../entities/Ledge';

export default class Gravity extends Component {
  update(options) {
    const { Game } = options;
    super.update(options);
    const entity = this.parent;
    if (!entity.isJumping) {
      var ledges = Game.getScene().findComponentByType(Ledge);
      if (!ledges) {
        return;
      }
      for (var j = 0; j < 3; j++) {
        if (!entity.dropThrough) {
          for (var i = 0; i < ledges.length; i++) {
            var ledge = ledges[i];
            if (ledge.getId() === 'fake_ledge') {
              continue;
            }
            if (entity.y + entity.height === ledge.y &&
              entity.x <= ledge.x + ledge.width &&
              entity.x + entity.width >= ledge.x) {
              entity.isGrounded = true;
              return;
            }
          }
        }
        entity.y += 2;
        if (entity.y + entity.height >= 500) {
          entity.y = 500 - entity.height;
          entity.isGrounded = true;
        }
      }
      entity.dropThrough = false;
    }
  }
}
