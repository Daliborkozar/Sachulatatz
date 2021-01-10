import React from 'react'
import classes from './MessageBox.module.css'

const MessageBox = (props) => {
    return (
        <div className={classes.MessageBox}>
            <p>{props.children}</p>
        </div>
    )
}

export default MessageBox
