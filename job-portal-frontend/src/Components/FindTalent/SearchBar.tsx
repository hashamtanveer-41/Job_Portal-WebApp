import React, {useState} from 'react'
import {Divider, Input, RangeSlider} from "@mantine/core";
import {searchFields} from "../../../public/Data/TalentData";
import {MultiInput} from "../FindJobs/MultiInput";
import {IconUserCircle} from "@tabler/icons-react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
            <div className="flex items-center">
                <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1"><IconUserCircle size={20}/></div>
                <Input className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name"/>
            </div>

        {
                searchFields.map((item , index) => (
                    <>
                        <div className="w-1/5" key={index}>
                            <MultiInput {...item} />
                        </div>
                        <Divider mr="xs" size="xs" orientation="vertical"/>
                    </>
                ))
            }
            <div className="w-1/5 [&_.mantine-RangeSlider-label]:!translate-y-10">
                <div className="flex justify-between text-sm">
                    <div>Salary</div>
                    <div>&#8360;{value[0]} LPA - &#8360;{value[1]} LPA</div>
                </div>
                <RangeSlider
                    size="xs"
                    color="brightSun.4"
                    value={value}
                    onChange={setValue}
                    labelTransitionProps={{
                        transition: 'skew-down',
                        duration: 150,
                        timingFunction: 'linear',
                    }}
                />
            </div>
        </div>
    )
}
export default SearchBar
