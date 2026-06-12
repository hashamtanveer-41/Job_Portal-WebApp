import React, {useEffect, useState} from 'react'
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import {getAllProfiles} from "../../Store/action";
import {useDispatch, useSelector} from "react-redux";

const Talents = () => {
    const [talents, setTalents] = useState<any>([]);
    const dispatch = useDispatch();
    const filter = useSelector((state:any) => state.filter);
    const [filteredTalents, setFilteredTalents] = useState<any>([])
    const sort = useSelector((state:any) => state.sort);

    useEffect(() => {
        dispatch({
            type: "RESET_FILTER",
        });
        dispatch({
            type: "RESET_SORT",
        });
        (dispatch as any)(getAllProfiles(setTalents));
    },[]);

    useEffect(() => {
        let filterTalents = talents;
        if (filter.name) {
            filterTalents = filterTalents.filter((talent: any) => talent.name.toLowerCase().includes(filter.name.toLowerCase()))
        }
        if (filter["Job Title"] && filter["Job Title"].length>0){
            filterTalents = filterTalents
                .filter(
                    (talent: any) => filter["Job Title"]?.some(
                        (title:any)=>talent.role.toLowerCase().includes(title.toLowerCase())));
        }
        if (filter.Location && filter.Location.length>0){
            filterTalents = filterTalents
                .filter(
                    (talent: any) => filter.Location?.some(
                        (location:any)=>talent.location.toLowerCase().includes(location.toLowerCase())));
        }
        if (filter.Skills && filter.Skills.length>0){
            filterTalents = filterTalents
                .filter(
                    (talent: any) => filter.Skills?.some(
                        (skill:any)=>talent.skills.some((talentSkill:any)=>talentSkill.toLowerCase().includes(skill.toLowerCase()))));
        }
        if (filter.exp && filter.exp.length>0){
            filterTalents = filterTalents
                .filter(
                    (talent: any) => filter.exp[0]<=talent.totalExp && talent.totalExp<=filter.exp[1])
        }
        setFilteredTalents(filterTalents)
    }, [filter, talents]);

    useEffect(() => {
        if (sort=="Most Recent"){
            setTalents([...talents].sort((a: any, b:any)=>new Date(b.postTime).getTime() - new Date(a.postTime).getTime()))
        }else if (sort=="Experience: Low to High"){
            setTalents([...talents].sort((a: any, b:any)=>a.totalExp - b.totalExp))
        }else if (sort=="Experience: High to Low"){
            setTalents([...talents].sort((a: any, b:any)=>b.totalExp - a.totalExp))
        }else{

        }
    }, [sort]);
    
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Recommended Talents</div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap gap-5 justify-between">
                {filteredTalents?.length?filteredTalents.map((talent:any, index:any)=>(
                    <TalentCard key={index} {...talent}/>
                )):
                    <div className="text-2xl font-semibold">
                        No Talents Found
                    </div>
                }
            </div>
        </div>
    )
}
export default Talents
