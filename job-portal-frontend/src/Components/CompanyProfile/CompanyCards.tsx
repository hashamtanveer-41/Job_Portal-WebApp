import React from 'react'
import {IconAdjustments, IconBookmark, IconExternalLink} from "@tabler/icons-react";
import {ActionIcon} from "@mantine/core";

const CompanyCards = (props:any) => {
    return (
        <div>
            <div className="flex justify-between bg-mine-shaft-900 items-center p-2 rounded-lg">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.name}.png`} alt='Microsoft' /></div>
                    <div>
                        <div className="font-semibold">{props.name}</div>
                        <div className="text-xs text-mine-shaft-300">{props.employees} Employees </div>
                    </div>
                </div>

                <ActionIcon color="brightSun.4" variant="subtle"  aria-label="Settings">
                    <IconExternalLink   />
                </ActionIcon>
            </div>
        </div>
    )
}
export default CompanyCards
