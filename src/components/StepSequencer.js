import React from "react";
import Tone from 'tone';

class StepSequencer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sequencerSlots: [0,0,0,0,0,0,0,0,0,0,0,0]
        };
    }

    handleClick = () => {
        this.props.onButtonClick(this.props.note);
    }

    playSequence() {
        
        const synth = new Tone.synth();
        synth.oscillator.type = 'sawtooth';
        synth.toMaster();

        const rows = document.body.querySelectorAll('.row');
        let index = 0;

        Tone.Transport.scheduleRepeat(repeat, '8n');
        Tone.Transport.start();

        function repeat(time) {

            let step = index % 12;

            for(let i = 0; i < rows.length; i++) {
                const input = rows.querySelectorAll(`.col:nth-child(${step + 1})`);
                if(input.getAttribute("on") === "1") {
                    synth.triggerAttackRelease('C4', '8n', time);
                }
            }

            index++;
        }
    }

    toggleSequencerSlot(index) {
        var sequencerSlots = this.state.sequencerSlots;
        sequencerSlots[index] === 0 ?     sequencerSlots[index] = 1 : sequencerSlots[index] = 0;
        this.setState({ sequencerSlots: sequencerSlots });
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="step-sequencer-wrapper">
                <div className="row">
                    {this.state.sequencerSlots.map((value, index) => 
                    <div className="col" on={value} key={index} onClick={() => this.toggleSequencerSlot(index)}></div>
                    )}
                </div>
                <button onClick={this.playSequence}>Play</button>
            </div>
        );
    }
}

export default StepSequencer;
