
"use client"
import { SelectedRootStateType } from '@/types/SuperTag'
import { useSelector} from 'react-redux'
import Picker from 'emoji-picker-react';
import { useState } from 'react';
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { selectedActions } from '@/store/selected-slice'
import { IconHash, IconSquareXFilled } from '@tabler/icons-react';
import { superTagActions } from '@/store/supertag-slice';

export function EditingArea(){
    const dispatch = useDispatch()
    const selected = useSelector((state: SelectedRootStateType) => state.selected.superTag)
    const selected2 = useSelector((state) => state)


    const [showPicker, setShowPicker] = useState(false);
    
    const onEmojiClick = (event, emojiObject) => {
        setShowPicker((showPicker) => !showPicker)
        dispatch(selectedActions.setIcon(
            event.imageUrl
        ))
    }

    const handleShowPicker = () => {
        setShowPicker((showPicker) => !showPicker)
    }

    const handleInput = (e) => {
        dispatch(selectedActions.setName(
            e.target.value
        ))
    }

    const handleSave = () => {
       
        if(selected.id === -1){
            const newId = Math.floor(Math.random() * 1000) + 1
            dispatch(superTagActions.createSuperTag({...selected,id:newId}))
        }else{
            dispatch(superTagActions.replaceSuperTag(selected))
        }
    }

    const handleReset = () => {
            dispatch(selectedActions.resetSuperTag())
    }
    console.log(">>>>>",selected)
    console.log("++++",selected2.superTag)
    if(!selected.id) return null
    return <div className="flex flex-1 bg-black px-6 py-12"> 
                <div className="relative flex gap-3" >
                    <div className={`flex items-center justify-center relative w-12 h-12 cursor-pointer ${!selected.icon && "bg-white"}` } onClick={handleShowPicker}>
                        {selected.icon && <Image src={selected.icon} alt="emogin" fill/> || <IconHash size={40}/>}
                    </div>
                    {<dialog open={showPicker} className="absolute"><span className="flex w-full justify-end p-3 cursor-pointer" onClick={handleShowPicker}><IconSquareXFilled /></span><Picker onEmojiClick={onEmojiClick} /> </dialog>}

                    <input className="text-black h-12 text-3xl p-3"   value={selected.name} onChange={(e)=>handleInput(e)}/>
                    <div onClick={handleSave} className="bg-white text-black h-10 "  >Save</div>
                    <div onClick={handleReset} className="bg-white text-black h-10 "  >Reset</div>
                </div>
            </div>
}