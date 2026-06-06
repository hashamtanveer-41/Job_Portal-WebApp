import api from "../../Api/api";
import {notifications} from "@mantine/notifications";
import {IconCheck, IconCross, IconX} from "@tabler/icons-react";

export const authenticateSignInUser = (sendData:any, navigate:any, setData:any, form:any) => async (dispatch:any) => {
    try {
        const {data} = await api.post("/users/register", sendData);
        dispatch({
            type: "SIGNUP_USER",
            payload: data
        });
        notifications.show({
            title: "Registration Successfull!",
            message: "Redirecting to Login Page",
            withCloseButton: true,
            icon: <IconCheck style={{width: "90%", height: "90%"}}/> ,
            color:"teal",
            withBorder: true,
            className: "!border-green-500"
        })
        setData(form);
        navigate("/login")
    }catch (error:any){
        console.log(error)
        notifications.show({
            title: "Registration Failed!",
            message: error.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX style={{width: "90%", height: "90%"}}/> ,
            color:"red",
            withBorder: true,
            className: "!border-red-500"
        })
    }finally {
    }
}

export const authenticateLoginInUser = (sendData:any, navigate:any) => async (dispatch:any) => {
    try {
        console.log(sendData)
        const {data} = await api.post("/users/login", sendData);
        dispatch({
            type: "LOGIN_USER",
            payload: data
        });
        navigate("/")
    }catch (error){
        console.log(error)
    }finally {
    }
}