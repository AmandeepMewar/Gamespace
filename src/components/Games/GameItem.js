import React from 'react'

import classes from './GameItem.module.css'
import { Link } from 'react-router-dom'

const GameItem = (props) => {
    const handlerClick = () => {}
    return (
        <div className={classes['image-card']} onClick={handlerClick}>
            <Link to={`/${props.id}`}>
                <img src={props.image} alt={props.title} className={classes['game-img']} loading='lazy'/>
            </Link>
        </div>
    )
}

export default GameItem;