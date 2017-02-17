function Component() {
  this.onUpdate = null;
}

Component.prototype.update = function(entity) {
  if (this.onUpdate) {
    this.onUpdate(entity);
  }
}

module.exports = Component;
