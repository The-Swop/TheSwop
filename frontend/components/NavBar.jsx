import React from "react"

export function NavBar() {

  const comingSoon = async() => {
    alert("Coming Soon!")
  }

  const createPopup = async() => {
    const div = document.createElement('div');
  }

  return (
    <div className='navbarContainer'>
      <div className='navbar'>
        <a className='activeButton' href="#">Home</a>
        {/* First Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={comingSoon} className='dropdownButton'>Gaming</button>
        </div>
        {/* Second Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={comingSoon} className='dropdownButton'>News</button>
        </div>
        {/* Third Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={comingSoon} className='dropdownButton'>Education</button>
        </div>
        {/* Fourth Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={comingSoon} className='dropdownButton'>Community</button>
        </div>
        {/* Fifth Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={comingSoon} className='dropdownButton'>About Us</button>
        </div>
      </div>
    </div>
  )
}