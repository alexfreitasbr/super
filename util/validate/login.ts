
import { ValidateLoginMessagesType } from "@/types/auth"
import { validateLoginMessages } from "@/constants/loginValidateMesssages"
import {isEmpty, hasValidEmail, hasNumber, hasUpperCase, hasLowerCase, hasSpecialChar} from './validates'
import {  Error } from '@/messages/authenticate'
export async function validateLogin(user: string, password: string) {

    let newValidateLoginMessages:ValidateLoginMessagesType = {...validateLoginMessages}

    if (isEmpty(user)) {
         newValidateLoginMessages.userError = Error.emptyUser
    }else{
        if(!hasValidEmail(user)) newValidateLoginMessages.userError = Error.email
    }
    
    if (isEmpty(password)) {
        newValidateLoginMessages.passwordError = Error.emptyPassword
    }else{
        let errorList:string[]=[]
        if(password.length < 8) errorList.push((Error.size))
        if(!hasNumber(password)) errorList.push(Error.number)
        if(!hasUpperCase(password)) errorList.push(Error.upperCase)
        if(!hasLowerCase(password)) errorList.push(Error.lowerCase)
        if(!hasSpecialChar(password)) errorList.push(Error.specialChar)
        if(!!errorList.length) newValidateLoginMessages.passwordError = `${Error.password} ${errorList.join(", ")}!`
    }
    
    return newValidateLoginMessages
}

export async function checkAuthentication(user: string, password: string) {
    return true
}