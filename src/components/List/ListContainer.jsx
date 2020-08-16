import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import List from "./List";
import {changeCityAC, changeTempAC, setWeatherDataAC} from "../redux/weather-reducer";

let mapStateToProps = (state) => {
    return {
        weatherPage: state.weatherPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        NewCity: (city, country, id, check) => {
            dispatch(changeCityAC(city, country, id, check));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(List);