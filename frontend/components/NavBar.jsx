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
            <a href='#'>Project 1</a>
            <a href='#'>Project 2</a>
            <a href='#'>Project 3</a>
          </div>
        </div>
        {/* Second Menu Dropdown */}
        <div className='menuDropdown'>
          <button className='dropdownButton'>Partners</button>
          <div className="dropdownContent">
            <a href='#'>Partner 1</a>
            <a href='#'>Partner 2</a>
            <a href='#'>Partner 3</a>
          </div>
        </div>
        {/* Third Menu Dropdown */}
        <div className='menuDropdown'>
          <button className='dropdownButton'>Learn More</button>
          <div className="dropdownContent">
            <a href='#'>Twitter</a>
            <a href='#'>Medium</a>
            <a href='#'>Linktree</a>
          </div>
        </div>
      </div>
    </div>
  )
}