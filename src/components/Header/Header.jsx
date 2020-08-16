import React from 'react';
import styles from './Header.module.css'
import head_day from '../images/head_day.png'

const Header = (props) => {
    return <div>
            <img src={head_day} className={styles.head}/>
    </div>
}

export default Header