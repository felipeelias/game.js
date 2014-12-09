var Rotation = {
  offsetX: function(angle, radius) {
    return Math.cos(angle / 180 * Math.PI) * radius;
  },
  offsetY: function(angle, radius) {
    return Math.sin(angle / 180 * Math.PI) * radius;
  }
}