import React from "react"
import Tone from "tone";

import StepSequencer from '../components/StepSequencer';
import Stepper from '../components/Stepper';

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
        synth.triggerAttackRelease(pitch, '16n');
    }

    render() {
        return (

                <div className="main-page-content">
                    <h1>Bloink</h1>
                    <StepSequencer></StepSequencer>
                    <Stepper></Stepper>
                </div>

        );
    }
}

export default Welcome;
