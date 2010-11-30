module("Canvas wrapper", {
  setup: function() {
    this.canvas = new CanvasWrapper(document.getElementById("canvas"));
  }
});

test("the paper property should be an canvas wrapper", 1, function() {
  ok($.isFunction(this.canvas.draw));
});

test("the default context should be 2d", 1, function() {
  same(this.canvas.context, document.getElementById("canvas").getContext("2d"));
});
