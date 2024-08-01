import { SelectedRootStateType, SuperTagType } from "@/types/SuperTag"
import { IconChevronRight, IconChevronDown, IconHash } from "@tabler/icons-react"
import { useState } from "react"
import { selectedActions } from '@/store/selected-slice'
import { SuperTagsRootStateType } from '@/types/SuperTag'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { SuperTagsItens } from "../superTagItens"
import Image from 'next/image'


type SuperTagItemProps = {
    item: SuperTagType 
}

export function SuperTagItem({item}: SuperTagItemProps) {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const superTags = useSelector((state: SuperTagsRootStateType) => state.superTag.list)
    const superTagChields = superTags?.filter((subItem)=> subItem.father_id === item.id )
    const selectedId = useSelector((state: SelectedRootStateType) => state.selected.superTag.id) 

    function handleOpen() {
        if (!superTagChields || superTagChields.length === 0) return
        setIsOpen((isOpen) => !isOpen)
    }
    function handleSelect() {
        dispatch(selectedActions.selectSuperTag(item))
    }

    const selected = selectedId === item.id || item.father_id

    return <>
        <li >
            <span className="flex  cursor-pointer text-white" >
                <span onClick={handleOpen} className={`${superTagChields && superTagChields.length > 0 &&  "hover:text-yellow-500"}`}>
                    {!isOpen ? <IconChevronRight /> : <IconChevronDown />}
                </span>

                <span className="flex gap-2 hover:text-yellow-500" onClick={handleSelect}>
                    <span className={`flex items-center justify-center relative w-6 h-6  ${!item.icon && "bg-white text-black"}` }>
                        {item.icon && <Image src={item.icon} alt="emogin" fill /> || <IconHash size={22}/>}
                    </span>
                    <span  className={`${selected && "text-yellow-500 font-bold uppercase" }`}>{item.name}</span>
                </span>
            </span>
        </li>

        {superTagChields.length  > 0 && isOpen && <span className="pl-2"><SuperTagsItens itens={superTagChields} /></span>}
    </>
}

