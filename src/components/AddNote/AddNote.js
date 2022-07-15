import React, {Component} from "react";
import './AddNote.scss';
import TimeZoneSelect from './../TimeZoneSelect/TimeZoneSelect';
import AutorSignature from './../AutorSignature/AutorSignature';
import AutorNote from './../AutorNote/AutorNote';
import ElemBorder from './../ElemBorder/ElemBorder';

class AddNote extends Component {
    constructor(props) {
        super(props);

        this.onClickButtonAddNote = this.onClickButtonAddNote.bind(this);

        this.needDisabled = false;
    }

    onClickButtonAddNote (e) {
        this.needDisabled = true;
        this.props.insertNoteAction({
            id: Date.now(),
            text: this._autorNote.state.value,
            sign: this._autorSignature.state.value,
            tz: this._timeZoneSelect.value().currentText
        });
    };

    render() {
        let info = null;
        switch (this.props.last_action) {
            case 'INSERT_NOTE':
                info = "Получение данных о времени";
                break;
            case 'INSERT_NOTE_DATE':
                this.needDisabled = false;
                info = "Запись внесена";
                if (this._autorNote) {
                    this._autorNote.clearText();
                }
                break;
            default:
                info = null;
        }

        let autorNote = <AutorNote ref={(ref) => this._autorNote = ref} />;
        let autoSignature =<AutorSignature value={''} ref={(ref) => this._autorSignature = ref} />;
        let timeZoneSelect = <TimeZoneSelect ref={(ref) => this._timeZoneSelect = ref} />;
        const buttonDisabled = this.needDisabled || (this.props.time_zone.length <= 0);
        return (
            <div className="addNoteContainer">
                <ElemBorder elem={autorNote} label="Запись" />
                <div className="lineBlock">
                    <ElemBorder elem={autoSignature} label="Подпись" />
                    <ElemBorder elem={timeZoneSelect} label="Точное время по" />
                </div>
                <div className="buttonContainer">
                    <button
                        className={"buttonAddNote " + (buttonDisabled?"disabled":"active") }
                        onClick={buttonDisabled?null:this.onClickButtonAddNote}
                    >Создать</button>
                </div>
                {info}
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { insertNote } from '../../store/actions/noteActions';

const mapStateToProps = (store) => {
    return {
        time_zone: store.current.time_zone,
        last_action: store.current.last_action
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        insertNoteAction: (_note) => dispatch(insertNote(_note)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNote);
