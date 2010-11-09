var game = new Game();
var player1 = new Paddle(game, { x: 10, y: (game.paper.height / 2) - 50 });
var player2 = new Paddle(game, { x: game.paper.width - 20, y: (game.paper.height / 2) - 50 });
var ball = new Ball(game);
var score = new Score(game);

$("#canvas").css({"background-color": "#000"});

game.addState('initial', function() {
  this.paper.text("Press 'space' to start", this.paper.width / 2, this.paper.height / 2, {
    color: 'white',
    font: '40px sans-serif',
    align: 'center'
  });
  
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
  
  // Background
  paper.draw(function(c) {
    c.globalAlpha = 0.5;
    c.beginPath();
    c.moveTo(paper.width / 2, -1);
    c.lineTo(paper.width / 2, paper.height);
    c.closePath();
    c.strokeStyle = "white";
    c.stroke();
  });
  
  player1.draw();
  player2.draw();
  ball.draw();
  score.draw();
});

game.start();
