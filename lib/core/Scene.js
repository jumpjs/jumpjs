const { EventEmitter } = require('events');

export default class Scene extends EventEmitter {
  constructor(options = {}) {
    super();
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || window.innerWidth;
    this.height = options.height || window.innerHeight;
    this.backgroundColor = options.backgroundColor || 'white';
    this.locals = {};
    this.components = [];
    this.on('setup', (options) => {
      this.addSceneEvents(options);
    });
  }

  reset() {
    this.components = [];
    this.emit('reset');
  }

  addComponent(component) {
    this.components.push(component);
  }

  update(options) {
    options.context.fillStyle = this.backgroundColor;
    options.context.fillRect(this.x, this.y, this.width, this.height);
    for (var i = 0; i < this.components.length; i++) {
      if (this.components[i] && this.components[i].update) {
        this.components[i].update(options);
      }
    }
  }

  findComponentById(id) {
    for (var i = 0; i < this.components.length; i++) {
      if (id === this.components[i].getId()) {
        return this.components[i];
      }
    }
  }

  findComponentByType(type) {
    var components = [];
    for (var i = 0; i < this.components.length; i++) {
      if (this.components[i] instanceof type) {
        components.push(this.components[i]);
      }
    }
    return components;
  }
}
