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

game.loop(function() {
  if (isKeyPressed('up')) {
    ship.moveForward();
  }
  
  if (isKeyPressed('down')) {
    ship.moveBackward();
  }
  
  if (isKeyPressed('right')) {
    ship.moveRight();
  }
  
  if (isKeyPressed('left')) {
    ship.moveLeft();
  }
  
  if (isKeyPressed('space')) {
    ship.rotate();
  }
  
  starField.draw();
  ship.draw()
});

game.start();