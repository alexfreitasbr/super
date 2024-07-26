export type PropertyType = {
    id: number
    description: string
    type: 'T'|'I'|'R'|'C'|'D'
    value: string
    supertag_id:number
}

export type Properties = PropertyType[]

export type PropertySliceType = {
    property: PropertyType | null
}

export type ItitialProperty = {
    editing: PropertyType | null
}


export type PropertyRootStateType = {
    property:{
        editing:PropertyType
    }      
}

