import React, { useEffect, useState } from "react"
import goated from "../../assets/goated-banner-v1.png";

export function Goated() {

  return (
    <div className='goatedContainer'>
      <h1>Goated Gamer</h1>
      {/* <div className='separator'></div> */}
      <img src={goated} />
      <div className="textArea">
        <p>Goated Gamer is a competitive gaming platform aimed towards unifying the web3 universe with games and gamers of all types.</p>
      </div>
      <button onClick={() => alert("nah")}>Get Goated!</button>
    </div>
  )
}