import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "-100%" }}
      className="Experience"
    >
      <div className="headerDiv">
        <span className="headerText">Experience</span>
      </div>
      <div className="container">
        <div className="work">
          <div className="workType">
            <span className="workHeading">Education</span>
          </div>
          <div className="workContainer">
            <div className="workexp">
              <div className="expheading">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="expBullet"
                ></motion.div>
                <span className="expName">
                  B.E - (BITS Pilani) Birla Institute of Technology and Science
                </span>
              </div>
              <div className="expdetails">
                <span className="expDate">2018 - Present</span>
                <span className="expinfo">
                  I am currently a pre-final year student pursuing Electrical
                  and Electronics. BITS Pilani has consistently ranked amongst
                  the top universities in India. The acceptance rate of BITS
                  Pilani is 1.47% making it the most selective university in
                  India.
                </span>
              </div>
            </div>
            <div className="workexp">
              <div className="expheading">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                  className="expBullet"
                ></motion.div>{" "}
                <span className="expName">
                  Class 12th - Fr. Agnel School ,Noida
                </span>
              </div>
              <div className="expdetails">
                <span className="expDate">2016 - 2017</span>
                <span className="expinfo">
                  Grade : 91.6% , Maths - 99/100 , Physics : 95/100
                  <br />
                  Acitivites and Societies:
                  <br />
                  Member of Ministry of Home Affairs, School Parliament
                </span>
              </div>
            </div>{" "}
            <div className="workexp">
              <div className="expheading">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="expBullet"
                ></motion.div>{" "}
                <span className="expName">
                  Class 10th - Fr. Agnel School ,Noida
                </span>
              </div>
              <div className="expdetails">
                <span className="expDate">2014 - 2015</span>
                <span className="expinfo">Grade : 9 CGPA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="work">
          <div className="workType">
            <span className="workHeading">Work Experience</span>
          </div>
          <div className="workContainer">
            <div className="workexp">
              <div className="expheading">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="expBullet"
                ></motion.div>
                <span className="expName">
                  Frontend Developer - Elixar Systems
                </span>
              </div>
              <div className="expdetails">
                <span className="expDate">Jan 2020 - Oct 2020</span>
                <span className="expinfo" style={{ width: "100%" }}>
                  Lead the Design and Technical implementation of the Aerth
                  Developer Platform. The Aerth Platform is a Unique AR/ MR
                  Collaborative platform which allows AR Developers to
                  Collaborate on Project. The Platform hosts eminent projects
                  from Elixar, CSIR-CEERI, Nvidia, and Microsoft.
                </span>
              </div>
            </div>
            <div className="workexp">
              <div className="expheading">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                  className="expBullet"
                ></motion.div>{" "}
                <span className="expName">
                  Apogee Joint Cordinator - Department of Visual Media
                </span>
              </div>
              <div className="expdetails">
                <span className="expDate">March 2020 - March 2021</span>
                <span className="expinfo">
                  Lead Website and App development teams for my college's
                  technical fest APOGEE. This year APOGEE was conducted in
                  online mode and the website got 5000+ hits
                </span>
              </div>
            </div>{" "}
            <div className="workexp">
              <div className="expheading">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="expBullet"
                ></motion.div>{" "}
                <span className="expName">
                  Frontend Developer - Department of Visual Media
                </span>
              </div>
              <div className="expdetails">
                <span className="expDate">Jan 2019 - March 2020</span>
                <span className="expinfo" style={{ width: "100%" }}>
                  Department of Visual Media is a major student department in
                  BITS Pilani, contributing to OASIS (Cultural fest), BOSM
                  (Sports fest), and APOGEE (Technical fest). The Department
                  produces awesome websites, apps, and videos for the
                  fore-mentioned fests.
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </motion.div>
  );
}
