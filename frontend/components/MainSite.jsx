import React, { useEffect, useState } from "react"
import { PlugWallet } from "../utils/PlugWallet";
import websiteHeader from "../assets/website-header.png";
import swop64 from "../assets/swop-64x64.png";
import { NavBar } from "./NavBar";

export function MainSite() {

  const redirectToSwop = async () => {
    window.location.replace("https://twitter.com/the_swop");
  }


  return (
    <div className='main'>
      <div className='headerBar'>
        <NavBar />
        {/* <PlugWallet /> */}
      </div>
      <div className='subheader'>
        <h1>Welcome To</h1>
        <img src={websiteHeader} />
      </div>
      <div className='collectionsContainer'>
        <h1>Our Collections</h1>
        <div className='separator' />
        <div className='myCollections'>
        <div className='collectionCard' onClick={redirectToSwop}>
            <img src={swop64} alt='collectionLogo' />
            <div className='collectionButtons'>
              <button>Entrepot</button>
              <button>Website</button>
            </div>
          </div>
          <div className='collectionCard' onClick={redirectToSwop}>
          <img src={swop64} alt='collectionLogo' />
            <div className='collectionButtons'>
              <button>Entrepot</button>
              <button>Website</button>
            </div>
          </div>
          <div className='collectionCard' onClick={redirectToSwop}>
          <img src={swop64} alt='collectionLogo' />
            <div className='collectionButtons'>
              <button>Entrepot</button>
              <button>Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}