import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/About.css";

const hobbies = [
  {
    title: "Traveling",
    description: "Exploring the world and getting to know their culture.",
    emoji: "🗺️",
  },
  {
    title: "Gaming",
    description: "Playing video games and connecting with friends online.",
    emoji: "🎮",
  },
  {
    title: "Billiards", 
    description: "Playing billiard is a great way to stay focus and thing strategies.",
    emoji: "🎱",
  },
  {
    title: "Watching Movies",
    description: "I love watching movies and analyzing to understand it's story.",
    emoji: "📺",
  },
  {
    title: "Music",
    description: "I love listening to songs from any genre, especially old songs that I grew up with.",
    emoji: "🎵",
  },
  {
    title: "Singing",
    description: "I like to sing along with some old songs that I am familiar with.",
    emoji: "🎤",
  },
  {
    title: "Photography",
    description: "I often capture moments and memories of the places I haven't been.",
    emoji: "📸",
  },
];

const AboutSection = () => {
  const settings = {
      dots: true,
      infinite: true,
      initialSlide: 0,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              },
          },
      ],
  };

  return (
      <div className="about-container">
          <h1>About Me</h1>
          <p>Discover the hobbies I have along the way.</p>

          <div className="carousel-container">
              <Slider {...settings}>
                  {hobbies.map((hobby, index) => (
                      <div key={index}>
                          <div className="hobby-card">
                              <div className="hobby-emoji">{hobby.emoji}</div>
                              <div className="hobby-details">
                                  <h3>{hobby.title}</h3>
                                  <p>{hobby.description}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </Slider>
          </div>
      </div>
  );
};

export default AboutSection;