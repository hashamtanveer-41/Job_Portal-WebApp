export const signUpValidation= (name: string , value: string)=>{
    switch (name) {
        case "name":
            if (value.length === 0) return "Name is required"
            return ""
        case "email":
            if (value.length === 0) return "Email is required"
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email is invalid."
            return ""
        case "password":
            if (value.length < 8 || value.length > 15) return "Password must be between 8 and 15 characters long.";
            if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter.";
            if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter.";
            if (!/\d/.test(value)) return "Password must contain at least one number.";
            if (!/[@$!%*?&]/.test(value)) return "Password must contain at least one special character.";
            if (/[^A-Za-z\d@$!%*?&]/.test(value)) return "Password contains invalid characters.";
            return "";
        default:
            return "";
    }

}
export const loginValidation= (name: string , value: string)=>{
    switch (name) {
        case "email":
            if (value.length === 0) return "Email is required"
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email is invalid."
            return ""
        case "password":
            if (value.length < 8 || value.length > 15) return "Password must be between 8 and 15 characters long.";
            if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter.";
            if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter.";
            if (!/\d/.test(value)) return "Password must contain at least one number.";
            if (!/[@$!%*?&]/.test(value)) return "Password must contain at least one special character.";
            if (/[^A-Za-z\d@$!%*?&]/.test(value)) return "Password contains invalid characters.";
            return "";
        default:
            return "";
    }

}