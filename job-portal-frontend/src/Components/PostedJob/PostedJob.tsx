import React, {useEffect, useState} from 'react'
import {Tabs, TabsList, TabsPanel} from "@mantine/core";
import AboutCompany from "../CompanyProfile/AboutCompany";
import CompanyJobs from "../CompanyProfile/CompanyJobs";
import CompanyEmployee from "../CompanyProfile/CompanyEmployee";
import {activeJobs} from "../../../public/Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

const PostedJob = (props:any) => {
    const [activeTab, setActiveTab] = useState<string| null>('ACTIVE')
    useEffect(() => {
        setActiveTab(props.job?.jobStatus || "ACTIVE")
        console.log(props)
    }, [props.job]);
    return (
        <div className="w-1/6 mt-5">
            <div className="text-2xl font-semibold mb-5 ">Jobs</div>
            <div>
                <Tabs value={activeTab} onChange={setActiveTab} autoContrast variant="pills">
                    <TabsList className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
                        <Tabs.Tab value="ACTIVE">Active [{props.jobList?.filter((job:any) => job?.jobStatus=="ACTIVE").length}]</Tabs.Tab>
                        <Tabs.Tab value="DRAFT">Drafts [{props.jobList?.filter((job:any) => job?.jobStatus=="DRAFT").length}]</Tabs.Tab>
                    </TabsList>
                </Tabs>
                <div className="flex flex-col gap-5 mt-5">
                    {
                        props.jobList?.
                        filter((job:any) => job?.jobStatus==activeTab)
                            .map((job:any, index:any)=>(
                                <PostedJobCard key={index} {...job} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default PostedJob
