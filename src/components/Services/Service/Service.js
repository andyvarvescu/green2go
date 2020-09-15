import React from 'react'
import classes from './Service.module.css'

const service = ({ headImage, contentTitle, baseImage, children }) => (
    <div className={classes.Service}>
        <figure className={classes.Figure}>
            <img src={headImage} className={classes.HeadImage} alt="" />
        </figure>

        <div className={classes.Content}>
            <p className={classes.ContentTitle}>
                {contentTitle}
            </p>

            <p className={classes.ContentText}>
                {children}
            </p>
        </div>

        {baseImage ?
            <figure>
                <img src={baseImage} className={classes.BaseImage} alt="" />
            </figure>
            :
            null
        }
    </div>
)

export default service