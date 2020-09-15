import React from 'react'
import Logo from '../../Logo/Logo'
import green2goLogo from '../../../assets/logo.png'
import NavigationItems from '../NavigationItems/NavigationItems'
import fbIcon from '../../../assets/fbIcon.png'
import youtubeIcon from '../../../assets/youtubeIcon.png'
import linkedinIcon from '../../../assets/linkedinIcon.png'
import classes from './Toolbar.module.css';

const toolbar = () => (
    <header className={classes.Toolbar}>
        <Logo source={green2goLogo} alt="Green-2Go" />

        <div className={classes.LinksContainer}>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>

            <div className={classes.SocialMedia}>
                <a href="mailto:office@green-2go.com" target="_blank" rel="noopener noreferrer">
                    office@green-2go.com
                </a>

                <div className={classes.socialIcons}>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={fbIcon} alt="Facebook link" />
                    </a>

                    <a
                        href="https://www.youtube.com/channel/UCcd-3i9XGVe4pODYhGfk1XA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={youtubeIcon} alt="Youtube link" />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/green-2go/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedinIcon} alt="Linkedin link" />
                    </a>
                </div>
            </div>
        </div>

    </header>
)

export default toolbar