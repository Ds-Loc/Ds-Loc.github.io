// hooks/useDarkMode.js
// Custom Hook — tách logic ra khỏi component
//
// Quy tắc đặt tên: luôn bắt đầu bằng "use"
// React nhận biết đây là hook và áp dụng các rules đặc biệt

import { useState, useEffect } from 'react'

export function useDarkMode() {
  // Khởi tạo state từ localStorage (nếu có)
  // Lần đầu vào trang → đọc giá trị đã lưu trước đó
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    // Nếu chưa từng lưu → mặc định dark
    return saved !== null ? JSON.parse(saved) : true
  })

  // Mỗi khi darkMode thay đổi:
  // 1. Toggle class 'light' trên <body>
  // 2. Lưu vào localStorage để nhớ khi refresh
  useEffect(() => {
    document.body.classList.toggle('light', !darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  // Toggle: đảo ngược giá trị hiện tại
  const toggleDark = () => setDarkMode(prev => !prev)

  // Trả về cả state lẫn hàm toggle để component dùng
  return { darkMode, toggleDark }
}
