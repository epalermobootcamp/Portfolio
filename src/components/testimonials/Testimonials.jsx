import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/chislon/",
      name: "Chislon Chow",
      role: "Level 2 Support Analyst in Shomi",
      test: "Enrico was one of my most valuable resources on at shomi Digital Operations during my short time with the team, because of his expertise with the team's support processes and procedures, combined with his approachable demeanor. ",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/chislon/",
      name: "Chislon Chow",
      role: "Level 2 Support Analyst in Shomi",
      test: "Enrico was one of my most valuable resources on at shomi Digital Operations during my short time with the team, because of his expertise with the team's support processes and procedures, combined with his approachable demeanor. ",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/chislon/",
      name: "Chislon Chow",
      role: "Level 2 Support Analyst in Shomi",
      test: "Enrico was one of my most valuable resources on at shomi Digital Operations during my short time with the team, because of his expertise with the team's support processes and procedures, combined with his approachable demeanor. ",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
