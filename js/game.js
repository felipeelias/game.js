function Game(options) {
  var self = this,
      currentTime = 0,
      gameLoop, 
      defaultLoop;
  
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
    self.updateTime();
    self.calculateSineWave();

    self.clearContext();
    self.paper.save();
    
    gameLoop.call(self);
    
    self.paper.restore();
    
    setTimeout(defaultLoop, self.TIME_FRAME);
  };
  
  $.extend(self, {
    init: function() {
      self.canvas   = document.getElementById("canvas");
      self.paper    = self.canvas.getContext("2d");
      self.sineWave = 0;
    },
    
    start: function( loop ) {
      gameLoop = loop;
      setTimeout(defaultLoop, self.TIME_FRAME);
    },
    
    clearContext: function() {
      self.paper.clearRect(0, 0, self.canvas.width, self.canvas.height);
    },
    
    calculateSineWave: function() {
      return self.sineWave = ((Math.sin(currentTime / 1000) + 1) / 2);
    },
    
    updateTime: function() {
      return currentTime += self.TIME_FRAME;
    }
  });
  
  self.init();
}