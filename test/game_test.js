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