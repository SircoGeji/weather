const TEMP_CHANGE = "TEMP_CHANGE";
const SET_WEATHER_DATA = "SET_WEATHER_DATA";
const SET_NEW_CITY = "SET_NEW_CITY";

let initialState ={
    Sunny: "Sunny",
    Temperature: 123,
    Max_Temp: 123,
    Min_Temp: 123,
    Humidity: 123,
    Pressure: 123,
    Wind: 123,
    SunRise_Time: 123456789,
    SunSet_Time: 123456789,
    Day_Time: 123456789,
    Yesterday_Temp: 123,
    Today_Temp: 123,
    Tomorrow_Temp: 123,
    weatherChecked: true,
    ToDate: 123,
    city: "Moscow",
    country: "RU",
    id: 524901,
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                Sunny: action.dataWeather.weather[0].main,
                Temperature: action.dataWeather.main.temp,
                Max_Temp: action.dataWeather.main.temp_max,
                Min_Temp: action.dataWeather.main.temp_min,
                Humidity: action.dataWeather.main.humidity,
                Pressure: action.dataWeather.main.pressure,
                Wind: action.dataWeather.wind.speed,
                SunRise_Time: action.dataWeather.sys.sunrise,
                SunSet_Time: action.dataWeather.sys.sunset,
                ToDate: action.dataWeather.dt,
                weatherChecked: true,
                city: action.dataWeather.name,
                country: action.dataWeather.sys.country,
                id: action.dataWeather.id,
            }
        case SET_NEW_CITY:
            return {
                ...state,
                city: action.city,
                country: action.country,
                id: action.id,
                weatherChecked: action.checkCity,
            }
        default:
            return {
                ...state
            }
    }
}

export const changeTempAC = () => {
    return {type: TEMP_CHANGE}
}
export const setWeatherDataAC = (dataWeather) => {
    return {type: SET_WEATHER_DATA, dataWeather}
}

export const changeCityAC = (city, country, id, checkCity) => {
    return {type: SET_NEW_CITY, city, country, id, checkCity}
}