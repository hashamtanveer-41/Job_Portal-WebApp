import React, {useEffect, useState} from 'react'
import {CheckIcon, Indicator, Menu, Notification} from "@mantine/core";
import {IconBell} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import {getNotifications} from "../../Store/action";

const NotificationMenu = () => {
    const [opened, setOpened] = useState(false);
    const {user} = useSelector((state:any) => state.auth);
    const dispatch = useDispatch();
    const [notifications, setNotifications] = useState<any>([])
    useEffect(() => {
        (dispatch as any)(getNotifications(user.id, setNotifications))
    }, [user]);
    const unread=(index:number)=>{
        let notis = [...notifications];
        notis = notis.filter((noti:any, i:number)=>i!=index);
        setNotifications(notis);
    }
    return (
        <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div className="bg-mine-shaft-900 p-1 rounded-full">
                    <Indicator size={8} processing offset={5} color="brightSun.4">
                        <IconBell stroke={1.5}/>
                    </Indicator>
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={()=>setOpened(true)}>
               <div className="flex flex-col gap-1">
                   {
                       notifications?.map((notification:any, index:any)=>(
                           <Notification
                               key={index}
                               title={notification.action}
                               className="hover:bg-mine-shaft-900 cursor-pointer"
                               icon={<CheckIcon size={20} />}
                               onClose={()=>unread(index)}
                               color="teal" mt="md"
                           >
                               {notification.message}
                           </Notification>
                       ))
                   }
                   {
                       notifications.length==0 &&
                       <div className="text-center text-mine-shaft-300">
                           No Notifications
                       </div>
                   }
               </div>

            </Menu.Dropdown>
        </Menu>
    )
}
export default NotificationMenu
