import React from 'react'

const LastMovieDetails = (props) => {

    return (
        <div>
            <h3>Name/Year Last Movie</h3>
            {props.lastMovie.name} / {props.lastMovie.releaseDate}
        </div>
    )
}

export default LastMovieDetails;