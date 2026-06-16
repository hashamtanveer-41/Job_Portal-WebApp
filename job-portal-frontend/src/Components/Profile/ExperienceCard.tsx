import React, {useState} from 'react'
import {IconBookmark} from "@tabler/icons-react";
import {Button} from "@mantine/core";
import ExperienceInput from "./ExperienceInput";
import {FormatDate} from "../../Utils/FormatDate";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../Store/action";

const ExperienceCard = (props:any) => {
    const [edit, setEdit ] = useState(false);

    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    const handleDelete = () => {
        let  exp = [...profile.experiences]
        exp.splice(props.index, 1);
        let updatedProfile = {...profile, experiences: exp};
        setEdit(false);
        if (typeof props.external === 'function') {
            props.external(false);
        }
        (dispatch as any)(updateProfile(updatedProfile, "Experience deleted successfully!"))
    }
    return (
        !edit ?
        <div className="flex flex-col gap-2 mb-10 mt-5">
            <div className="flex justify-between flex-wrap gap-2">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={props.company.png?`/Icons/${props.company}.png`:"https://placehold.net/600x600.png"} alt={props.company} /></div>
                    <div className="flex flex-col ">
                        <div className="font-semibold">{props.title}</div>
                        <div className="text-sm text-mine-shaft-300">{props.company} &bull; {props.location}</div>
                    </div>
                </div>
                <div>
                    {FormatDate(props.startDate)} - {props.working?"Current" : FormatDate(props.endDate)}
                </div>
            </div>
            <div className="text-sm xs-mx:text-xs text-mine-shaft-300 text-justify">
                {props.description}
            </div>
            {
                props.edit &&
                <div className="flex gap-5">
                    <Button onClick={()=>setEdit(true)} color="brightSun.4" variant="outline">Edit</Button>
                    <Button onClick={handleDelete} color="red.8" variant="outline">Delete</Button>
                </div>
            }
        </div>
            :
            <ExperienceInput {...props} pencil={props.external} setEdit={setEdit}/>

    )
}
export default ExperienceCard
