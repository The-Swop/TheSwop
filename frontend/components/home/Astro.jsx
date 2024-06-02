import React, { useEffect, useState } from "react"
import astroBanner from "../../assets/astro-banner.png";
import { PlugLogin, StoicLogin, CreateActor, Types, HelloIDL } from "ic-auth";
import { HttpAgent, Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

export function Astro() {

  const [actor, setActor] = useState(null);

  const canisterId = "rwlgt-iiaaa-aaaaa-aaaaa-cai";
  const whitelist = [canisterId];
  const idl = HelloIDL;

  // Run this function after login succeeds to generate an interface for the user to claim their files from the EXT standard based NFT smart contract.
  const loadInventory = async() => {
    
  }

  const handleLogin = async(provider) => {
    let userObject = null;
    if (provider === "plug") {
      userObject = await PlugLogin(whitelist);
    } else if (provider === "stoic") {
      userObject = await StoicLogin(whitelist);
    }
    const actor = await CreateActor(userObject.agent, idl, canisterId);
    setActor(actor);
    console.log("Logged In!");
  }

  const generateLoginMenu = async() => {
    const root = document.getElementById('theSwop');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.style.zIndex = "98";
    overlay.id = 'loginOverlay';
    root.appendChild(overlay);

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.id = 'loginPopup';
    popup.style.width = 'auto';
    popup.style.height = 'auto';
    popup.style.padding ='22px';
    overlay.appendChild(popup);

    const title = document.createElement('h2');
    title.innerHTML = 'Login';
    popup.appendChild(title);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttonContainer';
    popup.appendChild(buttonContainer);

    const plugButton = document.createElement('button');
    plugButton.innerHTML = 'Plug';
    plugButton.onclick = () => {
      handleLogin("plug");
    }
    buttonContainer.appendChild(plugButton);

    const stoicButton = document.createElement('button');
    stoicButton.innerHTML = 'Stoic';
    stoicButton.onclick = () => {
      handleLogin("stoic");
    }
    buttonContainer.appendChild(stoicButton);
    
    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.onclick = () => {
      overlay.remove();
    }
    popup.appendChild(cancelButton);
  }

  return (
    <div className='goatedContainer'>
      <h1 className="astroTitle">Bitcoin Astronaut</h1>
      {/* <div className='separator'></div> */}
      <img src={astroBanner} />
      <div className="textArea">
        <p>To celebrate the 840,000th block of Bitcoin and the 2024 halving event, The Swop has airdropped over 100,000 playable 3D avatars in a collection called Bitcoin Astronauts!</p>
        <p>By holding this collection, you gain access to not only your Bitcoin Astronaut, but also some pfps and an Ethereum Astronaut as well in both VRM and GLB formats. To claim your files just click the button below and login!</p>
      </div>
      <button onClick={generateLoginMenu}>Claim Now!</button>
    </div>
  )
}