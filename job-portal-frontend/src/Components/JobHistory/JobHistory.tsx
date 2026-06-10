import React, {useEffect, useState} from 'react'
import {Tabs, TabsList, TabsPanel} from "@mantine/core";
import AboutCompany from "../CompanyProfile/AboutCompany";
import CompanyJobs from "../CompanyProfile/CompanyJobs";
import CompanyEmployee from "../CompanyProfile/CompanyEmployee";
import {jobList} from "../../../public/Data/JobsData";
import JobCard from "../FindJobs/JobCard";
import HistoryCard from "./HistoryCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllJobs} from "../../Store/action";

const JobHistory = () => {
    const [activeTab, setActiveTab] = useState<any>("APPLIED")
    const [jobList, setJobList] = useState<any>([])
    const [showList, setShowList] = useState<any>([])
    const {profile}= useSelector((state:any) => state.profile)
    const {user}= useSelector((state:any) => state.auth)
    const dispatch = useDispatch();
    useEffect(() => {
        (dispatch as any)(getAllJobs(setJobList, setShowList, user));
    }, []);
    const handleTabChange= (value:string | null)=> {
        setActiveTab(value)
        console.log(value)
        if (value==="SAVED"){
            setShowList(jobList.filter((job:any)=> profile.savedJobs?.includes(job.id)));
        }else{
            setShowList(jobList.filter((job: any) =>
                job.applicants?.some((applicant: any) =>
                    applicant.applicantId == user.id && applicant.applicationStatus === value
                )
            ));
        }
    }
    return (
        <div>
            <div className="text-2xl font-semibold mb-5 ">Job History</div>
            <div>
                <Tabs value={activeTab} onChange={handleTabChange} variant="outline" radius="lg" defaultValue="applied">
                    <TabsList className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
                        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
                        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
                        <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
                    </TabsList>
                    <TabsPanel value={activeTab}>
                        <div className="mt-10 flex flex-wrap gap-5 justify-items-start">
                            {
                                showList.map((job:any, index:any) => (
                                        <HistoryCard {...job} key={index} {...{[activeTab.toLowerCase()]:true}}/>
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
