(function() {
  function Score(game) {
    var self = this,
        score = {};
    
    $.extend(self, {
      init: function() {
        score.player1 = 0;
        score.player2 = 0;
      },
      
      draw: function() {
        game.paper.font = "30px sans-serif";
        game.paper.textAlign = "center";
        game.paper.fillText(score.player1, game.canvas.width / 4, 70);
        game.paper.fillText(score.player2, (game.canvas.width / 4) * 3, 70);
      },
      
      addTo: function( scoreId ) {
        score[scoreId] += 1;
      }
    });
    
    self.init();
  }
  
  window.Score = Score;
})();