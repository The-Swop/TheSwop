import React, { useEffect, useState } from "react"
import swop64 from "../assets/swop-64x64.png";
import goatedGamer from "../assets/icons/goated-gamer.png";
import astroSamurai from "../assets/icons/astro-samurai.png"
import astroAnime from "../assets/icons/astro-anime.png";

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
    </div>
  )
}