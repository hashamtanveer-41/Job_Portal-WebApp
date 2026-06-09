import React, {useState} from 'react'
import {Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput} from "@mantine/core";
import {IconPaperclip} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";
import {isNotEmpty, useForm} from "@mantine/form";

const ApplicationForm = (props:any) => {
    const [preview, setPreview] = useState(false);

    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const handleSubmit = () => {
        props.setSubmit(true)
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
        form.validate();
        if (!form.isValid())return;
        window.scroll({top:0, behavior:'smooth'})
        setPreview(!preview)
        console.log(form.getValues())
    }
    const form = useForm({
        mode: "controlled",
        validateInputOnChange: true,
        initialValues:{
            name: "",
            email: "",
            phone: "",
            website: "",
            resume: null,
            coverLetter: "",
        },
        validate:{
            name: isNotEmpty("Name is required"),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            phone: (value) => (/^\d{10}$/.test(value) ? null : "Invalid phone number"),
            website: (value) => (/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/.test(value) ? null : "Invalid URL"),
            resume: (value) => (value ? null : "Resume is required"),
            coverLetter: isNotEmpty("Cover letter is required"),
        }
    })
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <TextInput
                        withAsterisk
                        {...form.getInputProps("name")}
                        readOnly={preview}
                        variant={preview?"unstyled":"default"}
                        className={`${preview && "text-mine-shaft-300 font-semibold"}`}
                        label="Full Name"
                        placeholder="Enter name"
                    />
                    <TextInput
                        {...form.getInputProps("email")}
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
                        {...form.getInputProps("phone")}
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
                        {...form.getInputProps("website")}
                        label="Personal Website"
                        withAsterisk
                        placeholder="Enter URL"
                        readOnly={preview}
                        variant={preview?"unstyled":"default"}
                        className={`${preview && "text-mine-shaft-300 font-semibold"}`}
                    />
                </div>
                <FileInput
                    {...form.getInputProps("resume")}
                    accept="application/pdf"
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
                    {...form.getInputProps("coverLetter")}
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
        </>
    )
}
export default ApplicationForm
