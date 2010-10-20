var game = new Game();
var ship = new Spaceship(game);
var starField = new Starfield(game);

// future API
// game.mapKeys({
//   'up': function() {
//     ship.moveForward();
//   }
// });

$("#canvas").css({"background-color": "#000"});

game.pauseKey = 'p';

game.loop(function() {
  if (isKeyPressed('up')) {
    ship.moveForward();
  } else {
    ship.moveBackward();
  }
  
  if (isKeyPressed('right')) {
    ship.moveRight();
  }
  
  if (isKeyPressed('left')) {
    ship.moveLeft();
  }
  
  if (isKeyPressed('space')) {
    ship.fire();
  }
  
  starField.draw();
  ship.draw()
});

game.start();
