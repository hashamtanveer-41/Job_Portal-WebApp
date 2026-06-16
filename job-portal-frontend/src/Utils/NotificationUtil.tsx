import React from 'react'
import {notifications} from "@mantine/notifications";
import {IconCheck, IconX} from "@tabler/icons-react";

export const successNotification = (title:any, message:any) => {
    return (
        notifications.show({
            title: title,
            message: message,
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500"
        })

    )
}

export const errorNotification = (title:any, error:any) => {
    const message =
        error?.response?.data?.errorMessage ||  // your custom JobPortalException
        error?.response?.data?.message ||        // Spring Security default
        error?.message ||                         // axios error message
        error ||
        "Something went wrong";                   // final fallback

    return notifications.show({
        title: title,
        message: message,
        withCloseButton: true,
        icon: <IconX style={{ width: "90%", height: "90%" }} />,
        color: "red",
        withBorder: true,
        className: "!border-red-500"
    });
}