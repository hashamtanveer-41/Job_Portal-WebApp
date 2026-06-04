import React from 'react'
import {Button, Divider} from "@mantine/core";
import {IconBriefcase, IconMapPin} from "@tabler/icons-react";

const Company = () => {
    return (
        <div className="w-3/4">
            <div className="relative">
                <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-2xl"/>
                <img src="/Icons/Google.png" alt="banner" className="h-36 w-36 rounded-3xl bg-mine-shaft-950 -bottom-1/4 absolute left-4 p-2 border-mine-shaft-950 border-8"/>
            </div>
            <div className="px-3 mt-12">
                <div className="text-3xl font-semibold flex justify-between">
                    Google
                    <Button color="brightSun.4" variant="outline" >Message</Button>
                </div>
                <div className="text-xl flex gap-1 items-center  ">
                    <IconBriefcase className="w-5 h-5" stroke={1.5} />
                    IT  &bull; 10K+
                </div>
                <div className="text-lg flex gap-1 text-mine-shaft-400 text-xs items-center">
                    <IconMapPin className="w-5 h-5" stroke={1.5}/> United States
                </div>
            </div>
            <Divider mx="xs"  my="xl"/>

        </div>
    )
}
export default Company
