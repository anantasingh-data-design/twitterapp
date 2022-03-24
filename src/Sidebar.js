import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AppsIcon from '@mui/icons-material/Apps';
import NumbersIcon from '@mui/icons-material/Numbers';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OtherHousesSharpIcon from '@mui/icons-material/OtherHousesSharp';
import { Button } from '@mui/material';

function Sidebar() {
    return (
        <div className='sidebar'>

            {/* Tweeter Icon */}
            <TwitterIcon  className='Twitter__icon'/>


            {/* sidebar option */}
            <SidebarOption
                active
                Icon={OtherHousesSharpIcon}
                text="Home"
            />
            <SidebarOption
                Icon={NumbersIcon}
                text="explore"
            />

            <SidebarOption
                Icon={AppsIcon}
                text="Apps"
            />
            <SidebarOption
                Icon={NotificationsNoneIcon}
                text="Notifications"
            />

            <SidebarOption
                Icon={PermIdentityIcon}
                text="Profile"
            />
            <SidebarOption
                Icon={MoreHorizIcon}
                text="More"
            />


            {/* Button Tweet */}
            <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar