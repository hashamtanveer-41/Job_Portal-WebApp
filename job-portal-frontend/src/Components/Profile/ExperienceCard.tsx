import React, {useState} from 'react'
import {IconBookmark} from "@tabler/icons-react";
import {Button} from "@mantine/core";
import ExperienceInput from "./ExperienceInput";
import {FormatDate} from "../../Utils/FormatDate";

const ExperienceCard = (props:any) => {
    const [edit, setEdit ] = useState(false);
    return (
        !edit ?
        <div className="flex flex-col gap-2 mb-10 mt-5">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt='Microsoft' /></div>
                    <div className="flex flex-col ">
                        <div className="font-semibold">{props.title}</div>
                        <div className="text-sm text-mine-shaft-300">{props.company} &#x022; {props.location}s</div>
                    </div>
                </div>
                <div>
                    {FormatDate(props.startDate)} - {FormatDate(props.endDate)}
                </div>
            </div>
            <div className="text-sm text-mine-shaft-300 text-justify">
                {props.description}
            </div>
            {
                props.edit &&
                <div className="flex gap-5">
                    <Button onClick={()=>setEdit(true)} color="brightSun.4" variant="outline">Edit</Button>
                    <Button color="red.8" variant="outline">Delete</Button>
                </div>
            }
        </div>
            :
            <ExperienceInput {...props} setEdit={setEdit}/>

    )
}
export default ExperienceCard
