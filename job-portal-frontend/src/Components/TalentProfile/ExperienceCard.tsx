import React from 'react'
import {IconBookmark} from "@tabler/icons-react";
import {FormatDate} from "../../Utils/FormatDate";

const ExperienceCard = (props:any) => {
    return (
        <div className="flex flex-col gap-2 mb-10">
            <div className="flex justify-between flex-wrap gap-2">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt='Microsoft' /></div>
                    <div className="flex flex-col ">
                        <div className="font-semibold">{props.title}</div>
                        <div className="text-sm text-mine-shaft-300">{props.company} &#x022; {props.location}s</div>
                    </div>
                </div>
                <div>
                    {FormatDate(props.startDate)} -{FormatDate(props.endDate)}
                </div>
            </div>
            <div className="text-sm xs-mx:text-xs text-mine-shaft-300 text-justify">
                {props.description}
            </div>
        </div>
    )
}
export default ExperienceCard
