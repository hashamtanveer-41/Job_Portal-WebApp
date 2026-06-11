import React, {useEffect, useRef, useState} from 'react'
import {IconCalendarMonth, IconHeart, IconMapPin} from "@tabler/icons-react";
import {Avatar, Button, Divider, Modal, Text} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {useDisclosure} from "@mantine/hooks";
import {DateInput, TimeInput} from "@mantine/dates";
import {useDispatch, useSelector} from "react-redux";
import {changeApplicationStatus, getProfile, getProfileById} from "../../Store/action";
import {errorNotification} from "../../Utils/NotificationUtil";

const TalentCard = (props:any) => {
    const {id} = useParams();
    const [profile, setProfile] = useState<any>({});
    const [opened, {open, close}] = useDisclosure(false);
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<any>(null)
    const ref = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();
    useEffect(() => {
        if (props.applicantId){
            (dispatch as any)(getProfileById(props, setProfile))
        }else{
            setProfile(props)
        }
    }, [props]);
    const handleOffer = (status: string) => {
        if (!date || !time) {
            errorNotification("Error!", "Please pick both a date and a time.");
            return;
        }
            const updatedDate = new Date(date);
            const [hours, minutes] = time.split(":").map(Number);
            updatedDate.setHours(hours, minutes, 0, 0);
            let interview: any = {
                id: Number(id),
                applicantId: Number(profile?.id || props.applicantId),
                applicationStatus: status,
                interviewTime: updatedDate
            };
            (dispatch as any)(changeApplicationStatus(interview));
    };

    return (
        <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar src={profile.image} alt="it's me"/>
                    </div>
                    <div>
                        <div className="font-semibold text-xl">{props.name}</div>
                        <div className="text-sm text-mine-shaft-300">{profile?.role} &bull; {profile?.company} </div>
                    </div>
                </div>
                <div>
                    <IconHeart className="text-mine-shaft-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex gap-2">
                {
                    profile.skills?.map((skill:any, index:any)=>(
                        index <5 &&
                            <div key={index} className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{skill}</div>
                    ))
                }
            </div>


            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {profile.about}
            </Text>
            <Divider color='mine-shaft.7'  size="xs" />
            {
                props.invited?
                    (
                        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
                            <IconCalendarMonth stroke={1.5} className="w-5 h-5"/> Interview August 24, 2043 10:00 AM
                        </div>
                    )
                    :
                    (
                        <div className="flex justify-between">
                            <div className="font-semibold text-mine-shaft-200">
                                {props.expectedCtc}
                            </div>
                            <div className="flex gap-1 text-mine-shaft-400 text-xs items-center">
                                <IconMapPin className="w-5 h-5" stroke={1.5}/> {profile?.location}
                            </div>
                        </div>
                    )
            }

            <Divider color='mine-shaft.7'  size="xs" />
            <div className="flex [&>*]:w-1/2 [&>*]:p-1 items-center">
                {
                    !props.invited &&
                    <>
                        <Link to="/talent-profile">
                            <Button color="brightSun.4" variant="outline" fullWidth>Profile</Button>
                        </Link>
                        <div>
                            {
                            props.posted?
                                <Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5"/>} color="brightSun.4" variant="light" fullWidth >Schedule</Button>
                            :
                                <Button  color="brightSun.4" variant="light" fullWidth>Message</Button>
                            }
                        </div>
                    </>
                }
                {
                    props.invited &&
                    <>
                        <div>
                            <Button color="brightSun.4" variant="light" fullWidth>Accept</Button>
                        </div>
                        <div>
                            <Button color="red.4" variant="outline" fullWidth>Reject</Button>
                        </div>
                    </>
                }
            </div>
            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                <div className="flex flex-col gap-4">
                <DateInput
                    value={date}
                    minDate={new Date()}
                    onChange={setDate}
                    label="Date"
                    placeholder="Enter Date"
                />
                <TimeInput
                    value={time}
                    onChange={(event)=>setTime(event.currentTarget.value)}
                    label="Time"
                    ref={ref}
                    onClick={()=>ref.current?.showPicker()}
                />
                    <Button onClick={()=>handleOffer("INTERVIEWING")}  color="brightSun.4" variant="light" fullWidth>Schedule</Button>
                </div>
            </Modal>
        </div>
    )
}
export default TalentCard
