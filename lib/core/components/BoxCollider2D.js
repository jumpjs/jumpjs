import Component from './Component';

export default class BoxCollider2D extends Component {
  update({ Game }) {
    var entity1 = this;
    var x1 = entity1.x;
    var y1 = entity1.y;
    var w1 = entity1.width;
    var h1 = entity1.height;
    if (entity1.parent) {
      x1 += entity1.parent.x;
      y1 += entity1.parent.y;
      w1 += entity1.parent.width;
      h1 += entity1.parent.height;
    }
    var colliders = Game.getScene().findComponentByType(BoxCollider2D);
    for (var i = 0; i < colliders.length; i++) {
      var entity2 = colliders[i];
      if (entity1 === entity2) {
        continue;
      }
      var boxCollider = entity2.components.boxcollider;
      var x2 = entity2.x + boxCollider.x;
      var y2 = entity2.y + boxCollider.y;
      var w2 = entity2.width + boxCollider.width;
      var h2 = entity2.height + boxCollider.height;
      if ((y1 +  h1 >= y2 && y1 <= y2 +  h2) &&
          (x1 +  w1 >= x2 && x1 <= x2 +  w2)) {
        entity1.emit('collision2D', {
          Game,
          entity: entity2,
        });
        entity2.emit('collision2D', {
          Game,
          entity: entity1,
        });
      }
    }
  }

}