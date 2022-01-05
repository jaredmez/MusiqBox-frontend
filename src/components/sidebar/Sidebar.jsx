import React from 'react'
import "./sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">MENU</div>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeIcon/>
              Home
            </li>
            <li className="sidebarListItem">
              <SearchIcon/>
              Search
            </li>
            <li className="sidebarListItem">
              <LibraryMusicIcon/>
              Liked Songs
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
