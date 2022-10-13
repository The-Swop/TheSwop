import React, { useEffect, useState } from "react"

export function NavBar() {

  return (
    <div className='navbarContainer'>
      <div className='navbar'>
        <a className='activeButton' href="#">Home</a>
        {/* First Menu Dropdown */}
        <div className='menuDropdown'>
          <button className='dropdownButton'>NFTs</button>
          <div className="dropdownContent">
            <a href='https://entrepot.app/marketplace/goated-gamer-dao'>Goated Gamer DAO</a>
            <a href='https://entrepot.app/marketplace/astro-samurai'>Astro Samurai</a>
            <a href='https://entrepot.app/marketplace/astro-samurai-anime'>Astro Anime</a>
          </div>
        </div>
        {/* Second Menu Dropdown */}
        <div className='menuDropdown'>
          <button className='dropdownButton'>Partners</button>
          <div className="dropdownContent">
            <a href='https://hx.hyperx.gg/qjg5Ycmb'>HyperX</a>
            <a href='https://www.razer.com/'>Razer</a>
            <a href='https://dscvr.one/p/the-swop'>DSCVR</a>
          </div>
        </div>
        {/* Third Menu Dropdown */}
        <div className='menuDropdown'>
          <button className='dropdownButton'>Learn More</button>
          <div className="dropdownContent">
            <a href='https://twitter.com/the_swop'>Twitter</a>
            <a href='https://theswop.medium.com/'>Medium</a>
            <a href='https://linktr.ee/theswop'>Linktree</a>
          </div>
        </div>
      </div>
    </div>
  )
}