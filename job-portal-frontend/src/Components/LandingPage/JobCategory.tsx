import React from 'react'
import {Carousel, CarouselSlide} from "@mantine/carousel";
import {jobCategory} from "../../../public/Data/Data";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";

const JobCategory = () => {
    return (
        <div className="mt-20 pb-20">
            <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl mb-3 text-center font-semibold text-mine-shaft-100">Browse <span className="text-bright-sun-400">Job</span> Category</div>
            <div className="text-lg sm-mx:text-base xs-mx:text-sm text-mine-shaft-300 text-center w-1/2 sm-mx:w-11/12 mx-auto mb-6">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
            <Carousel slideSize="22%" slideGap="md"
                      className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
                      nextControlIcon={<IconArrowRight className="h-8 w-8"/>}
                      previousControlIcon={<IconArrowLeft className="h-8 w-8"/>}
            >
                {jobCategory.map((category, index)=> (
                    <CarouselSlide key={index}>
                        <div className="flex sm-mx:w-56 xs-mx:w-48 flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 !shadow-bright-sun-300" key={index}>
                            <div className="p-2 bg-bright-sun-300 rounded-full">
                                <img src={`/Category/${category.name}.png`} alt={category.name} className="h-8 w-8 sm-mx:h-6 xs-sm:h-4 xs-sm:w-4" />
                            </div>
                            <div className="text-mine-shaft-200 text-xl sm-mx:text-lg xs-sm:text-base font-semibold">{category.name}</div>
                            <div className="text-sm text-center xs-mx:text-xs  text-mine-shaft-300">{category.desc}</div>
                            <div className="text-bright-sun-400 text-lg sm-mx:text-base xs-mx:text-sm">{category.jobs}+ new jobs posted</div>
                        </div>
                    </CarouselSlide>
                ))}
            </Carousel>

        </div>
    )
}
export default JobCategory
