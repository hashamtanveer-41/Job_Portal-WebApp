import React from 'react'
import {talents} from "../../../public/Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";
import {useParams} from "react-router-dom";

const RecommendTalent = (props:any) => {
    const {id} = useParams();
    return (
        <div>
            <div className="text-xl font-semibold mt-3 mb-5">Recommended Talent</div>
            <div className="flex flex-col flex-wrap gap-5 justify-between">
                {props?.talents?.map((talent:any, index:any) => (
                  index<4 && id!=talent.id &&  <TalentCard key={index} {...talent} />
                ))}
            </div>
        </div>
    )
}
export default RecommendTalent
