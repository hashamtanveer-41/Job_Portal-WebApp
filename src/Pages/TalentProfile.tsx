import React from 'react'
import {Button, Divider} from "@mantine/core";
import {Link} from "react-router-dom";
import {IconArrowLeft} from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";

const TalentProfile = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider  size="xs" />
            <Link className="my-4 inline-block" to="/find-talent">
                <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="outline">Back</Button>
            </Link>
            <Divider  size="xs" />
            <div className="flex gap-5">
                <Profile />
            </div>
        </div>

    )
}
export default TalentProfile
