const { pointInCircle, pointInBox } = require('./utils/math');
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

  addSceneEvents({ Game }) {
    ['click', 'touchstart', 'touchend', 'touchmove', 'touchcancel'].forEach(name => {
      this.on(name, (x, y, event) => {
        const gameBounds = Game.canvas.getBoundingClientRect();
        x = x - gameBounds.x;
        y = y - gameBounds.y;
        for (var i = 0; i < this.components.length; i++) {
          var component = this.components[i];
          if (component.radius) {
            if (pointInCircle(x, y, component.x, component.y, component.radius)) {
              component.emit(name, component);
            }
          } else {
            if (pointInBox(x, y, component.x, component.y, component.width, component.height)) {
              component.emit(name, component);
            }
          }
        }
      }, false);
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
