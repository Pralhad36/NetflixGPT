import { createSlice } from "@reduxjs/toolkit";

const gptSearcheSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },

    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const { toggleGptSearch } = gptSearcheSlice.actions;
export default gptSearcheSlice.reducer