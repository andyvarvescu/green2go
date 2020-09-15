import React from 'react'
import Map from '../Map/Map'

import image1 from '../../assets/contact1.jpg'
import serviceIcon1 from '../../assets/serviceIcon1.png'
import serviceIcon2 from '../../assets/serviceIcon2.png'
import classes from './Contact.module.css'

const contact = () => (
    <>
        <figure className={classes.ContactFigure}>
            <img className={classes.ContactImage} src={image1} alt="Be part of our network" />
            <div className={classes.ImageText}>Be part of our network</div>
        </figure>

        <div className={classes.ServicesContainer}>
            <div className={classes.Service}>
                <div className={classes.ServiceHeader}>
                    <p className={classes.ServiceTitle}>
                        My green charging point
                    </p>

                    <img className={classes.ServiceIcon} src={serviceIcon1} alt="" />
                </div>

                <div className={classes.ServiceContent}>
                    Finding a station to charge your EV without waiting in a Q could be
                    challenging. To make your life easier, we send you to the closest
                    available location on our network.
                    <p>We offer you the best charging price, a safe parking place while you charge
                    your car and we make sure the station is available by the time you get there.</p>
                    <p>With G2G app you can look for a charging station, book it and pay online
                    in no time!</p>
                </div>
            </div>

            <div className={classes.Service}>
                <div className={classes.ServiceHeader}>
                    <p className={classes.ServiceTitle}>
                        Join our network of suppliers
                    </p>

                    <img className={classes.ServiceIcon} src={serviceIcon2} alt="" />
                </div>

                <div className={classes.ServiceContent}>
                    Do you have a solar roof ? Do you have an available charging point for EV
                    based on green energy?
                    <p>G2G network buys your green energy at the best price on the market and sells
                    it to our community of EV drivers.</p>
                    <p>Let's drive and live GREEN!</p>
                </div>
            </div>
        </div>

        <div className={classes.Map}>
            <Map
                center={{ lat: 45.759233, lng: 21.227876 }}
            />
        </div>


    </>
)

export default contact