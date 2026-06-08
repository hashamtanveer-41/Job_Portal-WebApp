 import React, {useState} from 'react'
import {ActionIcon} from "@mantine/core";
 import {IconCheck, IconPencil, IconPlus, IconX} from "@tabler/icons-react";
 import CertificationCard from "./CertificationCard";
 import CertificationsInput from "./CertificationsInput";
 import {useDispatch, useSelector} from "react-redux";

const Certificate = () => {

    const [addCerti , setAddCerti] = useState(false);
    const [edit, setEdit] = useState(false);
    const {user} = useSelector((state:any)=> state.auth);
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEdit(!edit)
    }
    const handleSave =()=> {

    }


    return (
        <>
            <div className='text-2xl font-semibold mb-5 flex justify-between'>
                Certifications
                <div className="flex gap-2">
                    <ActionIcon
                        onClick={() => setAddCerti(true)}
                        size="lg"
                        variant="subtle"
                    >
                        <IconPlus className="text-bright-sun-400 h-4/5 w-4/5" />
                    </ActionIcon>
                    <div>
                        {
                            edit &&
                            <ActionIcon
                                color="green.8"
                                onClick={() => handleSave()}
                                size="lg"
                                variant="subtle"
                            >
                                <IconCheck className="h-4/5 w-4/5" />
                            </ActionIcon>
                        }
                        <ActionIcon
                            color={edit?"red.8":"brightSun.4"}
                            onClick={() => handleEdit()}
                            size="lg"
                            variant="subtle"
                        >
                            {

                                edit?
                                    <IconX className=" h-4/5 w-4/5" />
                                    :
                                    <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                </div>
            </div>
            {
                profile?.certifications.map((item:any, index:any) => (
                    <div className="mb-10" key={index}>
                        <CertificationCard {...item} index={index} edit={edit} external={setEdit}/>
                    </div>
                ))
            }
            {
                addCerti &&   <CertificationsInput setEdit={setAddCerti}/>
            }
        </>
    )
}
export default Certificate
