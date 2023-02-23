import React from "react"
import hyperX from "../assets/icons/hyperx.png";
import dscvr from "../assets/icons/dscvr-logo.png";
import cyman from "../assets/icons/cyman.png";
import bigtime from "../assets/icons/bigtime.png";
import outpost from "../assets/icons/outpost.png";
import vrstl from "../assets/icons/vrstl.png";

export function Partners() {

  return (
    <div className='partnersContainer'>
      <h1>Partners</h1>
      <div className='separator' />
      <div className='majorPartnersSection'>
        <img onClick={() => { window.location = "https://hx.hyperx.gg/qjg5Ycmb"; }}src={hyperX} />
        <img onClick={() => { window.location = "https://dscvr.one/p/the-swop"; }}src={dscvr} />
        <img onClick={() => { window.location = "https://invite.bigtime.gg/StofAxeCap"; }}src={bigtime} />
      </div>
      <div className='minorPartnersSection'>
        <img onClick={() => { window.location = "https://entrepot.app/marketplace/cyman"; }} src={cyman} />
        <img onClick={() => { window.location = "https://twitter.com/vrstlstudios"; }} src={vrstl} />
        <img onClick={() => { window.location = "https://twitter.com/enteroutpost";}} src={outpost} />
      </div>
      <div className="connectWithUs">
        <h1>Connect With Us</h1>
        <div className="separator"></div>
        <div className='textArea'><p>
        We look forward to bringing the entertainment and crypto cultures closer together while working hard to establish platforms and curate genuine communities that enable this vision to come to life.
        </p></div>
        <div className='textArea'><p>
        If you would like to learn more feel free to connect with us using some of our socials below!
        </p></div>
      </div>
    </div>
  )
}