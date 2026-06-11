import React, {useEffect, useState} from 'react'
import PostedJob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllJobs, getJobPostedBy, getJobWithId} from "../Store/action";

const PostedJobPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {user} = useSelector((state: any) => state.auth);
    const [jobList, setJobList] = useState<any[]>([]);
    const [job, setJob] = useState<any>({})
    useEffect(() => {
        window.scroll(0, 0);
        (dispatch as any)(getJobPostedBy(id, setJob));
        (dispatch as any)(getAllJobs(setJobList))
    }, [id]);
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-4">
            <div className="flex gap-5">
                <PostedJob job={job} jobList={jobList}/>
                <PostedJobDesc {...job}/>
            </div>
        </div>
    )
}
export default PostedJobPage
