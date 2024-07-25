import { createSlice }  from '@reduxjs/toolkit'
import { PropertyInitalState } from '@/constants/propertyInitial'

const properyReducer = createSlice({
    name:'supertag',
    initialState:PropertyInitalState,
    reducers: {
        setProperty(state,action){
            state.property = action.payload
        },
        deleteProperty(state,action){
            state.property = null
        },
    }
})

export default properyReducer.reducer

export const properyActions = properyReducer.actions