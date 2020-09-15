import React from 'react'
import classes from './Logo.module.css'

const logo = ({ source, alt }) => (
    <div className={classes.Logo}>
        <img src={source} alt={alt} />
        <p>Green-2Go</p>
    </div>
)

export default logo