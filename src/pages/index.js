import React from "react"
import Tone from 'tone';

class Welcome extends React.Component {
    render() {

    //create a synth and connect it to the master output (your speakers)
    var synth = new Tone.Synth().toMaster();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('C4', '8n');

    console.log("Innit");

      return (
        <div className="welcome">
          <h1>Bragi</h1>
        </div>
      );
    }
  }

export default Welcome;
