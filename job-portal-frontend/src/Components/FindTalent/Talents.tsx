import React, {useEffect, useState} from 'react'
import Sort from "../FindJobs/Sort";
import {talents} from "../../../public/Data/TalentData";
import TalentCard from "./TalentCard";
import {getAllProfiles} from "../../Store/action";
import {useDispatch} from "react-redux";

const Talents = () => {
    const [talent, setTalent] = useState<any>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        (dispatch as any)(getAllProfiles(setTalent));
    },[]);

    
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Recommended Talents</div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap gap-5 justify-between">
                {talent.map((talent:any, index:any)=>(
                    <TalentCard key={index} {...talent}/>
                ))}
            </div>
        </div>
    )
}
export default Talents
