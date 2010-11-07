(function() {
  function Paddle( game ) {
    var self = this,
        player = {
          width: 10,
          height: 100,
          velocity: 7
        },
        padding = 10;

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
        if ( self.position.y >= (game.canvas.height - player.height - padding) ) {
          self.position.y = game.canvas.height - player.height - padding;
        }
        if ( self.position.y <= padding ) {
          self.position.y = padding;
        }
      }
    });

    self.init();
  }
  
  window.Paddle = Paddle;
})();