(function() {
  function Ball( game ) {
    var self = this,
        width = 10,
        height = 10,
        velocity = 10,
        padding = 10,
        upperBound = game.canvas.height - padding,
        lowerBound = padding,
        isFired = false;
    
    $.extend(self, {
      init: function() {
        self.position = { x: (game.canvas.width / 2) - width / 2, y: (game.canvas.height / 2) - height / 2 };
        self.direction = { x: 1, y: -1 };
      },
      
      draw: function() {
        self.move();
        game.paper.fillStyle = "white";
        game.paper.fillRect(self.position.x, self.position.y, width, height);
      },
      
      move: function() {
        if (isFired) {
          self.position.x += velocity * self.direction.x;
          self.position.y += velocity * self.direction.y;
          self.checkBounds();
        }
      },
      
      checkBounds: function() {
        if ( (self.position.y >= upperBound) || ( self.position.y <= lowerBound ) ) {
          self.direction.y *= -1;
        }
      },
      
      fire: function() {
        isFired = true;
      },
      
      stop: function() {
        isFired = false;
      },
      
      isFired: function() {
        return isFired;
      },
      
      hit: function() {
        self.direction.x *= -1;
      },
      
      checkCollisionWithPlayers: function( player1, player2 ) {
        if ( player1.hasCollision(self.position) || player2.hasCollision(self.position, padding) ) {
          self.hit();
        }
      }
    });
    
    self.init();
  }
  
  window.Ball = Ball;
})();