import { IconMenu2} from "@tabler/icons-react"
import { Identity } from "../identity"

export function Header(){
    return <header className="flex  justify-center  w-full  border-b border-gray-500 bg-gray-900">
        <span className="flex justify-between items-center max-w-screen-xl w-full min-h-20 px-8 xl:px-0 ">
            <IconMenu2 color="white" size={32}/> <Identity />
        </span>
    </header>
}