import React from 'react';
import './Work.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

export default function Work() {
  const works = [
    {
      name: 'BizLinker',
      url: process.env.PUBLIC_URL + '/Assets/bizlinkernew.png',
      codeurl: 'https://github.com/meliodas113/bizlinker',
      // liveurl:'exp://u.expo.dev/update/f38f587a-db7c-4c9d-b8de-34aa12a86150',
      desc: "Developed 'Bizliner,' a React Native mobile application integrated with Rapid API for job search. 'Bizliner' enables users to efficiently search for full-time, part-time, and remote job opportunities, offering a user-friendly and streamlined job search experience.",
      skills: ['React-Native', 'Expo', 'Javascript', 'App Development'],
    },
    {
      name: 'Zenith',
      url: process.env.PUBLIC_URL + '/Assets/zenith.png',
      codeurl: 'https://github.com/meliodas113/zenith',
      liveurl: 'https://zenith-services.netlify.app/',
      desc: "Designed and developed 'Zenith,' an e-commerce website using React and Starpi. Zenith provides users with an intuitive interface for browsing and exploring products in an engaging online shopping environment.",
      skills: [
        'React',
        'Strapi',
        'Javascript',
        'Web Development',
        'Context',
        'SCSS',
      ],
    },
  ];
  return (
    <motion.div
      className='Work'
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: '0' }}
      exit={{ opacity: 0, y: '-100%' }}
    >
      <div className='headerDiv'>
        <span className='headerText'>My Works</span>
      </div>
      <div className='container'>
        {works.map((item, i) => (
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 * (i + 1) }}
            className='project'
          >
            <div
              className='projectPic'
              style={{ backgroundImage: `url(${item.url})` }}
            ></div>
            <div className='projectName'>
              <span className='projecttitle'>{item.name}</span>
              <a
                rel='noreferrer'
                href={item.codeurl}
                target='_blank'
                className='redirectLink'
              >
                <FaGithub />
              </a>
              {item.liveurl && (
                <a
                  rel='noreferrer'
                  href={item.liveurl}
                  target='_blank'
                  className='redirectLink'
                >
                  <FaLink />
                </a>
              )}
            </div>
            <div className='projectDesc'>{item.desc}</div>
            <div className='skill-div'>
              {item.skills.map((el) => (
                <span className='skill'>{el}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
