
"use client"
import { SelectedRootStateType } from '@/types/SuperTag'
import { useSelector} from 'react-redux'
import Picker from 'emoji-picker-react';
import { useState } from 'react';
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { selectedActions } from '@/store/selected-slice'
import { IconHash, IconSquareXFilled } from '@tabler/icons-react';
export function EditingArea(){
    const dispatch = useDispatch()
    const selected = useSelector((state: SelectedRootStateType) => state.selected.superTag)
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

    return <div className="flex flex-1 bg-black px-6 py-12"> 
                <div className="relative flex gap-3" >
                    <div className={`flex items-center justify-center relative w-12 h-12 cursor-pointer ${!selected.icon && "bg-white"}` } onClick={handleShowPicker}>
                        {selected.icon && <Image src={selected.icon} alt="emogin" fill/> || <IconHash size={40}/>}
                    </div>
                    {<dialog open={showPicker} className="absolute"><span className="flex w-full justify-end p-3 cursor-pointer" onClick={handleShowPicker}><IconSquareXFilled /></span><Picker onEmojiClick={onEmojiClick} /> </dialog>}

                    <input className="text-black h-12 text-3xl p-3"   value={selected.name} onChange={(e)=>handleInput(e)}/>
                    <button >save</button>
                </div>
            
      {/* <div className="flex text-white gap-3" >
            <div className="relative w-12 h-12" onClick={handleShowPicker}>
            {selected.icon && <Image src={selected.icon} alt="emogin" fill/> || <IconHash />}
            {showPicker && <Picker onEmojiClick={onEmojiClick} /> }
        </div> */}
            
            

        

            </div>
}