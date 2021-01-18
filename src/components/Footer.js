import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="footer">
      <div>Made with love by Muzi Qiu</div>
      <div>
        <a href="https://www.linkedin.com/in/muzi-monica-qiu/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <span className='footer-space'></span>
        <a href="https://github.com/cooleditphoto">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
