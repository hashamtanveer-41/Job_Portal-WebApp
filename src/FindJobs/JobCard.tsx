import React from 'react'
import {IconBookmark, IconClockHour3} from "@tabler/icons-react";
import {Divider, Text} from "@mantine/core";

const JobCard = (props:any) => {
    return (
        <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt='Microsoft' /></div>
                    <div>
                        <div className="font-semibold">{props.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-300">{props.company} &#x022; {props.applicants} Applicants</div>
                    </div>
                </div>
                <div>
                    <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {props.description}
            </Text>
            <Divider color='mine-shaft.7'  size="xs" />
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">
                    &#8360; {props.package}
                </div>
                <div className="flex gap-1 text-mine-shaft-400 text-xs items-center">
                  <IconClockHour3 className="w-5 h-5" stroke={1.5}/> {props.postedDaysAgo} days ago
                </div>
            </div>
        </div>
    )
}
export default JobCard
