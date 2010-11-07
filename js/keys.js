var keys = {};

var keyMapping = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  32: 'space',
  80: 'p',
  83: 's',
  87: 'w'
};

var codeMapping = invertMapping(keyMapping);

function invertMapping( mapping ) {
  var newMapping = {};
  for(var k in mapping) {
    newMapping[mapping[k]] = k;
  }
  return newMapping;
}

function isKeyMapped( code ) {
  return keyMapping[code] !== undefined
}

function keyPressed ( code ) {
  keys[code] = true;
}

function keyReleased( code ) {
 keys[code] = false; 
}

function findKeyCode( name ) {
  return codeMapping[name];
}

function isKeyPressed( name ) {
  return keys[ findKeyCode(name) ];
}

function bindKeys() {
  $(document).bind('keydown.ingame', function(e) {
    var code = e.keyCode;

    if ( isKeyMapped(code) ) {
      keyPressed(code);
      return false;
    }
  });
  
  $(document).bind('keyup.ingame', function(e) {
    var code = e.keyCode;

    if ( isKeyMapped(code) ) {
      keyReleased(code);
      return false;
    }
  });
}

$(function() {
  bindKeys();
});