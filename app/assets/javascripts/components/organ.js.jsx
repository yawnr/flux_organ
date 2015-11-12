var Organ = React.createClass({
getInitialState: function () {
  return {octave: 1};
},

  render: function () {
    octave = this.state.octave;
    return (
      <div className="organ">
        <Recorder />
        <ul className="keys">
          {Object.keys(TONES).map(function (key) {
            return <li className="key" id={key}>
                    <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 6 } octave={octave} />
                    <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 5 } octave={octave} />
                    <Key gain={0.1} realNoteName={key} noteName={ TONES[key] * 4 + 3 } octave={octave} />
                    <Key gain={0.2} realNoteName={key} noteName={ TONES[key] * 2 } octave={octave} />
                    <Key gain={0.3} show={true} realNoteName={key} noteName={TONES[key]} octave={octave} />
                  </li>;
          })}
          </ul>
        </div>
    );
  }

});
