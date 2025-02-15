import { configureStore } from "@reduxjs/toolkit"; 
import countReducer from './slice/counterSlice.js'
import loadingReducer from './slice/LoadingSlice.js'
const store = configureStore({
    reducer : {
     count : countReducer,
     laoding : loadingReducer
    }
})

export default store