import React, {useState} from 'react'
import {Divider, Input, RangeSlider} from "@mantine/core";
import {searchFields} from "../../../public/Data/TalentData";
import {MultiInput} from "../FindJobs/MultiInput";
import {IconUserCircle} from "@tabler/icons-react";
import {useDispatch} from "react-redux";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([0, 50]);
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
        <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
            <div className="flex items-center">
                <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1"><IconUserCircle size={20}/></div>
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
                        <div className="w-1/5" >
                            <MultiInput {...item} />
                        </div>
                        <Divider mr="xs" size="xs" orientation="vertical"/>
                    </React.Fragment>
                ))
            }
            <div className="w-1/5 [&_.mantine-RangeSlider-label]:!translate-y-10">
                <div className="flex justify-between text-sm">
                    <div>Experiences (Years)</div>
                    <div>{value[0]}  - {value[1]}</div>
                </div>
                <RangeSlider
                    onChangeEnd={(e)=>handleChange("exp", e)}
                    max={50}
                    min={1}
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
