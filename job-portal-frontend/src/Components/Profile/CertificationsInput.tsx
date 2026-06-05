import SelectInput from "../PostJob/SelectInput";
import fields from "../../../public/Data/Profile";
import React, {useState} from "react";
import {Button, TextInput} from "@mantine/core";
import {MonthPickerInput} from "@mantine/dates";

const CertificationsInput = (props:any) => {
    const [issueDate, setIssueDate] = useState<string | null>(null)

    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Add Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput withAsterisk
                           label="Title"
                           placeholder="Enter title"
                />
                <SelectInput {...fields[1]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput
                    maxDate={new Date()}
                    label="Issue Date"
                    placeholder="Pick issue date"
                    value={issueDate}
                    onChange={setIssueDate}
                    withAsterisk
                />
                <TextInput withAsterisk
                           label="Certificate ID"
                           placeholder="Enter certificate id"
                />
            </div>
            <div className="flex gap-5">
                <Button onClick={()=>props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
                <Button color="red.8" onClick={()=>props.setEdit(false)} variant="outline">Cancel</Button>
            </div>
        </div>

    )}
export default CertificationsInput
