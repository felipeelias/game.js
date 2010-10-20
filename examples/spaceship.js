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
        self.position   = new Vector(480, 420);
        self.angle      = -1.578;
        self.velocity   = new Vector(0, 0);
        self.limits     = [ game.canvas.offsetWidth - playerHeight, 
                            5 + playerHeight, 
                            game.canvas.offsetHeight - playerHeight, 
                            5 + playerHeight
                          ];
        self.accelleration = 0.5;
        self.maxSpeed      = 7;
        self.rotationSpeed = 0.2;
        self.bullets       = [];
        self.lastFire      = -1000;
        self.fireSpeed     = 500;
      },
      
      draw: function() {
        self.position.add(self.velocity)
        game.paper.save();
        game.paper.translate(self.position.x, self.position.y);
        game.paper.rotate(self.angle);
        self.drawPlayer();
        game.paper.restore();
        
        return self;
      },
      
      drawPlayer: function() {
        game.paper.fillStyle = "white";
        game.util.tracePoly(playerVertices);
        game.paper.fill();
        game.paper.stroke();
      },
      
      moveForward: function() {
        self.speedCheck();
        self.velocity.add({
          x: Rotation.offsetX(self.angle, self.accelleration),
          y: Rotation.offsetY(self.angle, self.accelleration)
        });
        self.boundsCheck();
      },
      
      moveBackward: function() {
        self.velocity.mul(0.85)
        self.boundsCheck();
      },
      
      moveLeft: function() {
        self.angle -= self.rotationSpeed;
        self.boundsCheck();
      },
      
      moveRight: function() {
        self.angle += self.rotationSpeed;
        self.boundsCheck();
      },
      
      fire: function() {
        if ( (game.currentTime - self.lastFire) > self.fireSpeed ) {
          self.lastFire = game.currentTime;
          self.bullets.push(new Bullet(game));
        }
      },
      
      drawBullets: function() {
        for( var i = self.bullets.length - 1; i >= 0; i-- ) {
          if ( self.bullets[i].isDead() ) {
            self.bullets.splice(i, 1);
          } else {
            self.bullets[i].draw();
          }
        };
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
