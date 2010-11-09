(function() {
  function Score(game) {
    var self = this,
        score = {};
    
    $.extend(self, {
      init: function() {
        self.reset();
      },
      
      draw: function() {
        var opts = { 
          font: "30px sans-serif",
          align: "center",
          color: "white"
        };
        
        game.paper.text(score.player1, game.paper.width / 4, 70, opts)
        game.paper.text(score.player2, (game.paper.width / 4) * 3, 70, opts)
      },
      
      addTo: function( scoreId ) {
        score[scoreId] += 1;
      },
      
      reset: function() {
        score.player1 = 0;
        score.player2 = 0;
      }
    });
    
    self.init();
  }
  
  window.Score = Score;
})();