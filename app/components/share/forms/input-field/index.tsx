"use client"
import { useState } from "react"
import { ToolTips} from "@/messages/authenticate";
import { IconAlertCircleFilled, IconHelpCircleFilled } from '@tabler/icons-react';

type InputProps = {
    message?: string | null
    label: string
    title?: string
    placeHolder?: string
    required?: boolean
    tooltip?: string
    type: "text" | "password" | "email"
}

export function Input({ label, placeHolder, title, type = "text", message, required, tooltip }: InputProps) {
    const [inputContent, setInputContent] = useState<string>("")

    function handleInput(e: string) {
        setInputContent(e)
    }

    let borderColor = "border-slate-800"
    let labelColor = "text-white"
    let iconsColor = "gray"
    let requiredColor = "text-gray-400"

    if (message) {
        borderColor = "border-red-500"
        labelColor = "text-red-500"
        iconsColor = "red"
        requiredColor = "border-red-500"
    }

    let labelIcon

    if (required) labelIcon = <IconAlertCircleFilled color={iconsColor} size={20} />
    if (message) labelIcon = <IconAlertCircleFilled color={iconsColor} size={20} />


    let labelIconPopUp 
    if (labelIcon && required) labelIconPopUp = <span className="group  flex cursor-pointer items-center gap-1">
       { labelIcon}
        <span className={`invisible group-hover:visible rounded-md ${requiredColor} text-base min-w-max  transition-all duration-400 text-center`}>
        { ToolTips.required}
        </span>
    </span>

    let toolTipPopUp

    if (tooltip) toolTipPopUp = <span className="group absolute p-3  top-0 right-0 z-50 cursor-pointer">
        <IconHelpCircleFilled color={iconsColor} size={20} />
        <span className="absolute invisible group-hover:visible  -top-7 right-0 rounded-md  text-black bg-white py-1 px-2 min-w-max text-xs font-semibold transition-all duration-400 text-center  ">
            {tooltip}
        </span>
    </span>


    return <>
        <label htmlFor={label} className="flex flex-col gap-1">
            <p className={`flex items-center  text-base ${labelColor} gap-2`}>{title}{labelIconPopUp}</p>
            <span className="relative">
                <input className={`w-full bg-black border ${borderColor} rounded-md p-2  ${labelColor} text-base `}
                    type={type} name={label} placeholder={placeHolder} value={inputContent}
                    onChange={(e) => handleInput(e.target.value)} />
                {toolTipPopUp}
            </span>

            {message && <p className="text-base text-red-500">{message}</p>}
        </label>
    </>
}