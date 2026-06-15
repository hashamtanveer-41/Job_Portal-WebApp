import React from 'react'
import {FormatDate} from "../../Utils/FormatDate";
import {useMediaQuery} from "@mantine/hooks";

const CertificationCard = (props:any) => {
    const matches =useMediaQuery("(max-width: 475px)")

    return (
        <div className="flex justify-between sm-mx:flex-wrap gap-2">
            <div className="flex gap-2 items-center">
                <div className="shrink-0 p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.issuer}.png`} alt='Microsoft' /></div>
                <div className="flex flex-col ">
                    <div className="font-semibold xs-mx:text-s">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300 xs-mx:text-xs">{props.issuer}</div>
                </div>
            </div>
            <div className="flex flex-col items-end sm-mx:flex-row sm-mx:gap-2">
                <div className="text-sm text-mine-shaft-300 xs-mx:text-xs">{FormatDate(props.issueDate)}</div>
                <div className="text-sm text-mine-shaft-300">ID: {props.certificateId}</div>
            </div>
        </div>
    )
}
export default CertificationCard
