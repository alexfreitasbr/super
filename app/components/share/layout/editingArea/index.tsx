
import { PropertyRootStateType } from '@/types/Property'
import { useSelector } from 'react-redux'

export function EditingArea(){
    const selectedProperty = useSelector((state: PropertyRootStateType) => state.property.editing)
    console.log(selectedProperty)
    return <div className="flex flex-1 bg-black px-6 py-12">
        
        {selectedProperty && <div className="text-white">
            <p>{selectedProperty.id}</p>
            <p>{selectedProperty.description}</p>
            <p>{selectedProperty.type}</p>
            <p>{selectedProperty.value}</p>
            </div>}
    </div>
}