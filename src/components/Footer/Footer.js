import React from "react";
import "./Footer.css";
import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column justify-content-center mt-auto">
      <div className="social-links d-flex justify-content-center my-3">
        <a target="blank" href="https://www.linkedin.com/in/nurmdrafi/">
          <BsLinkedin></BsLinkedin>
        </a>
        <a target="blank" href="https://github.com/nurmdrafi">
          <BsGithub></BsGithub>
        </a>
        <a target="blank" href="https://twitter.com/MohamodRafi">
          <BsTwitter></BsTwitter>
        </a>
        <a target="blank" href="https://www.facebook.com/nafis.alrafe/">
          <BsFacebook></BsFacebook>
        </a>
      </div>
      <p className="text-center text-muted fw-bold">
        All Rights Reserved By © Website name | 2022-2026
      </p>
    </div>
  );
};

export default Footer;
