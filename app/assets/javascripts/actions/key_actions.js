window.KeyActions = {

  octaveChange: function (octaveX) {
    AppDispatcher.dispatch({
      eventType: 'OCTAVE',
      octaveX: octaveX
    });
  },

  waveformChange: function () {
    AppDispatcher.dispatch({
      eventType: 'WAVEFORM'
    });
  },

  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      eventType: 'KEY_PRESSED',
      noteName: noteName
    });
  },

  keyUnPressed: function (noteName) {
    AppDispatcher.dispatch({
      eventType: 'KEY_UNPRESSED',
      noteName: noteName
    });
  },

  batchPress: function (notes) {
    AppDispatcher.dispatch({
      eventType: 'BATCH_PRESS',
      notes: notes
    });
    // KeyActions.keyUnPressed(KeyStore.all());
    // KeyActions.keyPressed(notes);
  }

};
