var Jukebox = React.createClass({

  getInitialState: function () {
    return { tracks: TrackStore.all() };
  },

  componentDidMount: function () {
    TrackStore.addChangeHandler(this.onChange);
    TrackApiUtil.fetchTracks();
  },

  onChange: function () {
    this.setState({ tracks: TrackStore.all () });
  },

  render: function () {

    return (
      <div className="jukebox" style={{backgroundImage: 'url(' + window.subPar.images.ipod + ')'}}>
        <div className="jukebox-tracks">
          {this.state.tracks.map(function (track) {
            return <TrackPlayer key={track.id} track={track} />;
          })}
        </div>
      </div>
    );
  }

});
