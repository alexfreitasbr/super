
type SideBarChildren = {
    children: React.ReactNode
}

export function SideBar({ children }:SideBarChildren ) {
    return <aside className=" flex flex-col gap-8 min-w-80 border-r border-gray-500 p-8 bg-black">
       {children}
    </aside>
}
