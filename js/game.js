function Game(options) {
  var self = this,
      currentTime,
      gameLoop, 
      defaultLoop,
      isStarted;
  
  self.FPS        = 30;
  self.TIME_FRAME = 1000 / self.FPS; // time of each frame in miliseconds
  
  // future api
  // self.options = $.extend({
  //   fps: 30,
  //   size: {
  //     width: 400,
  //     heigth: 400
  //   }
  // }, options);
    
  defaultLoop = function() {
    if (isStarted) {
      self.updateTime();
      self.calculateSineWave();

      self.clearContext();
      self.paper.save();

      gameLoop.call(self);

      self.paper.restore();
    }
    
    setTimeout(defaultLoop, self.TIME_FRAME);
  };
  
  $.extend(self, {
    init: function() {
      self.canvas   = document.getElementById("canvas");
      self.paper    = self.canvas.getContext("2d");
      self.sineWave = 0;
      currentTime   = 0;
      isStarted     = false;
      
      defaultLoop();
    },
    
    start: function() {
      isStarted = true;
    },
    
    stop: function() {
      isStarted = false;
    },
    
    loop: function( loop ) {
      gameLoop = loop;
    },
    
    clearContext: function() {
      self.paper.clearRect(0, 0, self.canvas.width, self.canvas.height);
    },
    
    calculateSineWave: function() {
      return self.sineWave = ((Math.sin(currentTime / 1000) + 1) / 2);
    },
    
    updateTime: function() {
      return currentTime += self.TIME_FRAME;
    },
    
    util: {
      tracePoly: function( verts ) {
        self.paper.beginPath();
        self.paper.moveTo(verts[0][0], verts[0][1]);
        for (var i = 1; i < verts.length; i++) {
          self.paper.lineTo(verts[i][0], verts[i][1]);
        }
        self.paper.closePath();
      },
      
      radians: function( deg ) {
        return deg * 0.0174532925;
      }
    }
  });
  
  self.init();
}
