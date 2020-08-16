import * as axios from "axios";
import {weatherReducer} from "./weather-reducer";

let store = {
    _state: {
        Sunny: "Sunny",
        Temperature: "33",
        Max_Min_Temp: "35-27",
        Humidity: "49",
        Pressure: "1,007",
        Wind: "23",
        SunRise_Time: "6:03",
        SunSet_Time: "7:05",
        Day_Time: "13h 1m",
        Yesterday_Temp: "Mon, 21",
        Today_Temp: "Tue, 22",
        Tomorrow_Temp: "Wed, 22",
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн observer
    },
    dispatch(action) {
        this._state = weatherReducer(this._state, action);
        this._callSubscriber(this._state)
    },
    getState() {
        return this._state;
    }
}

const cityName = "London";
const apiKey = "330216f9e3042b8a57a7865c3de67865";

export const weatherAPI = {
    getWeather() {
        return axios.create.get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then(response => response.data);
    }
}

export const getWeather = () => async (dispatch) => {
    let response = await weatherAPI.getWeather();

    console.log(response.data);
}

export default store;
window.store = store;