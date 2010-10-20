function Bullet( game, initial_position, intial_angle, initial_velocity ) {
  var self = this,
      bulletRadius = 2,
      PI_SQ = Math.PI * 2;
  
  $.extend(self, {
    init: function() {
      self.position = initial_position;
      self.velocity = initial_velocity;
      self.angle    = intial_angle;
      self.accelleration = 1.2;
      self.lifeTime = 1000;
      self.startTime = game.currentTime;
    },
    
    draw: function() {
      self.addSpeed();
      
      game.paper.fillStyle = "#F55";
      game.paper.beginPath();
      game.paper.arc(self.position.x, self.position.y, bulletRadius, 0, PI_SQ, true);
      game.paper.closePath();
      game.paper.fill();
    },
    
    addSpeed: function() {
      self.velocity.add({
        x: Rotation.offsetX(self.angle, self.accelleration),
        y: Rotation.offsetY(self.angle, self.accelleration)
      });
      self.position.add(self.velocity);
    },
    
    isDead: function() {
      if ( (game.currentTime - self.startTime) > self.lifeTime) {
        return true;
      } else {
        return false;
      }
    }
  });
  
  self.init();
}