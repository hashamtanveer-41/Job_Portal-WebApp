import React, {useState} from 'react'
import SelectInput from "../PostJob/SelectInput";
import fields from "../../../public/Data/Profile";
import {Anchor, Button, Checkbox, Textarea} from "@mantine/core";
import {MonthPickerInput} from "@mantine/dates";

const ExperienceInput = (props:any) => {
    const [desc, setDesc] = useState(props.description)
    const [startDate, setStartDate] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)
    const [checked, setChecked] = useState(false)
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experience</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...fields[0]}/>
                <SelectInput {...fields[1]}/>
             </div>
            <SelectInput {...fields[2]}/>
            <Textarea
                withAsterisk
                label="Summary"
                className="mb-3"
                value={desc}
                onChange={(event) => setDesc(event.currentTarget.value)}
                autosize
                minRows={3}
                placeholder="Enter Summary..."
            />
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput
                    maxDate={endDate||undefined}
                    label="Start Date"
                    placeholder="Pick start date"
                    value={startDate}
                    onChange={setStartDate}
                    withAsterisk
                />
                <MonthPickerInput
                    disabled={checked}
                    withAsterisk
                    minDate={startDate||undefined}
                    maxDate={new Date()}
                    label="End Date"
                    placeholder="Pick end date"
                    value={endDate}
                    onChange={setEndDate}
                />
            </div>
            <Checkbox
                autoContrast
                defaultChecked
                label="Currently Working here"
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
            />
            <div className="flex gap-5">
                <Button onClick={()=>props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
                <Button color="red.8" onClick={()=>props.setEdit(false)} variant="outline">Cancel</Button>
            </div>
        </div>
    )
}
export default ExperienceInput
