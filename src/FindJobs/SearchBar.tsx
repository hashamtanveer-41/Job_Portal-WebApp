import React, {useState} from 'react'
import {MultiInput} from "./MultiInput";
import {dropdownData} from "../../public/Data/JobsData";
import {Divider, RangeSlider} from "@mantine/core";
import {transitions} from "@mantine/core/lib/components/Transition/transitions";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className="flex px-5 py-8">
            {
                dropdownData.map((item , index) => (
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
