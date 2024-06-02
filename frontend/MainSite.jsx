import React from "react"
import websiteHeader from "./assets/website-header.png";
import { NavBar } from "./components/navbar/NavBar.jsx";
import { Collections } from "./components/home/Collections";
import { Partners } from "./components/home/Partners";
import { Footer } from "./components/footer/Footer";
import { Spaces } from "./components/home/Spaces";
import { Goated } from "./components/home/Goated";
import { Home } from "./components/home/Home";

function MainSite() {

  return (
    <div className="theSwop" id="theSwop">
      <div className='App' id="app">
        <div className='headerBar'>
          <NavBar />
        </div>
        <Home />
        <Footer />
      </div>
    </div>
  )
}
export default MainSite;