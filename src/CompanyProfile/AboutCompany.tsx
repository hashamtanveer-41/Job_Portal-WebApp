import React from 'react'
import {companyData} from "../../public/Data/Company";

const AboutCompany = () => {
    const company :{[key:string]:any}= companyData;
    return (
        <div className="flex flex-col gap-5">
            {
                Object.keys(company).map((key, index) =>
                    key !="Name" &&
                    (
                    <div key={index}>
                        <div className="text-xl font-semibold mb-3 ">{key}</div>
                        {key!="Website"?
                            <div className="text-sm text-mine-shaft-300 text-justify">
                                {key!="Specialties"
                                    ? company[key]
                                    :
                                    company[key].map((item:any, index:any) =>(
                                        <span key={index}> &bull; {item}</span>
                                    ))}</div>
                            :
                            <a href={company[key]} target="_blank" className="text-sm text-bright-sun-400 text-justify">
                                {company[key]}
                            </a>
                        }
                    </div>
                ))
            }
        </div>
    )
}
export default AboutCompany
