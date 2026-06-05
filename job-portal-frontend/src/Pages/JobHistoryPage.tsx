import React from 'react'
import PostedJob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";
import JobHistory from "../Components/JobHistory/JobHistory";

const JobHistoryPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-4">
            <div className="p-2">
                <JobHistory />
            </div>

        </div>
    )
}
export default JobHistoryPage
