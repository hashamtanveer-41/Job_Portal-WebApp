import React, {useEffect, useState} from 'react'
import {IconAdjustments, IconBookmark, IconBookmarkFilled, IconMapPin} from "@tabler/icons-react";
import {ActionIcon, Button, Divider} from "@mantine/core";
import {Link} from "react-router-dom";
import {card, desc, skills} from "../../../public/Data/JobDescData";
import DOMPurify from "dompurify";
import {timeAgo} from "../../Utils/Utilities";
import {useDispatch, useSelector} from "react-redux";
import {postJob, updateProfile} from "../../Store/action";

const JobDesc = (props:any) => {
    const {profile} =useSelector((state:any) => state.profile)
    const {user} =useSelector((state:any) => state.auth)
    const [applied, setApplied] = useState(false);
    const dispatch = useDispatch();
    const handleSaveJob = () =>{
        let savedJobs: any[] = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];
        if (savedJobs?.includes(props.id)){
            savedJobs=savedJobs?.filter((id:any)=>id!=props.id)
        }else{
            savedJobs=[...savedJobs, props.id];
        }
        let  updatedProfile:any = {...profile, savedJobs: savedJobs};
        (dispatch as any)(updateProfile(updatedProfile, "Job saved successfully!"))
    }
    const handleUnSaveJob=()=>{
        let savedJobs: any[] = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];
        if (savedJobs?.includes(props.id)){
            savedJobs=savedJobs?.filter((id:any)=>id!=props.id)
        }else{
            savedJobs=[...savedJobs, props.id];
        }
        let  updatedProfile:any = {...profile, savedJobs: savedJobs};
        (dispatch as any)(updateProfile(updatedProfile, "Job unsaved successfully!"))

    }
    const handleClose= () =>{
        (dispatch as any)(postJob({...props, jobStatus:"CLOSED"}, null, "Job Closed Successfully"))
    }
    useEffect(() => {
        console.log(props.applicants)
        console.log("Edit: "+props.edit)
        if (props.applicants?.filter((applicant:any)=>applicant.applicantId==user.id).length>0){
            setApplied(true)
            console.log(applied)
        }else setApplied(false)

    }, [props]);
    return (
        <div className="w-2/3 bs-mx:w-full">
            <div className="flex justify-between flex-wrap">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 shrink-0 rounded-xl">
                        <img className="h-14 xs-mx:h-10 xs-mx:w-10" src={`/Icons/${props.company}.png`} alt='Microsoft' /></div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-2xl xs-mx:text-xl">{props.jobTitle}</div>
                        <div className="text-lg text-mine-shaft-300 flex xs-mx:flex-col xs-mx:text-base">
                            <span>{props.company}  &bull;</span>
                            <span> {timeAgo(props.postTime)}  &bull;</span>
                            <span> {props.applicants?props.applicants.length:0} Applicants </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center sm-mx:my-3 sm:flex-col sm-mx:[&>button]:w-[50%] sm-mx:w-full">
                    { (props.edit || !applied ) &&
                        <Link to={props.edit?`/post-job/${props.id}`:`/apply-job/${props.id}`}>
                            <Button color="brightSun.4" size="sm" variant="outline">
                                {props.closed?"Reopen":props.edit ? "Edit" : "Apply"}
                            </Button>
                        </Link>
                    }
                    { (!props.edit && applied)
                        &&
                        <Button disabled={true} color="green.8" size="sm" variant="outline">
                            Applied
                        </Button>
                    }
                    {props.edit && !closed?
                        <Button onClick={handleClose}  color="red.5" size="sm" variant="outline">Close</Button>
                        :
                            profile.savedJobs?.includes(props.id)?
                                <IconBookmarkFilled onClick={handleUnSaveJob} className="text-bright-sun-400 cursor-pointer hover:text-bright-sun-400"/>
                                :
                                <IconBookmark onClick={handleSaveJob} className="text-mine-shaft-300 cursor-pointer hover:text-bright-sun-400"/>
                    }
                </div>
            </div>
            <Divider my="xl"/>
            <div className="flex justify-between gap-4 sm-mx:flex-wrap">
                {
                    card.map((item:any, index:number)=> (
                        <div key={index} className="flex flex-col items-center gap-1">
                            <ActionIcon color="brightSun.4" className="!h-12 !w-12 xs-mx:!h-8 xs-mx:!w-8" variant="outline" radius="xl" aria-label="Settings">
                                <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                            </ActionIcon>
                            <div className="text-mine-shaft-300 text-sm xs-mx:">{item.name}</div>
                            <div className="text-base xs-mx:text-sm font-semibold">{props?props[item.id]:"NA"} {item.id=="packageOffered" && <>LPA</>}</div>
                        </div>
                    ))
                }
            </div>
            <Divider my="xl"/>
            <div className="">
                <div className="text-xl font-semibold mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-2">
                    {
                        props?.skillsRequired?.map((skill:any, index:number) => (
                            <ActionIcon key={index} color="brightSun.4" p="xs" className="!h-fit !w-fit font-medium !text-sm xs-mx:!text-xs" variant="outline" radius="xl" aria-label="Settings">
                                {skill}
                            </ActionIcon>
                        ))
                    }
                </div>
            </div>
            <Divider my="xl"/>
            <div className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_p]:xs-mx:text-sm [&_li]:xs-mx:text-sm"
                 dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(props.description)}}>
            </div>
            <Divider my="xl"/>
            <div>
                <div className="text-xl font-semibold mb-5">About the Company</div>
                <div className="flex justify-between mb-3 xs-mx:flex-wrap xs-mx:gap-2">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-8" src={`/Icons/${props.company}.png`} alt='Microsoft' /></div>
                        <div className="flex flex-col">
                            <div className="font-medium text-lg">{props.company}</div>
                            <div className="text-mine-shaft-300">10K+ Employees</div>
                        </div>
                    </div>
                        <Link to={`/company/${props.company}`} >
                            <Button  color="brightSun.4" size="sm" variant="outline">Company Page</Button>
                        </Link>
                </div>
                <div className="text-mine-shaft-300 text-justify xs-mx:text-sm">
                    {/*Company Description*/}
                </div>
            </div>
        </div>
    )
}
export default JobDesc
