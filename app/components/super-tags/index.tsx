
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { superTagActions} from '@/store/supertag-slice'
import { redirect } from 'next/navigation'
import { useSelector}  from 'react-redux'
import { AutenticatedType, RootStateType} from '@/types/auth'
import { supertagsMock } from '@/mock/supertags'
import{ SuperListType  , SuperTagsRootStateType } from '@/types/SuperTag'
export function SuperTags(){
    const autenticated:AutenticatedType = useSelector((state:RootStateType)=> state.auth.autenticated)
    if(autenticated) redirect('/login')
    
    const dispatch = useDispatch()
    dispatch(superTagActions.setSuperTagList(
        supertagsMock
    ))

    const autenticated2:SuperListType   = useSelector((state:SuperTagsRootStateType )=> state.superTag.list)



    return <p className="flex min-h-screen flex-col items-center justify-between p-24 text-white">supertags</p>
}