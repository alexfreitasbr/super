import { createSlice }  from '@reduxjs/toolkit'
import {SuperTagsSliceInitalState} from '@/constants/supertagInitial'

const superTagReducer = createSlice({
    name:'supertag',
    initialState:SuperTagsSliceInitalState,
    reducers: {
        setSuperTagList(state,action){
            state.list = action.payload
        },
        setSuperTagProperties(state,action){
            const properties = action.payload.properties
            const supertagId = action.payload.supertag.id
            if (state.list && state.list.length > 0) {
                const supertagIndex = state.list.findIndex(tag => tag.supertag.id === supertagId);
                if (supertagIndex !== -1) {
                    state.list[supertagIndex].properties = properties;
                }
            }
        },
        addSuperTagProperties(state,action){
            const property = action.payload.property
            const supertagId = action.payload.supertag.id
            if (state.list && state.list.length > 0) {
                const supertagIndex = state.list.findIndex(tag => tag.supertag.id === supertagId);
                state.list[supertagIndex].properties?.push(property) 
            }
        },
        deleteSuperTagProperties(state,action){
            const supertagId = action.payload.supertag.id
            const propertyId = action.payload.property.id
            if (state.list && state.list.length > 0) {
                const supertagIndex = state.list.findIndex(tag => tag.supertag.id === supertagId);
                if (supertagIndex !== -1) {
                    if (state.list[supertagIndex].properties && state.list[supertagIndex].properties.length > 0) {
                        const properties = state.list[supertagIndex].properties.filter(property => property.id !== propertyId);
                        state.list[supertagIndex].properties = properties
                    }
                }
            }
        },
        replaceTagProperties(state,action){
            const newProperty = action.payload.property
            const supertagId = action.payload.supertag.id
            const propertyId = action.payload.property.id
            if (state.list && state.list.length > 0) {
                const supertagIndex = state.list.findIndex(tag => tag.supertag.id === supertagId);
                if (supertagIndex !== -1) {
                    if (state.list[supertagIndex].properties && state.list[supertagIndex].properties.length > 0) {
                        const newProperties = state.list[supertagIndex].properties.map(property => {
                            if(property.id === propertyId){
                                return newProperty
                            }
                             return  property
                        })
                        state.list[supertagIndex].properties = newProperties
                    }
                }
            }
        },
    }
})

export default superTagReducer.reducer

export const superTagActions = superTagReducer.actions