(function() {
  var audio_element = document.createElement('audio'),
      file_mime_types = {
        'mp3': 'audio/mpeg',
        'wave': 'audio/wav',
        'ogg': 'audio/ogg'
      }
  
  function Sound() {
    
  }

  Sound.hasSupport = !!audio_element.canPlayType;
  
  Sound.hasSupportFor = function( file_type ) {
    return !!this.hasSupportFor && "" !== audio_element.canPlayType(file_mime_types[file_type]);
  }
  
  window.Sound = Sound;
})();