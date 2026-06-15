import React from 'react'
import {IconBookmark, IconBookmarkFilled, IconClockHour3} from "@tabler/icons-react";
import {Button, Divider, Text} from "@mantine/core";
import {Link} from "react-router-dom";
import {timeAgo} from "../../Utils/Utilities";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../Store/action";

const JobCard = (props:any) => {
    const {profile} =useSelector((state:any) => state.profile)
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
    return (
        <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 sm-mx:w-full">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt='Microsoft' /></div>
                    <div>
                        <div className="font-semibold">{props.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-300">{props.company} &bull; {props.applicants?props.applicants.length:0} Applicants</div>
                    </div>
                </div>
                <div>
                    {
                        profile.savedJobs?.includes(props.id)?
                        <IconBookmarkFilled onClick={handleUnSaveJob} className="text-bright-sun-400 cursor-pointer hover:text-bright-sun-400"/>
                        :
                        <IconBookmark onClick={handleSaveJob} className="text-mine-shaft-300 cursor-pointer hover:text-bright-sun-400"/>

                    }
                </div>
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {props.about}
            </Text>
            <Divider color='mine-shaft.7'  size="xs" />
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">
                    &#8360; {props.packageOffered} LPA
                </div>
                <div className="flex gap-1 text-mine-shaft-400 text-xs items-center">
                  <IconClockHour3 className="w-5 h-5" stroke={1.5}/> {timeAgo(props.postTime)}
                </div>
            </div>
            <Link to={`/jobs/${props.id}`}>
                <Button
                    color="brightSun.4"
                    variant="outline"
                    fullWidth
                >View Job
                </Button>
            </Link>
        </div>
    )
}
export default JobCard
