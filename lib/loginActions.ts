
"use server"

import { validateLogin } from "@/util/validate/login"
import { ValidateLoginMessagesType } from "@/types/auth"

export async function checkAuth(prevState: ValidateLoginMessagesType, formData: FormData): Promise<ValidateLoginMessagesType | undefined>{
    const user = formData.get('user') as string
    const password = formData.get('password')  as string

    const validatedLogin = await validateLogin(user, password)
    
    if(validatedLogin.userError || validatedLogin.passwordError){
        return validatedLogin
    }else{
         
    }
    
}