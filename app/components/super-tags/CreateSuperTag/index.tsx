
import { IconPlus } from "@tabler/icons-react"
import { Button } from "../../share/forms/button"
import { useSelector } from 'react-redux'
import { selectedActions } from '@/store/selected-slice'
import { useDispatch } from 'react-redux'
import { SelectedRootStateType } from "@/types/SuperTag"
import { SelectedInitalState } from "@/constants/selectedInitial"
export function CreateSuperTag() {
    const dispatch = useDispatch()
    const selected = useSelector((state: SelectedRootStateType) => state.selected.superTag) 
    function handleCreate() {
        const  fatherId  = selected.id ? selected.id : null
        dispatch(selectedActions.selectSuperTag({...SelectedInitalState.superTag}))
        dispatch(selectedActions.setId(-1))
        dispatch(selectedActions.setName("Sem nome"))
        dispatch(selectedActions.setFather(fatherId))
    }

    return (
        <span onClick={handleCreate}>
            <Button style="dark">
                <IconPlus /><span>Novo supertag</span>
            </Button>
        </span>
    )
}