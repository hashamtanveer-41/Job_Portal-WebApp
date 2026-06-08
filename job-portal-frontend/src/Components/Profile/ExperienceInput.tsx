import React, {useEffect, useState} from 'react'
import SelectInput from "../PostJob/SelectInput";
import fields from "../../../public/Data/Profile";
import {Anchor, Button, Checkbox, Textarea} from "@mantine/core";
import {MonthPickerInput} from "@mantine/dates";
import {useDispatch, useSelector} from "react-redux";
import {isNotEmpty, useForm} from "@mantine/form";
import {updateProfile} from "../../Store/action";

const ExperienceInput = (props:any) => {
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            title: "",
            company: "",
            location: "",
            description: "",
            startDate: new Date(),
            endDate: new Date(),
            working: false
        },
        validate:{
            title: isNotEmpty("Title is required"),
            description: isNotEmpty("Description is required"),
            location: isNotEmpty("Location is required"),
            company: isNotEmpty("Company is required"),

        }
    });


    useEffect(() => {
        console.log(props.title)
        if (!props.add) {
            form.setValues({
                title: props.title,
                company: props.company,
                location: props.location,
                description: props.description,
                startDate: new Date(props.startDate),
                endDate: new Date(props.endDate),
                working: props.working
            })
        }
    }, []);

    const handleSave = () => {
        form.validate();
        if(!form.isValid())return;
        let exp = [...profile.experiences];
        if (props.add){
            exp.push(form.getValues())
            exp[exp.length-1].startDate=exp[exp.length-1].startDate.toISOString();
            exp[exp.length-1].endDate=exp[exp.length-1].endDate.toISOString();
        }else{
            exp[props.index]= form.getValues();
            console.log(exp[props.index].startDate)
            exp[props.index].startDate=exp[props.index].startDate.toISOString();
            exp[props.index].endDate=exp[props.index].endDate.toISOString();
        }
        let updatedProfile = {...profile, experiences: exp};
        props.setEdit(false);
        if (!props.add)props.pencil(false);
        (dispatch as any)(updateProfile(updatedProfile, `Experience ${props.add? "Added":"Updated"}`))
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experience</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="title" {...fields[0]}/>
                <SelectInput form={form} name="company" {...fields[1]}/>
             </div>
            <SelectInput form={form} name="location" {...fields[2]}/>
            <Textarea
                {...form.getInputProps("description")}
                withAsterisk
                label="Summary"
                className="mb-3"
                autosize
                minRows={3}
                placeholder="Enter Summary..."
            />
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput
                    {...form.getInputProps("startDate")}
                    maxDate={form.getValues().endDate || undefined}
                    label="Start Date"
                    placeholder="Pick start date"
                    withAsterisk
                />
                <MonthPickerInput
                    {...form.getInputProps("endDate")}
                    disabled={form.getValues().working}
                    withAsterisk
                    minDate={form.getValues().startDate || undefined}
                    maxDate={new Date()}
                    label="End Date"
                    placeholder="Pick end date"
                />
            </div>
            <Checkbox
                {...form.getInputProps("working")}
                checked={form.getValues().working}
                className="!cursor-pointer"
                onChange={(event)=>form.setFieldValue("working", event.currentTarget.checked)}
                autoContrast
                label="Currently Working here"

            />
            <div className="flex gap-5">
                <Button onClick={handleSave} color="brightSun.4" variant="outline">Save</Button>
                <Button color="red.8" onClick={()=>props.setEdit(false)} variant="outline">Cancel</Button>
            </div>
        </div>
    )
}
export default ExperienceInput
