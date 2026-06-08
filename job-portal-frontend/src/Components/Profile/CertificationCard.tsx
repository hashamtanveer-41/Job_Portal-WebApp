import React, {useState} from 'react'
import {IconTrash} from "@tabler/icons-react";
import {ActionIcon} from "@mantine/core";
import {FormatDate} from "../../Utils/FormatDate";
import {updateProfile} from "../../Store/action";
import {useDispatch, useSelector} from "react-redux";

const CertificationCard = (props:any) => {
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    const handleDelete = () => {
        let  certi = [...profile.certifications]
        certi.splice(props.index, 1);
        let updatedProfile = {...profile, certifications: certi};
        if (typeof props.external === 'function') {
            props.external(false);
        }
        (dispatch as any)(updateProfile(updatedProfile, "Certification deleted successfully!"))
    }
    return (
        <div>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.issuer}.png`} alt='Microsoft' /></div>
                    <div className="flex flex-col ">
                        <div className="font-semibold">{props.name}</div>
                        <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col">
                        <div className="text-sm text-mine-shaft-300">{FormatDate(props.issueDate)}</div>
                        <div className="text-sm text-mine-shaft-300">ID: {props.certificateId}</div>
                    </div>
                    {props.edit &&
                        <ActionIcon
                            size="lg"
                            variant="subtle"
                            color="red.8"
                        >
                            <IconTrash stroke={1.5} onClick={handleDelete} className="h-4/5 w-4/5"/>
                        </ActionIcon>}
                </div>
            </div>
        </div>
    )
}
export default CertificationCard
