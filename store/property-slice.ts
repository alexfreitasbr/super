import { createSlice }  from '@reduxjs/toolkit'
import { PropertyInitalState } from '@/constants/propertyInitial'

const properyReducer = createSlice({
    name:'property',
    initialState:PropertyInitalState,
    reducers: {
        selectProperty(state,action){
            state.editing = action.payload
        },
        unselectProperty(state){
            state.editing= null
        },
    }
})

export default properyReducer.reducer

export const propertyActions = properyReducer.actions