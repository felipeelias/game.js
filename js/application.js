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

function radians(deg) {
	return deg * 0.0174532925;
};

function degrees(rad) {
	return rad * 57.2957795;
};
