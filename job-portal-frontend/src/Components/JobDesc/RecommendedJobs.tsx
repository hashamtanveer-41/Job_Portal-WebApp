import React, {useEffect, useState} from 'react'
import JobCard from "../FindJobs/JobCard";
import {jobList} from "../../../public/Data/JobsData";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAllJobs} from "../../Store/action";

const RecommendedJobs = () => {
    const {id} = useParams();
    const [jobList, setJobList] = useState<any>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        (dispatch as any)(getAllJobs(setJobList));
    }, []);
    return (
        <div>
            <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
            <div className="flex flex-col flex-wrap gap-5 justify-around">
                {jobList?.map((job:any, index:number) => (
                    (index<6 && id!=job.id) && <JobCard key={index} {...job} />
                ))}
            </div>
        </div>
    )
}
export default RecommendedJobs
