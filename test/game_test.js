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