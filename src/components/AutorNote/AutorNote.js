import React, {Component} from "react";
import "./AutorNote.css";

class AutorNote extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || ''
        }

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    clearText() {
        this.state.value = '';
        this._textarea.value = '';
    }

    onChangeInput(e) {
        const result = e.target.value;
        this.setState({value: result});
    }

    render() {
        return (
            <div className="autorNoteContainer " >
                <textarea key="AutorNoteTextArea"
                    type="text"
                    className="autorNoteInput"
                    value={this.state.value}
                    onChange={ (e) =>{ this.onChangeInput( e); } }
                    ref={(ref) => this._textarea = ref}
                />
            </div>
        );
    }
}

export default AutorNote;
