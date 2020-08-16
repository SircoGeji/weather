import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {compose} from "redux";
import {Redirect, Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import CityContainer from "./components/City/CityContainer";
import ListContainer from "./components/List/ListContainer";

class App extends React.Component {

    render() {
        return <div className="app-wrapper">
            <Header/>
            <Redirect to={"/list"}/>
            <Route path="/city"
                   render={() => <CityContainer store={this.props.store}/>}/>
            <Route path="/list"
                   render={() => <ListContainer />}/>
        </div>
    }
}

const mapStateToProps = (state) => ({})

export default compose(
    withRouter,
    connect(mapStateToProps, {}))(App);
