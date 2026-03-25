// sections/HeroSection.jsx
// Section đầu tiên — giới thiệu bản thân + số thống kê đếm động

import { useState, useEffect } from 'react'
import Button from '../components/Button.jsx'
import styles from './HeroSection.module.css'

// Hàm animate counter — tách ra khỏi component để dễ đọc
function useCountAnimation(targets, duration = 1500) {
  // Khởi tạo state: mảng các số bắt đầu từ 0
  const [counts, setCounts] = useState(targets.map(() => 0))

  useEffect(() => {
    targets.forEach((target, index) => {
      let current = 0
      const stepTime = Math.floor(duration / target)

      const timer = setInterval(() => {
        current += 1
        // Functional update: đảm bảo luôn dùng state mới nhất
        setCounts(prev => {
          const next = [...prev]   // tạo bản copy của mảng
          next[index] = current    // cập nhật index cần thay đổi
          return next
        })
        if (current >= target) clearInterval(timer)
      }, stepTime)
    })
    // Không cần cleanup vì timer sẽ tự dừng khi đếm xong
  }, []) // chỉ chạy 1 lần

  return counts
}

export default function HeroSection() {


  return (
    <section id="about" className={styles.hero}>
      {/* Vòng tròn trang trí — element thuần CSS */}
      <div className={styles.glow} aria-hidden="true" />

      <div className="container">
        <span className={styles.tag}>👋 Hello, I'm</span>

        <h1 className={styles.name}>
          Đào Song Lộc
        </h1>

        <p className={styles.role}>
          Fullstack Developer & <span>Backend enthusiast</span>
        </p>

        <p className={styles.desc}>
          Sinh viên năm 3 chuyên ngành Kĩ thuật Phần mềm tại Trường Đại học Sài Gòn. Đam mê xây dựng
          backend và giao diện web sạch, hiệu quả.
        </p>

      </div>
    </section>
  )
}
