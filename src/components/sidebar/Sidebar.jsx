import React from 'react'
import "./sidebar.css"

import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">

                    <li className="sidebarListItem active">
                        <LineStyleIcon className="sidebarIcons"/>
                        <span>Home</span>
                    </li>

                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcons"/>
                        <span>Analytics</span>
                    </li>

                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcons"/>
                        <span>Sales</span>
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <PersonOutlineIcon className="sidebarIcons"/>
                        <span>Users</span>
                    </li>

                    <li className="sidebarListItem">
                        <StorefrontIcon className="sidebarIcons"/>
                        <span>Products</span>
                    </li>

                    <li className="sidebarListItem">
                        <AttachMoneyIcon className="sidebarIcons"/>
                        <span>Transactions</span>
                    </li>

                    <li className="sidebarListItem">
                        <EqualizerIcon className="sidebarIcons"/>
                        <span>Reports</span>
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <MailOutlineIcon className="sidebarIcons"/>
                        <span>Mail</span>
                    </li>

                    <li className="sidebarListItem">
                        <DynamicFeedIcon className="sidebarIcons"/>
                        <span>Feedback</span>
                    </li>

                    <li className="sidebarListItem">
                        <MessageOutlinedIcon className="sidebarIcons"/>
                        <span>Messages</span>
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <WorkOutlineOutlinedIcon className="sidebarIcons"/>
                        <span>Manage</span>
                    </li>

                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcons"/>
                        <span>Analytics</span>
                    </li>

                    <li className="sidebarListItem">
                        <ReportIcon className="sidebarIcons"/>
                        <span>Reports</span>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Sidebar