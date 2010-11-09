module("Game states", {
  setup: function() {
    this.game = new Game();
  },
  
  teardown: function() {
    this.game.pause();
  }
});

test("should have a initial state", 1, function() {
  this.game.addState('initial', function() {});
  
  ok($.isFunction(this.game.state('initial')));
});

test("should have multiple states", 2, function() {
  this.game.addState('initial', function() {});
  this.game.addState('credits', function() {});

  ok($.isFunction(this.game.state('initial')));
  ok($.isFunction(this.game.state('credits')));
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
  this.game.addState('initial', function() {
    ok(true);
  }, { 
    before: function() { 
      ok(true); 
    } 
  });
  
  this.game.start();
});

module("Canvas wrapper", {
  setup: function() {
    this.game = new Game();
  }
});

test("the paper property should be an canvas wrapper", 1, function() {
  ok($.isFunction(this.game.paper.draw));
});