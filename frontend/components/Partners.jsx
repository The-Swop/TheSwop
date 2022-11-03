import React, { useEffect, useState } from "react"
import hyperX from "../assets/icons/hyperx.png";
import razer from "../assets/icons/razer.png";
import dscvr from "../assets/icons/dscvr-logo.png";
import plethora from "../assets/icons/plethora.png";
import cyman from "../assets/icons/cyman.png";
import puzzles from "../assets/icons/puzzles.png";
import dragonz from "../assets/icons/dragonz.png";

export function Partners() {

  return (
    <div className='partnersContainer'>
      <h1>Partners</h1>
      <div className='separator' />
      <div className='majorPartnersSection'>
        <img onClick={() => { window.location = "https://hx.hyperx.gg/qjg5Ycmb"; }}src={hyperX} />
        <img onClick={() => { window.location = "https://www.razer.com/"; }}src={razer} />
        <img onClick={() => { window.location = "https://dscvr.one/p/the-swop"; }}src={dscvr} />
      </div>
      <div className='minorPartnersSection'>
        <img onClick={() => { window.location = "https://entrepot.app/marketplace/cyman"; }}src={cyman} />
        <img onClick={() => { window.location = "https://5sdab-uiaaa-aaaal-aalgq-cai.ic0.app/"; }}src={puzzles} />
        <img onClick={() => { window.location = "https://plethora.game/"; }}src={plethora} />
        <img onClick={() => { window.location = "https://nyph3-wyaaa-aaaap-aaaaa-cai.ic0.app/"; }}src={dragonz} />
      </div>
      <h1>Connect With Us</h1>
      <div className="separator"></div>
      <div className='textArea'><p>
      We look forward to bringing the entertainment and crypto cultures closer together while working hard to establish platforms and curate genuine communities that enable this vision to come to life.
      </p></div>
      <div className='textArea'><p>
      If you would like to learn more feel free to connect with us using some of our socials below!
      </p></div>
    </div>
  )
}