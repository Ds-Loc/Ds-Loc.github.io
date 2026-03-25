// App.jsx — Root component, gốc của cây component
// Quản lý state dùng chung toàn app (dark mode, active section)
// rồi truyền xuống các component con qua props

import Navbar from './components/Navbar.jsx'
import ScrollTopButton from './components/ScrollTopButton.jsx'
import Sidebar from './components/Sidebar.jsx'
import HeroSection from './sections/HeroSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'

import { useActiveSection } from './hooks/useActiveSection.js'

// Danh sách id các section để hook theo dõi
const SECTION_IDS = ['about', 'skills', 'projects']

export default function App() {
  // Custom hooks — logic được tách gọn vào hooks/
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    // Fragment <>...</> — bọc nhiều element mà không tạo thêm div thừa
    <>
      {/* Props drilling: truyền state & handler xuống Navbar */}
      <Navbar activeSection={activeSection} />

      <div className="layout-wrapper">
        <aside className="layout-sidebar">
          <Sidebar />
        </aside>

        <main className="layout-main">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
      </div>

      <footer style={{
        padding: '28px 0',
        textAlign: 'center',
        color: 'var(--muted)',
        fontSize: '12px',
        borderTop: '1px solid var(--border)'
      }}>
      </footer>

      <ScrollTopButton />
    </>
  )
}
