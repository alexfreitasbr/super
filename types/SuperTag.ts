import { Properties } from '@/types/Property'

export type SuperTagType = {
    id: number 
    name: string
    icon: string | null
    type: 1 | 2
    father_id: number | null
}

export type SupertagsType = SuperTagType[]

export type SuperTagSliceType = {
    supertag: SuperTagType
    properties: Properties | undefined
}

export type SuperListType = SuperTagSliceType[] | null


export type SuperTagsRootStateType = {
    superTag:{
        list:SuperListType
    }
}
