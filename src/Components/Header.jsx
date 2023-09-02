import React from "react";
import '../Styles/Header.css'
import logo from "../../public/Images/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="section">
        {/* first  section */}
        <div className="first">
          <div className="logo">
            <img src={logo} alt="Blog-Logo" />
          </div>
          <div className="social_media">
            <i className="bi bi-twitter"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-rss"></i>
          </div>
        </div>

        {/* second   section */}
        <div className="second">
            <h1>Ghost & Gatsby</h1>
            <h5>Thoughts, stories and JAMstack</h5>
        </div>

        {/* third    section */}
        <div className="third">
            <ul>
                <li>Home</li>
                <li>Tag</li>
                <li>Author</li>
                <li>Help</li>
            </ul>

            <div>About</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
