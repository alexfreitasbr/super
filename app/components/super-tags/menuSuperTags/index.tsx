import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { superTagActions } from '@/store/supertag-slice'
import { supertagsMock } from '@/mock/supertags'
import { SuperTagsRootStateType } from '@/types/SuperTag'
import { SuperTagsItens } from '../superTagItens'
export function MenuSuperTags() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(superTagActions.setSuperTagList(
            supertagsMock
        ))
    }, [dispatch])

    const superTags = useSelector((state: SuperTagsRootStateType) => state.superTag.list.filter((item)=>!item.father_id ))

    return (
        <>
            <section>
                <h2 className="text-white text-base font-semibold">SUPERTAGS</h2>
                <SuperTagsItens itens={superTags} />
            </section>
        </>
    )
}