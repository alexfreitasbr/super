'use client'
import { Input } from "../share/forms/input-field"
import { Button } from "../share/forms/button"
import { checkAuth } from "@/lib/signinActions"
import { useFormState} from 'react-dom';
import { validateLoginMessages } from "@/constants/loginValidateMesssages"
import { Labels, PlaceHolders, ToolTips } from "@/messages/authenticate";

export function SigninPopup() {
    const [state,formAction ] =useFormState(checkAuth,validateLoginMessages)

    return <div className="flex flex-col w-full max-w-[450px] gap-4" testdata-id="signin-popup">
        <h1 className="text-white text-center text-h3 font-bold">Cadastre-se na plataforma </h1>
        <div className="flex flex-col px-5 py-8 gap-4  bg-slate-900 rounded-md border border-slate-800" >
            <form className="flex flex-col gap-4" action={formAction}>
                <Input type="text" title={Labels.name} label="name" placeHolder={PlaceHolders.name} required tooltip={ToolTips.name} message={state?.nameError}/>
                <Input type="text" title={Labels.email} label="user" placeHolder={PlaceHolders.email} required tooltip={ToolTips.toLogin} message={state?.userError}/>
                <Input type="password" title={Labels.password} label="password" placeHolder={PlaceHolders.password} required tooltip={ToolTips.password} message={state?.passwordError}/>
                <Input type="password" title={Labels.repeatPassword} label="repeatPassword" placeHolder={PlaceHolders.passwordRepeat} required message={state?.passwordRepeatError}/>
                <Button label={Labels.register}  type="submit"/>
                <Button style="dark" label={Labels.goToLogin} link="/login"/>
            </form>
        </div>
    </div>
}
