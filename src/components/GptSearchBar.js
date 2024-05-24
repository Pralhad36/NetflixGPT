import React from 'react'
import { useSelector } from 'react-redux'
import lang from './utils/languageConstants'

const GptSearchBar = () => {

    const langKey = useSelector((store) => store?.config?.lang)
    return (
        <div className='absolute bg-black w-8/12 top-40 left-52 bg-opacity-60'>
            <form className='grid grid-cols-12 '>
                <input
                    placeholder={lang[langKey].gptSearchPlaceHolder}
                    type='text'
                    className='p-4 m-4 col-span-8'></input>
                <button
                    className=' col-span-4 bg-red-600 rounded-md text-white font-bold px-4 py-4 my-4 mr-4'  >{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar