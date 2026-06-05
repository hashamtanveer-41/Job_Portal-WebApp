import React from 'react'
import {IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX} from "@tabler/icons-react";
import {footerLinks} from "../../../public/Data/Data";
import {useLocation} from "react-router-dom";

export const Footer = () => {
    const location = useLocation();
    return (
        (location.pathname !="/signup" && location.pathname !="/login")?
            <>
        <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">
            <div className="w-1/4 flex flex-col gap-4">
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconAnchor className="h-6 w-6" stroke={2.5}/>
                    <div className="text-xl font-semibold">JobHook</div>
                </div>
                <div className="text-lg text-mine-shaft-300">
                    Job Portal with user profiles, skill updates, certifications, work experience and admin job postings.
                </div>
                <div className="flex items-center gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:py-2 [&>div]:rounded-full hover:[&>div]:bg-mine-shaft-700 [&>div]:cursor-pointer">
                    <div><IconBrandFacebook /></div>
                    <div><IconBrandInstagram /></div>
                    <div><IconBrandX /></div>
                </div>
            </div>
                {
                    footerLinks.map((item, index)=>(
                        <div key={index}>
                            <div className="text-lg font-semibold text-bright-sun-400 mb-4">{item.title}</div>
                            {
                                item.links.map((link, index) =>(
                                    <div key={index} className="mb-1 text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer transition duration-300 hover:translate-x-2">
                                        {link}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
        </div>
            </>
            :
            <></>
    )
}

