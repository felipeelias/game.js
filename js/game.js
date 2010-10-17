function Game(options) {
  var self = this;

  var gameLoop, defaultLoop, currentTimeFactor;
  
  currentTimeFactor = 0;
  
  // self.options = $.extend({
  //   fps: 30,
  //   size: {
  //     width: 400,
  //     heigth: 400
  //   }
  // }, options);
    
  defaultLoop = function() {
    self.calculateTimeFactor();
    self.clearContext();
    
    self.paper.save();
    self.paper.translate(300 - 75, 200 - 75); //center image ¬¬
    
    gameLoop.call(self);
    
    self.paper.restore();
    
    setTimeout(defaultLoop, self.timeInterval);
  };
  
  $.extend(self, {
    init: function() {
      self.canvas       = $("#canvas")[0];
      self.paper        = self.canvas.getContext("2d");
      self.fps          = 30;
      self.fpsRate      = 1000 / self.fps;
      self.timeFrame    = 1 / self.fps;
      self.timeInterval = 1000 * self.timeFrame;
      self.timeFactor   = 0;
    },
    
    start: function( loop ) {
      gameLoop = loop;
      setTimeout(defaultLoop, self.timeInterval);
    },
    
    clearContext: function() {
      self.paper.clearRect(0, 0, self.canvas.width, self.canvas.height);
    },
    
    calculateTimeFactor: function() {
      currentTimeFactor += self.timeFrame;
      return self.timeFactor = ((Math.sin(currentTimeFactor) + 1) / 2);
    }
  });
  
  self.init();
}