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
    if (!jwt){
        return <Navigate to="/login" />
    }
    const decoded:any = jwtDecode(jwt.jwt);
    if (allowedRoles && !allowedRoles.includes(decoded.applicantType)) return <Navigate to="/unauthorized"/>

    return children;
}
export default ProtectedRoutes;
