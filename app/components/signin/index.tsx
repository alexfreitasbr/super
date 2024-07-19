import { Input } from "../share/forms/input-field"
import { Button } from "../share/forms/button"


export function SigninWindow() {
    return <div className="flex flex-col w-full max-w-[450px] gap-4">
        <h1 className="text-white text-center text-h3 font-bold">Entre com sua conta</h1>
        <div className="flex flex-col px-5 py-8 gap-4  bg-slate-900 rounded-md border border-slate-800" testdata-id="signin-window">
            <form className="flex flex-col gap-4">
                <Input type="text" title="Nome" label="name" required tooltip="Seu nome como quiser" />
                <Input type="text" title="Email" label="email" required tooltip="Email será usado para login" />
                <Input type="password" title="Senha" label="password" required tooltip="Minímo de 8 caracters,letras, números e caracter especial" />
                <Input type="password" title="Repetir senha" label="password" required />
                <Button label="Registrar"/>
                <Button style="dark" label="Já possui conta?"/>
            </form>
        </div>
    </div>
}
