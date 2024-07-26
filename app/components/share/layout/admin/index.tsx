import { IconUser, IconSettings} from "@tabler/icons-react"

export function AdminBoard() {
    return <div className="w-full text-white text-base font-semibold">
       <section className="flex flex-col gap-2">
            <span className="flex gap-2"><IconUser /><p>Meu Perfil</p></span>
            <span className="flex gap-2"><IconSettings /><p>Configurações</p></span>
        </section> 
    </div>
}
