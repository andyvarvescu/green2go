import React from 'react'
import homeImage1 from '../../assets/homeImage1.png'
import homeImage2 from '../../assets/homeImage2.jpg'
import classes from './Home.module.css'

const home = () => (
    <div id="home">
        <figure className={classes.Figure1}>
            <img className={classes.Image1} src={homeImage1} alt="Home" />
        </figure>

        <div className={classes.Text}>
            <h3 className={classes.Title}>
                ABOUT OUR POWER SOLUTIONS FOR ELECTRIC VEHICLE
            </h3>

            <p>Green-2Go network has been expanding its engineering services since 2016.</p>
            <p>Our aim has been to lead the power of nature toward a technologically -
            advanced future.</p>
            <p>With our mobile <strong>M-SWIS</strong> units and our remote charging
            network, <strong>Green-2Go</strong>, we can charge electric vehicles in any
            location using 100% green energy.</p>
        </div>

        <figure className={classes.Figure2}>
            <img className={classes.Image2} src={homeImage2} alt="Home" />
            <div className={classes.ImageText}>
                Connecting your electric vehicle
                with the power of nature
            </div>
        </figure>
    </div>
)

export default home