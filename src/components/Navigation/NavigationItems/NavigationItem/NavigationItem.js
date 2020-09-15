import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationItem.module.css'

const navigationItem = ({ link, exact, target, rootDomain, children }) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={{
                pathname: rootDomain ? (rootDomain + link) : link
            }}
            exact={exact}
            target={target}
            activeClassName={classes.active}
        >
            {children}
        </NavLink>
    </li>
)

export default navigationItem