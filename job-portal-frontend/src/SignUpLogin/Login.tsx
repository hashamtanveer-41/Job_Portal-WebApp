import React from 'react'
import {Anchor, Button, Checkbox, PasswordInput, rem, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import {LockIcon} from "@phosphor-icons/react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold text-mine-shaft-200">Create Account</div>
            <TextInput
                withAsterisk
                leftSection={<IconAt style={{width: rem(16), height: rem(16)}}/>}
                label="Email"
                placeholder="Enter your email address"
            />
            <PasswordInput
                leftSection={<LockIcon size={18} />}
                leftSectionPointerEvents="none"
                withAsterisk
                label="Password"
                placeholder="Enter your Password"
            />
            <Button autoContrast variant="filled">Login</Button>
            <div className="mx-auto">Don't have account? <Link to="/signup" className="text-bright-sun-400 hover:underline">SignUp</Link></div>
        </div>
    )
}
export default Login
