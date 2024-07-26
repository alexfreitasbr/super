'use client'
import Link from "next/link"
import { useFormStatus } from "react-dom"
type ButtonProps = {
    style?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark" | "link"
    children: React.ReactNode
    type?: "submit" | "reset" | "button" 
    disabled?: boolean
    link?: string
}

export function Button({ style = "primary", children, type="button", disabled=false, link }: ButtonProps) {
    const {pending } = useFormStatus()

    const btnTypes: Record<string, string> = {
        "primary": "text-white bg-indigo-500 hover:bg-indigo-600",
        "secondary": "text-white bg-gray-500 hover:bg-gray-600",
        "success": "text-white bg-green-500 hover:bg-green-600",
        "warning": "text-white bg-yellow-500 hover:bg-yellow-600",
        "danger": "text-white bg-red-500 hover:bg-red-600",
        "info": "text-white bg-blue-500 hover:bg-blue-600",
        "light": "text-black bg-gray-100 hover:bg-gray-300",
        "dark": "text-white bg-[#000] hover:bg-gray-700",
        "link": "text-blue-500 bg-white hover:bg-gray-300",
    };

    function btnStyle(typeBtn: string): string {
        return btnTypes[typeBtn] || "text-white bg-indigo-500 hover:bg-indigo-600";
    }

    if(link ) return <Link href={link} className={`w-full p-2 bg-slate-900 rounded-md border text-base text-center ${btnStyle(style)} disabled:opacity-50 transition-all duration-400`} data-testid="link-btn">
        <span className="flex gap-2"> { children } </span>
        </Link>

    return <button type={type} disabled={disabled || pending} className={`flex justify-center w-full p-2 rounded-md border border-slate-800 text-base ${btnStyle(style)} disabled:opacity-50 transition-all duration-400`} data-testid="action-btn">
        <span className="flex gap-2"> { pending ? "Submitting...": children } </span>
        </button>;
}