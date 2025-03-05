import React, { useState } from "react"

export const Navbar = () => {
const [dropDown, setDropDown] = useState(false)


return (
    <nav className="navbar">
    <ul>
      <li><a href="">Gmail</a></li>
      <li><a href="">Images</a></li>
      <li><a href="">weather</a></li>
      <button onClick={() => setDropDown(dropDown => !dropDown)}>CLICK{dropDown && "HELLOOO"}</button>
    </ul>

    
    <div className="images">
      <a href="app.jsx" target="_blank"><img src="public/new-tab-icon-12.jpg" alt="new tab" /></a>
      <a href="https://about.google/products/"><img src="public/R (1).png" alt="Account" /></a>
    </div>
  </nav>
)


}