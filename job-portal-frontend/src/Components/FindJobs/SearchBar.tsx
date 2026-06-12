import React, {useState} from 'react'
import {MultiInput} from "./MultiInput";
import {dropdownData} from "../../../public/Data/JobsData";
import {Divider, RangeSlider} from "@mantine/core";
import {transitions} from "@mantine/core/lib/components/Transition/transitions";
import {useDispatch} from "react-redux";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    const dispatch = useDispatch();
    const handleChange = (event:any) =>{
            dispatch({
                type: "UPDATE_FILTER",
                payload: {salary: event}
            });
    }
    return (
        <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
            {
                dropdownData.map((item , index) => (
                    <React.Fragment key={index}>
                        <div className="w-1/5" key={index}>
                            <MultiInput {...item} />
                        </div>
                        <Divider mr="xs" size="xs" orientation="vertical"/>
                    </React.Fragment>
                ))
            }
            <div className="w-1/5 [&_.mantine-RangeSlider-label]:!translate-y-10">
                <div className="flex justify-between text-sm">
                    <div>Salary</div>
                    <div>&#8360;{value[0]} LPA - &#8360;{value[1]} LPA</div>
                </div>
                <RangeSlider
                    onChangeEnd={handleChange}
                    size="xs"
                    minRange={1}
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
