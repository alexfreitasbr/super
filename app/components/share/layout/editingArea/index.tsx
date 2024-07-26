
import { SelectedRootStateType } from '@/types/SuperTag'
import { useSelector } from 'react-redux'

export function EditingArea(){
    const selected = useSelector((state: SelectedRootStateType) => state.selected.superTag)
    console.log(selected)
    return <div className="flex flex-1 bg-black px-6 py-12">
        
        {selected && <div className="text-white">
            <p>{selected.id}</p>
            <p>{selected.name}</p>
            <p>{selected.icon}</p>
            <p>{selected.type}</p>
            </div>}
    </div>
}