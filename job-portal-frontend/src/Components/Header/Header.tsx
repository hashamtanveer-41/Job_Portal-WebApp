import {IconAnchor, IconAsset, IconBell, IconSettings, IconX} from "@tabler/icons-react";
import {Avatar, Burger, Button, Drawer, Indicator} from "@mantine/core";
import NavLinks from "./NavLinks";
import {Link, useLocation, useNavigate} from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getProfile} from "../../Store/action";
import NotificationMenu from "./NotificationMenu";
import {setNavigator} from "../../Api/navigationService";
import {useDisclosure} from "@mantine/hooks";
const links = [
    {name:"Find Jobs", url:"/find-jobs"},
    {name:"Find Talent", url:"/find-talent"},
    {name:"Post Job", url:"/post-job/0"},
    {name:"Posted Job", url:"/posted-jobs/0"},
    {name:"Job History", url:"/job-history"},
    {name:"SignUp", url:"/signup"},
]
const Header = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const location = useLocation();
    const {user} = useSelector((state:any) => state.auth);
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        setNavigator(navigate);
    }, [navigate]);
    useEffect(() => {
        (dispatch as any)(getProfile(user))
    }, [user]);
    return (
        (location.pathname !="/signup" && location.pathname !="/login") ?
            <>
        <div className = "font-['poppins'] w-full text-white flex justify-between px-6 items-center gap-3 bg-mine-shaft-950 h-28">
            {/*Logo*/}
            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconAnchor className="h-8 w-8" stroke={2.5}/>
                <div className="xs-mx:hidden text-2xl font-semibold">
                    JobHook
                </div>
            </div>
            {/*Links*/}
                <NavLinks />
            {/*Profile*/}
            <div className="flex gap-3 items-center">
                {user ?
                    <ProfileMenu/>
                    :
                    <Link to="/login">
                        <Button variant="subtle" color="brightSun.4">
                            Login
                        </Button>
                    </Link>
                }
                {/*<div className="bg-mine-shaft-900 p-1 rounded-full">*/}
                {/*    <IconSettings stroke={1.5} />*/}
                {/*</div>*/}
                {user?<NotificationMenu />:<></>}
                {

                }
                <Burger className="bs:hidden" opened={opened} onClick={open} aria-label=""></Burger>
                <Drawer
                    opened={opened}
                    onClose={close}
                    overlayProps={{backgroundOpacity:0.5, blur:4}}
                    position="right"
                    title=""
                    closeButtonProps={{icon: <IconX size={30}/>}}
                    size="xs"
                >
                    <div className="flex flex-col gap-6 items-center">
                    {
                        links.map
                        ((link, index) => (
                            <div className={`h-full flex items-center`} key={index}>
                                <Link className="hover:text-bright-sun-400 text-xl" key={index} to={link.url}>{link.name}</Link>
                            </div>
                        ))
                    }
                    </div>
                </Drawer>
            </div>
        </div>
            </>:
            <></>
    )
}
export default Header;
