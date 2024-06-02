import React from "react"

export function NavBar() {

  const comingSoon = async() => {
    alert("Coming Soon!")
  }

  const createPopup = async() => {
    const root = document.getElementById('app');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    root.appendChild(overlay);
    const popup = document.createElement('div');
    popup.className = 'popup';
    overlay.appendChild(popup);
    const message = document.createElement('p');
    message.innerHTML = 'Coming Soon!';
    popup.appendChild(message);
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.onclick = () => {
      overlay.remove();
    }
    popup.appendChild(closeButton);
  }

  return (
    <div className='navbarContainer'>
      <div className='navbar'>
        <a className='activeButton' href="#">Home</a>
        {/* First Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={createPopup} className='dropdownButton'>Gaming</button>
        </div>
        {/* Second Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={createPopup} className='dropdownButton'>News</button>
        </div>
        {/* Third Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={createPopup} className='dropdownButton'>Community</button>
        </div>
        {/* Fourth Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={createPopup} className='dropdownButton'>Events</button>
        </div>
        {/* Fifth Menu Dropdown */}
        <div className='menuDropdown'>
          <button onClick={createPopup} className='dropdownButton'>Services</button>
        </div>
      </div>
    </div>
  )
}