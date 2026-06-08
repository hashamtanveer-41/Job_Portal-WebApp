import React, {useState} from 'react'
import {ActionIcon} from "@mantine/core";
import {IconBriefcase, IconCheck, IconDeviceFloppy, IconMapPin, IconPencil, IconX} from "@tabler/icons-react";
import SelectInput from "../Profile/SelectInput";
import fields from "../../../public/Data/Profile";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "@mantine/form";
import {updateProfile} from "../../Store/action";

const Info = () => {
    const [edit, setEdit] = useState(false);
    const {user} = useSelector((state:any)=> state.auth);
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    const handleEdit = async ()=>{
       if (!edit){
           form.setValues({role: profile.role, company: profile.company, location: profile.location})
           setEdit(true);
       }else setEdit(false)
    }
    const handleSave = () => {
        let updatedProfile = {...profile, ...form.getValues()};
        (dispatch as any)(updateProfile(updatedProfile))
    }
    const form = useForm({
        mode: 'controlled',
        initialValues: { role: '', company: '', location: "" },
    });

    return (
        <>
        <div className="text-3xl font-semibold flex justify-between">
            {user.name}
            <div>
                {
                    edit &&
                    <ActionIcon
                        color="green.8"
                        onClick={() => handleSave()}
                        size="lg"
                        variant="subtle"
                    >
                        <IconCheck className="h-4/5 w-4/5" />
                    </ActionIcon>
                }
                <ActionIcon
                    color={edit?"red.8":"brightSun.4"}
                    onClick={() => handleEdit()}
                    size="lg"
                    variant="subtle"
                >
                    {

                        edit?
                            <IconX className=" h-4/5 w-4/5" />
                            :
                            <IconPencil className="h-4/5 w-4/5" />
                    }
                </ActionIcon>
            </div>
        </div>
        {
            edit?
                <>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <SelectInput form={form} name="role" {...fields[0]}/>
                        <SelectInput form={form} name="company" {...fields[1]}/>
                    </div>
                    <SelectInput form={form} name="location" {...fields[2]}/>
                </>
                :
                <>
                    <div className="text-xl flex gap-1 items-center  ">
                        <IconBriefcase className="w-5 h-5" stroke={1.5} />
                        {profile.role}  &bull; {profile.company}
                    </div>
                    <div className="text-lg flex gap-1 text-mine-shaft-400 text-xs items-center">
                        <IconMapPin className="w-5 h-5" stroke={1.5}/> {profile.location}
                    </div>
                </>
        }
        </>
    )
}
export default Info
