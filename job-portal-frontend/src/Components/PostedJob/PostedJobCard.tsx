import React from 'react'
import {Link, useParams} from "react-router-dom";
import {timeAgo} from "../../Utils/Utilities";

const PostedJobCard = (props:any) => {
    const {id} = useParams()
    return (
        <Link to={`/posted-jobs/${props.id}`} className="bg-mine-shaft-900 rounded-xl p-2 border-l-2 border-l-bright-sun-400">
            <div className="text-sm font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300 font-medium">{props.location}</div>
            <div className="text-xs text-mine-shaft-300">{timeAgo(props.postTime)}</div>
        </Link>
    )
}
export default PostedJobCard
