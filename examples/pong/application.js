var game = new Game();
var player1 = new Paddle(game);
var player2 = new Paddle(game);
var ball = new Ball(game);

ball.position = { x: 21, y: (game.canvas.height / 2) - 5 };
player1.position = { x: 10, y: (game.canvas.height / 2) - 50 };
player2.position = { x: game.canvas.width - 20, y: (game.canvas.height / 2) - 50 };

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
    player2.moveUp();
  }
  
  if (isKeyPressed('down')) {
    player2.moveDown();
  }
  
  if (isKeyPressed('w')) {
    player1.moveUp();
  }
  
  if (isKeyPressed('s')) {
    player1.moveDown();
  }
  
  if (!ball.isFired() && isKeyPressed('space')) {
    ball.fire();
  }
  
  player1.draw();
  player2.draw();
  ball.draw();
});

game.start();
