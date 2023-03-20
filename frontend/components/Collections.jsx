import React from "react"
import goatedGamer from "../assets/icons/goated-gamer.png";
import astroSamurai from "../assets/icons/astro-samurai.png"
import astroAnime from "../assets/icons/astro-anime.png";
import swopOG from "../assets/icons/swop-og.png";

export function Collections() {

  return (
    <div className='collectionsContainer'>
      <h1>Our Collections</h1>
      <div className='separator' />
      <div className='myCollections'>
      <div className='collectionCard' id="cc1">
        <img src={goatedGamer} alt='collectionLogo' />
        <p>Goated Gamer DAO</p>
        <div className='collectionButtons'>
          <button onClick={() => { window.location = "https://entrepot.app/marketplace/goated-gamer-dao"; }}>Go To Marketplace</button>
        </div>
      </div>
      <div className='collectionCard' id="cc4">
        <img src={swopOG} alt='collectionLogo' />
        <p>The Swop OG</p>
        <div className='collectionButtons'>
          <button onClick={() => window.location = "https://entrepot.app/sale/the-swop-og"}>Go To Marketplace</button>
        </div>
      </div>
      <div className='collectionCard' id="cc2">
        <img src={astroSamurai} alt='collectionLogo' />
        <p>Astro Samurai</p>
        <div className='collectionButtons'>
          <button onClick={() => { window.location = "https://entrepot.app/marketplace/astro-samurai"; }}>Go To Marketplace</button>
        </div>
      </div>
      <div className='collectionCard' id="cc3">
        <img src={astroAnime} alt='collectionLogo' />
        <p>Astro Anime</p>
        <div className='collectionButtons'>
          <button onClick={() => { window.location = "https://entrepot.app/marketplace/goated-gamer-dao"; }}>Go To Marketplace</button>
        </div>
      </div>
      </div>
      <div className='textArea'><p>
      Our NFTs aim to support our vision by providing holders access to exclusive communities and live events while utilizing some very unique capabilities from the internet computer.  
      </p></div>
    </div>
  )
}