import SelectInput from "../Profile/SelectInput";
import fields from "../../../public/Data/Profile";
import React, {useState} from "react";
import {Button, TextInput} from "@mantine/core";
import {MonthPickerInput} from "@mantine/dates";
import {isNotEmpty, useForm} from "@mantine/form";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../Store/action";
import {useMediaQuery} from "@mantine/hooks";

const CertificationsInput = (props:any) => {
    const {profile} = useSelector((state:any) => state.profile)
    const dispatch = useDispatch();
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            name: "",
            issuer: "",
            issueDate: new Date(),
            certificateId: "",
        },
        validate: {
            name: isNotEmpty("Name is required"),
            issuer: isNotEmpty("Issuer is required"),
            issueDate: isNotEmpty("Issue Date is required"),
            certificateId: isNotEmpty("Certificate Id  is required")
        }
    })
    const handleSave = async () => {
        form.validate();
        if(!form.isValid())return;
        let certi = [...profile.certifications];
        console.log(certi)
        certi.push(form.getValues());
        certi[certi.length-1].issueDate= certi[certi.length-1].issueDate.toISOString();
        let updatedProfile = {...profile, certifications: certi};
        (dispatch as any)(updateProfile(updatedProfile, `Certification Added Successfully`))
        props.setEdit(false)
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Add Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:flex-wrap md-mx:gap-5 my-3">
                <TextInput withAsterisk
                           {...form.getInputProps("name")}
                           label="Name"
                           placeholder="Enter name"
                />
                <SelectInput form={form} name="issuer" {...fields[1]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:flex-wrap md-mx:gap-5 my-3">
                <MonthPickerInput
                    {...form.getInputProps("issueDate")}
                    maxDate={new Date()}
                    label="Issue Date"
                    placeholder="Pick issue date"
                    withAsterisk
                />
                <TextInput withAsterisk
                           {...form.getInputProps("certificateId")}
                           label="Certificate ID"
                           placeholder="Enter certificate id"
                />
            </div>
            <div className="flex gap-5">
                <Button onClick={handleSave} color="brightSun.4" variant="outline">Save</Button>
                <Button color="red.8" onClick={()=>props.setEdit(false)} variant="outline">Cancel</Button>
            </div>
        </div>

    )}
export default CertificationsInput
