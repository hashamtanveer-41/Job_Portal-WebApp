import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {
    Button,
    Divider,
    FileInput,
    LoadingOverlay,
    Notification,
    NumberInput,
    rem,
    Textarea,
    TextInput
} from "@mantine/core";
import {IconArrowLeft, IconBookmark, IconCheck, IconPaperclip} from "@tabler/icons-react";
import ApplicationForm from "./ApplicationForm";
import {timeAgo} from "../../Utils/Utilities";

const ApplyJobComp = (props:any) => {
    const [submit, setSubmit] = useState(false);
    return (
        <>
            <div className="w-2/3 mx-auto">
                <LoadingOverlay
                    className="!fixed"
                    visible={submit}
                    zIndex={1000}
                    overlayProps={{radius:"sm", blur:2}}
                    loaderProps={{color:"brightSun.4", type:'bars'}}
                />

                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-14" src={`/Icons/${props.company}.png`} alt={props.company} /></div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold text-2xl">{props.jobTitle}</div>
                            <div className="text-lg text-mine-shaft-300">{props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants?props.applicants.length:0} Applicants</div>
                        </div>
                    </div>
                    </div>
                <Divider my="xl"/>
                <div className="text-xl font-semibold mb-5">Submit Your Application</div>
                <ApplicationForm setSubmit={setSubmit} id={props.id}/>
            </div>
            {/*{submit && <Notification*/}
            {/*    icon={<IconCheck style={{width: rem(20), height: rem(20)}}/>}*/}
            {/*    color="teal"*/}
            {/*    title="Application Submitted!"*/}
            {/*    mt="md"*/}
            {/*    withCloseButton={false}*/}
            {/*    withBorder*/}
            {/*    className={`!border-bright-sun-400 !fixed z-[10001] transition duration-300 ease-in-out top-0 left-[35%] ${submit ? "translate-y-0" : "-translate-y-20"}`}*/}
            {/*>*/}
            {/*    Redirecting to Find Jobs in {sec} seconds...*/}
            {/*</Notification>}*/}
        </>
    )
}
export default ApplyJobComp
