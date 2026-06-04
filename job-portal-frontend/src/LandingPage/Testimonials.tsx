import React from 'react'
import {Avatar, Rating} from "@mantine/core";
import {testimonials} from "../../public/Data/Data";

const Testimonials = () => {
    return (
        <div>
            <div className="text-4xl mb-3 text-center font-semibold text-mine-shaft-100">What <span className="text-bright-sun-400">Users</span> say about Us?</div>
            <div className="flex justify-evenly">
                {
                    testimonials.map((testimonial, index)=>(
                        <div className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-3 mt-10 rounded-xl">
                            <div className="flex gap-2 items-center ">
                                <Avatar className="!h-14 !w-14" src="/avatar.png" alt="me"/>
                                <div>
                                    <div className="text-lg text-mine-shaft-100 font-semibold">{testimonial.name}</div>
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
