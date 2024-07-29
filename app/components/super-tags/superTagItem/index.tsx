import { SuperTagType } from "@/types/SuperTag"
import { IconChevronRight, IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"
import { selectedActions } from '@/store/selected-slice'
import { SuperTagsRootStateType } from '@/types/SuperTag'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { SuperTagsItens } from "../superTagItens"

type SuperTagItemProps = {
    label: string,
    item: SuperTagType
}

export function SuperTagItem({ label, item }: SuperTagItemProps) {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const superTags = useSelector((state: SuperTagsRootStateType) => state.superTag.list)
    const superTagChields = superTags?.filter((subItem)=> subItem.father_id === item.id )

    function handleOpen() {
        if (!superTagChields || superTagChields.length === 0) return
        setIsOpen((isOpen) => !isOpen)
    }
    function handleSelect() {
        dispatch(selectedActions.selectSuperTag(item))
    }

    return <>
        <li className="flex flex-col gap-2 " >
            <span className="flex  gap-2 cursor-pointer text-white" >
                <span onClick={handleOpen} className={`${superTagChields && superTagChields.length > 0 &&  "hover:text-yellow-500"}`}>
                    {!isOpen ? <IconChevronRight /> : <IconChevronDown />}
                </span>
                <span className="hover:text-yellow-500" onClick={handleSelect}>
                {label}
                </span>
            </span>
        </li>

        {superTagChields.length  > 0 && isOpen && <span className="pl-2"><SuperTagsItens itens={superTagChields} /></span>}
    </>
}

