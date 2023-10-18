import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            With over a decade of experience in the dynamic and ever-evolving
            field of Information Technology, I have established myself as a
            seasoned professional with a profound understanding of the
            industry's intricacies. My journey through the world of technology
            has been nothing short of impressive, marked by my commitment to
            constant growth and development.
          </p>
          <p>
            My academic journey led me to the prestigious University of Toronto,
            where I had the privilege of delving into the intricacies of
            full-stack development. This comprehensive program equipped me with
            a diverse skill set, enabling me to navigate the complexities of
            both front-end and back-end development, and facilitating my journey
            to becoming a well-rounded IT expert.
          </p>
          <p>
            In my professional life, I have worn many hats, with my previous
            role as an Operations Manager at Bell Media serving as a testament
            to my leadership and management abilities. This experience exposed
            me to the challenges and demands of overseeing a critical
            operational unit in a major media conglomerate. My ability to handle
            such a high-pressure role speaks to my organizational acumen and
            problem-solving skills.
          </p>
          <p>
            As I continue to navigate the ever-changing landscape of IT, my
            blend of hands-on experience and academic knowledge ensures that I
            remain at the forefront of technological advancements. My journey
            serves as an inspiration to aspiring professionals in the field,
            emphasizing the importance of continuous learning and adaptation in
            a world where technology is in a constant state of flux.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
