import Component from './Component';

export default class Rect extends Component {
  constructor(options = {}) {
    super(options);
    this.color = options.color || 'black';
    this.fill = options.fill || true;
  }
  render({ context }) {
    let x = this.x;
    let y = this.y;
    if (this.parentOffset) {
      x = this.parent.x || 0;
      y = this.parent.y || 0;
    }
    if (this.fill) {
      context.fillStyle = this.color;
      context.fillRect(x, y, this.width, this.height);
    } else {
      context.strokeRect(x, y, this.width, this.height);
    }
  }
}
