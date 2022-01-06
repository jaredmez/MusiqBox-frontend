import React from 'react'
import "./sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Link
 } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">MENU</div>
          <ul className="sidebarList">
            <Link to="/" className="rLink">
              <li className="sidebarListItem">
                <HomeIcon className="sidebarIcon"/>
                Home
              </li>
            </Link>
            <Link to="/search" className="rLink">
              <li className="sidebarListItem">
                <SearchIcon className="sidebarIcon"/>
                Search
              </li>
            </Link>
            <Link to="/likedsongs" className="rLink">
              <li className="sidebarListItem">
                <LibraryMusicIcon className="sidebarIcon"/>
                Liked Songs
              </li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  )
}
