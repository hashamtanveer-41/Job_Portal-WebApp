import React from 'react'
import {notifications} from "@mantine/notifications";

const NotificationUtil = (title:any, message:any, Icon:any, color:any, notifyClass:any) => {
    return (
        notifications.show({
            title: title,
            message: message,
            withCloseButton: true,
            icon: Icon ? <Icon style={{ width: "90%", height: "90%" }} /> : undefined,
            color:color,
            withBorder: true,
            className: notifyClass
        })
    )
}
export default NotificationUtil
