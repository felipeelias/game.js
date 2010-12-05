(function() {
  var audio_element = document.createElement('audio'),
      file_mime_types = {
        'mp3': 'audio/mpeg',
        'wave': 'audio/wav',
        'ogg': 'audio/ogg'
      }
  
  function Sound( file_name ) {
    var path,
        audio_element;
        
    path = file_name + Sound.default_file_extension;
    audio = new Audio();
    //starts with preload none and src setted
    //#load sets the preload to metadata
    //#play plays
    //#stop pauses
    //events listeners: onloadstart, onloadend, onplay, onstop
    return {
      name: file_name,
      path: path,
      audio_element: audio,
      play: function() {
        
      },
      
      loadEnd: function( fn ) {
        audio.addEventListener('loadedmetadata', function() {
          fn.call(this);
        });
      },
      
      preload: function() {
        audio.preload = "metadata";
        audio.src = path;
      }
    };
  }

  Sound.hasSupport = !!audio_element.canPlayType;
  
  Sound.hasSupportFor = function( file_type ) {
    return !!this.hasSupportFor && "" !== audio_element.canPlayType(file_mime_types[file_type]);
  }
  
  Sound.default_file_extension = Sound.hasSupportFor('mp3') ? '.mp3' : '.ogg';
  
  window.Sound = Sound;
})();
