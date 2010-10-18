(function() {
  function Spaceship( game ) {
    var self = this;

    var playerWidth = 20, playerHeight = 30;
    var playerVertices = [
      [ - 1 * playerHeight / 2, -1 * playerWidth / 2], 
      [ - 1 * playerHeight / 2, playerWidth / 2], 
      [playerHeight / 2, 0]
    ];    
    
    $.extend(self, {
      init: function() {
        self.position   = new Vector(100, 100);
        self.direction  = new Vector(1, 1);
        self.velocity   = new Vector(0, 0);
        self.limits     = [ game.canvas.offsetWidth - playerHeight, 
                            5 + playerHeight, 
                            game.canvas.offsetHeight - playerHeight, 
                            5 + playerHeight
                          ];
        self.accelleration = 0.5;
        self.maxSpeed      = 7;
        self.rotationSpeed = 11;
      },
      
      draw: function() {
        self.position.add(self.velocity)

        game.paper.translate(self.position.x, self.position.y);
        game.paper.rotate(self.direction.angle());
        self.drawPlayer();
        
        return self;
      },
      
      drawPlayer: function() {
        game.util.tracePoly(playerVertices);
        game.paper.fillStyle = "white";
        game.paper.fill();
        game.util.tracePoly(playerVertices);
        game.paper.stroke();
      },
      
      moveForward: function() {
        self.speedCheck();
        self.velocity.add(self.direction.mulNew(self.accelleration));
        self.boundsCheck();
      },
      
      moveBackward: function() {
        self.velocity.mul(0.85)
        self.boundsCheck();
      },
      
      moveLeft: function() {
        var rotation = game.util.radians(self.rotationSpeed * game.TIME_FRAME * -1);
        self.direction.rotate(rotation);
        self.boundsCheck();
      },
      
      moveRight: function() {
        var rotation = game.util.radians(self.rotationSpeed * game.TIME_FRAME);
        self.direction.rotate(rotation);
        self.boundsCheck();
      },
      
      boundsCheck: function() {
        var pos = self.position;
        
        if (pos.x >= self.limits[0]) {
          self.position.x = self.limits[0];
        } else if (pos.x <= self.limits[1]) {
          self.position.x = self.limits[1];
        }
        
        if (pos.y >= self.limits[2]) {
          self.position.y = self.limits[2];
        } else if (pos.y <= self.limits[3]) {
          self.position.y = self.limits[3];
        }
      },
      
      speedCheck: function() {
        if (self.velocity.len() > self.maxSpeed) {
          self.velocity.setLength(self.maxSpeed);
        }        
      }
    });
    
    self.init();
  };
  
  window.Spaceship = Spaceship;
  
})();
