import React from 'react'
import {Button, TextInput} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

const Subscribe = () => {
    const matches = useMediaQuery('(max-width: 639px)');
    const matches1 = useMediaQuery('(max-width: 475px)');

    return (
        <div className="mt-5 flex items-center bg-mine-shaft-900 mx-20 sm-mx:mx-5 py-3 rounded-xl justify-around flex-wrap">
            <div className="text-4xl bs-mx:w-4/5 md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl w-2/5 mb-3 text-center font-semibold text-mine-shaft-100">Never miss any <span className="text-bright-sun-400">Job News?</span> </div>
            <div className="flex rounded-xl gap-4 bg-mine-shaft-700 px-3 py-2 items-center xs-mx:flex-col ">
                <TextInput size="xl" className="[_&input]:text-mine-shaft-200 font-semibold" variant="unstyled" placeholder="Your@gmail.com" />
                <Button className="!rounded-lg" variant="filled" size={matches1?"":matches?"md":"lg"} color="brightSun.4" >Subscribe</Button>
            </div>
        </div>
    )
}
export default Subscribe
