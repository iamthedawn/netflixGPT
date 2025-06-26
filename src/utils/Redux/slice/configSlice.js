import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    websiteLanguage: "en",
  },
  reducers: {
    switchWebsiteLanguage: (state, action) => {
      state.websiteLanguage = action?.payload;
    },
  },
});

export const { switchWebsiteLanguage } = configSlice?.actions;
export const configReducer = configSlice.reducer;

export const getWebsiteLanguage = (state) => state.config?.websiteLanguage;
