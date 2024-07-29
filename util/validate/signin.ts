
import { ValidateLoginMessagesType } from "@/types/auth"
import { validateLoginMessages } from "@/constants/loginValidateMesssages"
import { isEmpty, hasValidEmail, hasNumber, hasUpperCase, hasLowerCase, hasSpecialChar } from './validates'
import { Error } from '@/messages/authenticate'
export async function validateSignin(name: string, user: string, password: string, repeatPassword: string) {

    let newValidateSigninMessages: ValidateLoginMessagesType = { ...validateLoginMessages }

    if (isEmpty(name)) {
        newValidateSigninMessages.nameError = Error.emptyName
    }
    if (isEmpty(user)) {
        newValidateSigninMessages.userError = Error.emptyUser
    } else {
        if (!hasValidEmail(user)) newValidateSigninMessages.userError = Error.email
    }

    if (isEmpty(password)) {
        newValidateSigninMessages.passwordError = Error.emptyPassword
    } else {
        let errorList: string[] = []
        if (password.length < 8) errorList.push((Error.size))
        if (!hasNumber(password)) errorList.push(Error.number)
        if (!hasUpperCase(password)) errorList.push(Error.upperCase)
        if (!hasLowerCase(password)) errorList.push(Error.lowerCase)
        if (!hasSpecialChar(password)) errorList.push(Error.specialChar)
        if (!!errorList.length) newValidateSigninMessages.passwordError = `${Error.password} ${errorList.join(", ")}!`
    }

    if (isEmpty(repeatPassword)) {
        newValidateSigninMessages.passwordRepeatError = Error.emptyPassword
    } else {
        if (password !== repeatPassword) {
            newValidateSigninMessages.passwordRepeatError = Error.repeatPassword
        }
    }

    return newValidateSigninMessages
}

export async function checkAuthentication(user: string, password: string) {
    return true
}