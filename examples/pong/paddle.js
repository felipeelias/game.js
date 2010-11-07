function Paddle( game ) {
  var self = this,
      player = {
        width: 10,
        height: 100
      };
  
  $.extend(self, {
    init: function() {
      self.position = { x: 10, y: 10 };
    },
    
    draw: function() {
      game.paper.fillStyle = "white";
      game.paper.fillRect(self.position.x, self.position.y, player.width, player.height);
    }
  });
  
  self.init();
}