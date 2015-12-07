var Organ = React.createClass({

  getInitialState: function () {
    return {octave: 1};
  },

  changeWaveform: function (e) {
    $('.waveforms li').removeClass('active');
    window.subPar.waveform = e.target.textContent.toLowerCase();
    KeyActions.octaveChange(2);
    KeyActions.octaveChange(0.5);
    $(e.currentTarget).addClass('active');
  },

  render: function () {
    octave = this.state.octave;
    waveform = window.subPar.waveform;
    return (
      <div className="organ">
        <div>Use ▲ and ▼ arrows to change octaves.</div>
        <div className="moog" style={{backgroundImage: 'url(' + window.subPar.images.moog + ')'}}>
          <ul className="keys group">
            <div className="allkeys group">
            {Object.keys(TONES).map(function (key) {
              if (key.slice(1) === "sharp" || key.slice(2) === "sharp") {

                return <li className="key sharp" id={key}>
                        <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 6 } octave={octave} />
                        <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 5 } octave={octave} />
                        <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 4 + 3 } octave={octave} />
                        <Key gain={0.2} realNoteName={key} noteName={ TONES[key] * 2 } octave={octave} />
                        <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 2 + 2} octave={octave} />
                        <Key gain={0.3} show={true} realNoteName={key} noteName={TONES[key]} octave={octave} />
                      </li>;

              } else {

                return <li className="key" id={key}>
                        <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 6 } octave={octave} />
                        <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 5 } octave={octave} />
                        <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 4 + 3 } octave={octave} />
                        <Key gain={0.2} realNoteName={key} noteName={ TONES[key] * 2 } octave={octave} />
                        <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 2 + 2} octave={octave} />
                        <Key gain={0.3} show={true} realNoteName={key} noteName={TONES[key]} octave={octave} />
                      </li>;

                  }
            })}
              </div>
            </ul>
          <div className="recording-stuff">
            <img src={window.subPar.images.cord} className="cord"/>
            <img src={window.subPar.images.cordvert} className="cordvert"/>
            <div className="tools">
              <div>Change Waveform:</div>
              <ul className="waveforms">
                <li onClick={this.changeWaveform}>Sine</li>
                <li onClick={this.changeWaveform} className="active">Sawtooth</li>
                <li onClick={this.changeWaveform}>Square</li>
                <li onClick={this.changeWaveform}>Triangle</li>
              </ul>
            </div>
            <Recorder />
            <Jukebox />
          </div>
          </div>


        </div>
    );
  }

});
