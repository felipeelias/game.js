module("Browser audio element support");

test("audio element support", 1, function() {
  ok(Sound.hasSupport, "supports audio element");
});

if ($.browser.safari) {
  module("Browser sound support on safari");

  test("file type support", 3, function() {
    ok(Sound.hasSupportFor('mp3'), "supports mp3 files");
    ok(Sound.hasSupportFor('wave'), "supports wave files");
    ok(!Sound.hasSupportFor('ogg'), "doesn't support ogg files");
  });
  
  test("default file extension", 1, function() {
    equals(Sound.default_file_extension, ".mp3", "mp3 file extension");
  });

  test("file path", 1, function() {
    var sound = new Sound('fixtures/sound1');
    
    equals(sound.path, "fixtures/sound1.mp3", "sound path");
  });
}

if ($.browser.mozilla) {
  module("Browser sound support on firefox");

  test("file type support", 3, function() {
    ok(!Sound.hasSupportFor('mp3'), "doesn't supports mp3 files");
    ok(Sound.hasSupportFor('wave'), "supports wave files");
    ok(Sound.hasSupportFor('ogg'), "supports ogg files");
  });

  test("default file extension", 1, function() {
    equals(Sound.default_file_extension, ".ogg", "ogg file extension");
  });
}

module("Creating sounds");

test("should respond to sound functions", 1, function() {
  var sound = new Sound('fixtures/sound1');
  
  ok( $.isFunction(sound.play), "play function" );
});

test("should have the defaults attributes", 2, function() {
  var sound = new Sound('fixtures/sound1');
  
  equals( sound.name, "fixtures/sound1", "sound name" );
  equals( sound.audio_element.tagName, "AUDIO", "audio tagname" );
});

asyncTest("should not load the file when created", 1, function() {
  var sound = new Sound('fixtures/sound1');
  
  sound.loadEnd(function() {
    ok(true);
  });

  ok(true);
  start();
});

asyncTest("should load the file after preload function", 1, function() {
  var sound = new Sound('fixtures/sound1');
  
  sound.loadEnd(function() {
    ok(true);
    start();
  });
  
  sound.preload();
});
