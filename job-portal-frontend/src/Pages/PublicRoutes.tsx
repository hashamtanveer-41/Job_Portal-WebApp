import React, {JSX} from 'react'
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

interface PublicRoutesProps{
    children: JSX.Element;
}

const PublicRoutes:React.FC<PublicRoutesProps> =({children}) => {
    const jwt = useSelector((state:any)=>state.jwt)
    if (jwt){
        return <Navigate to="/" />
    }
   return children;
}
export default PublicRoutes;
