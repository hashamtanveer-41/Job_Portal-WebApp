import api from "../../Api/api";
import  {errorNotification, successNotification} from "../../Utils/NotificationUtil";
import {removeItem, setItem} from "../../Utils/LocalStorageUtils";

export const authenticateSignInUser = (sendData:any, navigate:any, setData:any, form:any, setLoading:any) => async (dispatch:any) => {
    try {
        const {data} = await api.post("/users/register", sendData);
        dispatch({
            type: "SIGNUP_USER"
        });
        successNotification(
            "Registration Successfully!",
            "Redirecting to Login Page"
        )
        setData(form);
        navigate("/login")
    }catch (error:any){
        console.log(error)
        errorNotification(
            "Registration Failed!",
            error.response.data.errorMessage
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
        successNotification(
            "Login Successfully!",
            "Redirecting to Home Page"
        )
        setData(form)
        navigate("/")
    }catch (error:any){
        console.log(error)
        errorNotification(
            "Login Failed!",
            error.response.data.errorMessage
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
        successNotification("OTP Request", "OTP sent Successfully!",
        )
        setOTPSent(true)
        setResendLoader(true)
        interval.start();
    }catch (error:any){
        console.log(error)
        errorNotification("OTP Request", error)
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
        successNotification("OTP Verification", "OTP verified Successfully!")
        setVerified(true)
    }catch (error:any){
        console.log(error)
        errorNotification(
            "OTP Verification",
            error.response.data.errorMessage
        )
    }
}

export const resetPassword = (sendData:any, close:any, setOTPSending:any) => async (dispatch:any) => {
    try {
        const {data} = await api.post(`/users/forgetPassword`, sendData);
        successNotification(
            "Password Reset",
            "Your password has reset successfully"
        )
        close(true)
    }catch (error:any){
        console.log(error)
        errorNotification(
            "Password Reset",
            error.response.data.errorMessage
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
        successNotification(
            "Logout Successfully",
            "Your are being redirect to login page"
        )
        navigate("/login")
    }catch (error:any){
        console.log(error)
        errorNotification(
            "Logout failed",
            error.response.data.errorMessage
        )
    }
}

export const getProfile = (users:any) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/profiles/${users.profileId}`);
        setItem("profile", data);
        dispatch({
            type: "GET_PROFILE",
            payload: data
        });
    }catch (error:any){
        console.log(error)
    }
}

export const updateProfile = (profile:any, message:any = null) => async (dispatch:any) => {
    try {
        const {data} = await api.put(`/profiles`, profile);
        dispatch({
            type: "UPDATE_PROFILE",
            payload: data,
        });
        getProfile(profile.id);
        successNotification("Success", message? message :"Profile Updated Successfully")
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error.response.data.errorMessage)
    }
}
export const uploadProfileImage = (formData:any, profile:any) => async (dispatch:any) => {
    try {
        const {data} = await api.put(`/profiles/${profile.id}/image`, formData);
        getProfile(profile.id);
        successNotification("Success","Profile Image Updated Successfully")
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error.response.data.errorMessage)
    }
}

export const postJob = (formData:any, navigate:any) => async (dispatch:any) => {
    try {
        const {data} = await api.post(`/jobs/post`, formData);
        successNotification("Success","Job Posted Successfully")
        navigate("/posted-jobs")
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error.response.data.errorMessage)
    }
}
