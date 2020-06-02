import React from 'react'
import styles from './header.module.css'
import { Link } from 'gatsby'

export default function header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
          <li>
            <a href="https://github.com/elangovanshanthi" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/im_leaf">Twitter</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
