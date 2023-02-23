import React from "react"
import twitterLogo from "../assets/icons/twitterLogo.png"
import discordLogo from "../assets/icons/discordLogo.png";

export function Footer() {

  return (
    <div className='footerContainer'>
      <div className='footerSigContainer'>
        <p>&#169; The Swop 2023</p>
      </div>
      <div className='footerSocialsContainer'>
        <img onClick={() => { window.location = "https://discord.gg/W6XGKSMtDq"; }} src={discordLogo} />
        <img onClick={() => { window.location = "https://twitter.com/The_Swop"; }} src={twitterLogo} />
      </div>
    </div>
  )
}