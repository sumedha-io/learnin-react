import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer // <-- Wrap this in an object!
    }
})

export default store
