import React from 'react'
import {Avatar, AvatarGroup, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col gap-3">
                <div className="text-8xl font-bold leading-tight text-mine-shaft-100">Find your
                 <span className="text-bright-sun-400"> dream job </span> with us</div>
                <div className="text-lg text-mine-shaft-100">Good life begins with a good company. Start explore thousands of job in
                    one place.</div>
                <div className="flex gap-4 mt-5">
                    <TextInput variant="unstyled" label="Job Title" placeholder="Software Engineer" className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"/>
                    <TextInput variant="unstyled" label="Job Type" placeholder="Full Time" className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"/>
                    <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 rounded-lg p-4 hover:bg-bright-sun-500 cursor-pointer text-mine-shaft-100">
                    <IconSearch className="h-[85%] w-[85%]"/>
                    </div>
                </div>
            </div>
            <div className="w-[55rem] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/Boy.png" alt="Boy"/>
                    <div className="w-fit top-[50%] absolute right-8 border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                        <div className="text-center mb-1 text-sm text-mine-shaft-100">1M+ got job</div>
                        <AvatarGroup>
                            <Avatar src="avatar.png"/>
                            <Avatar src="avatar1.png"/>
                            <Avatar src="avatar2.png"/>
                            <Avatar >+1M</Avatar>
                        </AvatarGroup>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DreamJob
