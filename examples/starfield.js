function Starfield ( game, params ) {
  var self = this, 
      options = $.extend({ 
        starCount: 100 
      }, params);
  
  self.xLimit = game.canvas.offsetWidth;
  self.yLimit = game.canvas.offsetHeight;
  self.starCount = options.starCount;
  
  $.extend(self, {
    init: function() {
      self.stars = [];
      
      for(var i = 0; i < self.starCount; i++) {
        self.stars.push(self.newStar());
        game.paper.fillStyle = rgb(self.stars[i].color, self.stars[i].color, self.stars[i].color);
      }
    },
    
    draw: function() {
      var i, star;
      for(i = 0; i < self.starCount; i++) {
        star = self.stars[i];

        if ( star.y > self.yLimit ) {
         self.recycleStar(star);
        } else {
         star.y += star.acc;
        }

        self.drawStar(star);
      }
    },
    
    drawStar: function ( star ) {
      game.paper.fillStyle = rgb(star.color, star.color, star.color);
      game.paper.beginPath();
      game.paper.arc(star.x, star.y, star.z, 0, Math.PI*2, true);
      game.paper.fill();
    },
    
    newStar: function() {
      return {
        x: self.newX(),
        y: self.newY(),
        z: self.newZ(),
        acc: self.newAcc(),
        color: self.newColor()
      };
    },
    
    recycleStar: function ( star ) {
      star.x    = self.newX();
      star.y    = 0;
      star.z    = self.newZ();
      star.acc  = self.newAcc();
      star.color = self.newColor();
    },
    
    newX: function() {
      return random(0, self.xLimit);
    },

    newY: function() {
      return random(0, self.yLimit);
    },
    
    newZ: function() {
      return 1;
    },
    
    newAcc: function() {
      return random(1, 15);
    },
    
    newColor: function() {
      return random(0, 255);
    },
    
    toString: function() {
      return "Starfield#" + game.canvas.id;
    }
  });
  
  self.init();
}

function random(lower, upper){
  return Math.floor(Math.random() * (upper-lower) + lower);
}

function rgb (r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}