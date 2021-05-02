import React from "react";
import "./Work.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Work() {
  return (
    <motion.div
      className="Work"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "-100%" }}
    >
      <div className="headerDiv">
        <span className="headerText">My Works</span>
      </div>
      <div className="container">
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="project"
        >
          <div
            className="projectPic"
            style={{
              backgroundImage: `url('https://aterdent.sirv.com/Images/bosmMain.png')`
            }}
          ></div>
          <div className="projectName">
            <span className="projecttitle">BOSM'19 Main Website</span>
            <a
              rel="noreferrer"
              href="https://github.com/meliodas113/bosm-2019-main"
              target="_blank"
              className="redirectLink"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="project"
        >
          <div
            className="projectPic"
            style={{
              backgroundImage: `url('https://aterdent.sirv.com/Images/bosmIntro.png')`
            }}
          ></div>
          <div className="projectName">
            <span className="projecttitle">BOSM'19 Intro Website</span>
            <a
              rel="noreferrer"
              href="https://github.com/meliodas113/bosm-2019"
              target="_blank"
              className="redirectLink"
            >
              <FaGithub />
            </a>
          </div>{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="project"
        >
          <div
            className="projectPic"
            style={{
              backgroundImage: `url('https://aterdent.sirv.com/Images/oasisIntro.png')`
            }}
          ></div>
          <div className="projectName">
            <span className="projecttitle">Oasis'19 Intro Website</span>
            <a
              rel="noreferrer"
              href="https://github.com/meliodas113/oasis-2019-intro"
              target="_blank"
              className="redirectLink"
            >
              <FaGithub />
            </a>
          </div>{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="project"
        >
          <div
            className="projectPic"
            style={{
              backgroundImage: `url('https://aterdent.sirv.com/Images/apogee.png')`
            }}
          ></div>
          <div className="projectName">
            <span className="projecttitle">Apogee'20 Main Website</span>
          </div>{" "}
        </motion.div>
      </div>
    </motion.div>
  );
}
