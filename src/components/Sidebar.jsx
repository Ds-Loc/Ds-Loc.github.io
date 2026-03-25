import Button from './Button.jsx'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {/* Avatar */}
      <div className={styles.avatarWrapper}>
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          className={styles.avatar}
        />
      </div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <Button variant="primary" href="#">Resume</Button>
        <Button variant="ghost" href="https://github.com/Ds-Loc">GitHub</Button>
      </div>

      <h3 className={styles.contactTitle}>Thông tin liên hệ</h3>

      {/* Contact Info */}
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <span className={styles.icon}>📞</span>
          <span>0858198268</span>
        </div>
        <div className={styles.contactItem}>
          <span className={styles.icon}>✉️</span>
          <span>songloc0403@gmail.com</span>
        </div>
        <div className={styles.contactItem}>
          <span className={styles.icon}>🌐</span>
          <a href="https://facebook.com">Facebook</a>
        </div>
        <div className={styles.contactItem}>
          <span className={styles.icon}>💼</span>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
        <div className={styles.contactItem}>
          <span className={styles.icon}>📍</span>
          <span>Hồ Chí Minh, Việt Nam</span>
        </div>
      </div>
    </div>
  )
}
