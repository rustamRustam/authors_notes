import * as React from 'react';
import './NoteView.scss';

interface NoteViewProps {
    note: Note;
    numer: number;
}

class NoteView extends React.Component<NoteViewProps> {
    render() {
        let text_lines = this.props.note.text.split('\n');
        if (text_lines.length > 2) {
            text_lines.length = 1;
            text_lines.push('...');
        }
        return (
            <div className='noteViewContainer'>
                <div className='signNoteView'>{this.props.note.sign}</div>
                <div className='numerNoteView'>Запись № {this.props.numer}</div>
                <div className='dateNoteView'>{this.props.note.tz}</div>
                <div className='dateNoteView'>{this.props.note.date.datetime}</div>
                <div className='textNoteView'>
                    {text_lines.map(
                        (item, _ind) =>
                            <div className="text_dots" key={"line_"+_ind}>{item}</div>
                    )}
                </div>

            </div>
        );
    }
}

export default NoteView;
