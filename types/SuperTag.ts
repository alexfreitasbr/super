import { Properties } from '@/types/Property'
import { WritableDraft } from 'immer'
export type SuperTagType = {
    id: number | null
    name: string | null
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
    superTag:SuperTagType
}

export type SelectedRootStateType = {
    selected:{
        superTag:SuperTagType
    }      
}
