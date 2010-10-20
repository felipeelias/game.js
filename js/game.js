function Game(options) {
  var self = this,
      gameLoop, 
      defaultLoop,
      started;
  
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
    if (self.isStarted()) {
      self.updateTime();
      self.calculateSineWave();

      self.clearContext();

      gameLoop.call(self);
    }
    
    setTimeout(defaultLoop, self.TIME_FRAME);
  };
  
  bindGlobalKeys = function() {
    $(document).bind('keyup.global', function(e) {
      if ( self.pauseKey && keyMapping[e.keyCode] === self.pauseKey ) {
        if ( self.isStarted() ) {
          self.pause();
        } else {
          self.start();
        }
        return false;
      }
    });
  };
  
  $.extend(self, {
    init: function() {
      self.canvas       = document.getElementById("canvas");
      self.paper        = self.canvas.getContext("2d");
      self.sineWave     = 0;
      self.currentTime  = 0;
      started           = false;
      
      bindGlobalKeys();
      defaultLoop();
    },
    
    start: function() {
      started = true;
    },
    
    pause: function() {
      started = false;
    },
    
    isStarted: function() {
      return started;
    },
    
    isPaused: function() {
      return !started;
    },
    
    loop: function( loop ) {
      gameLoop = loop;
    },
    
    clearContext: function() {
      self.paper.clearRect(0, 0, self.canvas.width, self.canvas.height);
    },
    
    calculateSineWave: function() {
      self.sineWave = ((Math.sin(self.currentTime / 1000) + 1) / 2);
      return self.sineWave;
    },
    
    updateTime: function() {
      self.currentTime += self.TIME_FRAME;
      return self.currentTime;
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
