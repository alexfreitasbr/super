
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { superTagActions } from '@/store/supertag-slice'
import { propertyActions } from '@/store/property-slice'

import { useSelector } from 'react-redux'
import { supertagsMock } from '@/mock/supertags'
import { SuperTagType, SuperTagsRootStateType} from '@/types/SuperTag'
import { PropertyRootStateType} from '@/types/Property'
export function SuperTags() {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(superTagActions.setSuperTagList(
            supertagsMock
        ))
    }, [dispatch])

    const superTags = useSelector((state: SuperTagsRootStateType) => state.superTag.list)
    const selectedProperty = useSelector((state: PropertyRootStateType) => state.property.editing)
    const renderSuperTags = () => {
        if (superTags && superTags.length > 0)

            return superTags?.map(item => {
                return <li key={item.id} className="flex gap-5 justify-between border-2 border-white p-4 rounded-md m-4 cursor-pointer"  >
                    <span className="flex gap-5" onClick={() => handleSelect(item)}>
                        <h1>{item.name}</h1>
                        <p>{item.icon}</p>
                        <p>{item.type}</p>
                        <p>{item.father_id}</p>
                    </span>
                    <button onClick={() => handleDelete(item.id)}>-super-</button>
                    <button onClick={() => handleCreate()}>+super+</button>
                    <button onClick={() => handleReplace()}>*super*</button>
                    <button onClick={() => handleCreateProperty(item.id)}>+prop+</button>
                    <button onClick={() => handleDeleteProperty(item.id)}>-prop-</button>
                    <button onClick={() => handleReplaceProperty(item.id)}>*prop*</button>
                </li>
                
            }
            )
        return <p> vazio</p>
    }


    function handleSelect(item: SuperTagType) {
        console.log(item)
    }

    function handleCreate() {
        dispatch(superTagActions.createSuperTag(

            {
                id: 13,
                name: 'tag13',
                icon: "icone13",
                type: 13,
                father_id: 1
            }
        ))
    }

    function handleReplace() {
        dispatch(superTagActions.replaceSuperTag(

            {
                id: 13,
                name: 'tag133',
                icon: "icone133",
                type: 13,
                father_id: 1
            }
        ))
    }

    function handleCreateProperty(id: number) {
        dispatch(superTagActions.createSuperTagProperty(
            {
                id: id,
                property: {
                    id: 2,
                    description: "prop2",
                    type: 'I',
                    value: "value2",
                    supertag_id: 1
                }
            }
        ))
    }

    function handleDelete(id: number) {
        dispatch(superTagActions.deleteSuperTag(id))
    }

    function handleDeleteProperty(id: number) {
        dispatch(superTagActions.deleteSuperTagProperty({ supertagId: id, propertyId: 2 }))
    }

    function handleReplaceProperty(id: number) {

        dispatch(superTagActions.replaceSuperTagProperties(
            {
                supertagId: id,
                property: {
                    id: 2,
                    description: "prop22",
                    type: 'I',
                    value: "value22",
                    supertag_id: 1
                }
            }
        ))
    }

    function handleSelectProperty(id: number) {

        dispatch(propertyActions.selectProperty(
            {
                    id: 2,
                    description: "prop22",
                    type: 'I',
                    value: "value22",
                    supertag_id: 1
                }
            
        ))
    }

    function handleunselectProperty() {
        dispatch(propertyActions.unselectProperty())
    }

    

    return <div className="flex min-h-screen w-full gap-10 items-center justify-between p-24 text-white">
        <ul className=' flex-1'>{renderSuperTags()}</ul>
        <div className='  flex-1'><button onClick={() => handleSelectProperty(1)}>+prop+</button><button onClick={() => handleunselectProperty()}>-prop-</button>
            {selectedProperty && <div>
                    <p>{selectedProperty?.description}</p>
                    <p>{selectedProperty?.type}</p>
                    <p>{selectedProperty?.value}</p>
                </div>
                
                }
        
        </div>

    </div>
}