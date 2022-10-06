import React, { useEffect, useState } from "react"
import { PlugWallet } from "../utils/PlugWallet";
import swopLogo from "../assets/transparent-swop.png";
export function MainSite() {


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
          <div className='collectionCard'>

          </div>
          <div className='collectionCard'>
            
          </div>
          <div className='collectionCard'>
            
          </div>
        </div>
      </div>
    </div>
  )
}