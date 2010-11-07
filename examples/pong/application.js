var game = new Game();
var player = new Paddle(game);

$("#canvas").css({"background-color": "#000"});

game.loop(function() {
  
  
  player.draw();
});

game.start();
