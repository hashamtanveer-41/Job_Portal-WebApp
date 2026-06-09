import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {Button, Divider} from "@mantine/core";
import {IconArrowLeft} from "@tabler/icons-react";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs";
import {useDispatch} from "react-redux";
import {getJobWithId} from "../Store/action";

const JobDescription = () => {
    const {id} = useParams();
    const [job, setJob] = useState<any>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scroll(0, 0);
        (dispatch as any)(getJobWithId(setJob, id));
    }, []);
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-4 inline-block" to="/find-jobs">
                <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="outline">Back</Button>
            </Link>
            <div className="flex gap-5 justify-around">
                <JobDesc {...job} />
                <RecommendedJobs />
            </div>

        </div>

    )
}
export default JobDescription
