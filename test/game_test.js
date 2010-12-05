module("Game states", {
  setup: function() {
    $("#qunit-fixture").append("<canvas id=\"canvas\"></canvas>");
    this.game = new Game();
  },
  
  teardown: function() {
    this.game.pause();
  }
});

test("should have a initial state", 1, function() {
  this.game.addState('initial', function() {});
  
  ok($.isFunction(this.game.state('initial').fn));
});

test("should have multiple states", 2, function() {
  this.game.addState('initial', function() {});
  this.game.addState('credits', function() {});

  ok($.isFunction(this.game.state('initial').fn));
  ok($.isFunction(this.game.state('credits').fn));
});

test("the first current state is the 'initial'", 1, function() {
  equal(this.game.currentState(), 'initial');
});

asyncTest("should call initial state when game starts", 1, function() {
  this.game.addState('initial', function() {
    ok(true);
    start();
  });
  
  this.game.start();
});

asyncTest("the caller object of the states should be the game object", 1, function() {
  this.game.someVariable = true;
  
  this.game.addState('initial', function() {
    ok(this.someVariable); // this references to the game object
    start();
  });
  
  this.game.start();
});

asyncTest("should switch the states", 2, function() {
  this.game.addState('initial', function() {
    this.changeState('credits');
    ok(true);
  });
  
  this.game.addState('credits', function() {
    ok(true);
    start();
  });
  
  this.game.start();
});

asyncTest("should run before function", 2, function() {
  this.game.counter = 1;
  
  this.game.addState('initial', function() {
    this.changeState('credits');
  });
  
  this.game.addState('credits', function() {
    equals(this.counter, 2);
    start();
  }, { 
    before: function() { 
      equals(this.counter, 1);
      this.counter += 1;
    } 
  });
  
  this.game.start();
});

asyncTest("should run after function", 2, function() {
  this.game.counter = 1;
  
  this.game.addState('initial', function() {
    this.changeState('credits');
  }, { 
    after: function() { 
      equals(this.counter, 1);
      this.counter += 1;
    }
  });
  
  this.game.addState('credits', function() {
    equals(this.counter, 2);
    start();
  });
  
  this.game.start();
});

module("Game options", {
  setup: function() {
    $("#qunit-fixture").append("<canvas id=\"canvas\"></canvas>");
    $("#qunit-fixture").append("<canvas id=\"canvas-extra\"></canvas>");
  }
});

test("shoud have the default options", 2, function() {
  var game = new Game(),
      el = $("#canvas");
  
  same(game.canvas, el[0].getContext("2d"));
  equals(el.css('background-color'), "rgb(0, 0, 0)");
});

test("shoud set new options on initialization", 2, function() {
  var el = $("#canvas-extra");
  
  var game = new Game({
    canvasId: 'canvas-extra',
    backgroundColor: 'rgb(255, 255, 255)'
  });
  
  same(game.canvas, el[0].getContext("2d"));
  equals(el.css('background-color'), "rgb(255, 255, 255)");
});

module("Game sounds", {
  setup: function() {
    $("#qunit-fixture").append("<canvas id=\"canvas\"></canvas>");
    this.game = new Game();
  }
});

test("should add sounds to the game", 1, function() {
  this.game.sounds.add('sounds/test');
  ok( $.isFunction(this.game.sounds.get('sounds/test').play) );
});

asyncTest("should preload sounds of the game", 1, function() {
  this.game.sounds.add('fixtures/sound1');
  
  this.game.sounds.get('fixtures/sound1').loadEnd(function() {
    ok(true);
    start();
  });

  this.game.sounds.preload();
});
