var TrackPlayer = React.createClass({

  playClick: function () {
    this.props.track.play();
  },

  render: function () {
    return (
      <div className="track group">
        <div className="track-name">{this.props.track.name}</div>
        <div className="play-track-button" onClick={this.playClick}>Play</div>
        <br/>
      </div>
    );

  }


});
