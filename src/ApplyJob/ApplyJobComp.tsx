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

const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const handleSubmit = () => {
        setSubmit(true)
        let x =5;
        setInterval(()=>{
            x--;
            setSec(x)
            if (x==0){
                navigate('/find-jobs')
            }
        },1000)
    }
    const handlePreview = () => {
        setPreview(!preview)
        window.scroll({top:0, behavior:'smooth'})
    }
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
                            <img className="h-14" src={`/Icons/Google.png`} alt='Microsoft' /></div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold text-2xl">Software Engineer</div>
                            <div className="text-lg text-mine-shaft-300">Google &bull; 3 days ago &bull; 48 Applicants</div>
                        </div>
                    </div>
                    </div>
                <Divider my="xl"/>
                <div className="text-xl font-semibold mb-5">Submit Your Application</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <TextInput withAsterisk
                                   readOnly={preview}
                                   variant={preview?"unstyled":"default"}
                                   className={`${preview && "text-mine-shaft-300 font-semibold"}`}
                                   label="Full Name"
                                   placeholder="Enter name"
                        />
                        <TextInput
                            readOnly={preview}
                            variant={preview?"unstyled":"default"}
                            className={`${preview && "text-mine-shaft-300 font-semibold"}`}
                            label="Email"
                            withAsterisk
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <NumberInput
                            readOnly={preview}
                            variant={preview?"unstyled":"default"}
                            className={`${preview && "text-mine-shaft-300 font-semibold"}`}
                            withAsterisk
                            label="Phone Number"
                            placeholder="Enter phone number"
                            min={0} max={99999999999}
                            clampBehavior="strict"
                            hideControls
                        />
                        <TextInput
                            label="Personal Website"
                            withAsterisk
                            placeholder="Enter URL"
                            readOnly={preview}
                            variant={preview?"unstyled":"default"}
                            className={`${preview && "text-mine-shaft-300 font-semibold"}`}
                        />
                    </div>
                    <FileInput
                        readOnly={preview}
                        variant={preview?"unstyled":"default"}
                        className={`${preview && "text-mine-shaft-300 font-semibold"}`}
                        withAsterisk
                        leftSection={<IconPaperclip stroke={1.5}/>}
                        label="Attach Your Resume"
                        placeholder="Your Resume"
                        leftSectionPointerEvents="none"
                    />
                    <Textarea
                        readOnly={preview}
                        variant={preview?"unstyled":"default"}
                        className={`${preview && "text-mine-shaft-300 font-semibold"}`}
                        withAsterisk
                        placeholder="Type Something about yourself"
                        label="Cover Letter"
                        minRows={3}
                        autosize
                    />
                    {
                        preview?(
                            <div className="flex gap-10 [&>*]:w-1/2">
                                <Button
                                    onClick={()=>handlePreview()}
                                    color="brightSun.4"
                                    variant="outline"
                                    fullWidth
                                >Edit
                                </Button>
                                <Button
                                onClick={()=>handleSubmit()}
                                color="brightSun.4"
                                fullWidth
                                variant="light"
                            >Submit
                            </Button>
                            </div>
                            ):
                            <Button
                            onClick={()=>handlePreview()}
                            color="brightSun.4"
                            variant="light"
                        >Preview
                        </Button>
                    }

                </div>
            </div>
            {submit && <Notification
                icon={<IconCheck style={{width: rem(20), height: rem(20)}}/>}
                color="teal"
                title="Application Submitted!"
                mt="md"
                withCloseButton={false}
                withBorder
                className={`!border-bright-sun-400 !fixed z-[10001] transition duration-300 ease-in-out top-0 left-[35%] ${submit ? "translate-y-0" : "-translate-y-20"}`}
            >
                Redirecting to Find Jobs in {sec} seconds...
            </Notification>}
        </>
    )
}
export default ApplyJobComp
