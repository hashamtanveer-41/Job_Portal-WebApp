import React from 'react'
import PostJob from "../Components/PostJob/PostJob";
import {Button} from "@mantine/core";
import {IconArrowLeft} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import ApplyJobComp from "../Components/ApplyJob/ApplyJobComp";

const ApplyJob = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className="my-4 inline-block" to="/jobs">
                <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="outline">Back</Button>
            </Link>
            <ApplyJobComp />
        </div>

    )
}
export default ApplyJob
