import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "en",
  },
  reducers: {
    addLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addLanguage } = configSlice.actions;

export default configSlice.reducer;
