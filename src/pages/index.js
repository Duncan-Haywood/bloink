import React from "react"
import Tone from "tone";

import NoteKey from '../components/NoteKey';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    playNoise = (pitch) => {
        //create a synth and connect it to the master output (your speakers)
        var synth = new Tone.Synth().toMaster()
        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease(pitch, '8n');
    }

    render() {
        return (

                <div className="main-page-content">
                    <h1>Bloink</h1>
                    <div className="note-wrapper">
                        <NoteKey note="C3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="D3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey blacknote='true' note="D#3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="E3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="F3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey blacknote='true' note="F#3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="G3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey blacknote='true' note="G#3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="A3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey blacknote='true' note="A#3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="B3" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="C4" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey blacknote='true' note="C#4" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="D4" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="E4" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="F4" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="G4" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="A4" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="B4" onButtonClick={this.playNoise}></NoteKey>
                        <NoteKey note="C5" onButtonClick={this.playNoise}></NoteKey>
                    </div>
                </div>

        );
    }
}

export default Welcome;
