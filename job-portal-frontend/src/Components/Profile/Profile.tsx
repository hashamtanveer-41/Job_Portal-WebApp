import React, {useEffect, useState} from 'react'
import {ActionIcon, Avatar, Divider, FileInput, Indicator, Overlay} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, uploadProfileImage} from "../../Store/action";
import Info from "./Info";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import {IconEdit, IconPencil} from "@tabler/icons-react";
import {useHover} from "@mantine/hooks";

const Profile = () => {

    const {user} = useSelector((state:any)=> state.auth);
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        (dispatch as any)(getProfile(user))
    }, []);
    const {hovered, ref} = useHover();
    const handleFileChange = (file: File | null) => {
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);
        (dispatch as any)(uploadProfileImage(formData ,profile));
    }
    return (
        <div className="w-4/5 mx-auto">
            <div className="">
                <div className="relative mb-6">
                    <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-2xl"/>
                    <div ref={ref} className=" flex items-center justify-center absolute -bottom-1/3 left-3">
                            <Avatar
                                className="!w-48 !h-48 bg-mine-shaft-950 border-8 rounded-full mb-3"
                                src={profile.image}
                                alt=""
                            />
                        {
                            hovered &&
                            <Overlay
                                className="!rounded-full"
                                color="#000"
                                backgroundOpacity={0.75}
                            />
                        }
                        {
                            hovered &&
                            <IconEdit className="absolute z-[300] !w-16 !h-16"/>
                        }
                        {hovered &&
                            <FileInput
                                onChange={handleFileChange}
                                className="absolute [&_*]:!rounded-full [&_*]:!h-full z-[301] w-full !h-full"
                                variant="transparent"
                                accept="image/png, image/jpeg"
                        />}
                    </div>
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
