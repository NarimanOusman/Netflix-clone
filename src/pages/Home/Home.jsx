import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner_img" />
        <div className="hero_cap">
          <img src={hero_title} className="cap_text" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern istunbul emarks on a quest to save the city from an
            imortal enemy.
          </p>
          <div className="hero_buttons">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark_btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more_cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics for You"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
