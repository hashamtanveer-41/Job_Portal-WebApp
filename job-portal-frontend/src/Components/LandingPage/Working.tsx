import React from 'react'
import {work} from "../../../public/Data/Data";
import {Avatar} from "@mantine/core";

const WorkingTsx = () => {
    return (
        <div className="mt-5 pb-20">
            <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl mb-3 text-center font-semibold text-mine-shaft-100">How it <span className="text-bright-sun-400">Works?</span> </div>
            <div className="text-2xl mb-10 sm-mx:text-base xs-mx:text-sm sm-mx:w-11/12 text-mine-shaft-300 text-center w-1/2 mx-auto">Effortlessly navigate through the process and land your dream job!</div>
            <div className="flex px-16 bs-mx:px-10 md-mx:px-5 gap-2 md-mx:flex-col justify-between items-center md-mx:">
                <div className="relative" >
                    <img className="w-[35rem]" src="/Working/Girl.png" alt="girl"/>
                    <div className="w-36 xs-mx:w-28 flex flex-col top-[15%] right-0 absolute items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md  ">
                        <Avatar className="!h-16 !w-16 xs-mx:!h-12 xs-mx:!w-12" src="/avatar1.png" alt="me"/>
                        <div className="text-sm sm-mx:text-xs  font-semibold text-mine-shaft-200 text-center">Complete your profile</div>
                        <div className="text-xs text-mine-shaft-300">70% completed </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 ">
                    {work.map((item,index) => (
                        <div className="flex items-center gap-4" key={index}>
                            <div className="p-2.5 bg-bright-sun-300 rounded-full">
                                <img className="h-14 w-14 md-mx:w-9 md-mx:h-9 sm-mx:h-7 sm-mx:w-7" src={`/Working/${item.name}.png`} alt={item.name}/>
                            </div>
                            <div>
                                <div className="text-mine-shaft-200 md-mx:text-lg sm-mx:text-base text-xl font-semibold">{item.name}</div>
                                <div className="text-mine-shaft-300 md-mx:text-sm sm-mx:text-xs ">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default WorkingTsx
