import React, {useEffect, useState} from 'react'
import PostJob from "../Components/PostJob/PostJob";
import {Button} from "@mantine/core";
import {IconArrowLeft} from "@tabler/icons-react";
import {Link, useNavigate, useParams} from "react-router-dom";
import ApplyJobComp from "../Components/ApplyJob/ApplyJobComp";
import {useDispatch} from "react-redux";
import {getJobWithId} from "../Store/action";

const ApplyJob = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [job, setJob] = useState<any>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scroll(0, 0);
        (dispatch as any)(getJobWithId(setJob, id));
    }, [id]);
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
                <Button mb='xs'  my="md" onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="outline">Back</Button>
            <ApplyJobComp {...job} id={id}/>
        </div>

    )
}
export default ApplyJob
