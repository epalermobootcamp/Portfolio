import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/enrico-palermo-12bb8162/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/epalermobootcamp"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://wellfound.com/u/enrico-palermo-1"
        target="_blank"
        rel="noreferrer"
      >
        <FaAngellist />
      </a>
    </div>
  );
};

export default HeaderSocials;
