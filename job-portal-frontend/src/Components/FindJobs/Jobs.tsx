import React, {useEffect, useState} from 'react'
import Sort from "./Sort";
import JobCard from "./JobCard";
import {jobList} from "../../../public/Data/JobsData";
import {useDispatch} from "react-redux";
import {getAllJobs} from "../../Store/action";

const Jobs = (props:any) => {
    const [jobList, setJobList] = useState([{}]);
    const dispatch = useDispatch();
    useEffect(() => {
        (dispatch as any)(getAllJobs(setJobList));
    }, []);
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Recommended Jobs</div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap gap-5 justify-between">
                {
                    jobList.map((job, index) => (
                        <JobCard {...job} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Jobs
