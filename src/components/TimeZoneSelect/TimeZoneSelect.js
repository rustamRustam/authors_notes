import React, {Component} from "react";
import Select from '../Select/Select';


class TimeZoneSelect extends Component {
    constructor(props) {
        super(props);

        this.changeTimeZone = this.changeTimeZone.bind(this);
    }

    changeTimeZone(_tz_id,_tz_name) {
        this.props.selectTimeZoneAction({
            id:_tz_id,
            nameTZ:_tz_name
        });
    }

    value() {
        return this._select.state;
    }
    render() {
        if (!this.props.time_zone || this.props.time_zone.length === 0) {
            return;
        }
        let timeZoneData = this.props.time_zone.map((_tz, _ind)=>{
            return {
                "id": _ind,
                "nameTZ": _tz
            }
        });

        let current = 0;
        let currentText = '';

        if (this.props.select_time_zone.id > 0) {
            current = this.props.select_time_zone.id;
            currentText = this.props.select_time_zone.nameTZ;
        }

        return (
            <div className="timeZoneSelectContainer">
                <Select key="selectTimeZone"
                    current={current} currentText={currentText}
                    values={timeZoneData} nameValue="nameTZ"
                    changeCurrentValue={this.changeTimeZone}
                    ref={(ref) => this._select = ref}
                />
            </div>
        );
    }
}

// export default TimeZoneSelect;

import { connect } from 'react-redux';
import { selectTimeZone } from '../../store/actions/timeZoneActions';

const mapStateToProps = (store) => {
  return {
    time_zone: store.current.time_zone,
    select_time_zone: store.data.select_time_zone
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTimeZoneAction: (_dataTZ) => dispatch(selectTimeZone(_dataTZ)),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { forwardRef: true }
)(TimeZoneSelect);
