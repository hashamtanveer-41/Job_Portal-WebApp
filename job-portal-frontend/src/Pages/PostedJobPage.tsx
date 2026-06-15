import React, {useEffect, useState} from 'react'
import PostedJob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllJobs, getJobPostedBy, getJobWithId} from "../Store/action";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {Button, Divider, Drawer} from "@mantine/core";

const PostedJobPage = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {user} = useSelector((state: any) => state.auth);
    const [jobList, setJobList] = useState<any[]>([]);
    const [job, setJob] = useState<any>({})
    const [opened, { open, close }] = useDisclosure(false);
    const matches = useMediaQuery("(max-width: 767px)")
    useEffect(() => {
        window.scroll(0, 0);
        (dispatch as any)(getJobPostedBy(user?.id, id,  setJob, setJobList, navigate)).then;
    }, [id]);
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-5">
            <Divider />
            {matches && <Button size="sm" color='brightSun.4' autoContrast className="mt-2" onClick={open}>All Jobs</Button>}
            <Drawer size={230} overlayProps={{backgroundOpacity: 0.5, blur: 4}} opened={opened} onClose={close} title="All Jobs">
                <PostedJob job={job} jobList={jobList}/>
            </Drawer>
            <div className="flex gap-5 justify-around py-5">
                {!matches && <PostedJob job={job} jobList={jobList}/>}
                <PostedJobDesc {...job}/>
            </div>
        </div>
    )
}
export default PostedJobPage
