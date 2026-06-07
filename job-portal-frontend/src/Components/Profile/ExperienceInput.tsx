import React, {useEffect, useState} from 'react'
import SelectInput from "../PostJob/SelectInput";
import fields from "../../../public/Data/Profile";
import {Anchor, Button, Checkbox, Textarea} from "@mantine/core";
import {MonthPickerInput} from "@mantine/dates";
import {useDispatch, useSelector} from "react-redux";
import {isNotEmpty, useForm} from "@mantine/form";

const ExperienceInput = (props:any) => {
    const [startDate, setStartDate] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)
    const [checked, setChecked] = useState(false)

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
                startDate: props.startDate,
                endDate: props.endDate,
                working: props.working
            })
        }
    }, []);

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
                    maxDate={endDate||undefined}
                    label="Start Date"
                    placeholder="Pick start date"
                    withAsterisk
                />
                <MonthPickerInput
                    {...form.getInputProps("endDate")}
                    disabled={checked}
                    withAsterisk
                    minDate={startDate||undefined}
                    maxDate={new Date()}
                    label="End Date"
                    placeholder="Pick end date"
                />
            </div>
            <Checkbox
                {...form.getInputProps("working")}
                autoContrast
                label="Currently Working here"
                checked={checked}
            />
            <div className="flex gap-5">
                <Button onClick={()=>props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
                <Button color="red.8" onClick={()=>props.setEdit(false)} variant="outline">Cancel</Button>
            </div>
        </div>
    )
}
export default ExperienceInput
