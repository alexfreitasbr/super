export function isEmpty(value: string | null) {
    if (!value || value.trim() === "") return true
    return false
}

export function hasValidEmail(value: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(value);
  }

export function hasNumber(value: string) {
    return value.match(/\d+/) !== null;
}

export function hasUpperCase(value: string) {
    return /[A-Z]/.test(value);
}

export function hasLowerCase(value: string) {
    return /[a-z]/.test(value);
}

export function hasSpecialChar(value: string) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value) 
}
