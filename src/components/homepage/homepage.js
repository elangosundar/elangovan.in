import React from 'react'
import { Link } from 'gatsby'

import Header from '../header/header'
import profilePic from '../../components/profile-pic.jpg'
import styles from './homepage.module.css'
import '../../assets/css/font-awesome.min.css'

export default function Homepage() {
  return (
    <div className={styles.flexbox}>
      <Header></Header>
      <div className={styles.flexContainer}>
        <div>
          <div className={styles.textCenter}>
            <img src={profilePic} alt="Elangovan, Karaikudi" />
          </div>
          <div className={styles.textCenter}>
            <h1>Elangovan</h1>
            <h2>Full Stack Developer</h2>

            <ul className={styles.socialRibbon}>
              <li>
                <a
                  target="_blank"
                  title="Github"
                  href="https://github.com/elangosundar"
                >
                  <i className="fa fa-2x fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  title="Twitter"
                  href="https://twitter.com/elango_sundar"
                >
                  <i className="fa fa-2x fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  title="Linkedin"
                  href="https://linkedin.com/in/#"
                >
                  <i className="fa fa-2x fa-linkedin"></i>
                </a>
              </li>
              <li>
                <Link to={'/blog'} title="Blog">
                  <i className="fa fa-2x fa-square"></i>
                </Link>
              </li>
              {/* <li>
                <a
                  target="_blank"
                  title="What I'm listening to"
                  href="#"
                >
                  <i className="fa fa-2x fa-music"></i>
                </a>
              </li> */}
            </ul>
            <hr />
          </div>
          <div className={styles.aboutMe}>
            <p>
              Innovative Full Stack Developer with 7+ years of broad experience in web Development, ReactJs & Php areas with willingness to learn and master of Full Stack Development.
            </p>
            <p>
              You may want to check my{' '}
              <a
                target="_blank"
                href="https://github.com/elangosundar?tab=repositories"
              >
                projects{' '}
              </a>{' '}
              or follow me on{' '}
              <a target="_blank" href="https://twitter.com/elango_sundar">
                Twitter
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
