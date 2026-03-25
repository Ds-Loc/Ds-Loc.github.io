// components/Navbar.jsx
// Nhận props từ App.jsx: darkMode, toggleDark, activeSection

import { NAV_LINKS } from '../data/index.js'
import styles from './Navbar.module.css'

export default function Navbar({ activeSection }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Empty span to keep flex spacing if needed, or remove completely */}
        <div></div>

        {/* Nav links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                // Ternary operator: nếu active → class 'active', không thì 'link'
                className={activeSection === id ? styles.active : styles.link}
              >
                {label}
              </a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  )
}
