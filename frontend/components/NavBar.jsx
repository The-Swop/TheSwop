import React from "react"

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
          <button className='dropdownButton'>Spaces</button>
          <div className="dropdownContent">
            <a href='https://twitter.com/TheSwopSpace'>Twitter</a>
            <a href='https://www.youtube.com/channel/UCqChsQAi_ETFB-5_0kdy9aA'>YouTube</a>
          </div>
        </div>
        {/* Third Menu Dropdown */}
        <div className='menuDropdown'>
          <button className='dropdownButton'>Learn More</button>
          <div className="dropdownContent">
            <a href='https://twitter.com/the_swop'>Twitter</a>
            <a href='https://theswop.medium.com/'>Medium</a>
            <a href='https://blidq-vaaaa-aaaal-abhqq-cai.ic0.app/The_Swop'>Bink</a>
          </div>
        </div>
      </div>
    </div>
  )
}