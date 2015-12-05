var Recorder = React.createClass({
  getInitialState: function () {
    return { isRecording: false, track: new Track({name: "", roll: []}) };
  },

  pushedRecord: function () {
    this.state.track.startRecording();
    KeyStore.addChangeHandler(this.recordNotes);
    this.setState({isRecording: true});
  },

  pushedStop: function () {
    this.state.track.stopRecording();
    // TrackStore.addTrack(this.state.track);
    KeyStore.removeChangeHandler(this.recordNotes);
    this.setState({isRecording: false});
  },

  pushedPlay: function () {
    this.state.track.play();
  },

  recordNotes: function () {
    var keysPressed = KeyStore.all();
    this.state.track.addNotes(keysPressed);
  },

  recordingMessage: function () {
    if (this.state.isRecording) {
      return "Recording";
    } else {
      return "Press record!";
    }
  },

  saveTrack: function (e) {
    this.state.track.name = prompt("Please enter a title for this track");
    this.state.track.save();
  },

  trackSavingElements: function () {
    if (!this.state.isRecording && this.state.track.roll.length > 0) {
      return (
        <button onClick={this.saveTrack} className="control">
          Save Track
        </button>
      );
    }
  },

  render: function () {
    return (
      <div>
        <div>{this.recordingMessage()}</div>
        <button className="record" onClick={this.pushedRecord}>⦿</button>
        <button className="stop" onClick={this.pushedStop}>￭</button>
        <button className="play" onClick={this.pushedPlay}>►</button>
        {this.trackSavingElements()}
      </div>
    );
  }

});
