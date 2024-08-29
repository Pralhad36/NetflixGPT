import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesions from './GptMovieSuggesions'
import { Background_Image_URL } from './utils/constants'

const GptSearch = () => {
    return (
        <>
            <img className=' -z-20  fixed bg-cover h-screen w-full object-cover  ' src={Background_Image_URL} alt='BackgroundImage' />

            <div className=' pt-24'>
                <GptSearchBar />
                <GptMovieSuggesions />
            </div>
        </>
    )
}

export default GptSearch