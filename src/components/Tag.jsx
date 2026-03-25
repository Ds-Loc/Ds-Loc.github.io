// components/Tag.jsx
// Component đơn giản nhất — chỉ nhận children và render
// Ví dụ điển hình của "dumb component" (không có state)

import styles from './Tag.module.css'

export default function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>
}
