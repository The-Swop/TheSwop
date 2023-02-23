import React from "react"

export function Spaces() {

  return (
    <div className='spaces'>
      <h1>The Swop Spaces</h1>
      <div className='separator'></div>
      <div className="textArea" style={{width: "55%", marginTop: "20px"}} >
        <p>The Swop Spaces aim to provide a comfortable and educational platform for project exploration and community discussions. Feel free to listen into some of our recorded spaces below!</p>
      </div>
      <div className="coolContainer">
        <iframe width="100%" height="100%" style={{border: "none"}} src="https://www.youtube.com/embed/mblExg-KCgk" title="Swop Spaces" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  )
}