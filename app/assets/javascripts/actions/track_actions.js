window.TrackActions = {

  resetTracks: function (tracks) {
    AppDispatcher.dispatch({
      eventType: "RESET_TRACKS",
      tracks: tracks
    });
  },

  createTrack: function (track) {
    AppDispatcher.dispatch({
      eventType: "CREATE_TRACK",
      track: track
    });
    TrackApiUtil.createTrack(track);
  },

  addTrack: function (track) {
    AppDispatcher.dispatch({
      eventType: "ADD_TRACK",
      track: track
    });
  }

};
