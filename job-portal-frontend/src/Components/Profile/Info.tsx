import React, {useState} from 'react'
import {ActionIcon, NumberInput} from "@mantine/core";
import {IconBriefcase, IconCheck, IconDeviceFloppy, IconMapPin, IconPencil, IconX} from "@tabler/icons-react";
import SelectInput from "../Profile/SelectInput";
import fields from "../../../public/Data/Profile";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "@mantine/form";
import {updateProfile} from "../../Store/action";
import {useMediaQuery} from "@mantine/hooks";

const Info = () => {
    const [edit, setEdit] = useState(false);
    const {user} = useSelector((state:any)=> state.auth);
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();
    const matches =useMediaQuery("(max-width: 475px)")

    const handleEdit = async ()=>{
       if (!edit){
           form.setValues({role: profile.role, company: profile.company, location: profile.location, totalExp: profile.totalExp})
           setEdit(true);
       }else setEdit(false)
    }
    const handleSave = () => {
        let updatedProfile = {...profile, ...form.getValues()};
        (dispatch as any)(updateProfile(updatedProfile))
        setEdit(false)
    }
    const form = useForm({
        mode: 'controlled',
        initialValues: { role: '', company: '', location: "", totalExp: 1 },
    });

    return (
        <>
        <div className="text-3xl xs-mx:text-2xl font-semibold flex justify-between">
            {user.name}
            <div>
                {
                    edit &&
                    <ActionIcon
                        color="green.8"
                        onClick={() => handleSave()}
                        size={matches?"md":"lg"}
                        variant="subtle"
                    >
                        <IconCheck className="h-4/5 w-4/5" />
                    </ActionIcon>
                }
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
                            <IconPencil className="h-4/5 w-4/5" />
                    }
                </ActionIcon>
            </div>
        </div>
        {
            edit?
                <>
                    <div className="flex gap-10 my-3 xs-mx:[&>*]:w-full xs-mx:flex-wrap [&>*]:w-1/2 md-mx:gap-5 ">
                        <SelectInput form={form} name="role" {...fields[0]}/>
                        <SelectInput form={form} name="company" {...fields[1]}/>
                    </div>
                    <div className="flex gap-10 my-3 xs-mx:[&>*]:w-full xs-mx:flex-wrap md-mx:gap-5 [&>*]:w-1/2 ">
                        <SelectInput form={form} name="location" {...fields[2]}/>
                        <NumberInput
                            withAsterisk
                            label="Total Experience"
                            hideControls
                            clampBehavior="strict"
                            min={1} max={50}
                            {...form.getInputProps('totalExp')}
                        />
                    </div>
                </>
                :
                <>
                    <div className="text-xl xs-mx:text-base flex gap-1 items-center  ">
                        <IconBriefcase className="w-5 h-5" stroke={1.5} />
                        {profile.role}  &bull; {profile.company}
                    </div>
                    <div className="text-lg xs-mx:text-base flex gap-1 text-mine-shaft-400 items-center">
                        <IconMapPin className="w-5 h-5" stroke={1.5}/> {profile.location}
                    </div>
                    <div className="text-lg xs-mx:text-base flex gap-1 text-mine-shaft-400 items-center">
                        <IconBriefcase className="w-5 h-5" stroke={1.5}/>Experience: {profile.totalExp}
                    </div>
                </>
        }
        </>
    )
}
export default Info
