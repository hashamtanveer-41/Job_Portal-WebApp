import React from 'react'
import {talents} from "../../public/Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";
import {similar} from "../../public/Data/Company";
import CompanyCards from "./CompanyCards";

const SimilarCompanies = () => {
    return (
        <div className="w-1/4">
            <div className="text-xl font-semibold mt-3 mb-5">Recommended Companies</div>
            <div className="flex flex-col flex-wrap gap-5">
                {similar.map((item, index) => (
                    <div key={index}>
                        <CompanyCards {...item}/>
                    </div>

                ))}
            </div>
        </div>
    )
}
export default SimilarCompanies
