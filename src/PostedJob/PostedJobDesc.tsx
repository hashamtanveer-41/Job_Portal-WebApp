import React from 'react'
import {Badge, Tabs, TabsList, TabsPanel} from "@mantine/core";
import Jobs from "../FindJobs/Jobs";
import JobDesc from "../JobDesc/JobDesc";
import {talents} from "../../public/Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () => {
    return (
        <div className="mt-5 w-3/4 px-5">
            <div className="text-2xl font-semibold flex items-center">Software Engineer <Badge variant="light" ml="sm" color="brightSun.4" size="sm">Active</Badge></div>
            <div className="font-medium text-mine-shaft-200 mb-5">
                New Jersey, United States
            </div>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="overview">
                    <TabsList className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </TabsList>
                    <TabsPanel value="overview" className="[&>div]:w-full">
                        <JobDesc edit={true}/>
                    </TabsPanel>
                    <TabsPanel value="applicants">
                        <div className="mt-10 flex flex-wrap gap-5">
                            {talents.map((talent, index)=>(
                                index <6 && <TalentCard key={index} {...talent} posted/>
                            ))}
                        </div>
                    </TabsPanel>
                    <TabsPanel value="employees">f</TabsPanel>
                </Tabs>
            </div>
        </div>
    )
}
export default PostedJobDesc
