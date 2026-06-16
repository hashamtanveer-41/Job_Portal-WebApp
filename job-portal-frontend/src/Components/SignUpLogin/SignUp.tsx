import React, {useState} from 'react'
import {
        Anchor,
        Button,
        Checkbox,
        Group,
        LoadingOverlay,
        PasswordInput,
        Radio,
        RadioGroup,
        rem,
        TextInput
} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import { LockIcon } from '@phosphor-icons/react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signUpValidation} from "../../Api/FormValidation";
import {authenticateSignInUser} from "../../Store/action";

const form={
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT",
}

const SignUp = () => {
        const [data, setData] = useState<{[key:string]:string}>(form);
        const [formError, setFormError] = useState<{[key:string]:string}>(form);
        const [loading, setLoading] = useState(false);

        const navigate = useNavigate();
        const dispatch = useDispatch();
        const handleChange = (event:any) => {
                if (typeof(event) === "string") {
                        setData({...data, accountType: event})
                        return;
                }
                else {
                        let name = event.target.name, value= event.target.value
                        setData({...data, [name]: value})
                        setFormError({...formError, [name]:signUpValidation(name, value)})
                        if (name==="password" && data.confirmPassword!=="") {
                                let err = "";
                                if (data.confirmPassword != value) err="Passwords do not match."
                                setFormError({...formError, [name]: signUpValidation(name, value), confirmPassword: err})
                        }
                        if (name==="confirmPassword")
                                if (data.password!==value) {
                                setFormError({...formError, [name]: "Passwords do not match."})
                                }else setFormError({...formError, confirmPassword: ""})
                }
        }
        const submitHandler = async () => {
                let valid = true, newFormError:{[key:string]:string}={};
                for (let key in data){
                        if (key === "accountType")continue;
                        if (key!== "confirmPassword")newFormError[key]=signUpValidation(key, data[key]);
                        else if (data[key]!==data["password"])newFormError[key]="Passwords do not match";
                        if (newFormError[key])valid=false;
                }
                setFormError(newFormError)
                if (valid) {
                        setLoading(true);
                        (dispatch as any)(authenticateSignInUser(data, navigate, setData, form, setLoading));
                }
        }
    return (
        <>
                <LoadingOverlay
                    visible={loading}
                    className="translate-x-1/2 sm-mx:translate-x-full"
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2 }}
                    loaderProps={{ color: 'brightSun.4', type: 'bars' }}
                />
                <div className="w-1/2 bs-mx:px-10 md-mx:px-5 sm-mx:w-full sm-mx:py-20 px-20 flex flex-col justify-center gap-3">
                    <div className="text-2xl font-semibold text-mine-shaft-200">Create Account</div>
                    <TextInput
                        onChange={handleChange}
                        error={formError.name}
                        name="name"
                        value={data.name}
                        withAsterisk
                        label="Full Name"
                        placeholder="Enter your full name"
                    />
                    <TextInput
                        value={data.email}
                        error={formError.email}
                        name="email"
                        onChange={handleChange}
                        withAsterisk
                        leftSection={<IconAt style={{width: rem(16), height: rem(16)}}/>}
                        label="Email"
                        placeholder="Enter your email address"
                    />
                    <PasswordInput
                        name="password"
                        error={formError.password}
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
                        error={formError.confirmPassword}
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
                                <div className="flex gap-6 xs-mx:gap-3">
                                        <Radio className="py-4 sm-mx:px-4 sm-mx:py-4 px-6 border has-[:checked]:border-bright-sun-400 has-[:checked]:bg-bright-sun-400/5 bg-mine-shaft-800 rounded-lg hover:bg-mine-shaft-950" value="APPLICANT" autoContrast label="Applicant"/>
                                        <Radio className="py-4 sm-mx:px-4 sm-mx:py-4 px-6 border has-[:checked]:border-bright-sun-400 bg-mine-shaft-800 rounded-lg has-[:checked]:bg-bright-sun-400/5 hover:bg-mine-shaft-950" value="EMPLOYER"  autoContrast label="Employer"/>
                                </div>
                        </RadioGroup>
                    <Checkbox
                        className="items-center"
                        autoContrast
                        defaultChecked
                        label={<div className="sm-mx:text-sm xs-mx:text-xs">I accept{' '}<Anchor className="sm-mx:!text-sm xs-mx:!text-xs">terms & conditions</Anchor></div>}
                    />
                    <Button loading={loading} autoContrast variant="filled" onClick={submitHandler}>Sign up</Button>
                    <div className="mx-auto sm-mx:text-sm xs-mx:text-xs">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline sm-mx:text-sm xs-mx:text-xs">Login</Link></div>
                </div>
        </>
    )
}
export default SignUp
