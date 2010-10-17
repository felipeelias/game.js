var game = new Game();
var ship = new Spaceship(game).draw();

// future API
// game.mapKeys({
//   'up': function() {
//     ship.moveForward();
//   }
// });

game.start(function() {
  if (isKeyPressed('up')) {
    ship.moveForward();
  } else {
    ship.stop();
  }
  
  if (isKeyPressed('left')) {
    console.log('left')
    ship.rotateLeft();
  }
  
  if (isKeyPressed('right')) {
    console.log('right')
    ship.rotateRight();
  }
  
  ship.draw()
});
