import React from 'react'
import classes from './Movie.module.css'

const MovieListItem = (props) => {

    return(
        <li className={classes.movie}>
            <h3>{props.title}</h3>
        </li>
    )
}

export default MovieListItem;