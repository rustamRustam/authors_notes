import * as React from 'react';
import './NoteList.scss';
import NoteView from "./NoteView";
import Numeraciya from "./Numeraciya/Numeraciya";
import Select from '../Select/Select';

interface NoteListProps  {
    notes: Note[]
}

interface NoteListState {
    currentPage: number,
    limit: number
}

class NoteList extends React.Component<NoteListProps> {

    state: NoteListState ={
        currentPage: 1,
        limit: 10
    }

    variantLimit = [
        {"id": 1,"limit": 4},
        {"id": 2,"limit": 6},
        {"id": 3,"limit": 8},
        {"id": 4,"limit": 10},
        {"id": 5,"limit": 12},
        {"id": 6,"limit": 14},
        {"id": 7,"limit": 16},
        {"id": 8,"limit": 18},
        {"id": 9,"limit": 20},
    ];

    constructor(props:NoteListProps) {
        super(props);

        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.changelimit = this.changelimit.bind(this);
    }

    calcDataNumeraciya(_totalCount:number, _limit:number) {
        let _maxPage = Math.floor(_totalCount / _limit);

        if (_totalCount % _limit > 0) {
            ++_maxPage;
        }

        let _currentPage = this.state.currentPage;
        if (_currentPage>_maxPage) {
            _currentPage = _maxPage;
        }

        return {
            currentPage: _currentPage,
            minPage: 1,
            maxPage: _maxPage
        };
    }

    changelimit(_limitId:number,_limit:number) {
        this.setState({
            limit: _limit
        })
    }

    changeCurrentPage(_currentPage:number) {
        this.setState({
            currentPage: _currentPage
        })
    }

    render() {
        const {notes} = this.props;
        if (notes.length <= 0 ) {
            return (
                <div className='noteListContainer'>
                    <div className='noteEmptyContainer'>
                        У вас нет ни одной записи.
                    </div>
                </div>
            );
        }

        const dataNumeraciya = this.calcDataNumeraciya(notes.length, this.state.limit);

        let viewNotes: {_ind:number,_note:Note }[] = [];

        let i:number;
        let _from = (dataNumeraciya.currentPage-1) * this.state.limit;
        let _to = _from + this.state.limit;
        if (_to > notes.length) {
            _to = notes.length ;
        }

        for(i = _from; i<_to; ++i) {
           viewNotes.push({
               _ind: i,
               _note: notes[i]
           });
        }

        let currentLimitId = 1;
        this.variantLimit.some((item)=>{
            if(item.limit === this.state.limit) {
                currentLimitId = item.id;
                return true;
            }
            return false;
        });

        return (
            <div className='noteListContainer'>
                <Select key="selectLimit"
                    current={currentLimitId}
                    values={this.variantLimit}
                    nameValue="limit"
                    changeCurrentValue={this.changelimit}
                />
                <div className="pagination">
                    <Numeraciya {...dataNumeraciya} changeCurrentPage={this.changeCurrentPage} />
                </div>

                <div>
                {
                    viewNotes.map((_item)=>{
                        return <NoteView key={"note_"+_item._ind} note={_item._note} numer={_item._ind+1} />;
                    })
                }
                </div>

                <div className="pagination">
                    <Numeraciya {...dataNumeraciya} changeCurrentPage={this.changeCurrentPage} />
                </div>
            </div>
        );
    }
}

// export default NoteList;

import { connect } from 'react-redux';

const mapStateToProps = (store:any) => {
    return {
        notes: store.data.notes,
    };
};

export default connect(
    mapStateToProps
)(NoteList);
