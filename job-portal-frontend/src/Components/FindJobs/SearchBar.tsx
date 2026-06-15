import React, {useState} from 'react'
import {MultiInput} from "./MultiInput";
import {dropdownData} from "../../../public/Data/JobsData";
import {Button, Collapse, Divider, RangeSlider} from "@mantine/core";
import {transitions} from "@mantine/core/lib/components/Transition/transitions";
import {useDispatch} from "react-redux";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    const [expanded, { toggle }] = useDisclosure(false);
    const dispatch = useDispatch();
    const matches = useMediaQuery('(max-width: 475px)');
    const handleChange = (event:any) =>{
            dispatch({
                type: "UPDATE_FILTER",
                payload: {salary: event}
            });
    }
    return (
        <div>
            <div className="flex justify-end">
                { matches &&
                    <Button onClick={toggle} variant='outline' my='sm' radius='lg' autoContrast
                         color='brightSun.4'>{expanded ? "Closed" : "Filters"}</Button>}
            </div>
        <Collapse expanded={(expanded || !matches)}>
        <div className="flex px-5 lg-mx:flex-wrap py-8 items-center !text-mine-shaft-100">
            {
                dropdownData.map((item , index) => (
                    <React.Fragment key={index}>
                        <div className="w-1/5 sm-mx:w-[48%] bs-mx:w-[30%] lg-mx:w-1/4" key={index}>
                            <MultiInput {...item} />
                        </div>
                        <Divider className="sm-mx:hidden" mr="xs" size="xs" orientation="vertical"/>
                    </React.Fragment>
                ))
            }
            <div className="w-1/5 lg-mx:w-1/4 lg-mx:mt-7 sm-mx:w-[48%] bs-mx:w-[30%] [&_.mantine-RangeSlider-label]:!translate-y-10">
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
        </Collapse>
        </div>
    )
}
export default SearchBar
