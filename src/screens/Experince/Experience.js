import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: '0' }}
      exit={{ opacity: 0, y: '-100%' }}
      className='Experience'
    >
      <div className='headerDiv'>
        <span className='headerText'>Experience</span>
      </div>
      <div className='container'>
        <div className='work'>
          <div className='workType'>
            <span className='workHeading'>Education</span>
          </div>
          <div className='workContainer'>
            <div className='workexp'>
              <div className='expheading'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className='expBullet'
                ></motion.div>
                <span className='expName'>
                  B.E - (BITS Pilani) Birla Institute of Technology and Science
                </span>
              </div>
              <div className='expdetails'>
                <span className='expDate'>2018 - 2022</span>
                <span className='expinfo'>
                  I am currently a Electrical and Electronics graduate from BITS
                  Pilani. BITS Pilani has consistently ranked amongst the top
                  universities in India. The acceptance rate of BITS Pilani is
                  1.47% making it the most selective university in India.
                </span>
              </div>
            </div>
            <div className='workexp'>
              <div className='expheading'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                  className='expBullet'
                ></motion.div>{' '}
                <span className='expName'>
                  Class 12th - Fr. Agnel School ,Noida
                </span>
              </div>
              <div className='expdetails'>
                <span className='expDate'>2016 - 2017</span>
                <span className='expinfo'>
                  Grade : 91.6% , Maths - 99/100 , Physics : 95/100
                  <br />
                  Acitivites and Societies:
                  <br />
                  Member of Ministry of Home Affairs, School Parliament
                </span>
              </div>
            </div>{' '}
            <div className='workexp'>
              <div className='expheading'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className='expBullet'
                ></motion.div>{' '}
                <span className='expName'>
                  Class 10th - Fr. Agnel School ,Noida
                </span>
              </div>
              <div className='expdetails'>
                <span className='expDate'>2014 - 2015</span>
                <span className='expinfo'>
                  Grade : 9 CGPA <br />
                  Acitivites and Societies:
                  <br />
                  Member of Ministry of Home Affairs, School Parliament
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='work'>
          <div className='workType'>
            <span className='workHeading'>Work Experience</span>
          </div>
          <div className='workContainer'>
            <div className='workexp'>
              <div className='expheading'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className='expBullet'
                ></motion.div>
                <span className='expName'>Graduate Analyst BA4 - Barclays</span>
              </div>
              <div className='expdetails'>
                <span className='expDate'>Aug 2022 - present</span>
                <span className='expinfo' style={{ width: '100%' }}>
                  During my current rotation in the ONE-REG UI team, I
                  co-developed the "OneRegUI" application using Angular, Java
                  Spring, and RESTful Services for Trade and Transaction
                  Reporting (TTR), ensuring accurate and timely regulatory
                  reporting. I strengthened code quality through SonarQube,
                  implemented robust unit tests, and created user-friendly
                  interfaces with AngularJS and HTML5.
                </span>
              </div>
            </div>
            <div className='workexp'>
              <div className='expheading'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                  className='expBullet'
                ></motion.div>{' '}
                <span className='expName'>
                  Software Engineer Internship - Schmooze
                </span>
              </div>
              <div className='expdetails'>
                <span className='expDate'>Dec 2021 - July 2022</span>
                <span className='expinfo'>
                  I co-developed Schmooze, a cross-platform app with 2000+ users
                  using Flutter. I co-led a React web app for data monitoring,
                  messaging, and refactored a marketing game. Also, contributed
                  to migrating the code base from Flutter to React Native.
                </span>
              </div>
            </div>{' '}
            <div className='workexp'>
              <div className='expheading'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className='expBullet'
                ></motion.div>{' '}
                <span className='expName'>
                  Software Engineer Internship - Hindalco
                </span>
              </div>
              <div className='expdetails'>
                <span className='expDate'>July 2021 - Dec 2021</span>
                <span className='expinfo' style={{ width: '100%' }}>
                  Created an automated application using ImageJ and Python to
                  process minerals' micro-structure images, streamlining
                  parameter calculations and replacing manual efforts. Also,
                  designed a Python pipeline to process multiple .csv files and
                  produce results, effectively minimizing human involvement.
                </span>
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
    </motion.div>
  );
}
