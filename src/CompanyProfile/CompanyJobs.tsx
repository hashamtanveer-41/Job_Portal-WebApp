import React from 'react'
import {jobList} from "../../public/Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs = () => {
    return (
        <div className="mt-10 flex flex-wrap gap-5">
            {
                jobList.map((job, index) => (
                    <JobCard {...job} key={index}/>
                ))
            }
        </div>
    )
}
export default CompanyJobs
