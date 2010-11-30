module("Canvas wrapper", {
  setup: function() {
    this.game = new Game();
  }
});

test("the paper property should be an canvas wrapper", 1, function() {
  ok($.isFunction(this.game.paper.draw));
});