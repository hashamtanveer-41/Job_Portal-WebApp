import React, {useEffect, useState} from 'react'
import {Button, Divider} from "@mantine/core";
import {Link, useNavigate} from "react-router-dom";
import {IconArrowLeft} from "@tabler/icons-react";
import Profile from "../Components/TalentProfile/Profile";
import {profile} from "../../public/Data/TalentData";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";
import {useDispatch} from "react-redux";
import {getAllProfiles} from "../Store/action";

const TalentProfile = () => {
    const navigate = useNavigate();
    const [talent, setTalent] = useState<any[]>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        (dispatch as any)(getAllProfiles(setTalent));
    }, []);
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
                <Button my="sm"  onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="outline">Back</Button>
            <Divider  size="xs" />
            <div className="flex gap-5 lg-mx:flex-wrap">
                <Profile />
                <RecommendTalent talents={talent}/>
            </div>

        </div>

    )
}
export default TalentProfile
