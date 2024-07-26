import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import superTagReducer from './supertag-slice'
import properyReducer from './property-slice'
import selectedReducer from './selected-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        superTag: superTagReducer,
        property: properyReducer,
        selected: selectedReducer,
    }
})

export default store