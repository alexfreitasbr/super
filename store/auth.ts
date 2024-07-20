import { AuthType } from '@/types/auth'
import { createSlice }  from '@reduxjs/toolkit'

const initialStateAuth: AuthType = {
    autenticated: false,
    user:null,
    password:null,
    name:null
}

const authReducer = createSlice({
    name:'auth',
    initialState: initialStateAuth,
    reducers: {
        login(state){
            state.autenticated = true
        },
        logout(state){
            state.autenticated = false
        },
        setUser(state,action){
            state.user = action.payload
        },
        setPassword(state,action){
            state.password = action.payload
        }
    }
})

export  default authReducer.reducer

export const authActions = authReducer.actions