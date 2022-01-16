import React from 'react'
import Profile from '../profile/Profile'
import "./home.css"
import MusicCard from '../../components/musicCard/MusicCard'
import { playlistData } from '../../services/playlistData'

export default function Home() {
  console.log(playlistData)
  return (
    <div className="home">
      <div className="homeWrapper">
        <h2>Home Page</h2>
        <div className="homeContent">Welcome!</div>
        <div className="homeContainer">
          {playlistData.map(playlistInfo => {
            
            return <MusicCard data={playlistInfo} key={playlistInfo.title}/>
          })}
        </div>
        <Profile/>
     </div>
      
    </div>
  )
}
