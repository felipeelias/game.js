(function() {
  function Ball( game ) {
    var self = this,
        width = 10,
        height = 10,
        velocity = 7,
        padding = 10,
        upperBound = game.canvas.height - padding,
        lowerBound = padding;
    
    $.extend(self, {
      init: function() {
        self.position = { x: 30, y: 30 };
        self.direction = { x: 1, y: -1 };
      },
      
      draw: function() {
        self.move();
        game.paper.fillStyle = "white";
        game.paper.fillRect(self.position.x, self.position.y, width, height);
      },
      
      move: function() {
        self.position.x += velocity * self.direction.x;
        self.position.y += velocity * self.direction.y;
        self.checkBounds();
      },
      
      checkBounds: function() {
        if ( (self.position.y >= upperBound) || ( self.position.y <= lowerBound ) ) {
          self.direction.y *= -1;
        }
      }
    });
    
    self.init();
  }
  
  window.Ball = Ball;
})();