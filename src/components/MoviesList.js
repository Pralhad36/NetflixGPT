import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MoviesList = ({ title, movies }) => {

    return (
        <div className='px-4'>
            <h1 className='text-2xl pt-6'>{title}</h1>

            <div className='flex overflow-x-scroll no-scrollbar '>
                <div className='flex'>
                    {movies?.map((movie) => {
                        return <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    })}

                </div>

            </div>
        </div>
    )
}

export default MoviesList
