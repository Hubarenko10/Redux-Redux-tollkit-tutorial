import { configureStore } from '@reduxjs/toolkit'
import { countReducer } from './slice'




export const store = configureStore({
reducer:{
    counter: countReducer,
}
})