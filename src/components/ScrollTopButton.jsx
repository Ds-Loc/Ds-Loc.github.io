// components/ScrollTopButton.jsx
// Nút cuộn lên đầu trang — hiện khi scroll xuống > 400px

import { useState, useEffect } from 'react'
import styles from './ScrollTopButton.module.css'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    // Cleanup: gỡ event listener khi component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`${styles.btn} ${visible ? '' : styles.hidden}`}
      onClick={scrollToTop}
      aria-label="Lên đầu trang"
    >
      ↑
    </button>
  )
}
