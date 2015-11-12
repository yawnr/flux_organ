var Key = React.createClass({

  getInitialState: function () {
    return {pressed: false, note: new Note(this.props.noteName)};
  },

  componentDidMount: function () {
    KeyStore.addChangeHandler(this.toggleNote);
    KeyStore.addChangeHandler(this.changeOctave);

  },

  changeOctave: function () {
    if (this.props.octave !== KeyStore.octaveX()) {
      this.props.octave = KeyStore.octaveX();
      this.setState({note: new Note(this.props.noteName * this.props.octave)});
    }
  },

  toggleNote: function () {
    if (KeyStore.all().indexOf(this.props.realNoteName) !== -1) {
      this.state.note.start(this.props.gain);
      this.setState({pressed: true});
    } else {
      this.state.note.stop();
      this.setState({pressed: false});
    }
  },



  render: function () {
    var showNote = "";
    if (this.props.show) {
      showNote = "♪";
    }
    return (
      <div className={this.state.pressed}>
        {showNote}
    </div>
    );
  }

});
