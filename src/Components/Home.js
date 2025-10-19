import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-grid">
       
        <div className="image-section">
          <div className="image-container">
            <img
              src="profile.jpg"
              alt="Joshua Biong"
              className="profile-pic"
            />
          </div>
        </div>

        <div className="text-section">
          <h1 className="name">Hi, I am <br /><span>Joshua S. Biong</span></h1>
          <p className="greeting">
            Good Day! Feel free to look around and learn anything about me, explore and ask questions and concerns about projects. Hop on in!
          </p>
          <div>
          <button
            className="download-button"
            onClick={() => {
              window.open('/Joshua_Biong_Resume.pdf', '_blank');
            }}
          >
            Resume
          </button>
          <button className="contact-button">
          <Link to="/contact" style={{ color: "white", textDecoration: "none"  }}>
            Contact
          </Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
