import React, {useEffect, useState} from 'react'
import {IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus} from "@tabler/icons-react";
import {ActionIcon, Button, Divider, TagsInput, Textarea} from "@mantine/core";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";
import SelectInput from "../PostJob/SelectInput";
import fields from "../../../public/Data/Profile";
import ExperienceInput from "./ExperienceInput";
import CertificationsInput from "./CertificationsInput";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../Store/action";
import Info from "./Info";
import About from "./About";

const Profile = () => {

    const {user} = useSelector((state:any)=> state.auth);
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        (dispatch as any)(getProfile(user))
    }, []);

    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [skills , setSkills] = useState(profile.skills);
    const [addExp , setAddExp] = useState(false);
    const [addCerti , setAddCerti] = useState(false);

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
                    <div className='text-2xl font-semibold mb-3 flex justify-between'>
                        Skills
                        <ActionIcon
                            onClick={() => handleEdit(2)}
                            size="lg"
                            variant="subtle"
                        >
                            {
                                edit[2]?
                                    <IconDeviceFloppy className="text-bright-sun-400 h-4/5 w-4/5" />
                                    :
                                    <IconPencil className="text-bright-sun-400 h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                    {
                        edit[2]?
                            <TagsInput
                                value={skills}
                                onChange={setSkills}
                                withAsterisk
                                label="Skills"
                                placeholder="Add Skill"
                                clearable acceptValueOnBlur
                                splitChars={[',', ' ', '|']}
                            />
                            :
                            <div className="flex flex-wrap gap-2">
                                {
                                    profile?.skills.map((skill:any, index:any) => (
                                        <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-xl text-bright-sun-400 px-3 py-1">
                                            {skill}
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
                <Divider mx="xs"  my="xl"/>
                <div className="px-3">
                    <div className='text-2xl font-semibold mb-5 flex justify-between'>
                        Experience
                        <div className="flex gap-2">
                            <ActionIcon
                                onClick={() => setAddExp(true)}
                                size="lg"
                                variant="subtle"
                            >
                                <IconPlus className="text-bright-sun-400 h-4/5 w-4/5" />
                            </ActionIcon>
                            <ActionIcon
                                onClick={() => handleEdit(3)}
                                size="lg"
                                variant="subtle"
                            >
                                {
                                    edit[3]?
                                        <IconDeviceFloppy className="text-bright-sun-400 h-4/5 w-4/5" />
                                        :
                                        <IconPencil className="text-bright-sun-400 h-4/5 w-4/5" />
                                }
                            </ActionIcon>
                        </div>

                    </div>
                    {
                        profile?.experiences?.map((item:any, index:any) => (
                            <ExperienceCard key={index} {...item} edit={edit[3]}/>
                        ))
                    }
                    {addExp && <ExperienceInput add setEdit={setAddExp}/>}
                </div>
                <Divider mx="xs"  my="xl"/>
                <div className="px-3">
                    <div className='text-2xl font-semibold mb-5 flex justify-between'>
                        Certifications
                        <div className="flex gap-2">
                            <ActionIcon
                                onClick={() => setAddCerti(true)}
                                size="lg"
                                variant="subtle"
                            >
                                <IconPlus className="text-bright-sun-400 h-4/5 w-4/5" />
                            </ActionIcon>
                            <ActionIcon
                                onClick={() => handleEdit(4)}
                                size="lg"
                                variant="subtle"
                            >
                                {
                                    edit[4]?
                                        <IconDeviceFloppy className="text-bright-sun-400 h-4/5 w-4/5" />
                                        :
                                        <IconPencil className="text-bright-sun-400 h-4/5 w-4/5" />
                                }
                            </ActionIcon>
                        </div>
                     </div>
                    {
                        profile?.certifications.map((item:any, index:any) => (
                            <div className="mb-10" key={index}>
                                <CertificationCard {...item} edit={edit[4]}/>
                            </div>
                        ))
                    }
                    {
                        addCerti &&   <CertificationsInput setEdit={setAddCerti}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Profile;
