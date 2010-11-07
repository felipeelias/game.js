var game = new Game();
var player = new Paddle(game);

$("#canvas").css({"background-color": "#000"});

game.loop(function() {
  if (isKeyPressed('up')) {
    player.moveUp();
  }  
  
  if (isKeyPressed('down')) {
    player.moveDown();
  }  
  
  player.draw();
});

game.start();
