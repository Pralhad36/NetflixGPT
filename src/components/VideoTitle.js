import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' absolute w-screen aspect-video pt-40 px-14  text-white bg-gradient-to-r from-black' >
            <h1 className=' py-4 text-4xl w-3/12 font-bold'>{title}</h1>
            <p className=' text-md w-3/12'>{overview}</p>

            <div>
                <button className=' px-11 py-2 bg-white text-black text-lg font-bold rounded-lg mx-2 my-8 hover:bg-opacity-70'> Play</button>
                <button className=' px-7 py-2 bg-gray-500 text-white font-bold text-lg  rounded-lg  my-8 bg-opacity-50 hover:bg-opacity-80'> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle   