import { Input } from "../share/forms/input-field"
import { Button } from "../share/forms/button"


export function LoginWindow() {
    return <div className="flex flex-col w-full max-w-[450px] gap-4">
        <h1 className="text-white text-center text-h3 font-bold">Entre com sua conta</h1>
        <div className="flex flex-col px-5 py-8 gap-4  bg-slate-900 rounded-md border border-slate-800" testdata-id="login-window">
            <form className="flex flex-col gap-4">
                <Input type="text" title="Email" label="email" required tooltip="ssss" />
                <Input type="text" title="Senha" label="password" required tooltip="ssss" />
                <Button label="login"/>
                <Button style="dark" label="Deseja se registar?"/>

            </form>
        </div>
    </div>
}
