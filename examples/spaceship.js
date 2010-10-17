(function() {
  function Spaceship( game ) {
    var self = this;

    $.extend(self, {
      init: function() {
        self.position   = { x: 0, y: 0 };
        self.direction  = { x: 1, y: 1 };
        self.object     = new Image();
        
        self.object.src = "smiley.jpg";
      },
      draw: function() {
        game.paper.drawImage(self.object, self.position.x, self.position.y);

        // 
        // if (self.position.x >= 100) {
        //   self.position.x = 100;
        //   self.direction.x = -1;
        // } else if (self.position.x <= 0) {
        //   self.position.x = 0;
        //   self.direction.x = 1;
        // }
        // 
        // if (self.position.y >= 100) {
        //   self.position.y = 100;
        //   self.direction.y = -1;
        // } else if (self.position.y <= 0) {
        //   self.position.y = 0;
        //   self.direction.y = 1;
        // }
        return self;
      },
      moveForward: function() {
        self.position.y -= 1 * self.direction.y;
      },
      moveBackward: function() {
        self.position.y += 1 * self.direction.y;
      },
      moveLeft: function() {
        self.position.x -= 1 * self.direction.x;
      },
      moveRight: function() {
        self.position.x += 1 * self.direction.x;
      },
      rotate: function() {
        game.paper.translate(75, 75);
        game.paper.rotate(game.sineWave * Math.PI * 2);
        game.paper.translate(-75, -75);
      }
    });
    
    self.init();
  };
  
  window.Spaceship = Spaceship;
  
  function trianglePath ( x, y, radius ) {
    return "M".concat(x, ",", y, "m0-", radius * .58, "l", radius * .5, ",", radius * 1.5, "-", radius, ",0z");
  };
  
})();
