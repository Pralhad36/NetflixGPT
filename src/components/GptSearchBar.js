import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from './utils/languageConstants'
import openai from './utils/openAi'

const GptSearchBar = () => {

    const searchText = useRef(null)

    console.log(searchText?.current?.value)

    const langKey = useSelector((store) => store?.config?.lang)

    const handleGptSearchClick = async () => {
        //make an API call to GPT API and to get movie results
        const gptQuery = "Act as a Movie Recommendation system and suggest some Movies for the query : " +
            searchText.current.value + ". only give me name of  movies, comma seperated like a example result given a head. Example Result: Gadar , Don ,Koi mil gaya ,sholay ,Avtaar";
        console.log(searchText?.current?.value)

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo'

        });
        console.log(gptResults.choices)
    }
    return (
        <div className=' md:absolute bg-black w-[full] md:w-8/12 md:top-40 left-52 bg-opacity-60'>
            <form className='grid grid-cols-12 ' onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    placeholder={lang[langKey].gptSearchPlaceHolder}
                    type='text'
                    className='p-4 m-4 col-span-8'></input>
                <button
                    onClick={handleGptSearchClick} className=' col-span-4 bg-red-600 rounded-md text-white font-bold px-4 py-4 my-4 mr-4'  >{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar