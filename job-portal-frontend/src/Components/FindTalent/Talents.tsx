import React from 'react'
import Sort from "../FindJobs/Sort";
import {talents} from "../../../public/Data/TalentData";
import TalentCard from "./TalentCard";

const Talents = () => {
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Recommended Talents</div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap gap-5 justify-between">
                {talents.map((talent, index)=>(
                    <TalentCard key={index} {...talent}/>
                ))}
            </div>
        </div>
    )
}
export default Talents
