import React, {useState} from 'react'
import {Button, Modal, PasswordInput, PinInput, rem, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import {useDispatch} from "react-redux";
import {resetPassword, sendOTP, verifyOTP} from "../../Store/action";
import {LockIcon} from "@phosphor-icons/react";
import {signUpValidation} from "../../Api/FormValidation";
import {useInterval} from "@mantine/hooks";

const ResetPassword = (props:any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");
    const dispatch = useDispatch();
    const [OTPSent, setOTPSent] = useState(false);
    const [otpSending, setOTPSending ] = useState(false);
    const [verified, setVerified ] = useState(false);
    const [resendLoader,setResendLoader] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {
        if (seconds===0){
            setResendLoader(false)
            setSeconds(60)
            interval.stop();
        }else
            setSeconds(s => s-1)
    }, 1000)


    const handleSendOTP= async () => {
        (dispatch as any)(sendOTP(email, setOTPSent, setOTPSending, setResendLoader, interval));
    }
    const handleVerifyOTP= async (otp:any) => {
        (dispatch as any)(verifyOTP(email, otp, setVerified));
    }
    const resendOTP= async () => {
        if (resendLoader)return;
        await handleSendOTP();
    }
    const changeEmail= () => {
        setOTPSent(false)
        setResendLoader(false)
        setSeconds(60)
        setVerified(false)
        interval.stop()
    }
    const handleResetPassword= async () => {
        (dispatch as any)(resetPassword({email, password}, props.close, setOTPSending));
    }
    return (
        <Modal
            opened={props.opened}
            onClose={props.close}
            title="Reset Password"
        >
            <div className="flex flex-col gap-6">
                <TextInput
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    withAsterisk
                    rightSectionWidth="xl"
                    size="md"
                    rightSection={
                        <Button
                            loading={otpSending}
                            size="xs"
                            className="mr-1"
                            disabled={email==="" || OTPSent}
                            onClick={handleSendOTP}
                            variant="filled"
                        >
                            Send OTP
                        </Button>
                    }
                    leftSection={<IconAt style={{width: rem(16), height: rem(16)}}/>}
                    label="Email"
                    placeholder="Enter your email address"
                />
                {
                    OTPSent &&
                    <PinInput
                        onComplete={handleVerifyOTP}
                        placeholder=""
                        type="number"
                        length={6}
                        className="mx-auto"
                        size="md"
                        gap="lg"
                    />
                }
                {
                   ( OTPSent && !verified) &&
                    <div className="flex gap-2">
                        <Button
                            loading={otpSending}
                            onClick={resendOTP}
                            autoContrast
                            fullWidth
                            color="brightSun.4"
                            variant="outline"
                        >
                            {resendLoader?seconds:"Resend"}
                        </Button>
                        <Button
                            loading={otpSending}
                            fullWidth
                            color="brightSun.4"
                            autoContrast
                            onClick={changeEmail}
                            variant="filled"
                        >
                            Change Email
                        </Button>
                    </div>
                }
                {
                    verified && <>
                        <PasswordInput
                            name="password"
                            onChange={(e) =>{setPassword(e.target.value); setPassError(signUpValidation("password", e.target.value))} }
                            error={passError}
                            value={password}
                            leftSection={<LockIcon size={18} />}
                            leftSectionPointerEvents="none"
                            withAsterisk
                            label="Password"
                            placeholder="Enter your Password"
                        />
                        <Button
                            loading={otpSending}
                            autoContrast
                            onClick={handleResetPassword}
                            variant="filled"
                        >
                            Reset Password
                        </Button>
                    </>
                }

            </div>
        </Modal>
    )
}
export default ResetPassword
