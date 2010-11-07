(function() {
  function Paddle( game ) {
    var self = this,
        player = {
          width: 10,
          height: 100,
          velocity: 6
        },
        padding = 10,
        upperBound = game.canvas.height - player.height - padding,
        lowerBound = padding;

    $.extend(self, {
      init: function() {
        self.position = { x: 10, y: 10 };
      },

      draw: function() {
        game.paper.fillStyle = "white";
        game.paper.fillRect(self.position.x, self.position.y, player.width, player.height);
      },

      moveUp: function() {
        self.position.y -= player.velocity;
        self.checkBounds();
      },

      moveDown: function() {
        self.position.y += player.velocity;
        self.checkBounds();
      },

      checkBounds: function() {
        if ( self.position.y >= upperBound ) {
          self.position.y = upperBound;
        }
        if ( self.position.y <= lowerBound ) {
          self.position.y = lowerBound;
        }
      },
      
      hasCollision: function( r, offset ) {
        var p = self.position,
            o = offset || 0;
        return (r.x + o) > p.x && (r.y + o) > p.y && r.x < (p.x + player.width) && r.y < (p.y + player.height);
      }
    });

    self.init();
  }
  
  window.Paddle = Paddle;
})();