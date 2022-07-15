import React, {Component} from "react";
import "./ElemBorder.css";

class ElemBorder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: this.props.label || null,
            elem: this.props.elem
        }
    }

    render() {
        let _label = null;
        if (this.state.label) {
            _label = <div className="elemBorderContainer__label" >
                {this.state.label}
            </div>
        }
        return (
            <div className="elemBorderContainer">
                {_label}
                {this.state.elem}
            </div>
        );
    }
}

export default ElemBorder;
