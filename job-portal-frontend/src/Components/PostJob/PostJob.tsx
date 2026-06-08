import React from 'react'
import SelectInput from "./SelectInput";
import {content, fields} from "../../../public/Data/PostJob";
import {Button, NumberInput, TagsInput, Textarea} from "@mantine/core";
import TextEditor from "./TextEditor";
import {isNotEmpty, useForm} from "@mantine/form";
import {useDispatch} from "react-redux";
import {postJob} from "../../Store/action";
import {useNavigate} from "react-router-dom";

const PostJob = () => {
    const selectField = fields;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const form = useForm({
        mode: "controlled",
        validateInputOnChange: true,
        initialValues: {
            jobTitle: "",
            company: "",
            experience: "",
            jobType:"",
            location: "",
            packageOffered: "",
            skillsRequired: [],
            about: "",
            description: content,
        },
        validate:{
            jobTitle: isNotEmpty("Job Title is required"),
            company: isNotEmpty("Company is required"),
            experience: isNotEmpty("Experience is required"),
            jobType: isNotEmpty("Job Type is required"),
            location: isNotEmpty("Location is required"),
            packageOffered: isNotEmpty("Package Offered is required"),
            skillsRequired: isNotEmpty("Skills are required"),
            about: isNotEmpty("About is required"),
            description: isNotEmpty("Description is required"),
        }
    })

    const handleSubmit = async () => {
        form.validate();
        if(!form.isValid())return;
        (dispatch as any)(postJob(form.getValues(), navigate))
    }
    return (
        <div className="w-4/5 mx-auto">
            <div className="text-2xl font-semibold mb-5">Post a Job</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="jobTitle" {...selectField[0]}/>
                    <SelectInput form={form} name="company" {...selectField[1]}/>
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="experience" {...selectField[2]}/>
                    <SelectInput form={form} name="jobType"{...selectField[3]}/>
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="location" {...selectField[4]}/>
                    <NumberInput {...form.getInputProps('packageOffered')} label="Salary" placeholder="Enter Salary" hideControls withAsterisk min={1} max={300} clampBehavior="strict"/>
                </div>
                <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skils" placeholder="Enter Skill" clearable acceptValueOnBlur splitChars={[',', ' ', '|']}/>
                <Textarea
                    {...form.getInputProps("about")}
                    withAsterisk
                    label="About"
                    className="mb-3"
                    autosize
                    minRows={3}
                    placeholder="Enter about the job..."
                />
                <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:bg-bright-sun-400/20">
                    <div className="text-sm font-medium">Job Description<span className="text-red-500">*</span></div>
                    <TextEditor form={form} />
                </div>
                <div className="flex gap-4">
                    <Button onClick={handleSubmit} color="brightSun.4" variant="light">Publish Job</Button>
                    <Button color="brightSun.4" variant="outline">Save as Draft</Button>
                </div>
            </div>
        </div>
    )
}
export default PostJob
