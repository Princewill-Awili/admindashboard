import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


const TopBar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">

            <div className="topLeft">
                <Link to="/">
                    <span className="logo">ADMIN-Tools</span>
                </Link>
                
            </div>

            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <SettingsIcon/>
                </div>

                <img src="https://content.assets.pressassociation.io/2019/09/18155749/7bf9c99d-2b1a-47b4-8a55-a55fb4a730c6.jpg" alt="" className="topAvatar" />
            </div>

        </div>
    </div>
  )
}

export default TopBar
 