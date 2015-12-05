(function (root) {

  var _tracks = [];
  var CHANGE_EVENT = "change";


  var TrackStore = root.TrackStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _tracks.slice(0);
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    resetTracks: function (tracks) {
      _tracks = tracks;
      this.emit(CHANGE_EVENT);
    },

    addTrack: function (track) {
      _tracks.unshift(track);
      this.emit(CHANGE_EVENT);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.eventType) {
        case "RESET_TRACKS":
          root.TrackStore.resetTracks(payload.tracks);
          break;
        case "ADD_TRACK":
          root.TrackStore.addTrack(payload.track);
          break;
      }
    })

  });

})(this);
