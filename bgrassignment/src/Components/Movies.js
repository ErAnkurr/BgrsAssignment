import React from 'react'
import classes from './Movie.module.css';

import MovieListItem from './Movielistitem'

const Movies = (props) => {
    return (
        <React.Fragment>
            <h3>List of Movies</h3>
            <ul className={classes['movies-list']}>
                {props.movies && props.movies.map((movie) => (
                    <MovieListItem
                    key={movie.id}
                    title={movie.name}
                    />
                ))}
            </ul>
        </React.Fragment>
    )
}

export default Movies;