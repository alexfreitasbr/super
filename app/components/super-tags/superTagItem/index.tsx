import { PropertyType } from "@/types/Property"
import { SuperTagType } from "@/types/SuperTag"
import { IconChevronRight, IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"
import { propertyActions } from '@/store/property-slice'

import { useDispatch } from 'react-redux'

type SuperTagItemProps = {
    label: string,
    item: SuperTagType
}

export function SuperTagItem({ label, item }: SuperTagItemProps) {
    const [isOpen, setIsOpen] = useState(false)
    const { properties } = item
    const dispatch = useDispatch()

    function handleClick() {
        setIsOpen((isOpen) => !isOpen)
    }

    function handleSelect(item:PropertyType) {
        dispatch(propertyActions.selectProperty(item))
    }

    const renderProprerties = properties?.map((item) => {
        return <li className="cursor-pointer text-white hover:text-yellow-500" key={item.description} onClick={()=>handleSelect(item)}>
            {item.description}
        </li>
    })

    return <li className="flex flex-col gap-2 " >
        <span className="flex  gap-2 cursor-pointer text-white hover:text-yellow-500"  onClick={handleClick}>{!isOpen ? <IconChevronRight/> : <IconChevronDown />}{label}</span>
        {properties && isOpen && <ul className="pl-8 mb-3">
            {renderProprerties}
        </ul>}
    </li>
}

