import React from 'react';
import styles from './List.module.css'
import {NavLink} from "react-router-dom";
import * as CitiesList from '../../current.city.list.json'
import location_2 from '../images/location_2.png'

const List = (props) => {

    var CitiesListArray = CitiesList.default;

    return <div className={styles.list}>
        <div className={styles.location}>Location</div>
        <div className={styles.current_city_block}>
            <div className={styles.current_city}>
                Choose a city

            </div>
            <img src={location_2} className={styles.location_2}/>
        </div>
        <div className={styles.city_list}>
            {CitiesListArray.map((i) =>
                <NavLink activeClassName={styles.activeLink} to="/city" onClick={() => {props.NewCity(i.name, i.country, i.id, false)}}>
                    <div
                        className={styles.city_in_list}>{i.name + ", " + i.country}</div>
                </NavLink>
            )}
        </div>
    </div>
}

export default List;