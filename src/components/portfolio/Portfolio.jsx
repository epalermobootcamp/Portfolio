import React from "react";
import IMG1 from "../../assets/weather.png";
import IMG2 from "../../assets/NoteTaker.png";
import IMG3 from "../../assets/CardGame.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "The Weather Dashboard",
      img: IMG1,
      description:
        "Easy to use Weather Dashboard where users can choose any city around the world and it will display the current weather condition, plus the five day forecast. This project demonstrates the use of server-side API",
      technologies: "Bootstarp | jQuery | DayJS",
      link: "https://epalermobootcamp.github.io/weather_dashboard/index.html#",
      github: "https://github.com/epalermobootcamp/weather_dashboard",
    },
    {
      id: 2,
      title: "Note Taker",
      img: IMG2,
      description:
        "A simple note taker app that uses Express and Heroku as a platform in deploying it",
      technologies: "Node | Express",
      link: "https://stormy-bastion-48640-42c644fc29d0.herokuapp.com/",
      github: "https://github.com/epalermobootcamp/note_taker",
    },
    {
      id: 3,
      title: "TCG Card Tactics",
      img: IMG3,
      description:
        "A collection card game. A group project where we get to collaborate with other developers",
      technologies: "JavaScript | Handlebars | MySQL",
      link: "https://tcg-card-tactics-267bdfc7ada4.herokuapp.com/",
      github: "https://github.com/rileysong01/TCG-Card-Tactics",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
