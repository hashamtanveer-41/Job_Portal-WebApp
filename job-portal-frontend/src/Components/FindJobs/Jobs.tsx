import React, {useEffect, useState} from 'react'
import Sort from "./Sort";
import JobCard from "./JobCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllJobs} from "../../Store/action";

const Jobs = (props:any) => {
    const [jobList, setJobList] = useState([{}]);
    const filter = useSelector((state:any) => state.filter);
    const sort = useSelector((state:any) => state.sort);
    const [filteredJobs, setFilteredJobs] = useState<any>([])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "RESET_FILTER",
        });
        dispatch({
            type: "RESET_SORT",
        });
        (dispatch as any)(getAllJobs(setJobList));
    }, []);
    useEffect(() => {
        if (sort=="Most Recent"){
            setJobList([...jobList].sort((a: any, b:any)=>new Date(b.postTime).getTime() - new Date(a.postTime).getTime()))
        }else if (sort=="Salary: Low to High"){
            setJobList([...jobList].sort((a: any, b:any)=>a.packageOffered - b.packageOffered))
        }else if (sort=="Salary: High to Low"){
            setJobList([...jobList].sort((a: any, b:any)=>b.packageOffered - a.packageOffered))
        }else{

        }
        }, [sort]);
    useEffect(() => {
        let filterJobs = jobList;

        if (filter["Job Title"] && filter["Job Title"].length>0){
            filterJobs = filterJobs
                .filter(
                    (job: any) => filter["Job Title"]?.some(
                        (title:any)=>job.jobTitle.toLowerCase().includes(title.toLowerCase())));
        }
        if (filter.Location && filter.Location.length>0){
            filterJobs = filterJobs
                .filter(
                    (job: any) => filter.Location?.some(
                        (location:any)=>job.location.toLowerCase().includes(location.toLowerCase())));
        }
        if (filter.Experience && filter.Experience.length>0){
            filterJobs = filterJobs
                .filter(
                    (job: any) => filter.Experience?.some(
                        (exp:any)=>job.experience?.toLowerCase().includes(exp.toLowerCase())));
        }
        if (filter["Job Type"] && filter["Job Type"].length>0){
            filterJobs = filterJobs
                .filter(
                    (job: any) => filter["Job Type"]?.some(
                        (title:any)=>job.jobType.toLowerCase().includes(title.toLowerCase())));
        }
        if (filter.salary && filter.salary.length>0){
            filterJobs = filterJobs
                .filter(
                    (job: any) => filter.salary[0]<=job.packageOffered && job.packageOffered<=filter.salary[1])
        }

        setFilteredJobs(filterJobs)
    }, [filter, jobList]);

    return (
        <div className="p-5">
            <div className="flex xs-mx:flex-wrap items-center justify-between">
                <div className="text-2xl font-semibold xs-mx:text-xl">Recommended Jobs</div>
                <Sort sort="job"/>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 items-start">
                {
                    filteredJobs?.map((job:any, index:any) => (
                        <JobCard key={index} {...job} />
                    ))
                }
            </div>
        </div>
    )
}
export default Jobs
