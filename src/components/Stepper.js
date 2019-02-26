import React from "react";
import Tone from 'tone';

class Stepper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sequencerSlots: [0,0,0,0,0,0,0,0,0,0,0,0],
            noteLetters: ["C","C#","D","D#","E","E#","F","F#","A","A#","B"],
            activeStep: 1,
            transportState: "stopped"
        };
    }

    playSequence = () => { 

        let synth = new Tone.Synth({
            oscillator: {
              type: 'fmsquare',
              modulationType: 'sawtooth',
              modulationIndex: 3,
              harmonicity: 3.4
            },
            envelope: {
              attack: 0.001,
              decay: 0.1,
              sustain: 0.1,
              release: 0.1
            }
          }).toMaster();

        const $rows = document.querySelectorAll('.row');

        Tone.Transport.scheduleRepeat(repeat.bind(this), '8n');
        Tone.Transport.toggle();
        this.setState({transportState: Tone.Transport.state});

        index = 0;
        console.log("Setting index to 0");


        function repeat (time) {

            console.log("This", this);
            console.log("Index", index, time);

            let step = index % 12;
                console.log("Step", step);
                const input = document.querySelectorAll(`.col:nth-child(${step + 1})`);
                this.setState({activeStep: step + 1});

                var noteLetters = ["C","C#","D","D#","E","E#","F","F#","A","A#","B"];
                if(input[0].getAttribute("on") === "1") {
                    var randomNoteLetter = noteLetters[Math.floor(Math.random() * 10)]; 
                    synth.triggerAttackRelease(randomNoteLetter+'4', '8n', time);
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
                    <div  className={this.state.activeStep === index+1 ? ' col active-step' : 'col'} on={value} key={index+1} onClick={() => this.toggleSequencerSlot(index)}>{index+1}</div>
                    )}
                </div>
                <div className="step-sequencer-toggle-wrapper">
                    <button className={this.state.transportState === 'stopped' ? "step-sequencer-toggle step-sequencer-stopped" : "step-sequencer-toggle step-sequencer-playing"  } onClick={this.playSequence}>{this.state.transportState === 'stopped' ? 'Go' : 'No'}</button>
                </div>
            </div>
        );
    }
}

export default Stepper;
