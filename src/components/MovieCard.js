import React from 'react'
import { MOVIE_IMAGE_URL } from './utils/constants'

const MovieCard = ({ posterPath }) => {


    return (
        <div className='w-48 pr-2 py-2'>
            <img alt='movie image' src={MOVIE_IMAGE_URL + posterPath} />
        </div>
    )
}

export default MovieCard