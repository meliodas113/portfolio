import React, { Component } from "react";
import "./About.css";
import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

export default class About extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "0" }}
        exit={{ opacityb: 0, y: "-100%" }}
        className="About"
      >
        <div className="headerDiv">
          <span className="headerText">About me</span>
        </div>
        <div className="AboutDiv">
          <div className="profPic"></div>
          <motion.div
            initial={{ opacity: 0, y: -250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="contentDiv"
          >
            <span className="contentHeading">
              Hi , I am Anupam Arvind Srivastava
            </span>
            <span className="maintext">
              I'm a B.E. Electrical and Electronics Engineer Undegraduate at{" "}
              <b>Birla Institute of Technology and Science</b>, Pilani,
              currently in my 3rd Year.Being fascinated by software and
              websites, I started practicing web development in my high school
              yearsI love solving problems with JavaScript and creating tools
              for other developers.For the last three years, I have been
              actively working as a software developer with various technical
              groups of BITS Pilani and gained substantial command over various
              web development frameworks.I am very much fond of writing clean,
              well documented and tested code and likes to spend time in
              improving the projects I have developed in the recent past. Always
              up for a cup of coffee!
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btnDiv"
            >
              <MdFileDownload className="downloadIcon" />
              <a
                href="https://drive.google.com/file/d/1YlzmHZSmOd3y0SpQqZxxx-1OcSsKJT7V/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#ff5e73", textDecoration: "none" }}
                className="cvDnd"
              >
                Download my Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="skillsDiv">
          <div
            className="skillSec"
            style={{
              background: "transparent",
              boxShadow: "none",
              width: "10%"
            }}
          >
            <span
              className="skillType"
              style={{
                color: "white",
                fontSize: "2vw",
                background: "#ff5e73",
                padding: "3% 15% 3% 15%",
                borderRadius: "20px"
              }}
            >
              Skills
            </span>
          </div>
          <motion.div
            className="skillSec"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="skillType">Languages</span>
            <span className="skill">JavaScript(ES6)</span>
            <span className="skill">HTML5</span>
            <span className="skill">CSS3/SASS</span>
            <span className="skill">C/C++</span>
            <span className="skill">Java</span>
          </motion.div>
          <motion.div
            className="skillSec"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="skillSec"
          >
            <span className="skillType">Frameworks</span>
            <span className="skill">ReactJS</span>
            <span className="skill">React Native</span>
            <span className="skill">NodeJS</span>
            <span className="skill">ExpressJS</span>
            <span className="skill">NextJS</span>
            <span className="skill">Redux</span>
          </motion.div>{" "}
          <motion.div
            className="skillSec"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="skillSec"
          >
            <span className="skillType">Others</span>
            <span className="skill">MATLAB</span>
            <span className="skill">Simulink</span>
            <span className="skill">LTSpice</span>
          </motion.div>{" "}
          <motion.div
            className="skillSec"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="skillSec"
          >
            <span className="skillType">TOOLS</span>
            <span className="skill">Git and Github</span>
            <span className="skill">Postman</span>
            <span className="skill">Chrome Dev tools</span>
          </motion.div>
        </div>
      </motion.div>
    );
  }
}
