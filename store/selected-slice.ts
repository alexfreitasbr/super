import { createSlice }  from '@reduxjs/toolkit'
import { SelectedInitalState } from '@/constants/selectedInitial'

const selectedReducer = createSlice({
    name:'selected',
    initialState:SelectedInitalState,
    reducers: {
        selectSuperTag(state,action){
            state.superTag = action.payload
        },
        unselectSuperTag(state){
            state.superTag = null
        },
    }
})

export default selectedReducer.reducer

export const selectedActions = selectedReducer.actions