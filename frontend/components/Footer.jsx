import React, { useEffect, useState } from "react"
import twitterLogo from "../assets/icons/twitterLogo.png"

export function Footer() {

  return (
    <div className='footerContainer'>
      <div className='footerSigContainer'>
        <p>&#169; The Swop 2022</p>
      </div>
      <div className='footerSocialsContainer'>
        <img src={twitterLogo} />
      </div>
    </div>
  )
}