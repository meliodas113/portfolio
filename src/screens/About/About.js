import React, { Component } from 'react';
import './About.css';
import { MdFileDownload } from 'react-icons/md';
import { motion } from 'framer-motion';

export default class About extends Component {
  render() {
    const Languages = [
      'JavaScript(ES6)',
      'HTML5',
      'CSS3/SCSS',
      'C/C++',
      'Java',
    ];
    const frameworks = [
      'ReactJS',
      'React Native',
      'AngularJS',
      'SpringBoot',
      'NodeJS',
    ];
    return (
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: '0' }}
        exit={{ opacityb: 0, y: '-100%' }}
        className='About'
      >
        <div className='headerDiv'>
          <span className='headerText'>About me</span>
        </div>
        <div className='AboutDiv'>
          <div className='profPic'></div>
          <motion.div
            initial={{ opacity: 0, y: -250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='contentDiv'
          >
            <span className='contentHeading'>
              Hi , I am Anupam Arvind Srivastava
            </span>
            <span className='maintext'>
              I am an Electrical and Electronics Engineering graduate (B.E.)
              from <b>Birla Institute of Technology and Science</b>, Pilani,
              class of 2022. My affinity for software and web development
              ignited during my freshman years, driving me to pursue a journey
              in crafting digital solutions. Proficient in JavaScript, I excel
              in problem-solving and tool creation for fellow developers. Over
              the past four years, I have actively honed my skills as a software
              developer, mastering a spectrum of web development frameworks. My
              commitment to writing meticulous, well-documented, and rigorously
              tested code underscores my dedication to quality. I find
              fulfillment in refining recent projects, continuously seeking
              enhancement. Let's connect over a cup of coffee to explore further
              possibilities.
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='btnDiv'
            >
              <MdFileDownload className='downloadIcon' />
              <a
                href='https://drive.google.com/file/d/1N9_ORp9ES8y1bvvpXBH3-p-VXjZ4sEnQ/view'
                target='_blank'
                rel='noreferrer'
                style={{ color: '#ff5e73', textDecoration: 'none' }}
                className='cvDnd'
              >
                Download my Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className='skillsDiv'>
          <div
            className='skillSec'
            style={{
              background: 'transparent',
              boxShadow: 'none',
              width: '10%',
            }}
          >
            <span
              className='skillType'
              style={{
                color: 'white',
                fontSize: '2vw',
                background: '#ff5e73',
                padding: '3% 15% 3% 15%',
                borderRadius: '20px',
              }}
            >
              Skills
            </span>
          </div>
          <motion.div
            className='skillSec'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className='skillType'>Languages</span>
            {Languages.map((item) => {
              return <span className='skill'>{item}</span>;
            })}
          </motion.div>
          <motion.div
            className='skillSec'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className='skillType'>Frameworks</span>
            {frameworks.map((item) => {
              return <span className='skill'>{item}</span>;
            })}
          </motion.div>{' '}
          <motion.div
            className='skillSec'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className='skillType'>Others</span>
            <span className='skill'>MATLAB</span>
            <span className='skill'>Simulink</span>
            <span className='skill'>LTSpice</span>
          </motion.div>{' '}
          <motion.div
            className='skillSec'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className='skillType'>TOOLS</span>
            <span className='skill'>Git and Github</span>
            <span className='skill'>Postman</span>
            <span className='skill'>Chrome Dev tools</span>
          </motion.div>
        </div>
      </motion.div>
    );
  }
}
