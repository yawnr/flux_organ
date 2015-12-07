(function () {
  var octaveX = 1;
  var _keysPlayed = [];
  var CHANGE_EVENT = "change";

  var KeyStore = window.KeyStore = $.extend({}, EventEmitter.prototype);
  KeyStore.setMaxListeners(500);

  KeyStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  KeyStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  KeyStore.addKey = function (noteName) {
    if (_keysPlayed.indexOf(noteName) === -1) {
      _keysPlayed.push(noteName);
    }
  };

  KeyStore.removeKey = function (noteName) {
    _keysPlayed.splice(_keysPlayed.indexOf(noteName), 1);
  };

  KeyStore.all = function () {
    return _keysPlayed.slice();
  };

  KeyStore.update = function (notes) {
    _keysPlayed = notes;
  };

  KeyStore.octaveX = function (multiplier) {
    if (!(multiplier)) {
      multiplier = 1;
    }
    octaveX = octaveX * multiplier;

    return octaveX;
  };

  KeyStore.dispatcherToken = AppDispatcher.register(function (payload) {
    switch (payload.eventType) {
      case 'KEY_PRESSED':
        KeyStore.addKey(payload.noteName);
        KeyStore.changed();
        break;
      case 'KEY_UNPRESSED':
        KeyStore.removeKey(payload.noteName);
        KeyStore.changed();
        break;
      case "BATCH_PRESS":
        KeyStore.update(payload.notes);
        KeyStore.changed();
        break;
      case "OCTAVE":
        KeyStore.octaveX(payload.octaveX);
        KeyStore.changed();
        break;
      case "WAVEFORM":
        KeyStore.changed();
        break;
    }
  });

})();
