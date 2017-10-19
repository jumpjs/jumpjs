var utils = require('../utils');
var EventEmitter = require('events').EventEmitter;

function Scene(x, y, w, h, backgroundColor) {
  var self = this;
  self.x = x || 0;
  self.y = y || 0;
  self.width = w || window.innerWidth;
  self.height = h || window.innerHeight;
  self.backgroundColor = backgroundColor || 'white';
  self.locals = {};
  self.components = [];
  ['click', 'touchstart', 'touchend', 'touchmove', 'touchcancel'].forEach(function(name) {
    self.on(name, function(x, y, event) {
      for (var i = 0; i < self.components.length; i++) {
        var component = self.components[i];
        if (component.radius) {
          if (utils.math.pointInCircle(x, y, component.x, component.y, component.radius)) {
            component.emit(name, component);
          }
        } else {
          if (utils.math.pointInBox(x, y, component.x, component.y, component.width, component.height)) {
            component.emit(name, component);
          }
        }
      }
    }, false);
  });
}

Scene.prototype = Object.create(EventEmitter.prototype);
Scene.prototype.constructor = Scene;

Scene.prototype.reset = function() {
  this.components = [];
  if (this.onSetup) {
    this.onSetup();
  }
}

Scene.prototype.addComponent = function(component, timeout) {
  if (timeout) {
    var self = this;
    setTimeout(function() {
      self.components.push(component);
    }, timeout);
  } else {
    this.components.push(component);
  }
}

Scene.prototype.update = function(context, scene, game) {
  context.fillStyle = this.backgroundColor;
  context.fillRect(this.x, this.y, this.width, this.height);
  for (var i = 0; i < this.components.length; i++) {
    if (this.components[i] && this.components[i].update) {
      this.components[i].update(context, scene, game);
    }
  }
}

Scene.prototype.findComponentById = function(id) {
  for (var i = 0; i < this.components.length; i++) {
    if (id === this.components[i].getId()) {
      return this.components[i];
    }
  }
}

Scene.prototype.findComponentByType = function(type) {
  var components = [];
  for (var i = 0; i < this.components.length; i++) {
    if (this.components[i] instanceof type) {
      components.push(this.components[i]);
    }
  }
  return components;
}
module.exports = Scene;
