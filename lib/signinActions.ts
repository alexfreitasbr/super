
"use server"

import { validateSignin } from "@/util/validate/signin"
import { ValidateLoginMessagesType } from "@/types/auth"

export async function checkAuth(prevState: ValidateLoginMessagesType, formData: FormData): Promise<ValidateLoginMessagesType | undefined>{
    const name = formData.get('name') as string
    const user = formData.get('user') as string
    const password = formData.get('password')  as string
    const repeatPassword = formData.get('repeatPassword')  as string

    const validatedLogin = await validateSignin(name, user, password, repeatPassword)
    
    if(validatedLogin.nameError || validatedLogin.userError || validatedLogin.passwordError || validatedLogin.passwordRepeatError){
        return validatedLogin
    }else{
         
    }
    
}