
import { SupertagsType } from '@/types/SuperTag'
import { SuperTagItem } from '../superTagItem'

type SuperTagItemProp = {
    itens: SupertagsType
}

export function SuperTagsItens({ itens }: SuperTagItemProp) {
   
    const renderSuperTags = itens.map((item) => <SuperTagItem key={item.id+item.name} item={item}/>)
        
    return (
        <nav>
           {itens && <ul className="flex flex-col gap-3 text-white text-base ">
                {renderSuperTags}
            </ul>}
        </nav>
    )
}