import React from 'react'
import "./loginbar.css"
import Button from '@mui/material/Button';

export default function LoginBar({ startDemo }) {
  return (
    <div className="loginBar">
      <div className="loginBarWrapper">
        <div className="topLeft">
          <span className="logo">
            MusiqBox
          </span>
        </div>
        <div className="topRight">
          <div className="loginBarIcon">
            <Button className="loginBtn">Log In </Button>
          </div>
          <div className="loginBarIcon">
            <Button
              className="demoBtn"
              onClick={() => startDemo(true)}
            >
              Demo 
            </Button>
          </div>
      
        </div>
      </div>
    </div>
  )
}