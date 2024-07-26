import { SuperTagType } from "@/types/SuperTag"
import { IconChevronRight, IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"
import { selectedActions } from '@/store/selected-slice'

import { useDispatch } from 'react-redux'

type SuperTagItemProps = {
    label: string,
    item: SuperTagType
}

export function SuperTagItem({ label, item }: SuperTagItemProps) {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    function handleClick() {
        setIsOpen((isOpen) => !isOpen)
        dispatch(selectedActions.selectSuperTag(item))

    }


    return <li className="flex flex-col gap-2 " >
        <span className="flex  gap-2 cursor-pointer text-white hover:text-yellow-500"  onClick={handleClick}>{!isOpen ? <IconChevronRight/> : <IconChevronDown />}{label}</span>
    </li>
}

