import React, {JSX} from 'react'
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

interface ProtectedRouteProps{
    children: JSX.Element;
    allowedRoles?: string[];
}

const ProtectedRoutes:React.FC<ProtectedRouteProps> =({children, allowedRoles}) => {
    const jwt = useSelector((state:any)=>state.jwt)
    if (!(jwt.jwt)){
        return <Navigate to="/login" />
    }
    const {user}= useSelector((state:any)=>state.auth)
    if (allowedRoles && !allowedRoles.includes(user.accountType)) return <Navigate to="/unauthorized"/>

    return children;
}
export default ProtectedRoutes;
