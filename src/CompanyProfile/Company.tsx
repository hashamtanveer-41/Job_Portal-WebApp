import React from 'react'
import {Avatar, AvatarGroup, Button, Divider, Tabs, TabsList, TabsPanel} from "@mantine/core";
import {IconBriefcase, IconMapPin} from "@tabler/icons-react";
import AboutCompany from "./AboutCompany";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployee from "./CompanyEmployee";

const Company = () => {
    return (
        <div className="w-3/4 mt-3">
            <div className="relative">
                <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-2xl"/>
                <img src="/Icons/Google.png" alt="banner" className="rounded-3xl bg-mine-shaft-950 -bottom-1/4 p-2  left-5 h-36 w-36  absolute border-mine-shaft-950 border-8"/>
            </div>
            <div className="px-3 mt-12">
                <div className="text-3xl font-semibold flex justify-between">
                    Google
                    <AvatarGroup>
                        <Avatar src="/avatar.png"/>
                        <Avatar src="/avatar1.png"/>
                        <Avatar src="/avatar2.png"/>
                        <Avatar >+10K</Avatar>
                    </AvatarGroup>
                    </div>
                <div className="text-lg flex gap-1 text-mine-shaft-400 items-center">
                    <IconMapPin className="w-5 h-5" stroke={1.5}/> New Jersey, United States
                </div>
            </div>
            <Divider mx="xs"  my="xl"/>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="employees">
                    <TabsList className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>
                    </TabsList>
                    <TabsPanel value="about"><AboutCompany /></TabsPanel>
                    <TabsPanel value="jobs"><CompanyJobs /></TabsPanel>
                    <TabsPanel value="employees"><CompanyEmployee /></TabsPanel>
                </Tabs>
            </div>
        </div>
    )
}
export default Company
                                      