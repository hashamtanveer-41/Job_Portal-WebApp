import React from 'react'
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";
import JobHistory from "../JobHistory/JobHistory";

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
