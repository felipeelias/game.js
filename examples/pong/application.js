var game = new Game();
var player1 = new Paddle(game, { x: 10, y: (game.canvas.height / 2) - 50 });
var player2 = new Paddle(game, { x: game.canvas.width - 20, y: (game.canvas.height / 2) - 50 });
var ball = new Ball(game);
var score = new Score(game);

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

game.addState('initial', function() {
  game.paper.fillStyle = "white";
  game.paper.font = '40px sans-serif';
  game.paper.textAlign = "center";
  game.paper.fillText("Press 'space' to start", game.canvas.width/2, game.canvas.height/2);
  
  if (isKeyPressed('space')) {
    game.changeState('ingame');
  }
});

game.addState('ingame', function() {
  if (ball.isFired()) {
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
    
    ball.checkCollisionWithPlayers(player1, player2);
  }
  
  if (!ball.isFired() && isKeyPressed('space')) {
    ball.fire();
  }
  
  player1.draw();
  player2.draw();
  ball.draw();
  score.draw();
});

game.start();
