import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { superTagActions } from '@/store/supertag-slice'
import { supertagsMock } from '@/mock/supertags'
import { SuperTagsRootStateType } from '@/types/SuperTag'
import { SuperTagsItens } from '../superTagItens'
import { useMemo } from 'react';
export function MenuSuperTags() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(superTagActions.setSuperTagList(
            supertagsMock
        ))
    }, [dispatch])

    const superTags = useSelector((state: SuperTagsRootStateType) => state.superTag.list)

    const superTagsFathers = useMemo(() => superTags.filter((item) => !item.father_id), [superTags]);

    return (
        <>
            <section>
                <h2 className="text-white text-base font-semibold mb-3">SUPERTAGS</h2>
                <SuperTagsItens itens={superTagsFathers} />
            </section>
        </>
    )
}