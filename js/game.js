function Game(options) {
  var self = this,
      defaultLoop,
      started,
      states, 
      actualState;
  
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
      
      self.paper.clear();
      
      self.state(actualState).fn.call(self);
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
      states = {};
      actualState = 'initial';
      
      self.paper        = new CanvasWrapper(document.getElementById("canvas"));
      self.canvas       = self.paper.context;
      self.currentTime  = 0;
      started           = false;
      
      bindGlobalKeys();
      defaultLoop();
    },
    
    addState: function( stateName, stateFunction, options ) {
      var opts = options || {};
      states[stateName] = {
        fn: stateFunction,
        before: opts.before
      };
    },
    
    state: function( stateName ) {
      return states[stateName];
    },
    
    currentState: function() {
      return actualState;
    },
    
    changeState: function( stateName ) {
      if ( self.state(stateName).before !== undefined ) {
        self.state(stateName).before.call(self);
      }
      actualState = stateName;
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
      },
      
      random: function( from, to ) {
        return Math.floor(Math.random() * (to + 1) + from);
      }
    }
  });
  
  self.init();
}
