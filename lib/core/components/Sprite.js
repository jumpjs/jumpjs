import Component from './Component';

export default class Sprite extends Component {
  
  constructor(options) {
    super(options);
    this.img = options.img || null;
  }

  setImg(img) {
    this.img = img;
  }

  render({ context }) {
    if (!this.img) {
      return;
    }
    const parentX = this.parent.x || 0;
    const parentY = this.parent.y || 0;
    context.drawImage(this.img,
      this.x,
      this.y,
      this.width,
      this.height,
      this.x + parentX,
      this.y + parentY,
      this.width,
      this.height
    );
  }

}
