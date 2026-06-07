import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../Store/action";
import {ActionIcon, TagsInput} from "@mantine/core";
import {IconCheck, IconPencil, IconX} from "@tabler/icons-react";

const Skills = () => {
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const [skills, setSkills ] = useState<string[]>([]);

    const handleEdit = ()=>{
        if (!edit){
            setEdit(true);
            setSkills(profile.skills)
        }else setEdit(false)
    }

    const handleSave = async () => {
        setEdit(false)
        let updatedProfile = {...profile, skills: skills};
        (dispatch as any)(updateProfile(updatedProfile))
    }

    return (
        <>
            <div className='text-2xl font-semibold mb-3 flex justify-between'>
                Skills
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
        </>
    )
}
export default Skills
