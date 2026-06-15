import React from 'react'
import {IconAnchor, IconArrowLeft} from "@tabler/icons-react";
import SignUp from "../Components/SignUpLogin/SignUp";
import Login from "../Components/SignUpLogin/Login";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "@mantine/core";

const SignUpPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden sm-mx:overflow-y-auto relative">
            <Button className="!absolute z-[10]  left-5" onClick={()=> navigate("/")} leftSection={<IconArrowLeft size={20} />} color="brightSun.4" my="md" variant="outline" autoContrast>Home</Button>
            <div className={`w-[100vw] transition-all duration-300 ease-in-out h-[100vh] flex [&>*]:flex-shrink-0 ${location.pathname=="/signup"? "-translate-x-1/2 sm-mx:-translate-x-full" :"translate-x-0"}`}>
                <Login />
                <div className={`w-1/2 h-full transition-all sm-mx:hidden sm-mx:min-h-full ease-in-out duration-1000 ${location.pathname=="/signup"? "rounded-r-[200px]":"rounded-l-[200px]"}  bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col`}>
                    <div className="flex gap-1 items-center text-bright-sun-400">
                        <IconAnchor className="h-16 w-16" stroke={2.5}/>
                        <div className="text-6xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl font-semibold">
                            JobHook
                        </div>
                    </div>
                    <div className="text-2xl bs-mx:text-xl md-mx:text-lg font-semibold text-mine-shaft-200">
                        Find the job made for you
                    </div>
                </div>
                <SignUp />
            </div>
        </div>
    )
}
export default SignUpPage
