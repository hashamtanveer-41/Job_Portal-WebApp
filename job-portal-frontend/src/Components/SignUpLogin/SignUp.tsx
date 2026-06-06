import React, {useState} from 'react'
import {Anchor, Button, Checkbox, Group, PasswordInput, Radio, RadioGroup, rem, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import { LockIcon } from '@phosphor-icons/react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authenticateSignInUser} from "../../Store/action";

const form={
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT",
}

const SignUp = () => {
        const [value, setValue] = useState<string>();
        const [data, setData] = useState(form);
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const handleChange = (event:any) => {
                console.log(event.target)
                if (typeof(event) === "string")setData({...data, accountType: event})
                else setData({...data, [event.target.name]: event.target.value})
        }
        const submitHandler = async () => {
                dispatch(authenticateSignInUser(data))
        }
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold text-mine-shaft-200">Create Account</div>
            <TextInput
                onChange={handleChange}
                name="name"
                value={data.name}
                withAsterisk
                label="Full Name"
                placeholder="Enter your full name"
            />
            <TextInput
                value={data.email}
                name="email"
                onChange={handleChange}
                withAsterisk
                leftSection={<IconAt style={{width: rem(16), height: rem(16)}}/>}
                label="Email"
                placeholder="Enter your email address"
            />
            <PasswordInput
                name="password"
                leftSection={<LockIcon size={18} />}
                value={data.password}
                onChange={handleChange}
                leftSectionPointerEvents="none"
                withAsterisk
                label="Password"
                placeholder="Enter your Password"
            />
            <PasswordInput
                withAsterisk
                name="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}
                leftSection={<LockIcon size={18} />}
                leftSectionPointerEvents="none"
                label="Confirm Password"
                placeholder="Confirm your Password"
            />
                <RadioGroup
                    name="accountType"
                    value={data.accountType}
                    onChange={handleChange}
                    label="You are?"
                    withAsterisk
                >
                        <Group mt="xs">
                                <Radio className="py-4 px-6 border has-[:checked]:border-bright-sun-400 has-[:checked]:bg-bright-sun-400/5 bg-mine-shaft-800 rounded-lg hover:bg-mine-shaft-950" value="APPLICANT" autoContrast label="Applicant"/>
                                <Radio className="py-4 px-6 border has-[:checked]:border-bright-sun-400 bg-mine-shaft-800 rounded-lg has-[:checked]:bg-bright-sun-400/5 hover:bg-mine-shaft-950" value="EMPLOYER"  autoContrast label="Employer"/>
                        </Group>
                </RadioGroup>
            <Checkbox
                autoContrast
                defaultChecked
                label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>}
            />
            <Button autoContrast variant="filled" onClick={submitHandler}>Sign up</Button>
            <div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link></div>
        </div>
    )
}
export default SignUp
