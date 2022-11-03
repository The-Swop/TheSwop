import React, { useEffect, useState } from "react"
import websiteHeader from "../assets/website-header.png";
import { NavBar } from "./NavBar";
import { Collections } from "./Collections";
import { Partners } from "./Partners";
import { Footer } from "./Footer";
import { PlugWallet } from "../utils/PlugWallet";
import { InfinityWallet } from "../utils/InfinityWallet";

export function MainSite() {

  return (
    <div className='main'>
      <div className='headerBar'>
        {/* <div className='loginContainer'>
          <PlugWallet />
          <InfinityWallet />
        </div> */}
        <NavBar />
      </div>
      <div className='subheader'>
        <h1>Welcome To</h1>
        <img src={websiteHeader} />
      </div>
      <div className='headerTextArea'><p>
        The Swop is a multimedia company that aims to empower the entertainment industry by allowing them to seamlessly engage with crypto and NFT technologies through the use of gaming tournaments, conferences, and live events in both real life and 3D interactive metaverse spaces.
      </p></div>
      <Collections />
      <Partners />
      <Footer />
    </div>
  )
}