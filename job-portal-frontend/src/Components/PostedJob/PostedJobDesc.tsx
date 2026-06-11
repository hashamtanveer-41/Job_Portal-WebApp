import React, {useEffect} from 'react'
import {Badge, Tabs, TabsList, TabsPanel} from "@mantine/core";
import Jobs from "../FindJobs/Jobs";
import JobDesc from "../JobDesc/JobDesc";
import {talents} from "../../../public/Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = (props:any) => {
    useEffect(() => {
        console.log(props.applicants)
    }, []);
    return (
        <div className="mt-5 w-3/4 px-5">
            <div className="text-2xl font-semibold flex items-center">{props.jobTitle} <Badge variant="light" ml="sm" color="brightSun.4" size="sm">{props.jobStatus}</Badge></div>
            <div className="font-medium text-mine-shaft-200 mb-5">
                {props.location}
            </div>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="overview">
                    <TabsList className="[&_button]:text-lg mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                    </TabsList>
                    <TabsPanel value="overview" className="[&>div]:w-full">
                        <JobDesc {...props} edit={true}/>
                    </TabsPanel>
                    <TabsPanel value="applicants">
                        <div className="mt-10 flex flex-wrap gap-5 justify-around">
                            {
                                props.applicants?.filter((applicant: any) => {
                                    const status = applicant.applicationStatus || applicant.applicantStatus;
                                    return status === "APPLIED";
                                }).map((talent: any, index: number) => (
                                    index < 6 && <TalentCard key={talent.applicantId || index} {...talent} posted />
                                ))
                            }
                        </div>
                    </TabsPanel>
                    <TabsPanel value="invited">
                        <div className="mt-10 flex flex-wrap gap-5 justify-around">
                            {
                                props.applicants?.filter((applicant:any)=>applicant.applicationStatus=="INTERVIEWING").map((talent:any, index:any)=>(
                                index <6 && <TalentCard key={index} {...talent} invited/>
                                ))
                            }
                        </div>
                    </TabsPanel>
                    <TabsPanel value="offered">
                        <div className="mt-10 flex flex-wrap gap-5 justify-around">
                            {
                                props.applicants?.filter((applicant:any)=>applicant.applicationStatus=="OFFERED").map((talent:any, index:any)=>(
                                    index <6 && <TalentCard key={index} {...talent} offered/>
                                ))
                            }
                        </div>
                    </TabsPanel>
                    <TabsPanel value="offered">
                        <div className="mt-10 flex flex-wrap gap-5 justify-around">
                            {
                                props.applicants?.filter((applicant:any)=>applicant.applicationStatus=="REJECTED").map((talent:any, index:any)=>(
                                    index <6 && <TalentCard key={index} {...talent} rejected/>
                                ))
                            }
                        </div>
                    </TabsPanel>
                </Tabs>
            </div>
        </div>
    )
}
export default PostedJobDesc
