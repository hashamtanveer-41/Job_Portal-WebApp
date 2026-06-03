import React from 'react'
import {IconBookmark, IconClockHour3, IconHeart, IconMapPin} from "@tabler/icons-react";
import {Avatar, Button, Divider, Text} from "@mantine/core";
import {Link} from "react-router-dom";

const TalentCard = (props:any) => {
    return (
        <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar size="lg" src={`/${props.image}.png`} alt='Microsoft' /></div>
                    <div>
                        <div className="font-semibold text-xl">{props.name}</div>
                        <div className="text-sm text-mine-shaft-300">{props.role} &bull; {props.company} </div>
                    </div>
                </div>
                <div>
                    <IconHeart className="text-mine-shaft-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex gap-2">
                {
                    props.topSkills.map((skill:any, index:any)=>(
                            <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{skill}</div>

                    ))
                }
            </div>


            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {props.about}
            </Text>
            <Divider color='mine-shaft.7'  size="xs" />
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">
                    {props.expectedCtc}
                </div>
                <div className="flex gap-1 text-mine-shaft-400 text-xs items-center">
                    <IconMapPin className="w-5 h-5" stroke={1.5}/> {props.location}
                </div>
            </div>
            <Divider color='mine-shaft.7'  size="xs" />
            <div className="flex [&>*]:w-1/2 [&>*]:p-1 items-center">
                <Link to="/talent-profile">
                    <Button color="brightSun.4" variant="outline" fullWidth>Profile</Button>
                </Link>
                <Button color="brightSun.4" variant="light" fullWidth>Message</Button>
            </div>
        </div>
    )
}
export default TalentCard
