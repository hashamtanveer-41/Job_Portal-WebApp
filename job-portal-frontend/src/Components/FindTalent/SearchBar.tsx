import React, {useState} from 'react'
import {Button, Collapse, Divider, Input, RangeSlider} from "@mantine/core";
import {searchFields} from "../../../public/Data/TalentData";
import {MultiInput} from "../FindJobs/MultiInput";
import {IconUserCircle} from "@tabler/icons-react";
import {useDispatch} from "react-redux";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([0, 50]);
    const matches = useMediaQuery('(max-width: 475px)');
    const [expanded, { toggle }] = useDisclosure(false);
    const [name, setName] = useState("")
    const dispatch = useDispatch();
    const handleChange = (name:any, val:any) =>{
        if (name=="exp"){
            dispatch({
                type: "UPDATE_FILTER",
                payload: {exp: val}
            });
        }else {
            dispatch({
                type: "UPDATE_FILTER",
                payload: {name: val.target.value}
            });
            setName(val.currentTarget.value);
        }
    }
    return (
        <div>
            <div className="flex justify-end">
                { matches &&
                    <Button onClick={toggle} variant='outline' my='sm' radius='lg' autoContrast
                            color='brightSun.4'>{expanded ? "Closed" : "Filters"}</Button>}
            </div>
            <Collapse expanded={(expanded || !matches)}>

            <div className="flex px-5 py-8 lg-mx:!flex-wrap items-center !text-mine-shaft-100">
            <div className="flex w-1/5 sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1 bs-mx:w-[30%] lg-mx:w-1/4 items-center">
                <div className="text-bright-sun-400  bg-mine-shaft-900 rounded-full p-1"><IconUserCircle size={20}/></div>
                <Input className="[&_input]:!placeholder-mine-shaft-300"
                       variant="unstyled"
                       defaultValue={name}
                       onChange={(e)=>handleChange("name", e)}
                       placeholder="Talent Name"
                />
            </div>

            {
                searchFields.map((item , index) => (
                    <React.Fragment key={index}>
                        <div className="w-1/5 sm-mx:w-[48%] xs-mx:mb-1 bs-mx:w-[30%] lg-mx:w-1/4 xs-mx:w-full xs-mx:mb-1" >
                            <MultiInput {...item} />
                        </div>
                        <Divider className="sm-mx:hidden" mr="xs" size="xs" orientation="vertical"/>
                    </React.Fragment>
                ))
            }
            <div className="w-1/5 lg-mx:w-1/4 lg-mx:mt-7 xs-mx:mb-1 sm-mx:w-[48%] xs-mx:w-full bs-mx:w-[30%] [&_.mantine-RangeSlider-label]:!translate-y-10">
                <div className="flex justify-between text-sm">
                    <div>Experiences (Years)</div>
                    <div>{value[0]}  - {value[1]}</div>
                </div>
                <RangeSlider
                    onChangeEnd={(e)=>handleChange("exp", e)}
                    value={value}
                    onChange={setValue}
                    max={50}
                    min={1}
                    minRange={1}
                    size="xs"
                    color="brightSun.4"
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
