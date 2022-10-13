import React, { useEffect, useState } from "react"
import swop64 from "../assets/swop-64x64.png";
import goatedGamer from "../assets/icons/goated-gamer.png";

export function Collections() {

  const redirectToSwop = async () => {
    window.location.replace("https://twitter.com/the_swop");
  }

  return (
    <div className='collectionsContainer'>
      <h1>Our Collections</h1>
      <div className='separator' />
      <div className='myCollections'>
      <div className='collectionCard'>
        <img src={goatedGamer} alt='collectionLogo' />
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
  )
}