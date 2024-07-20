import { redirect } from 'next/navigation'
import { useSelector}  from 'react-redux'
import { AutenticatedType, RootStateType} from '@/types/auth'

export function SuperTags(){
    const autenticated:AutenticatedType = useSelector((state:RootStateType)=> state.auth.autenticated)
    if(!autenticated) redirect('/login')
    return <p className="flex min-h-screen flex-col items-center justify-between p-24 text-white">supertags</p>
}