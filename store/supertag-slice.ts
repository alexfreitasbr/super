import { createSlice } from '@reduxjs/toolkit'
import { SuperTagsSliceInitalState } from '@/constants/supertagInitial'
import { SupertagsType } from '@/types/SuperTag'
const superTagReducer = createSlice({
    name: 'supertag',
    initialState: SuperTagsSliceInitalState,
    reducers: {
        setSuperTagList(state, action) {
            state.list = action.payload
        },
        createSuperTag(state, action) {
            const supertagIndex = state.list.findIndex(tag => tag.id === action.payload.id);
            if (supertagIndex !== -1) return
            state.list = [...state.list, action.payload]
        },
        replaceSuperTag(state, action) {
            const newList = [...state.list] as SupertagsType
            const supertagIndex = newList.findIndex(tag => tag.id === action.payload.id);
            if (supertagIndex !== -1) {
                newList[supertagIndex] = action.payload
                state.list = newList
            } 
        },
        deleteSuperTag(state, action) {
            const currentList = [...state.list] as SupertagsType
            const newList: SupertagsType = currentList.filter(item => item.id !== action.payload)
            state.list = newList
        },
        setSuperTagProperties(state, action) {
            const properties = [...action.payload.properties]
            const supertagId = action.payload.id
            const newList = [...state.list] as SupertagsType

            const supertagIndex = state.list.findIndex(tag => tag.id === supertagId);
            if (supertagIndex !== -1) {
                if (newList[supertagIndex]['properties'] === undefined) {
                    newList[supertagIndex]['properties'] = properties
                    state.list = newList
                }
            }
        },
        createSuperTagProperty(state, action) {
            const property = action.payload.property
            const supertagId = action.payload.id
            const newList = [...state.list] as SupertagsType


            const supertagIndex = state.list.findIndex(tag => tag.id === supertagId);
            if (supertagIndex !== -1) {
                if (newList[supertagIndex]['properties'] === undefined) {
                    newList[supertagIndex]['properties'] = [property]
                } else {
                    newList[supertagIndex]['properties'] = [...newList[supertagIndex]['properties'], property]
                }
                state.list = newList
            }

        },
        deleteSuperTagProperty(state, action) {
            const propertyId = action.payload.propertyId
            const supertagId = action.payload.supertagId
            const newList = [...state.list] as SupertagsType

            const supertagIndex = state.list.findIndex(tag => tag.id === supertagId);
            if (supertagIndex !== -1) {
                if (newList[supertagIndex]['properties'] === undefined) return
                const properties = newList[supertagIndex].properties
                const newProperties = properties.filter(item => item.id !== propertyId)
                newList[supertagIndex].properties = newProperties
                state.list = newList
            }
        },
        replaceSuperTagProperties(state, action) {
            const property = action.payload.property
            const supertagId = action.payload.supertagId
            const newList = [...state.list] as SupertagsType
            const supertagIndex = newList.findIndex(tag => tag.id === supertagId);
            if (supertagIndex !== -1) {
                if (newList[supertagIndex]['properties'] === undefined) return
                const properties = newList[supertagIndex].properties
                const propertyIndex = properties.findIndex(prop => prop.id === property.id);
                if (propertyIndex !== -1) {
                    properties[propertyIndex] = property
                    newList[supertagIndex].properties = properties
                    state.list = newList
                }
            }
        },
    }
})

export default superTagReducer.reducer

export const superTagActions = superTagReducer.actions