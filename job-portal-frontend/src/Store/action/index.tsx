import api from "../../Api/api";
import  {errorNotification, successNotification} from "../../Utils/NotificationUtil";
import {removeItem, setItem} from "../../Utils/LocalStorageUtils";
import {jwtDecode} from "jwt-decode";

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
            error
        )
    }finally {
        setLoading(false)
    }
}

export const authenticateLoginInUser = (sendData:any, navigate:any, setData:any, form:any, setLoading:any) => async (dispatch:any) => {
    try {
        const {data: jwtData} = await api.post("/auth/login", sendData);
        localStorage.setItem("jwt", jwtData.jwt);
        dispatch({ type: "SET_JWT", payload: jwtData.jwt });

        const {data: userData} = await api.post("/users/login", sendData);
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch({ type: "LOGIN_USER", payload: userData });

        successNotification("Login Successfully!", "Redirecting to Home Page");
        setData(form);
        navigate("/");
    } catch (error:any) {
        errorNotification("Login Failed!", error);
    } finally {
        setLoading(false);
    }
}

export const sendOTP = (email:any, setOTPSent:any, setOTPSending:any, setResendLoader:any, interval:any) => async (dispatch:any) => {
    try {
        setOTPSending(true)
        const {data} = await api.post(`/users/sendOTP/${email}`, email);
        successNotification("OTP Request", "OTP sent Successfully!",)
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
            error
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
            error
        )
    }finally {
        setOTPSending(false)
    }
}

export const logout = (navigate:any) => async (dispatch:any) => {
    try {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        localStorage.removeItem("profile");
        dispatch({ type: "LOGOUT_USER" });
        dispatch({ type: "REMOVE_JWT" });
        dispatch({ type: "GET_PROFILE", payload: null });

        successNotification("Logout Successfully", "Redirecting to login page");
        navigate("/login");
    } catch (error:any) {
        errorNotification("Logout failed", error);
    }
}

export const getProfile = (users:any) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/profiles/${users.id}`);
        setItem("profile", data);
        dispatch({
            type: "GET_PROFILE",
            payload: data
        });
    }catch (error:any){
        console.log(error)
    }
}

export const getProfileById = (usersId:any, setProfile:any) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/profiles/${usersId.applicantId}`);
        setProfile(data)
        console.log(data)
    }catch (error:any){
        console.log(error)
    }
}

export const getTalentById = (usersId:any, setProfile:any) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/profiles/${usersId}`);
        setProfile(data)
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
        errorNotification("Error!", error)
    }
}
export const uploadProfileImage = (formData:any, profile:any) => async (dispatch:any) => {
    try {
        const {data} = await api.put(`/profiles/${profile.id}/image`, formData);
        getProfile(profile.id);
        successNotification("Success","Profile Image Updated Successfully")
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }
}

export const postJob = (formData:any, navigate:any = null, message:any=null) => async (dispatch:any) => {
    try {
        const {data} = await api.post(`/jobs/post`, formData);
        successNotification("Success",message?message:"Job Posted Successfully")
       if (navigate!=null) navigate(`/posted-jobs/${data.id}`)
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }
}

export const getAllJobs = (setJobList:any, setShowList:any=null, user:any=null) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/jobs`);
        setJobList(data.filter((job:any)=>job.jobStatus=="ACTIVE"))
        if (setShowList) {
            if (!user?.id) {
                setShowList([]);
                return;
            }
            setShowList(data.filter((job: any) =>
                job.applicants?.some((applicant: any) =>
                    applicant.applicantId == user.id && applicant.applicationStatus === "APPLIED"
                )
            ));
        }
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }
}

export const getJobWithId = (setJob:any, id:any, form:any=null, setEditorData:any=null) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/jobs/job/${id}`);
        setJob(data)
        if (form!=null)form.setValues(data);
        if (setEditorData!=null)setEditorData(data.description);
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }
}

export const applyJob = (formData:any, navigate:any, id:any) => async (dispatch:any) => {
    try {
        const {data} = await api.post(`/jobs/apply/${id}`, formData);
        successNotification("Success","You have applied for the job")
        navigate("/job-history")
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }finally {

    }
}

export const getJobPostedBy = (userId:any, id:any,  setJob:any, setJobList:any=null, navigate:any=null) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/jobs/jobBy/${userId}`);
        if (data && data.length > 0 && Number(id)==0) {
            if (navigate){
                navigate(`/posted-jobs/${data[0].id}`)
            }
        }
        if (data && data.length > 0) {
            let singleJob = data.find((item: any) => (item.id) == (id));
            setJob(singleJob);
        }
        if (setJobList !== null) {
            setJobList(data);
        }
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }finally {

    }
}

export const changeApplicationStatus = (application:any, status:any) => async (dispatch:any) => {
    try {
        const {data} = await api.post(`/jobs/appStatus`, application);
        if (status=="INTERVIEW") successNotification("Interview Scheduled","Interview Scheduled Successfully")
        else if (status=="OFFERED") successNotification("Offered","Offer had been sent successfully.")
        else if (status=="REJECTED") successNotification("Rejected","Applicant had been rejected")
        window.location.reload();
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }finally {

    }
}

export const getAllProfiles = (setTalent:any) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/profiles`);
        setTalent(data);
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }
}

export const getNotifications = (id:any, setNotifications:any) => async (dispatch:any) => {
    try {
        const {data} = await api.get(`/notification/${id}`);
        setNotifications(data);
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }
}

export const updateNotification = (id:any) => async (dispatch:any) => {
    try {
        const {data} = await api.put(`/notification/${id}`);
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }
}

export const subscribeToUpdates = () => async (dispatch:any) => {
    try {
        successNotification("Success", "You have successfully Subscribed!")
    }catch (error:any){
        console.log(error)
        errorNotification("Error!", error)
    }
}
