import React, {useEffect, useState} from 'react'
import {IconBriefcase, IconMapPin} from "@tabler/icons-react";
import {Button, Divider} from "@mantine/core";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getProfileById, getTalentById} from "../../Store/action";

const Profile = (props:any) => {
    const {id} = useParams();
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        (dispatch as any)(getTalentById(id, setProfile));
    }, [id]);
    return (
        <div className="w-2/3 mt-3">
            <div className="relative">
                <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-2xl"/>
                <img src={profile.image} alt="banner" className="rounded-full h-48 w-48 -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"/>
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    {profile.name}
                    <Button color="brightSun.4" variant="outline" >Message</Button>
                </div>
                <div className="text-xl flex gap-1 items-center  ">
                    <IconBriefcase className="w-5 h-5" stroke={1.5} />
                    {profile?.role}  &bull; {profile.company}
                </div>
                <div className="text-lg flex gap-1 text-mine-shaft-400 items-center">
                    <IconMapPin className="w-5 h-5" stroke={1.5}/> {profile.location}
                </div>
                <div className="text-lg flex gap-1 text-mine-shaft-400 items-center">
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
