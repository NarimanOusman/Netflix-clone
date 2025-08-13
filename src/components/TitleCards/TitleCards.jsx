import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import Cards_data from "../../assets/cards/Cards_data.js";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGMwNmI3ZjczZTg0ZDRlNDFlNTgwZWZhY2Y3MDRkMiIsIm5iZiI6MTc1NDc2NDMzNS44OTUsInN1YiI6IjY4OTc5NDJmZjY3OWYxZjk4MDhlYTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dblBYNK6bh2Bu9ohWEvkocaHxF9T14Jn354dmeitkHk",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    };
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/Player/${card.id}`} key={index}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                  alt=""
                />
                <p>{card.original_title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
