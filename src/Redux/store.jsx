import {configureStore} from "@reduxjs/toolkit";
import propertySlice from "./propertySearchSlice/Slice"
export const store =configureStore({
	reducer:{
		propertySlice
	},
})