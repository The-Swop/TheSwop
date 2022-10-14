import React, { useEffect, useState } from "react"
import swop64 from "../assets/swop-64x64.png";
import hyperX from "../assets/icons/hyperx.png";
import razer from "../assets/icons/razer.png";

export function Partners() {

  return (
    <div className='partnersContainer'>
      <div class='majorPartnersSection'>
        <img src={hyperX} />
        <img src={razer} />
        <img src={swop64} />
      </div>
      <div className='minorPartnersSection'>
        <img src={swop64} />
        <img src={swop64} />
        <img src={swop64} />
        <img src={swop64} />
        <img src={swop64} />
      </div>
    </div>
  )
}