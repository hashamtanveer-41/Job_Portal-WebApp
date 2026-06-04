import React from 'react'
import {Tabs, TabsList, TabsPanel} from "@mantine/core";
import AboutCompany from "../CompanyProfile/AboutCompany";
import CompanyJobs from "../CompanyProfile/CompanyJobs";
import CompanyEmployee from "../CompanyProfile/CompanyEmployee";
import {activeJobs} from "../../public/Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

const PostedJob = () => {
    return (
        <div className="w-1/6 mt-5">
            <div className="text-2xl font-semibold mb-5 ">Jobs</div>
            <div>
                <Tabs autoContrast variant="pills" defaultValue="active">
                    <TabsList className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
                        <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                        <Tabs.Tab value="draft">Drafts [2]</Tabs.Tab>
                    </TabsList>
                    <TabsPanel value="active">
                        <div className="flex flex-col gap-5 mt-5">
                            {
                                activeJobs.map((job, index)=>(
                                    <PostedJobCard key={index} {...job} />
                                ))
                            }
                        </div>
                    </TabsPanel>
                    <TabsPanel value="draft">

                    </TabsPanel>
                </Tabs>
            </div>
        </div>
    )
}
export default PostedJob
