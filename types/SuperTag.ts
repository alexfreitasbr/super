import { Properties } from '@/types/Property'

export type SuperTagType = {
    id: number 
    name: string
    icon: string | null
    type: 1 | 2
    father_id: number | null
    properties: Properties | undefined
}

export type SupertagsType = SuperTagType[]


export type SuperTagsRootStateType = {
    superTag:{
        list:SupertagsType | []
    }      
}

export type ItitialSuperTags = {list:SupertagsType | []}

export type ItitialSelected = {
    superTag:SupertagsType | null
}

export type SelectedRootStateType = {
    selected:{
        superTag:SuperTagType
    }      
}
