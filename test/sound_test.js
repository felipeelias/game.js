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
}

if ($.browser.mozilla) {
  module("Browser sound support on firefox");

  test("file type support", 3, function() {
    ok(!Sound.hasSupportFor('mp3'), "doesn't supports mp3 files");
    ok(Sound.hasSupportFor('wave'), "supports wave files");
    ok(Sound.hasSupportFor('ogg'), "supports ogg files");
  });
}
