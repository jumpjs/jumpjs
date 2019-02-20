import Component from './Component';

export default class Text extends Component {
  constructor(options = {}) {
    super(options);
    this.text = options.text || '';
    this.font = options.font || '14px Sans';
    this.fillStyle = options.fillStyle || '#000000';
    this.textAlign = 'center';
  }
  setText(text) {
    this.text = text;
  };
  render({ context }) {
    if (this.font) {
      context.font = this.font;
    }
    context.fillStyle = this.fillStyle;
    context.textAlign = this.textAlign;
    context.textBaseline = 'middle';
    context.fillText(
      this.text,
      this.x,
      this.y
    );
  }
}
