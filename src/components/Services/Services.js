import React from 'react'
import Service from './Service/Service'
import serviceImage1 from '../../assets/serviceImage1.png'
import serviceImage2 from '../../assets/serviceImage2.jpg'
import serviceImage3 from '../../assets/serviceImage3.jpg'
import serviceImage4 from '../../assets/serviceImage4.png'
import classes from './Services.module.css'

const services = () => (
    <div id="services">
        <p className={classes.Title}><strong>LEARN ABOUT OUR SERVICES</strong></p>
        <p className={classes.Text}>Offering Solutions That Make A Difference</p>

        <div className={classes.ServicesContainer}>
            <Service
                headImage={serviceImage1}
                contentTitle="M-SWIS"
            >
                <p>M-SWIS stands for Mobile Solar Wind Intelligent System. It is a patented device,
                with a remote control option, that supplies green energy in all locations,
                including in remote  areas. M-SWIS is a
                <span className={classes.RedSpan}> precise, stable and safe</span> unit,
                developed under the European Institute of Innovation & Technology and sponsored
                by Climate KIC programs.</p>

                <p>Has your EV run out of energy? We bring the power to you, regardless of where
                you are.</p>
            </Service>

            <Service
                headImage={serviceImage2}
                contentTitle="Green-2Go App"
                baseImage={serviceImage4}
            >
                <p>G2G app helps EV drivers to find the closest charging location.</p>
                <p>Why use G2G? You can book the location using your smart device and you get the
                best electricity rate available.</p>

            </Service>

            <Service
                headImage={serviceImage3}
                contentTitle="Green-2Go Network"
            >
                <p>If you own a charging point based 100% on green energy, you can join our
                network of suppliers.</p>
                <p>What's in it for you? You get the best electricity deal on the market.</p>
            </Service>
        </div>
    </div>
)

export default services