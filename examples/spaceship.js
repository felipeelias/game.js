(function() {
  function Spaceship( game ) {
    var self = this;

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
        game.paper.drawImage(self.object, self.position.x, self.position.y);
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
  
  function trianglePath ( x, y, radius ) {
    return "M".concat(x, ",", y, "m0-", radius * .58, "l", radius * .5, ",", radius * 1.5, "-", radius, ",0z");
  };
  
})();
