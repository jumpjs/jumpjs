function Scene() {
  this.locals = {};
  this.entities = [];
  this.onSetup = null;
}

Scene.prototype.onClick = function(x, y, event) {
  for (var i = 0; i < this.entities.length; i++) {
    var entity = this.entities[i];
    if (y > entity.transform.y &&
        y < entity.transform.y + entity.transform.height &&
        x > entity.transform.x &&
        x < entity.transform.x + entity.transform.width) {
      entity.emit('click', entity);
    }
  }
}

Scene.prototype.reset = function() {
  this.entities = [];
  if (this.onSetup) {
    this.onSetup();
  }
}

Scene.prototype.addEntity = function(entity, timeout) {
  if (timeout) {
    var self = this;
    setTimeout(function() {
      self.entities.push(entity);
    }, timeout);
  } else {
    this.entities.push(entity);
  }
}

Scene.prototype.update = function() {
  for (var i = 0; i < this.entities.length; i++) {
    if (this.entities[i] && this.entities[i].update) {
      this.entities[i].update();
    }
  }
}

Scene.prototype.findEntityById = function(id) {
  for (var i = 0; i < this.entities.length; i++) {
    if (id === this.entities[i].getId()) {
      return this.entities[i];
    }
  }
}

Scene.prototype.findEntityByType = function(type) {
  var entities = [];
  for (var i = 0; i < this.entities.length; i++) {
    if (this.entities[i] instanceof type) {
      entities.push(this.entities[i]);
    }
  }
  return entities;
}

Scene.prototype.findEntityByComponentType = function(type) {
  var entities = [];
  for (var i = 0; i < this.entities.length; i++) {
    var components = this.entities[i].findComponentByType(type);
    if (components.length > 0) {
      entities.push(this.entities[i]);
    }
  }
  return entities;
}

module.exports = Scene;
