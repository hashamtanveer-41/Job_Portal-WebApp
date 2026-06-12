import React, {useEffect, useState} from 'react'
import {Badge, Tabs, TabsList, TabsPanel} from "@mantine/core";
import Jobs from "../FindJobs/Jobs";
import JobDesc from "../JobDesc/JobDesc";
import {talents} from "../../../public/Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = (props:any) => {
    const [tab, setTab] = useState("overview")
    const [arr, setArr] = useState<any>([])
    const handleTabChange = (value:any)=>{
        setTab(value)
        if (value=='applicants'){
            props.applicants?.filter((applicant:any)=>applicant.applicationStatus=="APPLIED")
        }else if (value=="invited"){
            props.applicants?.filter((applicant:any)=>applicant.applicationStatus=="INTERVIEWING")
        }else if (value=="rejected"){
            props.applicants?.filter((applicant:any)=>applicant.applicationStatus=="REJECTED")
        }else if (value=="offered"){
            props.applicants?.filter((applicant:any)=>applicant.applicationStatus=="OFFERED")
        }
    }
    useEffect(() => {
        handleTabChange("overview")
    }, [props]);
    return (
        <div className="mt-5 w-3/4 px-5">
            {props.jobTitle?
                <>
                    <div className="text-2xl font-semibold flex items-center">{props.jobTitle} <Badge variant="light" ml="sm" color="brightSun.4" size="sm">{props.jobStatus}</Badge></div>
                    <div className="font-medium text-mine-shaft-200 mb-5">
                        {props.location}
                    </div>
                    <div>
                        <Tabs variant="outline" radius="lg" value={tab} onChange={handleTabChange}>
                            <TabsList className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                                <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                                <Tabs.Tab value="invited">Invited</Tabs.Tab>
                                <Tabs.Tab value="offered">Offered</Tabs.Tab>
                                <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                            </TabsList>
                            <TabsPanel value="overview" className="[&>div]:w-full">
                                        <JobDesc {...props} edit={true} closed={props.jobStatus=="CLOSED"}/>
                            </TabsPanel>
                            <TabsPanel value="applicants">
                                <div className="mt-10 flex flex-wrap gap-5 justify-around">
                                    {
                                        arr?.length?
                                            arr.map((talent: any, index: number) => (
                                            index < 6 && <TalentCard key={talent.applicantId || index} {...talent} posted />
                                            ))
                                            :
                                            <div className="text-2xl font-semibold">No Applicants</div>
                                    }
                                </div>
                            </TabsPanel>
                            <TabsPanel value="invited">
                                <div className="mt-10 flex flex-wrap gap-5 justify-around">
                                    {
                                       arr?.length?
                                        arr.map((talent:any, index:any)=>(
                                        index <6 && <TalentCard key={index} {...talent} invited/>
                                        ))
                                        :
                                        <div className="text-2xl font-semibold">No Invited Candidates</div>
                                    }
                                </div>
                            </TabsPanel>
                            <TabsPanel value="offered">
                                <div className="mt-10 flex flex-wrap gap-5 justify-around">
                                    {
                                        arr?.length?
                                            arr.map((talent:any, index:any)=>(
                                                index <6 && <TalentCard key={index} {...talent} offered/>
                                             ))
                                            :
                                            <div className="text-2xl font-semibold">No Offered Candidates</div>

                                    }
                                </div>
                            </TabsPanel>
                            <TabsPanel value="rejected">
                                <div className="mt-10 flex flex-wrap gap-5 justify-around">
                                    {
                                        arr?.length?
                                            arr.map((talent:any, index:any)=>(
                                                index <6 && <TalentCard key={index} {...talent} rejected/>
                                        ))
                                        :
                                        <div className="text-2xl font-semibold">No Rejected Candidates</div>

                                    }
                                </div>
                            </TabsPanel>
                        </Tabs>
                    </div>
                </>
                :
                <div className="text-2xl font-semibold flex justify-center items-center min-h-[17px]">
                    No Job Selected
                </div>
            }
        </div>
    )
}
export default PostedJobDesc
