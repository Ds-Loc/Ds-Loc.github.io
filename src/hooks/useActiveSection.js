// hooks/useActiveSection.js
// Custom Hook: theo dõi section nào đang hiển thị trên màn hình
// Dùng IntersectionObserver — API của browser, hiệu quả hơn scroll event

import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // IntersectionObserver: gọi callback khi element vào/ra khỏi viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Nếu section đang hiển thị (>30% trong viewport) → set active
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // rootMargin: offset từ top của viewport
        // '-20% 0px -70%': chỉ trigger khi element trong vùng 20%-30% của viewport
        rootMargin: '-20% 0px -70%',
      }
    )

    // Observe tất cả các section
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Cleanup: dừng observe khi component unmount
    return () => observer.disconnect()
  }, [sectionIds]) // sectionIds ít khi thay đổi nhưng vẫn phải khai báo

  return activeSection
}
