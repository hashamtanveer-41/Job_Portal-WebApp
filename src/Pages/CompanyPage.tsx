import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {Button, Divider} from "@mantine/core";
import {IconArrowLeft} from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";
import {profile} from "../../public/Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import Company from "../CompanyProfile/Company";

const CompanyPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
                <Button onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20} />} my="md" color="brightSun.4" variant="outline">Back</Button>
            <div className="flex gap-5">
                <Company />
            </div>

        </div>
    )
}
export default CompanyPage
