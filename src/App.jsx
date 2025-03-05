import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar.components.jsx";
import { Langlinks } from "./components/languages/Languages.components.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [buttonText, setButtonText] = useState("I'm Feeling Lucky");
  const [link, setLink] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      window.location.href = googleSearchUrl;
    }
  };

  const feelingluckyphrases = [
    { text: "I'm Feeling Doodly", link: "#" },
    { text: "I'm Feeling Trendy", link: "#" },
    { text: "I'm Feeling Hungry", link: "#" },
    { text: "I'm Feeling stellar", link: "#" },
  ];

  const handleMouseOver = () => {
    const randomPhrase = feelingluckyphrases[Math.floor(Math.random() * feelingluckyphrases.length)];
    setButtonText(randomPhrase.text);
    setLink(randomPhrase.link);
  };

  const handleMouseOut = () => {
    setButtonText("I'm Feeling Lucky");
    setLink("");
  };

  return (
    <div>
      <Navbar/>
      <div className="google">
        <img src="public/Google-Logo.png" alt="Google Logo" />
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
            <button
              type="button"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => window.location.href = link}
              className="random-button"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>

      <div className="languages">
        <p>Google offered in:</p>
          <Langlinks/>
      </div>
    </div>
  );
}

export default App;
