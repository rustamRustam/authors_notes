import React, {Component} from "react";
import "./AutorSignature.css";

class AutorSignature extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || ''
        }

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(e) {
        let result = e.target.value;
        if(result.length > 100) {
            result = result.slice(0,100);
        }
        this.setState({value: result});
    }

    render() {
        return (
            <div className="autorSignatureContainer " >
                <input key="AutorSignatureInput"
                    type="text"
                    className="autorSignatureInput"
                    value={this.state.value}
                    onChange={ (e) =>{ this.onChangeInput( e); } }
                />
            </div>
        );
    }
}

export default AutorSignature;
