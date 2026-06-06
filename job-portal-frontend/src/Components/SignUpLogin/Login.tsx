import React, {useState} from 'react'
import {Anchor, Button, Checkbox, PasswordInput, rem, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import {LockIcon} from "@phosphor-icons/react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authenticateLoginInUser} from "../../Store/action/index";

const form={
    email: "",
    password: "",
}

const Login = () => {
    const [data, setData] = useState<{[key:string]:string}>(form);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (event:any) => {
        console.log(event.target)
        setData({...data, [event.target.name]: event.target.value})
    }
    const submitHandler = async () => {
        (dispatch as any)(authenticateLoginInUser(data, navigate))
    }
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold text-mine-shaft-200">Create Account</div>
            <TextInput
                name="email"
                value={data.email}
                onChange={handleChange}
                withAsterisk
                leftSection={<IconAt style={{width: rem(16), height: rem(16)}}/>}
                label="Email"
                placeholder="Enter your email address"
            />
            <PasswordInput
                name="password"
                onChange={handleChange}
                value={data.password}
                leftSection={<LockIcon size={18} />}
                leftSectionPointerEvents="none"
                withAsterisk
                label="Password"
                placeholder="Enter your Password"
            />
            <Button onClick={submitHandler} autoContrast variant="filled">Login</Button>
            <div className="mx-auto">Don't have account? <Link to="/signup" className="text-bright-sun-400 hover:underline">SignUp</Link></div>
        </div>
    )
}
export default Login
