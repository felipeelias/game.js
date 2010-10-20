function Bullet( game ) {
  var self = this;
  
  var bulletRadius = 2,
      PI_SQ = Math.PI * 2;
  
  $.extend(self, {
    init: function() {
      self.position = new Vector(1, 1);
      self.velocity = new Vector(0, 0);
      self.angle    = 0;
      self.accelleration = 0.5;
      self.lifeTime = 2000;
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