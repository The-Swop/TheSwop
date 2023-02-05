import React, { useEffect, useState } from "react"
import twitterLogo from "../assets/icons/twitterLogo.png"
import discordLogo from "../assets/icons/discordLogo.png";

export function Footer() {

  return (
    <div className='footerContainer'>
      <div className='footerSigContainer'>
        <p>&#169; The Swop 2023</p>
      </div>
      <div className='footerSocialsContainer'>
        <img src={discordLogo} />
        <img src={twitterLogo} />
      </div>
    </div>
  )
}