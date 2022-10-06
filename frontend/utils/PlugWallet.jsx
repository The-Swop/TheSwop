import React, { useRef } from "react"
import '../assets/plugWallet.css';

export function PlugWallet() {

  // Code Goes Here

  let userPrincipal = "Not Connected";
  let currentBalance = "N/A";
  let tokenName = "";
  const dropdownModal = useRef(null);
  const balanceModal = useRef(null);
  const principalModal = useRef(null);

  const grabBalance = async() => {
    balanceModal.current.innerHTML = "Please Wait...";
    const res = await window.ic.plug.requestBalance();
    currentBalance = res[0].amount;
    tokenName = res[0].name;
    balanceModal.current.innerHTML = currentBalance + " " + tokenName;
  }
  const manageLogin = async() => {
    await window.ic.plug.requestConnect();
    userPrincipal = await window.ic.plug.agent.getPrincipal();
    document.getElementById("statusBubble").style.backgroundColor = "rgba(0,255,0,0.5)";
    document.getElementById("connect").textContent = "Connected!";
    document.getElementById("connect").disabled = true;
    console.log("Logged in as: " + userPrincipal);
    principalModal.current.innerHTML = "Logged In As: " + userPrincipal;
    // activateDabFunctions();
    await grabBalance();
  }
  const plugLogin = async() => {
    const hasLoggedIn = await window.ic.plug.isConnected();
    if (!hasLoggedIn) {
      await manageLogin();
    } else {
      await window.ic.plug.createAgent();
      userPrincipal = await window.ic.plug.agent.getPrincipal();
      document.getElementById("statusBubble").style.backgroundColor = "rgba(0,255,0,0.5)";
      document.getElementById("connect").textContent = "Connected!";
      document.getElementById("connect").disabled = true;
      console.log("Logged in as: " + userPrincipal);
      principalModal.current.innerHTML = "Logged In As: " + userPrincipal;
      //   activateDabFunctions();
      await grabBalance();
    }
  }
  const dropTheMenu = async() => {
    dropdownModal.current.classList.toggle("showMenu");
  }
//   const activateDabFunctions = async() => {
//     DabStuff.methods?.activateDab();
//   }
  window.onclick = function(event) {
    let dropdown = document.getElementById("plugSettings");
    if (!event.target.matches(".plugMenu")) {
      if (dropdown.classList.contains("showMenu")) {
        dropdown.classList.remove("showMenu");
      }
    }
  }
// HTML(UI) returns stay inside of the export function

  return (
    <>
      <div className="walletContainer">
        <button onClick={dropTheMenu} id='plugMenu' className='plugMenu'>Plug Menu<div className='statusBubble' id='statusBubble'></div></button>
        <div className='plugSettings' id='plugSettings' ref={dropdownModal}>
          <div className='menuHeader' id='menuHeader'>
            <button onClick={plugLogin} id='connect'>Connect</button>
            <h6 ref={principalModal}>Logged In As: {userPrincipal}</h6>
            <div className="balance" id='balance'>
              <p>Balance: </p>
              <p ref={balanceModal} style={{color: 'rgba(0,255,0,0.5'}}>{currentBalance} {tokenName}</p>
            </div>
          </div>
          <div className="menuDivider" />
          <div className='menuBody'>
          </div>
        </div>
      </div>
    </>
  )
}