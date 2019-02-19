import React from "react"
import Tone from "tone";

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    playNoise = () => {
        //create a synth and connect it to the master output (your speakers)
        var synth = new Tone.Synth().toMaster()

        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease('C'+ Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)  +'n')
    }

    render() {
        return (

                <div className="main-page-content">
                    <h1>Bragi</h1>
                    <button className="btn" onClick={this.playNoise}>
                        Click
                    </button>
                </div>

        );
    }
}

export default Welcome;
