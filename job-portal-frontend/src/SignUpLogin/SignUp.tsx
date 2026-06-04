import React from 'react'
import {Anchor, Button, Checkbox, PasswordInput, rem, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import { LockIcon } from '@phosphor-icons/react';
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold text-mine-shaft-200">Create Account</div>
            <TextInput
                withAsterisk
                label="Full Name"
                placeholder="Enter your full name"
            />
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
            <PasswordInput
                withAsterisk
                leftSection={<LockIcon size={18} />}
                leftSectionPointerEvents="none"
                label="Confirm Password"
                placeholder="Confirm your Password"
            />
            <Checkbox
                autoContrast
                defaultChecked
                label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>}
            />
            <Button autoContrast variant="filled">Sign up</Button>
            <div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link></div>
        </div>
    )
}
export default SignUp
