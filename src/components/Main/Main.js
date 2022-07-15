import React, {Component} from "react";
import "./Main.scss";

import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import AddNote from './../AddNote/AddNote';
import NoteList from './../Note/NoteList';
import Info from './Info';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
            <div className="mainContainer">
                <ul className="listHeader">
                    {/* <li key="ul_li_home">
                         <NavLink to="/" >
                            <span className="normal">Задание</span>
                            <span className="bold">Задание</span>
                         </NavLink>
                    </li>*/}
                    <li key="ul_li_add_note">
                        <NavLink to="/add_note" >
                            <span className="normal">Создать запись</span>
                            <span className="bold">Создать запись</span>
                        </NavLink>
                    </li>
                    <li key="ul_li_list_note">
                        <NavLink to="/list_note" >
                            <span className="normal">Записи</span>
                            <span className="bold">Записи</span>
                        </NavLink>
                    </li>
                </ul>

                <div className="content">
                <Routes>
                    <Route path="/" element={<Info />} />
                    <Route path="/add_note" element={<AddNote />} />
                    <Route path="/list_note" element={<NoteList />} />
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}


const mapStateToProps = (store) => {
  return {
    page: store.page,
  };
};

import { connect } from 'react-redux';
export default connect(mapStateToProps)(Main);
