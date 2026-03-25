// components/Button.jsx
// Component tái sử dụng — dùng ở nhiều chỗ khác nhau
// Nhận props để tùy biến behavior

import styles from './Button.module.css'

// Props:
//   variant: "primary" | "ghost" — kiểu nút
//   href: nếu có → render <a> thay vì <button>
//   onClick: hàm xử lý click
//   children: nội dung bên trong nút
export default function Button({ variant = 'primary', href, onClick, children }) {
  const cls = `${styles.btn} ${styles[variant]}`

  // Nếu là link ngoài → dùng thẻ <a>
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    )
  }

  // Mặc định → thẻ <button>
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
