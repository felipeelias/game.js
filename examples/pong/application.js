var game = new Game();
var player = new Paddle(game);
var ball = new Ball(game);

$("#canvas").css({"background-color": "#000"});

game.drawBackground(function(paper) {
  paper.save();
  paper.globalAlpha = 0.5;
  paper.beginPath();
  paper.moveTo(game.canvas.width / 2, -1);
  paper.lineTo(game.canvas.width / 2, game.canvas.height);
  paper.closePath();
  paper.strokeStyle = "white";
  paper.stroke();
  paper.restore();
});

game.loop(function() {
  if (isKeyPressed('up')) {
    player.moveUp();
  }
  
  if (isKeyPressed('down')) {
    player.moveDown();
  }
  
  if (!ball.isFired() && isKeyPressed('space')) {
    ball.fire();
  }
  
  player.draw();
  ball.draw();
});

game.start();