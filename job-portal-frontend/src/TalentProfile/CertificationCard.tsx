import React from 'react'

const CertificationCard = (props:any) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.issuer}.png`} alt='Microsoft' /></div>
                <div className="flex flex-col ">
                    <div className="font-semibold">{props.name}</div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-sm text-mine-shaft-300">{props.issueDate}</div>
                <div className="text-sm text-mine-shaft-300">ID: {props.certificateId}</div>
            </div>
        </div>
    )
}
export default CertificationCard
