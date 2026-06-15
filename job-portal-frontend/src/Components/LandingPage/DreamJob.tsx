import React from 'react'
import {Avatar, AvatarGroup, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="flex sm-mx:flex-col-reverse items-center px-16 bs-mx:px-10 md-mx:px-5">
            <div className="flex flex-col w-[45%] sm-mx:w-full gap-3">
                <div className="text-6xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl font-bold leading-tight text-mine-shaft-100">Find your
                 <span className="text-bright-sun-400"> dream job </span> with us</div>
                <div className="text-lg md-mx:text-base sm-mx:text-sm text-mine-shaft-100">Good life begins with a good company. Start explore thousands of job in
                    one place.</div>
                <div className="flex gap-4 mt-5 items-center">
                    <TextInput variant="unstyled" label="Job Title" placeholder="Software Engineer" className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"/>
                    <TextInput variant="unstyled" label="Job Type" placeholder="Full Time" className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"/>
                    <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 rounded-lg p-4 hover:bg-bright-sun-500 cursor-pointer text-mine-shaft-100">
                    <IconSearch className="h-[85%] w-[85%]"/>
                    </div>
                </div>
            </div>
            <div className="w-[55%] sm-mx:w-full flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/Boy.png" alt="Boy"/>
                    <div className="w-fit top-[50%] absolute -right-10 bs-mx:right-0 xs-mx:top-[10%] xs-mx:-left-5 border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                        <div className="text-center mb-1 text-sm text-mine-shaft-100">1M+ got job</div>
                        <AvatarGroup>
                            <Avatar src="avatar.png"/>
                            <Avatar src="avatar1.png"/>
                            <Avatar src="avatar2.png"/>
                            <Avatar >+1M</Avatar>
                        </AvatarGroup>
                    </div>
                    <div className="w-fit absolute -left-5 top-[28%] xs-mx:top-[60%] bs-mx:top-[35%] xs-mx:left-auto xs-mx:right-0 border-bright-sun-400  border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                                <img src="/Icons/Google.png" alt="google"/>
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engineering</div>
                                <div className="text-mine-shaft-200 text-sm">New York</div>
                            </div>
                        </div>
                        <div className="flex gap-2 text-mine-shaft-200 text-xs justify-around">
                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DreamJob
