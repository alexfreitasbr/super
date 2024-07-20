export enum Error{
    emptyUser = "Digite seu email!",
    emptyPassword = "Digite sua senha!",
    repeatPassword = "Deve ser igual á senha acima!",
    email="Digite um email válido!",
    password = "Password deve ter:",
    size = "no mínimo 8 caracteres",
    upperCase = "letra maiúscula",
    lowerCase = "letra minúscula",
    number = "número",
    specialChar = "caracter especial",
    emptyName = "Digite seu nome!",
    authError = "Usuário ou senha não identificado!",
 }

 export enum Labels{
    name = "Nome",
    user = "User",
    email = "Email",
    password = "Senha",
    repeatPassword = "Repetir Senha",
    login="Login",
    register="Registrar",
    goToRegister="Deseja se registrar?",
    goToLogin="Já possui conta?"
 }

 export enum PlaceHolders{
   name = "Entre com seu nome",
   user = "Entre seu usuário",
   email = "Entre com seu email",
   password = "Entre com sua senha",
   passwordRepeat = "Repita sua senha",
}

export enum ToolTips{
   required="Obrigatório",
   name = "Seu nome como quiser",
   toLogin = "Email será usado para login",
   password = "Minímo de 8 caracters, maiúscula, minúscula, números e caracter especial",
}