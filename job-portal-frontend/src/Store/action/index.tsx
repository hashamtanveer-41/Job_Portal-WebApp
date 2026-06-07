import api from "../../Api/api";
import {IconCheck, IconX} from "@tabler/icons-react";
import NotificationUtil from "../../Utils/NotificationUtil";
import {getItem, removeItem, setItem} from "../../Utils/LocalStorageUtils";
import {useSelector} from "react-redux";

export const authenticateSignInUser = (sendData:any, navigate:any, setData:any, form:any, setLoading:any) => async (dispatch:any) => {
    try {
        const {data} = await api.post("/users/register", sendData);
        dispatch({
            type: "SIGNUP_USER"
        });
        NotificationUtil(
            "Registration Successfully!",
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
        setLoading(false)
    }
}

export const authenticateLoginInUser = (sendData:any, navigate:any, setData:any, form:any, setLoading:any) => async (dispatch:any) => {
    try {
        console.log(sendData)
        const {data} = await api.post("/users/login", sendData);
        dispatch({
            type: "LOGIN_USER",
            payload: data
        });
        setItem("user", data);
        NotificationUtil(
            "Login Successfully!",
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
        setLoading(false)
    }
}

export const sendOTP = (email:any, setOTPSent:any, setOTPSending:any, setResendLoader:any, interval:any) => async (dispatch:any) => {
    try {
        setOTPSending(true)
        const {data} = await api.post(`/users/sendOTP/${email}`, email);
        dispatch({
            type: "OTP_SENT",
            payload: data
        });
        NotificationUtil(
            "OTP Request",
            "OTP sent Successfully!",
            IconCheck,
            "teal",
            "!border-green-500"
        )
        setOTPSent(true)
        setResendLoader(true)
        interval.start();
    }catch (error:any){
        console.log(error)
        NotificationUtil(
            "OTP Request",
            error.response.data.errorMessage,
            IconX,
            "red",
            "!border-red-500"
        )
    }finally {
        setOTPSending(false)
    }
}

export const verifyOTP = (email:any, otp:any, setVerified:any) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/users/verifyOTP/${email}/${otp}`);
        dispatch({
            type: "OTP_VERIFY",
            payload: data
        });
        NotificationUtil(
            "OTP Verification",
            "OTP verified Successfully!",
            IconCheck,
            "teal",
            "!border-green-500"
        )
        setVerified(true)
    }catch (error:any){
        console.log(error)
        NotificationUtil(
            "OTP Verification",
            error.response.data.errorMessage,
            IconX,
            "red",
            "!border-red-500"
        )
    }
}

export const resetPassword = (sendData:any, close:any, setOTPSending:any) => async (dispatch:any) => {
    try {
        const {data} = await api.post(`/users/forgetPassword`, sendData);
        NotificationUtil(
            "Password Reset",
            "Your password has reset successfully",
            IconCheck,
            "teal",
            "!border-green-500"
        )
        close(true)
    }catch (error:any){
        console.log(error)
        NotificationUtil(
            "Password Reset",
            error.response.data.errorMessage,
            IconX,
            "red",
            "!border-red-500"
        )
    }finally {
        setOTPSending(false)
    }
}

export const logout = (navigate:any) => async (dispatch:any) => {
    try {
        removeItem("user")
        dispatch({
            type: "LOGOUT_USER"
        });
        NotificationUtil(
            "Logout Successfully",
            "Your are being redirect to login page",
            IconCheck,
            "teal",
            "!border-green-500"
        )
        navigate("/login")
    }catch (error:any){
        console.log(error)
        NotificationUtil(
            "Logout failed",
            error.response.data.errorMessage,
            IconX,
            "red",
            "!border-red-500"
        )
    }
}