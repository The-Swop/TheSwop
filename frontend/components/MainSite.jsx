import React from "react"
import websiteHeader from "../assets/website-header.png";
import { NavBar } from "./NavBar";
import { Collections } from "./Collections";
import { Partners } from "./Partners";
import { Footer } from "./Footer";
import { Spaces } from "./Spaces";

function MainSite() {

  return (
    <div className='App'>
      <div className='headerBar'>
        <NavBar />
      </div>
      <div className='subheader'>
        <h1>Welcome To</h1>
        <img src={websiteHeader} />
      </div>
      <div className='headerTextArea'><p>
        The Swop is a multimedia company that aims to empower the entertainment industry by allowing them to seamlessly engage with crypto and NFT technologies through the use of gaming tournaments, conferences, and live events in both real life and 3D interactive metaverse spaces.
      </p></div>
      <Spaces />
      <Collections />
      <Partners />
      <Footer />
    </div>
  )
}
export default MainSite