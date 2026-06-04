import React from 'react'
import {Button, TextInput} from "@mantine/core";

const Subscribe = () => {
    return (
        <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
            <div className="text-4xl w-2/5 mb-3 text-center font-semibold text-mine-shaft-100">Never miss any <span className="text-bright-sun-400">Job News?</span> </div>
            <div className="flex rounded-xl gap-4 bg-mine-shaft-700 px-3 py-2 items-center ">
                <TextInput size="xl" className="[_&input]:text-mine-shaft-200 font-semibold" variant="unstyled" placeholder="Your@gmail.com" />
                <Button className="!rounded-lg" variant="filled" size="lg" color="brightSun.4" >Subscribe</Button>
            </div>
        </div>
    )
}
export default Subscribe
