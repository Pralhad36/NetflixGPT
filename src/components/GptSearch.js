import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesions from './GptMovieSuggesions'
import { Background_Image_URL } from './utils/constants'

const GptSearch = () => {
    return (
        <div>
            <img src={Background_Image_URL} alt='BackgroundImage' />
            <GptSearchBar />
            <GptMovieSuggesions />
        </div>
    )
}

export default GptSearch