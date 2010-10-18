(function() {
  function Spaceship( game ) {
    var self = this;
    
    var playerWidth = 20, playerHeight = 30;
    var playerVerts = [
      [ - 1 * playerHeight / 2, -1 * playerWidth / 2], 
      [ - 1 * playerHeight / 2, playerWidth / 2], 
      [playerHeight / 2, 0]
    ];    
    
    $.extend(self, {
      init: function() {
        self.position   = { x: 5, y: 5 };
        self.direction  = { x: 1, y: 1 };
        self.velocity   = 5;
        self.object     = new Image();
        self.object.src = "smiley.jpg";
        self.limits     = [400, 5, 225, 5];
        self.dimensions = {
          width: 150,
          height: 150
        }
      },
      draw: function() {
        game.paper.translate(self.position.x, self.position.y);
        // game.paper.rotate(that.dir.angle());
        
        game.util.tracePoly(playerVerts);
        
        game.paper.fillStyle = "white";
        game.paper.fill();
        
        game.util.tracePoly(playerVerts);
        
        game.paper.stroke();
        
        return self;
      },
      moveForward: function() {
        self.position.y -= self.velocity * self.direction.y;
        self.outOfBounds();
      },
      moveBackward: function() {
        self.position.y += self.velocity * self.direction.y;
        self.outOfBounds();
      },
      moveLeft: function() {
        self.position.x -= self.velocity * self.direction.x;
        self.outOfBounds();
      },
      moveRight: function() {
        self.position.x += self.velocity * self.direction.x;
        self.outOfBounds();
      },
      rotate: function() {
        game.paper.translate(self.dimensions.width / 2, self.dimensions.height / 2);
        game.paper.rotate(game.sineWave * Math.PI * 2);
        game.paper.translate(-(self.dimensions.width / 2), -(self.dimensions.height / 2));
      },
      outOfBounds: function() {
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
      }
    });
    
    self.init();
  };
  
  window.Spaceship = Spaceship;
  
})();
