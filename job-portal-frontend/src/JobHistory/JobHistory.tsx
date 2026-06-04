import React from 'react'
import {Tabs, TabsList, TabsPanel} from "@mantine/core";
import AboutCompany from "../CompanyProfile/AboutCompany";
import CompanyJobs from "../CompanyProfile/CompanyJobs";
import CompanyEmployee from "../CompanyProfile/CompanyEmployee";
import {jobList} from "../../public/Data/JobsData";
import JobCard from "../FindJobs/JobCard";
import HistoryCard from "./HistoryCard";

const JobHistory = () => {
    return (
        <div>
            <div className="text-2xl font-semibold mb-5 ">Job History</div>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="applied">
                    <TabsList className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="applied">Applied</Tabs.Tab>
                        <Tabs.Tab value="saved">Saved</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
                    </TabsList>
                    <TabsPanel value="applied">
                        <div className="mt-10 flex flex-wrap gap-5 justify-between">
                            {
                                jobList.map((job, index) => (
                                    <HistoryCard {...job} key={index} applied/>
                                ))
                            }
                        </div>
                    </TabsPanel>
                    <TabsPanel value="saved">
                        <div className="mt-10 flex flex-wrap gap-5 justify-between" >
                        {
                            jobList.map((job, index) => (
                                <HistoryCard {...job} key={index} saved/>
                            ))
                        }
                    </div>
                    </TabsPanel>
                    <TabsPanel value="offered">
                        <div className="mt-10 flex flex-wrap gap-5 justify-between" >
                        {
                            jobList.map((job, index) => (
                                <HistoryCard {...job} key={index} offered />
                            ))
                        }
                    </div>
                    </TabsPanel>
                    <TabsPanel value="interviewing">
                        <div className="mt-10 flex flex-wrap gap-5 justify-between">
                            {
                                jobList.map((job, index) => (
                                    <HistoryCard {...job} key={index} interviewing />
                                ))
                            }
                        </div>
                    </TabsPanel>
                </Tabs>
            </div>
        </div>
    )
}
export default JobHistory
