const { EventEmitter } = require('events');

export default class Component extends EventEmitter {

  constructor(options = {}) {
    super();
    this.parent = null;
    this.parentOffset = options.parentOffset || false;
    this.id = null;
    this.components = {};
    this.visible = true;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 0;
    this.height = options.height || 0;
    this.offsetX = options.offsetX || 0;
    this.offsetY = options.offsetY || 0;
  }

  setParent(component) {
    this.parent = component;
  }

  addComponent(name, component) {
    component.setParent(this);
    this.components[name] = component;
  }

  removeComponent(name) {
    this.components[name] = null;
    delete this.components[name];
  }

  findComponentByType(type) {
    var components = [];
    var keys = Object.keys(this.components);
    for (var i = 0; i < keys.length; i++) {
      var component = this.components[keys[i]];
      if (component instanceof type) {
        components.push(this.components[i]);
      }
    }
    return components;
  }

  hasComponent(type) {
    var keys = Object.keys(this.components);
    for (var i = 0; i < keys.length; i++) {
      var component = this.components[keys[i]];
      if (component instanceof type) {
        return true;
      }
    }
  }

  update(options) {
    if (!this.visible) {
      return;
    }
    var keys = Object.keys(this.components);
    for (var i = 0; i < keys.length; i++) {
      var component = this.components[keys[i]];
      if (component && component.update) {
        component.update(options);
      }
    }
    if (this.render) {
      this.render(options);
    }
  };

  render() {}

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

}