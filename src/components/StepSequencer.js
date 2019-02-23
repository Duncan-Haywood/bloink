import React from "react";
import Tone from 'tone';

class StepSequencer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sequencerSlots: [0,0,0,0,0,0,0,0,0,0,0,0],
            noteLetters: ["C","C#","D","D#","E","E#","F","F#","A","A#","B"],
            activeStep: 0,
            transportState: "stopped"
        };
    }

    handleClick = () => {
        this.props.onButtonClick(this.props.note);
    }

    playSequence = () => {

        var synth = new Tone.FMSynth();
        synth.oscillator.type = 'triangle';
        synth.toMaster();

        const $rows = document.querySelectorAll('.row');
        let index = 0;

        Tone.Transport.scheduleRepeat(repeat.bind(this), '8n');
        Tone.Transport.toggle();
        this.setState({transportState: Tone.Transport.state});


        function repeat (time) {

            let step = index % 12;

            for(let i = 0; i < $rows.length; i++) {
                const input = document.querySelectorAll(`.col:nth-child(${step + 1})`);
                this.setState({activeStep: step + 1});

                var noteLetters = ["C","C#","D","D#","E","E#","F","F#","A","A#","B"];
                if(input[0].getAttribute("on") === "1") {
                    var randomNoteLetter = noteLetters[Math.floor(Math.random() * 10)]; 
                    synth.triggerAttackRelease(randomNoteLetter+'4', '8n', time);
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
                    <div  className={this.state.activeStep === index ? ' col active-step' : 'col'} on={value} key={index} onClick={() => this.toggleSequencerSlot(index)}>{index}</div>
                    )}
                </div>
                <div className="step-sequencer-toggle-wrapper">
                    <button className="step-sequencer-toggle" onClick={this.playSequence}>{this.state.transportState === 'stopped' ? 'Go' : 'No'}</button>
                </div>
            </div>
        );
    }
}

export default StepSequencer;
