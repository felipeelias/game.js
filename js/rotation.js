var Rotation = {
  offsetX: function(angle, velocity) {
    return Math.cos(angle) * velocity;
  },
  offsetY: function(angle, velocity) {
    return Math.sin(angle) * velocity;
  }
}