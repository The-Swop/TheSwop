import React, { useEffect, useState } from "react"
import goatedGamer from "../assets/icons/goated-gamer.png";
import astroSamurai from "../assets/icons/astro-samurai.png"
import astroAnime from "../assets/icons/astro-anime.png";

export function Collections() {

  return (
    <div className='collectionsContainer'>
      <h1>Our Collections</h1>
      <div className='separator' />
      <div className='myCollections'>
      <div className='collectionCard'>
        <img src={goatedGamer} alt='collectionLogo' />
        <h1>Goated Gamer DAO</h1>
        <div className='collectionButtons'>
          <button onClick={() => { window.location = "https://entrepot.app/marketplace/goated-gamer-dao"; }}>Go To Marketplace</button>
        </div>
      </div>
      <div className='collectionCard'>
        <img src={astroSamurai} alt='collectionLogo' />
        <h1>Astro Samurai</h1>
        <div className='collectionButtons'>
          <button onClick={() => { window.location = "https://entrepot.app/marketplace/astro-samurai"; }}>Go To Marketplace</button>
        </div>
      </div>
      <div className='collectionCard'>
        <img src={astroAnime} alt='collectionLogo' />
        <h1>Astro Anime</h1>
        <div className='collectionButtons'>
          <button onClick={() => { window.location = "https://entrepot.app/marketplace/goated-gamer-dao"; }}>Go To Marketplace</button>
        </div>
      </div>
      </div>
      <div className='textArea'><p>
      Our NFTs aim to support our vision by providing holders access to exclusive communities, special rewards, and live events while utilizing some very unique crypto capabilities from the internet computer.  
      </p></div>
    </div>
  )
}