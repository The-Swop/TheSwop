import React, { useEffect, useState } from "react"
import websiteHeader from "../assets/website-header.png";
import { NavBar } from "./NavBar";
import { Collections } from "./Collections";
import { Partners } from "./Partners";

export function MainSite() {

  return (
    <div className='main'>
      <div className='headerBar'>
        <NavBar />
      </div>
      <div className='subheader'>
        <h1>Welcome To</h1>
        <img src={websiteHeader} />
      </div>
      <Collections />
      <Partners />
      <div className='footerContainer'></div>
    </div>
  )
}