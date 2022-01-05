import React from 'react'
import "./topbar.css"
import { NotificationsNone, Settings } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <Link to="/home" className="rLink">MusiqBox</Link>
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIcon">
             <NotificationsNone/>
          </div>
          <div className="topbarIcon">
            <Settings />
          </div>
          <Avatar 
            className="topAvatar" 
            alt="user picture" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFoQ591FtCor701IrSSKx8l7KwV7RdSiUAg&usqp=CAU"
          />
        </div>
      </div>
    </div>
  )
}