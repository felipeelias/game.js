(function() {
  function Spaceship( game ) {
    var self = this,
        speed = 2,
        rotationSpeed = 20,
        maxSpeed = 10;

    var image = new Image();
    image.src = "smiley.jpg";
        
    self.direction = new Vector(1, 1);
    self.position = new Vector(0, 0);
    
    // self.object = game.paper.path(trianglePath(self.position.x, self.position.y, 20)).hide();

    $.extend(self, {
      draw: function() {
        game.paper.drawImage(image, self.position.x, self.position.y);
        
        // game.paper.translate(75, 75);
        // game.paper.rotate(game.timeFactor * Math.PI * 2);
        // game.paper.translate(-75, -75);
        
        self.position.x += 1 * self.direction.x;
        self.position.y += 1 * self.direction.y;
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
         
        // self.object.translate(self.position.x, self.position.y);
        // self.object.attr({y:self.position.y})
        // self.object.rotate(self.direction.angle());
        return self;
      },
      moveForward: function() {
        self.velocity.add(self.direction.mulNew(speed));
        
        if ( self.velocity.len() > maxSpeed ) {
    			self.velocity.setLength(maxSpeed);
    		}
      },
      stop: function() {
        // self.velocity.mul(0.5);
      },
      rotateLeft: function() {
        self.direction.rotate(radians(rotationSpeed * -1));
      },
      rotateRight: function() {
  			self.direction.rotate(radians(rotationSpeed));
      }
    });
  };
  
  window.Spaceship = Spaceship;
  
  function trianglePath ( x, y, radius ) {
    return "M".concat(x, ",", y, "m0-", radius * .58, "l", radius * .5, ",", radius * 1.5, "-", radius, ",0z");
  };
  
})();
