var game = new Game();
var ship = new Spaceship(game).draw();

// future API
// game.mapKeys({
//   'up': function() {
//     ship.moveForward();
//   }
// });

$("#canvas").css({"background-color": "#000"});

game.start(function() {
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
  
  ship.draw()
});
