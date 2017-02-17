var EventEmitter = require('events').EventEmitter;
var Transform = require('../components/Transform');

function Entity(x, y, width, height) {
  EventEmitter.call(this);
  this.id = null;
  this.components = {};
  this.addComponent('transform', new Transform(x, y, width, height));
}

Entity.prototype = Object.create(EventEmitter.prototype);
Entity.prototype.constructor = Entity;

Entity.prototype.addComponent = function(name, component) {
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

Entity.prototype.removeComponent = function(name) {
  this.components[name] = null;
  delete this.components[name];
};

Entity.prototype.findComponentByType = function(type) {
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

Entity.prototype.hasComponent = function(type) {
  var keys = Object.keys(this.components);
  for (var i = 0; i < keys.length; i++) {
    var component = this.components[keys[i]];
    if (component instanceof type) {
      return true;
    }
  }
};

Entity.prototype.update = function() {
  var keys = Object.keys(this.components);
  for (var i = 0; i < keys.length; i++) {
    var component = this.components[keys[i]];
    if (component && component.update) {
      component.update(this);
    }
  }
};

Entity.prototype.setId = function(id) {
  this.id = id;
};

Entity.prototype.getId = function() {
  return this.id;
};

module.exports = Entity;
