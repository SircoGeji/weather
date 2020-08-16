import React from 'react';
import styles from './City.module.css'
import {AxiosInstance as axios} from "axios";
import {NavLink} from "react-router-dom";
import cloud from '../images/cloud.png'
import humidity from '../images/humidity.png'
import speed from '../images/speed.png'
import wind from '../images/wind.png'
import sunset from '../images/sunset.png'
import sunrise from '../images/sunrise.png'
import daytime from '../images/daytime.png'
import celcius_1 from '../images/celcius_1.png'
import arrow_up from '../images/arrow_up.png'
import arrow_down from '../images/arrow_down.png'
import location from '../images/location.png'

const City = (props) => {

    const axios = require('axios');
    let state = props.weatherPage;

    Date.prototype.customFormat = function (formatString) {
        var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
        var dateObject = this;
        YY = ((YYYY = dateObject.getFullYear()) + "").slice(-2);
        MM = (M = dateObject.getMonth() + 1) < 10 ? ('0' + M) : M;
        MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][M - 1]).substring(0, 3);
        DD = (D = dateObject.getDate()) < 10 ? ('0' + D) : D;
        DDD = (DDDD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateObject.getDay()]).substring(0, 3);
        th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) == 1) ? 'st' : (dMod == 2) ? 'nd' : (dMod == 3) ? 'rd' : 'th';
        formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);

        h = (hhh = dateObject.getHours());
        if (h == 0) h = 24;
        if (h > 12) h -= 12;
        hh = h < 10 ? ('0' + h) : h;
        hhhh = hhh < 10 ? ('0' + hhh) : hhh;
        AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase();
        mm = (m = dateObject.getMinutes()) < 10 ? ('0' + m) : m;
        ss = (s = dateObject.getSeconds()) < 10 ? ('0' + s) : s;
        return formatString.replace("#hhhh#", hhhh).replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM);
    }

    let APIkey = "b2fc05fc17704bca1dab1f5055de417a";

    if(state.weatherChecked === false){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${state.id}&appid=${APIkey}`)
            .then(response => {
                props.setWeatherData(response.data);
                console.log(response.data);
            });
    }

    var DSR = new Date(state.SunRise_Time);
    var SR = DSR.customFormat("#h#:#mm# #AMPM#");
    var DSS = new Date(state.SunSet_Time);
    var SS = DSS.customFormat("#h#:#mm# #AMPM#");

    var DT = (state.SunSet_Time - state.SunRise_Time) / 3600;
    var DT_hour = Math.floor(DT);
    var DT_min = Math.round((DT - DT_hour) * 60);

    var Today = new Date(state.ToDate);
    var Today_normal = Today.customFormat("#DDDD#, #D# #MMMM# #YYYY# | #h#:#mm# #AMPM#");

    return <div className={styles.city}>
        {
            <div>
                <div className={styles.today}>
                    {Today_normal}
                    {
                        <div className={styles.rectangle}>
                            <div className={styles.rectangle_text}>
                                <NavLink activeClassName={styles.activeLink} to="/list">
                                    {state.city + ", " + state.country + " "}
                                    {state.weatherChecked === false}
                                </NavLink>
                                <img src={location} className={styles.location}/>
                            </div>
                        </div>
                    }
                </div>
                <div className={styles.info}>
                    <div className={styles.info_block1}>
                        <img src={cloud} className={styles.cloud}/>
                        <div>{state.Sunny}</div>
                    </div>
                    <div>
                        <div className={styles.info_block2}>{Math.round(state.Temperature / 10)}</div>
                        <img src={celcius_1} className={styles.celcius_1}/>
                    </div>
                    <div className={styles.info_block3}>
                        <div className={styles.info_block31}>
                            {Math.round(state.Max_Temp/10) + " "} &#x2103;
                            <img src={arrow_up} className={styles.arrow}/>
                        </div>
                        <div className={styles.info_block32}>
                            {Math.round(state.Min_Temp/10) + " "} &#x2103;
                            <img src={arrow_down} className={styles.arrow}/>
                        </div>
                    </div>
                    <div>
                        <img src={humidity} className={styles.humidity}/>
                        <div className={styles.info_block41}>{state.Humidity + "%"}</div>
                        <div className={styles.info_block42}>Humidity</div>
                    </div>
                    <div>
                        <img src={speed} className={styles.speed}/>
                        <div className={styles.info_block51}>{(state.Pressure) / 1000 + "mBar"}</div>
                        <div className={styles.info_block52}>Pressure</div>
                    </div>
                    <div className={styles.info_block}>
                        <img src={wind} className={styles.humidity}/>
                        <div className={styles.info_block51}>{state.Wind + " km/h"}</div>
                        <div className={styles.info_block52}>Wind</div>
                    </div>
                    <div className={styles.info_block}>
                        <img src={sunrise} className={styles.humidity}/>
                        <div className={styles.info_block41}>{SR}</div>
                        <div className={styles.info_block42}>Sunrise</div>
                    </div>
                    <div className={styles.info_block}>
                        <img src={sunset} className={styles.humidity}/>
                        <div className={styles.info_block41}>{SS}</div>
                        <div className={styles.info_block42}>Sunset</div>
                    </div>
                    <div className={styles.info_block}>
                        <img src={daytime} className={styles.humidity}/>
                        <div className={styles.info_block41}>{DT_hour + " h " + DT_min + " m"}</div>
                        <div className={styles.info_block42}>Daytime</div>
                    </div>
                    <div className={styles.info_block50}></div>
                    <div className={styles.info_block50}></div>
                    <div className={styles.info_block50}></div>
                </div>
            </div>
        }
    </div>
}

export default City