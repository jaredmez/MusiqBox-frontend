import React from 'react'
import "./loginbar.css"
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react"

export default function LoginBar({ startDemo }) {
  const { loginWithRedirect } = useAuth0();

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
            <Button 
            className="loginBtn"
            onClick={() => loginWithRedirect()}
            >Log In </Button>
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