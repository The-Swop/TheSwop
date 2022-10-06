import React, { useEffect, useState } from "react"
import { PlugWallet } from "../utils/PlugWallet";
import swopLogo from "../assets/transparent-swop.png";
import swop64 from "../assets/swop-64x64.png";
export function MainSite() {

  const redirectToSwop = async () => {
    window.location.replace("https://twitter.com/the_swop");
  }


  return (
    <div className='main'>
      <div className='headerBar'>
        <h1>Welcome To The Swop</h1>
        <PlugWallet />
      </div>
      <div className='subheader'>
        <img src={swopLogo} />
      </div>
      <div className='collectionsContainer'>
        <h1>Our Collections</h1>
        <div className='myCollections'>
        <div className='collectionCard' onClick={redirectToSwop}>
            <img src={swop64} alt='collectionLogo' />
            <div class='collectionButtons'>
              <button>Entrepot</button>
              <button>Website</button>
            </div>
          </div>
          <div className='collectionCard' onClick={redirectToSwop}>
          <img src={swop64} alt='collectionLogo' />
            <div class='collectionButtons'>
              <button>Entrepot</button>
              <button>Website</button>
            </div>
          </div>
          <div className='collectionCard' onClick={redirectToSwop}>
          <img src={swop64} alt='collectionLogo' />
            <div class='collectionButtons'>
              <button>Entrepot</button>
              <button>Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}