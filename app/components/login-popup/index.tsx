'use client'
import { Button } from "../share/forms/button"
import { Input } from "../share/forms/input-field"
import { checkAuth } from "@/lib/loginActions"
import { useFormState} from 'react-dom';
import { validateLoginMessages } from "@/constants/loginValidateMesssages"
import { Labels,PlaceHolders } from "@/messages/authenticate";

// import { useDispatch}  from 'react-redux'
// import { authActions } from '@/store/auth'



export function LoginPopup() {
    const [state,formAction ] =useFormState(checkAuth,validateLoginMessages)


    
    // const removeItemHandler = () => {
    //     dispatch(cartListActions.removeCard(
    //       {
    //         itemId,
    //         title,
    //         price,
    //         quantity,
    //         total
    //       }
    //     ))
    //   }

    return <div className="flex flex-col w-full max-w-[450px] gap-4" testdata-id="login-popup">
        <h1 className="text-white text-center text-h3 font-bold">Entre com sua conta</h1>
        <div className="flex flex-col px-5 py-8 gap-4  bg-slate-900 rounded-md border border-slate-800" >
            <form className="flex flex-col gap-4" action={formAction}>
                <Input type="text" title={Labels.email} placeHolder={PlaceHolders.user} label="user" required message={state?.userError} />
                <Input type="text" title={Labels.password} placeHolder={PlaceHolders.password} label="password" required message={state?.passwordError}/>
                {/* <Button label={Labels.login} type="submit"/>
                <Button style="dark" label={Labels.goToRegister} link="/signin"/> */}
            </form>
        </div>
    </div>
}
