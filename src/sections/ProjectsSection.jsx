// sections/ProjectsSection.jsx
// Có filter tab: "all" | "backend" | "fullstack"
// CONCEPT: useState + useMemo để lọc danh sách

import { useState, useMemo } from 'react'
import Tag from '../components/Tag.jsx'
import { PROJECTS, FILTER_TABS } from '../data/index.js'
import styles from './ProjectsSection.module.css'

// ProjectCard — component con chỉ render, không có state
function ProjectCard({ num, title, desc, tags, badge, github, demo }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.num}>{num}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>

        <div className={styles.tags}>
          {tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>

        <div className={styles.links}>
          {/* Toán tử && — chỉ render nếu giá trị bên trái là truthy */}
          {github && <a href={github} className={styles.link} target="_blank" rel="noreferrer">GitHub →</a>}
          {demo && <a href={demo} className={styles.link} target="_blank" rel="noreferrer">Demo →</a>}
        </div>
      </div>

      <span className={styles.badge}>{badge}</span>
    </div>
  )
}

export default function ProjectsSection() {
  // State: tab đang được chọn
  const [activeTab, setActiveTab] = useState('all')

  // useMemo: tính toán filtered list, chỉ tính lại khi activeTab thay đổi
  // Tránh tính lại mỗi lần component re-render vì lý do khác
  const filtered = useMemo(() => {
    if (activeTab === 'all') return PROJECTS
    return PROJECTS.filter(p => p.type === activeTab)
  }, [activeTab])

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="sec-label">Dự án</p>

        {/* Filter tabs */}
        <div className={styles.tabs}>
          {FILTER_TABS.map(tab => (
            <button
              key={tab}
              // Template string để kết hợp nhiều class
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {/* Capitalize chữ đầu: "backend" → "Backend" */}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Danh sách project đã lọc */}
        <div className={styles.list}>
          {filtered.map(({ id, ...props }) => (
            <ProjectCard key={id} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
