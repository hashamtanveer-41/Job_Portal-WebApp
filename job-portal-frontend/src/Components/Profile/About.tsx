import React, {useState} from 'react'
import {ActionIcon, Textarea} from "@mantine/core";
import {IconCheck, IconPencil, IconX} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../Store/action";
import {useMediaQuery} from "@mantine/hooks";

const About = () => {
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const [about, setAbout ] = useState("");
    const matches =useMediaQuery("(max-width: 475px)")

    const handleEdit = ()=>{
        if (!edit){
            setEdit(true);
            setAbout(profile.about)
        }else setEdit(false)
    }

    const handleSave = async () => {
        setEdit(false)
        let updatedProfile = {...profile, about: about};
        (dispatch as any)(updateProfile(updatedProfile))
    }


    return (
        <>
            <div className='text-2xl font-semibold mb-3 flex justify-between'>
                About
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
                    <Textarea
                        value={about}
                        onChange={(event) => setAbout(event.currentTarget.value)}
                        autosize
                        minRows={3}
                        placeholder="Enter about yourself..."
                    />
                    :
                    <div className="text-sm text-mine-shaft-300 text-justify">
                        {profile.about}
                    </div>
            }
        </>
    )
}
export default About
