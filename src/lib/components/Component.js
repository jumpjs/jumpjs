var EventEmitter = require('events').EventEmitter;

function Component(x, y, width, height) {
  EventEmitter.call(this);
  this.id = null;
  this.components = {};
  this.visible = true;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.offsetX = 0;
  this.offsetY = 0;
}

Component.prototype = Object.create(EventEmitter.prototype);
Component.prototype.constructor = Component;

Component.prototype.addComponent = function(name, component) {
  this.components[name] = component;
  if (!this[name]) {
    Object.defineProperty(this, name, {
      get: function() {
        return this.components[name];
      },
      set: function(value) {
        this.components[name] = value;
      }
    });
  }
};

Component.prototype.removeComponent = function(name) {
  this.components[name] = null;
  delete this.components[name];
};

Component.prototype.findComponentByType = function(type) {
  var components = [];
  var keys = Object.keys(this.components);
  for (var i = 0; i < keys.length; i++) {
    var component = this.components[keys[i]];
    if (component instanceof type) {
      components.push(this.components[i]);
    }
  }
  return components;
};

Component.prototype.hasComponent = function(type) {
  var keys = Object.keys(this.components);
  for (var i = 0; i < keys.length; i++) {
    var component = this.components[keys[i]];
    if (component instanceof type) {
      return true;
    }
  }
};

Component.prototype.update = function(context, scene, game) {
  if (!this.visible) {
    return;
  }
  var keys = Object.keys(this.components);
  for (var i = 0; i < keys.length; i++) {
    var component = this.components[keys[i]];
    if (component && component.update) {
      component.update(context, scene, game);
    }
  }
  if (this.render) {
    this.render(context, scene, game);
  }
};

Component.prototype.render = function(context, scene, game) {
};

Component.prototype.setId = function(id) {
  this.id = id;
};

Component.prototype.getId = function() {
  return this.id;
};

module.exports = Component;
