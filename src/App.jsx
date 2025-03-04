import React, { useState } from "react";
import "./App.css";

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
    { text: "I'm Feeling Doodly", link: "" },
    { text: "I'm Feeling Trendy", link: "" },
    { text: "I'm Feeling Hungry", link: "" },
    { text: "I'm Feeling stellar", link: "" },
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
      <nav className="navbar">
        <ul>
          <li><a href="#">Gmail</a></li>
          <li><a href="#">Images</a></li>
        </ul>
        <div className="images">
          <a href="app.jsx" target="_blank"><img src="public/new-tab-icon-12.jpg" alt="new tab" /></a>
          <a href="https://about.google/products/"><img src="public/R (1).png" alt="Account" /></a>
        </div>
      </nav>

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
