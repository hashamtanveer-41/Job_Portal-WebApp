import api from "../../Api/api";

export const authenticateSignInUser = (sendData) => async (dispatch) => {
    try {
        console.log(sendData)
        const {data} = await api.post("/users/register", sendData);
        dispatch({
            type: "LOGIN_USER",
            payload: data
        });
    }catch (error){
        console.log(error)
    }finally {
    }
}