// sections/SkillsSection.jsx
import Tag from '../components/Tag.jsx'
import { SKILLS } from '../data/index.js'
import styles from './SkillsSection.module.css'

// SkillCard — component con, chỉ dùng trong file này nên để luôn ở đây
// Nếu sau này dùng ở chỗ khác thì tách ra components/SkillCard.jsx
function SkillCard({ icon, name, desc, tags }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.name}>{name}</div>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.tags}>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="sec-label">Kỹ năng</p>

        <div className={styles.grid}>
          {/* Destructuring trong map: lấy id riêng, còn lại spread vào props */}
          {SKILLS.map(({ id, ...props }) => (
            <SkillCard key={id} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
