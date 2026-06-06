import api from "../../Api/api";
import {IconCheck, IconX} from "@tabler/icons-react";
import NotificationUtil from "../../Utils/NotificationUtil";

export const authenticateSignInUser = (sendData:any, navigate:any, setData:any, form:any) => async (dispatch:any) => {
    try {
        const {data} = await api.post("/users/register", sendData);
        dispatch({
            type: "SIGNUP_USER",
            payload: data
        });
        NotificationUtil(
            "Registration Successfull!",
            "Redirecting to Login Page",
            IconCheck,
            "teal",
            "!border-green-500"
        )
        setData(form);
        navigate("/login")
    }catch (error:any){
        console.log(error)
        NotificationUtil(
            "Registration Failed!",
            error.response.data.errorMessage,
            IconX,
            "red",
            "!border-red-500"
        )
    }finally {
    }
}

export const authenticateLoginInUser = (sendData:any, navigate:any, setData:any, form:any) => async (dispatch:any) => {
    try {
        console.log(sendData)
        const {data} = await api.post("/users/login", sendData);
        dispatch({
            type: "LOGIN_USER",
            payload: data
        });
        NotificationUtil(
            "Login Successfull!",
            "Redirecting to Home Page",
            IconCheck,
            "teal",
            "!border-green-500"
        )
        setData(form)
        navigate("/")
    }catch (error:any){
        console.log(error)
        NotificationUtil(
            "Login Failed!",
            error.response.data.errorMessage,
            IconX,
            "red",
            "!border-red-500"
        )
    }finally {
    }
}