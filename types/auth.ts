export type AutenticatedType = boolean

export type AuthType = {
    autenticated: AutenticatedType,
    user:string | null,
    password:string | null,
    name:string | null,
}

export type RootStateType = {
    auth:AuthType
}

export type ValidateLoginMessagesType = {
    userError:string | null,
    passwordError:string | null,
    passwordRepeatError:string | null,
    Autenticated:string | null,
    nameError:string | null,
} 