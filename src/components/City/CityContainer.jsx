import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import City from "./City";
import {setWeatherDataAC} from "../redux/weather-reducer";

let mapStateToProps = (state) => {
    return {
        weatherPage: state.weatherPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setWeatherData: (dataWeather) => {
            dispatch(setWeatherDataAC(dataWeather));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(City);