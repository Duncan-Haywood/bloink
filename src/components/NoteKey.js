import React from "react"

class NoteKey extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleClick = () => {
        this.props.onButtonClick(this.props.note);
    }

    render() {
        return (
            <button className={this.props.blacknote ? 'btn black-note' : 'btn'} onClick={this.handleClick}>
                { this.props.note }
            </button>
        );
    }
}

export default NoteKey;
