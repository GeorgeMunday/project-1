import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      window.location.href = googleSearchUrl;
    }
  };

  const handleLuckySearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      const luckySearchUrl = `https://www.google.com/search?btnI=I&q=${encodeURIComponent(searchQuery)}`;
      window.location.href = luckySearchUrl;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#">Gmail</a></li>
          <li><a href="#">Images</a></li>
        </ul>
        <div className="images">
          <a href="app.jsx" target="_blank"><img src="public\new-tab-icon-12.jpg" alt="new tab" /></a>
          <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Fhl%3Den-GB&emr=1&hl=en-GB&ifkv=ASSHykodXclJEurRxP6Byql_GJWqvCpp7OtVQhzFNwdFBrmuFo6bP4DySLRaQCxZBwrzgM4JGDgI&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1645292326%3A1740863744027601&ddm=1"><img src="public\d05bb076839e9150a0c140458e6eb9e1.png" alt="Account" /></a>
        </div>
      </nav>

      <div className="google">
        <img src="public\Google-Logo.png" alt="Google Logo" />
      </div>

      <div className="search">
        <form onSubmit={handleSearch} className="input">
          <i className="fa fa-search"></i>
          <input 
            type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Search Google or type a URL"
          />
          <i className="fa fa-microphone"></i>
          <div className="buttons">
            <button type="submit">Google Search</button>
            <button type="button" onClick={handleLuckySearch}>I'm Feeling Lucky</button>
          </div>
        </form>
      </div>

      <div className="languages">
        <p>Google offered in:</p>
        <ul>
          <li><a href="#">हिन्दी</a></li>
          <li><a href="#">বাংলা</a></li>
          <li><a href="#">తెలుగు</a></li>
          <li><a href="#">मराठी</a></li>
          <li><a href="#">தமிழ்</a></li>
          <li><a href="#">ગુજરાતી</a></li>
          <li><a href="#">ಕನ್ನಡ</a></li>
          <li><a href="#">മലയാളം</a></li>
          <li><a href="#">ਪੰਜਾਬੀ</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
