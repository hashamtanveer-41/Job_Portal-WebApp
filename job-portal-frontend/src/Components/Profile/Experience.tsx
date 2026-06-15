import React, {useState} from 'react'
import {ActionIcon} from "@mantine/core";
import {IconDeviceFloppy, IconPencil, IconPlus, IconX} from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import ExperienceInput from "./ExperienceInput";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../Store/action";
import {useMediaQuery} from "@mantine/hooks";

const Experience = () => {
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();
    const matches =useMediaQuery("(max-width: 475px)")

    const [edit, setEdit] = useState(false);
    const [addExp, setAddExp ] = useState(false);

    const handleEdit = ()=>{
            setEdit(!edit);
    }

    // const handleSave = async () => {
    //     setEdit(false)
    //     let updatedProfile = {...profile, experience: };
    //     (dispatch as any)(updateProfile(updatedProfile))
    // }

    return (
        <>
            <div className='text-2xl font-semibold mb-5 flex justify-between'>
                Experience
                <div className="flex gap-2">
                    <ActionIcon
                        onClick={() => setAddExp(true)}
                        size={matches?"md":"lg"}
                        variant="subtle"
                    >
                        <IconPlus className="text-bright-sun-400 h-4/5 w-4/5" />
                    </ActionIcon>
                    <ActionIcon
                        color={edit?"red.8":"brightSun.4"}
                        onClick={() => handleEdit()}
                        size={matches?"md":"lg"}
                        variant="subtle"
                    >
                        {
                            edit?
                                <IconX className=" h-4/5 w-4/5" />
                                :
                                <IconPencil className=" h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>

            </div>
            {
                profile?.experiences?.map((item:any, index:any) => (
                    <ExperienceCard key={index} index={index} {...item}  external={setEdit} edit={edit}/>
                ))
            }
            {addExp && <ExperienceInput add setEdit={setAddExp}/>}
        </>
    )
}
export default Experience
