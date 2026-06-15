import React from 'react'
import {Avatar, Rating} from "@mantine/core";
import {testimonials} from "../../../public/Data/Data";

const Testimonials = () => {
    return (
        <div className="mt-5 pb-5 p-5">
            <div className="text-4xl mb-3 md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold text-mine-shaft-100">What <span className="text-bright-sun-400">Users</span> say about Us?</div>
            <div className="flex justify-evenly md-mx:flex-wrap mt-10 gap-2">
                {
                    testimonials.map((testimonial, index)=>(
                        <div key={index} className="flex flex-col gap-3 w-[23%] md-mx:w-[48%] xs-mx:w-full border border-bright-sun-400 p-3  rounded-xl">
                            <div className="flex gap-5 items-center ">
                                <Avatar className="!h-14 !w-14" src="/avatar.png" alt="me"/>
                                <div>
                                    <div className="text-lg sm-mx:text-base xs-smx:text-sm text-mine-shaft-100 font-semibold">{testimonial.name}</div>
                                    <Rating value={testimonial.rating} fractions={2} readOnly/>
                                </div>
                            </div>
                            <div className="text-xs text-mine-shaft-300">{testimonial.testimonial}</div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default Testimonials
