import React from 'react'
import Profile from '../profile/Profile'
import "./home.css"

export default function Home() {
  return (
    <div className="home">
      <h2>Home Page</h2>
      <div>Welcome!</div>
      <Profile/>
    </div>
  )
}
