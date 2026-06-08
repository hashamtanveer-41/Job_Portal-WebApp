import React, {useEffect, useState} from 'react'
import { Divider} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../Store/action";
import Info from "./Info";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";

const Profile = () => {

    const {user} = useSelector((state:any)=> state.auth);
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        (dispatch as any)(getProfile(user))
    }, []);

    const [edit, setEdit] = useState([false, false, false, false, false]);

    const handleEdit = (index:any) => {
        if (index ===4 ) setAddCerti(!addCerti)
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }

    return (
        <div className="w-4/5 mx-auto">
            <div className="">
                <div className="relative">
                    <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-2xl"/>
                    <img src="/avatar.png" alt="banner" className="rounded-full h-48 w-48 -bottom-1/4 absolute left-3 border-mine-shaft-950 border-8"/>
                </div>
                <div className="px-3 mt-16">
                    <Info />
                </div>
                <Divider mx="xs"  my="xl"/>
                <div className="px-3">
                    <About />
                </div>
                <Divider mx="xs"  my="xl"/>
                <div className="px-3">
                    <Skills />
                </div>
                <Divider mx="xs"  my="xl"/>
                <div className="px-3">
                    <Experience />
                </div>
                <Divider mx="xs"  my="xl"/>
                <div className="px-3">
                    <Certificate />
                </div>
            </div>
        </div>
    )
}
export default Profile;
