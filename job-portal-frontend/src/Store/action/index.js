import api from "../../Api/api";

export const authenticateSignInUser = (sendData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.post("/users/register", sendData);
        dispatch({
            type: "SIGNUP_USER",
            payload: data
        });
        navigate("/login")
    }catch (error){
        console.log(error)
    }finally {
    }
}

export const authenticateLoginInUser = (sendData, navigate) => async (dispatch) => {
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