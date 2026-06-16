import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";

const NavLinks = () => {
    const linksForEmployee = [
        {name:"Find Talent", url:"/find-talent"},
        {name:"Post Job", url:"/post-job/0"},
        {name:"Posted Job", url:"/posted-jobs/0"},
    ]
    const linksForApplicant = [
        {name:"Find Jobs", url:"/find-jobs"},
        {name:"Find Talent", url:"/find-talent"},
        {name:"Job History", url:"/job-history"},
    ]
    const location = useLocation();
    const {user}= useSelector((state:any)=>state.auth)
    return (
        <div className="flex bs-mx:hidden gap-5 h-full items-center text-mine-shaft-300">
            {
                user?.accountType == "EMPLOYER" &&
                linksForEmployee.map
                    ((link, index) => (
                    <div className={`${location.pathname==link.url?"border-bright-sun-400 text-bright-sun-400":"border-transparent"} border-t-[3px] h-full flex items-center`} key={index}>
                        <Link key={index} to={link.url}>{link.name}</Link>
                    </div>
                ))
            }
            {
                user?.accountType == "APPLICANT" &&
                linksForApplicant.map
                ((link, index) => (
                    <div className={`${location.pathname==link.url?"border-bright-sun-400 text-bright-sun-400":"border-transparent"} border-t-[3px] h-full flex items-center`} key={index}>
                        <Link key={index} to={link.url}>{link.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}
export default NavLinks
