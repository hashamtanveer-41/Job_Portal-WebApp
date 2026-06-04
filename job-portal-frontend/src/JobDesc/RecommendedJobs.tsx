import React from 'react'
import JobCard from "../FindJobs/JobCard";
import {jobList} from "../../public/Data/JobsData";

const RecommendedJobs = () => {
    return (
        <div>
            <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
            <div className="flex flex-col flex-wrap gap-5 justify-around">
                {jobList.map((job:any, index:number) => (
                    index<6 &&  <JobCard key={index} {...job} />
                ))}
            </div>
        </div>
    )
}
export default RecommendedJobs
