module("Canvas wrapper", {
  setup: function() {
    $("#qunit-fixture").append("<canvas id=\"canvas\" width=\"400\", height=\"300\"></canvas>");
    this.canvas = new CanvasWrapper(document.getElementById("canvas"));
  }
});

test("the paper property should be an canvas wrapper", 1, function() {
  ok($.isFunction(this.canvas.draw));
});

test("the default context should be 2d", 1, function() {
  same(this.canvas.context, document.getElementById("canvas").getContext("2d"));
});

test("check for the height, width and center orientation", 4, function() {
  equal(this.canvas.width, 400);
  equal(this.canvas.height, 300);
  equal(this.canvas.centerX, 200);
  equal(this.canvas.centerY, 150);
});
