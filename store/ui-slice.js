import { createSlice }  from '@reduxjs/toolkit'


const uiSliceReducer = createSlice({
    name:'ui',
    initialState: { cartIsVisible: false, notification:null},
    reducers: {
        toggle(state,action){
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state,action){
            state.notification = {status:action.payload.status, title:action.payload.title, message: action.payload.message}
        }
    }
})

export default uiSliceReducer.reducer

export const uiSliceActions = uiSliceReducer.actions