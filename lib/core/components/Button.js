import Component from './Component';

export default class Button extends Component {
  constructor(options) {
    super(options);
    this.color = options.color || 'black';
    this.fill = options.fill || true;
    this.text = options.text || '';
    this.font = options.font || '12px Sans';
    this.fillStyle = options.fillStyle || '#000000';
    this.textAlign = 'center';
  }
  render({ context }) {
    if (this.fill) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    } else {
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
    if (this.font) {
      context.font = this.font;
    }
    context.fillStyle = this.fillStyle;
    context.textAlign = this.textAlign;
    context.textBaseline = 'middle';
    context.fillText(
      this.text,
      this.x + Math.floor(this.width / 2),
      this.y + Math.floor(this.height / 2)
    );
  }
}
