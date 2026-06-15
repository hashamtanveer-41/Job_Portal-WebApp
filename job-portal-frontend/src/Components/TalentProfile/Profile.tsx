import React, {useEffect, useState} from 'react'
import {IconBriefcase, IconMapPin} from "@tabler/icons-react";
import {Avatar, Button, Divider} from "@mantine/core";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getProfileById, getTalentById} from "../../Store/action";
import {useMediaQuery} from "@mantine/hooks";

const Profile = () => {
    const {id} = useParams();
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const matches =useMediaQuery("(min-width: 475px)")

    useEffect(() => {
        window.scrollTo(0, 0);
        (dispatch as any)(getTalentById(id, setProfile));
    }, [id]);
    return (
        <div className="w-2/3 mt-3 lg-mx:w-full">
            <div className="relative px-5 mb-6">
                <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-2xl xl-max:h-40 w-full xs-mx:h-32"/>
                <div className=" flex items-center md-mx:-bottom-10 sm-mx:-bottom-16 justify-center absolute -bottom-1/3 left-6 ">
                    <Avatar
                        className="!w-48 !h-48 md-mx:!h-40 md-mx:!w-40 sm-mx:!w-36 sm-mx:!h-36 xs-mx:!h-32 xs-mx:!w-32 border-mine-shaft-950 border-8 rounded-full mb-3"
                        src={profile?.image}
                        alt=""
                    />
                </div>
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl xs-mx:text-2xl  font-semibold flex justify-between">
                    {profile.name}
                    <Button color="brightSun.4" size={matches?"sm":"md"} variant="outline" >Message</Button>
                </div>
                <div className="text-xl flex xs-mx:text-base gap-1 items-center  ">
                    <IconBriefcase className="w-5 h-5" stroke={1.5} />
                    {profile?.role}  &bull; {profile.company}
                </div>
                <div className="text-lg flex xs-mx:text-base gap-1 text-mine-shaft-400 items-center">
                    <IconMapPin className="w-5 h-5" stroke={1.5}/> {profile.location}
                </div>
                <div className="text-lg flex gap-1  xs-mx:text-base text-mine-shaft-400 items-center">
                    <IconBriefcase className="w-5 h-5" stroke={1.5}/>Experience: {profile.totalExp}
                </div>
            </div>
            <Divider mx="xs"  my="xl"/>
            <div className="px-3">
                <div className='text-2xl font-semibold mb-3'>About</div>
                <div className="text-sm text-mine-shaft-300 text-justify">
                    {profile.about}
                </div>
            </div>
            <Divider mx="xs"  my="xl"/>
            <div className="px-3">
                <div className='text-2xl font-semibold mb-3'>Skills</div>
                <div className="flex flex-wrap gap-2">
                    {
                        profile?.skills?.map((skill:any, index:any) => (
                            <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-xl text-bright-sun-400 px-3 py-1">
                                {skill}
                            </div>
                        ))
                    }
                </div>
            </div>
            <Divider mx="xs"  my="xl"/>
            <div className="px-3">
                <div className='text-2xl font-semibold mb-5'>Experience</div>
                {
                    profile?.experiences?.map((item:any, index:any) => (
                        <ExperienceCard key={index} {...item} />
                    ))
                }
            </div>
            <Divider mx="xs"  my="xl"/>
            <div className="px-3">
                <div className='text-2xl font-semibold mb-5'>Certifications</div>
                {
                    profile?.certifications?.map((item:any, index:any) => (
                        <div className="mb-10" key={index}>
                            <CertificationCard {...item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Profile;
