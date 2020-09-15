import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/home">
            Home
        </NavigationItem>

        <NavigationItem link="/services">
            Services
        </NavigationItem>

        <NavigationItem link="https://www.youtube.com/watch?v=ETjjNRDQt0Q" target="_blank">
            Technical solutions
        </NavigationItem>

        <NavigationItem link="/contact">
            Contact
        </NavigationItem>
    </ul>
)

export default navigationItems