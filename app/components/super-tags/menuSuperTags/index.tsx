import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { superTagActions } from '@/store/supertag-slice'
import { supertagsMock } from '@/mock/supertags'
import { SuperTagsRootStateType } from '@/types/SuperTag'
import { SuperTagItem } from '../superTagItem'
export function MenuSuperTags() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(superTagActions.setSuperTagList(
            supertagsMock
        ))
    }, [dispatch])


    const superTags = useSelector((state: SuperTagsRootStateType) => state.superTag.list)

    const renderSuperTags = () => {
        if (superTags && superTags.length > 0) {
            return superTags?.map(item => {
                return <SuperTagItem key={item.id+item.name} label={item.name} item={item} />
            })
        }
        return <p> vazio</p>
    }

    return (
        <>
            <section>
                <h2 className="text-white text-base font-semibold">SUPERTAGS</h2>
                <nav>
                    <ul className="flex flex-col gap-1 text-white text-base ">
                        {renderSuperTags()}
                    </ul>
                </nav>
            </section>
        </>
    )
}