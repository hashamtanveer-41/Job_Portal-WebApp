import {IconAnchor, IconAsset, IconBell, IconSettings} from "@tabler/icons-react";
import {Avatar, Indicator} from "@mantine/core";
import NavLinks from "./NavLinks";

const Header = () => {
    return (
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
                <div className="flex items-center gap-2">
                    <div>Marshal</div>
                    <Avatar src="avatar.png" alt="it's me"/>
                </div>
                <div className="bg-mine-shaft-900 p-1 rounded-full">
                    <IconSettings stroke={1.5} />
                </div>
                <div className="bg-mine-shaft-900 p-1 rounded-full">
                    <Indicator size={8} processing offset={5} color="brightSun.4">
                        <IconBell stroke={1.5}/>
                    </Indicator>
                </div>
            </div>
        </div>
    )
}
export default Header;
