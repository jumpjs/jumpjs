import Component from './Component';

export default class Circle extends Component {

  constructor(options) {
    super(options);
    this.color = options.color || 'black';
    this.fill = options.fill || false;
    this.radius = options.radius || 0;
  }

  render({ context }) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    if (this.fill) {
      context.fillStyle = this.color;
      context.fill();
    }
    context.stroke();
  }

}
