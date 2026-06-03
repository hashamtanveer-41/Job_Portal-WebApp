import React from 'react'
import SelectInput from "./SelectInput";
import {fields} from "../../public/Data/PostJob";
import {TagsInput} from "@mantine/core";

const PostJob = () => {
    const selectField = fields;
    return (
        <div className="w-4/5 mx-auto">
            <div className="text-2xl font-semibold mb-5">Post a Job</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...selectField[0]}/>
                    <SelectInput {...selectField[1]}/>
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...selectField[2]}/>
                    <SelectInput {...selectField[3]}/>
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...selectField[4]}/>
                    <SelectInput {...selectField[5]}/>
                </div>
                <TagsInput withAsterisk label="Skils" placeholder="Enter Skill" clearable acceptValueOnBlur splitChars={[',', ' ', '|']}/>
            </div>
        </div>
    )
}
export default PostJob
