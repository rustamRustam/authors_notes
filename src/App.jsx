import React from "react";
import { connect } from 'react-redux';
import './App.css';

import Main from './components/Main/Main';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.processTimeZones = this.processTimeZones.bind(this);

    }

    loadDataXMLHttp(xhr, url, cd) {
        xhr.open("GET", url, true);
        xhr.addEventListener("readystatechange", cd, true);
        xhr.send();
    }

    loadDataTimeZones() {
        if (!(this.xhrTimeZones)) {
            this.xhrTimeZones = new XMLHttpRequest();
        }

        this.loadDataXMLHttp(
            this.xhrTimeZones,
            "http://worldtimeapi.org/api/timezone",
            this.processTimeZones
        );
    }

    processTimeZones() {
        if (this.xhrTimeZones.readyState === 4 && this.xhrTimeZones.status === 200) {
            let _dataTimeZones = JSON.parse(this.xhrTimeZones.responseText);
            this.props.loadedTimeZoneAction(_dataTimeZones);
        }
    }

    componentDidMount() {
        this.loadDataTimeZones();
    }

    render() {
        const {setYearAction} = this.props;
        return (
            <div className="App">
                <h1> Записки автора </h1>
                <Main />
            </div>
        );
    }
}

// export default App;

import { loadedTimeZone } from './store/actions/timeZoneActions';

const mapStateToProps = (store, param) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadedTimeZoneAction: (_dataTZ) => dispatch(loadedTimeZone(_dataTZ)),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
