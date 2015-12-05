(function (root) {

  var Track = root.Track = function (attributes) {
    this.name = attributes.name;
    this.roll = attributes.roll;
  };

  Track.prototype.startRecording = function () {
    this.startTime = Date.now();
    this.roll = [];

  };

  Track.prototype.play = function () {
    
    if (this.intervalId) { return; }

    var playbackStartTime = Date.now();

    var currentNote = 0;

    this.intervalId = setInterval(function () {

      if (currentNote < this.roll.length) {
        if (Date.now() - playbackStartTime > this.roll[currentNote].timeSlice) {
          if (this.roll[currentNote].notes !== undefined) {
            KeyActions.batchPress(this.roll[currentNote].notes);
          } else {
            KeyActions.batchPress([]);
          }
          currentNote++;
        }
      }
      else {
        delete this.intervalId;
        clearInterval(this.intervalId);
      }
    }.bind(this), 1000/60);

  };

  Track.prototype.addNotes = function (notes) {
    this.roll.push({
      timeSlice: (Date.now() - this.startTime),
      notes: notes
    });
  };

  Track.prototype.stopRecording = function () {
    this.addNotes([]);
  };

  Track.prototype.get = function (attr) {
    return this.attr;
  };

  Track.prototype.set = function (attr, val) {
    this.attr = val;
  };

  Track.prototype.save = function () {
    if (this.roll.length === 0) {
      throw "Track can't be blank!";
    } else if (this.name === "") {
      throw "Track title can't be blank!";
    } else {
      TrackActions.createTrack({name: this.name, roll: this.roll});
    }
  };


})(this);
