import { createSlice } from '@reduxjs/toolkit'
import { SelectedInitalState } from '@/constants/selectedInitial'

const selectedReducer = createSlice({
    name: 'selected',
    initialState: {...SelectedInitalState},
    reducers: {
        selectSuperTag(state, action) {
            state.superTag = action.payload
        },

        setId(state, action) {
            state.superTag = {
                ...state.superTag,
                id: action.payload
            }
        },
        setName(state,action){
            state.superTag = {
                ...state.superTag,
                name: action.payload
            }
        },
        setIcon(state,action){
            
            state.superTag = {
                ...state.superTag,
                icon: action.payload
            }
        },
        setType(state,action){
            state.superTag = {
                ...state.superTag,
                type: action.payload
            }
        },
        setFather(state,action){
            state.superTag = {
                ...state.superTag,
                father_id: action.payload
            }
        },
        setProperty(state,action){
            state.superTag = {
                ...state.superTag,
                properties: action.payload
            }
        },
    }
})

export default selectedReducer.reducer

export const selectedActions = selectedReducer.actions