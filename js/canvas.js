(function() {
  function CanvasWrapper( canvasElement ) {
    var context,
        textDefaults;
    
    context = canvasElement.getContext('2d');
    
    textDefaults = {
      align: 'start',
      baseLine: 'alphabetic',
      color: 'black',
      font: '10px sans-serif'
    };
    
    return {
      context: context,
      width: canvasElement.width,
      height: canvasElement.height,
      
      clear: function() {
        context.clearRect(0, 0, this.width, this.height);
      },
      
      draw: function( fn ) {
        context.save();
        fn(context);
        context.restore();
      },
      
      text: function(text, x, y, options) {
        var options = $.extend({}, textDefaults, options);
        
        this.draw(function(c) {
          c.fillStyle = options.color;
          c.font = options.font;
          c.textAlign = options.align;
          c.fillText(text, x, y);
        });
        
        return this;
      }
    };
  }
  
  window.CanvasWrapper = CanvasWrapper;
})()