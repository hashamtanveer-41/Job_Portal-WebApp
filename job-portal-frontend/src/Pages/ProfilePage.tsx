import React from 'react'
import Profile from "../Profile/Profile";
import {profile} from "../../public/Data/TalentData";

const ProfilePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
            <Profile {...profile} />
        </div>
    )
}
export default ProfilePage
