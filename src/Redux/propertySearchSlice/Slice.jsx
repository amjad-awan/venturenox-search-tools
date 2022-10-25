import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  propertyAddress: {},
  propertyType: {},
  isLoaded: false,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    propertyType: (state, { payload }) => {
      state.propertyType = payload;
      state.isLoaded = true;
    },
    propertyAddress: (state, {payload}) => {
      state.propertyAddress = payload;
      state.isLoaded = true;
    },
   
  },
});

export const { propertyAddress,propertyType } = propertySlice.actions;

export default propertySlice.reducer;
