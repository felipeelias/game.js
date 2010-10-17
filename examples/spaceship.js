(function() {
  function Spaceship( game ) {
    var self = this;

    $.extend(self, {
      init: function() {
        self.position   = { x: 1, y: 1 };
        self.direction  = { x: 1, y: 1 };
        self.object     = new Image();
        
        self.object.src = "smiley.jpg";
      },
      draw: function() {
        game.paper.drawImage(self.object, self.position.x, self.position.y);
        return self;
      },
      moveForward: function() {
        if (!self.outOfBounds()) {
          self.position.y -= 1 * self.direction.y;
        }
      },
      moveBackward: function() {
        if (!self.outOfBounds()) {
          self.position.y += 1 * self.direction.y;
        }
      },
      moveLeft: function() {
        if (!self.outOfBounds()) {
          self.position.x -= 1 * self.direction.x;
        }
      },
      moveRight: function() {
        if (!self.outOfBounds()) {
          self.position.x += 1 * self.direction.x;
        }
      },
      rotate: function() {
        game.paper.translate(75, 75);
        game.paper.rotate(game.sineWave * Math.PI * 2);
        game.paper.translate(-75, -75);
      },
      outOfBounds: function() {
        var pos = self.position;
        
        if (pos.x >= 100) {
          self.position.x = 100;
        } else if (pos.x <= 1) {
          self.position.x = 1;
        }
        
        if (pos.y >= 100) {
          self.position.y = 100;
        } else if (pos.y <= 1) {
          self.position.y = 1;
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
