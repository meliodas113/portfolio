import React from "react";
import "./Home.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Icon from "../../components/SVG/Icon";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const history = useHistory();
  const handleRoute = page => {
    if (page === "about") {
      history.push("/about");
    } else if (page === "home") {
      history.push("/");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "-100%" }}
      className="Home"
    >
      <div className="SocialLinks">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/anupam-srivastava-9b6369186/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/meliodas113"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          rel="noreferrer"
          href="https://www.facebook.com/anupam.srivasrava"
          target="_blank"
        >
          <FaFacebook />
        </a>
      </div>
      <div className="AboutDiv">
        <div className="AboutMe">
          <div className="AboutContent">
            <span className="subtext">Hi there,</span>
            <motion.span
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="maintext"
            >
              I am Anupam.
            </motion.span>
            <span className="subtext" style={{ marginTop: "3%" }}>
              Welcome to my portfolio Website
            </span>
            <span className="aboutbtn" onClick={() => handleRoute("about")}>
              More About Me
            </span>
          </div>
        </div>
        <div
          className="picDiv"
          style={{ fontSize: "100vw", overflow: "hidden" }}
        >
          <Icon />
        </div>
      </div>
      <div className="contactInfo">
        <div className="contact">
          <span className="contactType">Email</span>
          <a
            href="mailto: anupam.fas27@.com"
            className="contactData"
            style={{ textDecoration: "none" }}
          >
            anupam.fas27@gmail.com
          </a>
        </div>
        <div className="contact">
          <span className="contactType">Phone</span>
          <span className="contactData">9871864525</span>
        </div>{" "}
        <div className="contact">
          <span className="contactType">Location</span>
          <span className="contactData">New Delhi , India</span>
        </div>{" "}
      </div>
    </motion.div>
  );
}
