var game = new Game();
var player1 = new Paddle(game, { x: 10, y: game.paper.centerY - 50 });
var player2 = new Paddle(game, { x: game.paper.width - 20, y: game.paper.centerY - 50 });
var ball = new Ball(game);
var score = new Score(game);

game.sounds.add('sounds/ping');
game.sounds.add('sounds/pong');
game.sounds.preload();

game.addState('initial', function() {
  this.paper.text("Press 'space' to start", this.paper.centerX, this.paper.centerY, {
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
  
  if (isKeyPressed('r')) {
    game.changeState('ingame');
  }
  
  if (!ball.isFired() && isKeyPressed('space')) {
    ball.fire();
  }
  
  // Background
  game.paper.draw(function(c) {
    c.globalAlpha = 0.5;

    game.paper.path(function( path ) {
      path.moveTo(game.paper.centerX, -1);
      path.lineTo(game.paper.centerX, game.paper.height);
    });

    c.strokeStyle = "white";
    c.stroke();
  });
  
  player1.draw();
  player2.draw();
  ball.draw();
  score.draw();
}, {
  before: function() {
    player1.reset();
    player2.reset();
    ball.reset();
    score.reset();
  }
});

game.start();
