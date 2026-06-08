import {IconAnchor, IconAsset, IconBell, IconSettings} from "@tabler/icons-react";
import {Avatar, Button, Indicator} from "@mantine/core";
import NavLinks from "./NavLinks";
import {Link, useLocation} from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfile} from "../../Store/action";

const Header = () => {
    const location = useLocation();
    const {user} = useSelector((state:any) => state.auth);
    const {profile} = useSelector((state:any)=> state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        (dispatch as any)(getProfile(user))
    }, []);
    return (
        (location.pathname !="/signup" && location.pathname !="/login") ?
            <>
        <div className = "font-['poppins'] w-full text-white flex justify-between px-6 items-center gap-3 bg-mine-shaft-950 h-28">
            {/*Logo*/}
            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconAnchor className="h-8 w-8" stroke={2.5}/>
                <div className="text-2xl font-semibold">
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
                <div className="bg-mine-shaft-900 p-1 rounded-full">
                    <Indicator size={8} processing offset={5} color="brightSun.4">
                        <IconBell stroke={1.5}/>
                    </Indicator>
                </div>
            </div>
        </div>
            </>:
            <></>
    )
}
export default Header;
