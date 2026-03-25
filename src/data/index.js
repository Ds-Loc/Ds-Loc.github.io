// data/index.js
// Tách dữ liệu ra khỏi component — dễ chỉnh sửa, dễ sau này
// kết nối với API thay thế

export const SKILLS = [
  {
    id: 1,
    icon: '⚙️',
    name: 'Backend',
    desc: 'REST API, server-side logic',
    tags: ['Node.js', 'Express', 'Python', 'Java'],
  },
  {
    id: 2,
    icon: '🌐',
    name: 'Frontend',
    desc: 'Giao diện người dùng',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 3,
    icon: '🗄️',
    name: 'Database',
    desc: 'Thiết kế & truy vấn CSDL',
    tags: ['MySQL', 'MongoDB'],

  },
  {
    id: 4,
    icon: '🛠️',
    name: 'DevOps',
    desc: 'Triển khai & công cụ',
    tags: ['Git', 'Docker'],

  },
]

export const PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'Smart School Bus System (Frontend)',
    desc: 'Giao diện web quản lý hệ thống xe buýt thông minh, tích hợp bản đồ theo dõi xe theo thời gian thực qua WebSocket, giám sát lộ trình và điểm danh.',
    tags: ['React', 'JavaScript', 'Socket.IO Client'],
    badge: 'Frontend',
    type: 'frontend',
    github: 'https://github.com/Ds-Loc/Smart-School-Bus-System---fe',
    demo: null,
  },
  {
    id: 2,
    num: '02',
    title: 'Smart School Bus System (Backend)',
    desc: 'Hệ thống Backend API & WebSocket Server, truyền phát vị trí GPS thời gian thực, quản lý phân quyền và cập nhật trạng thái chuyến đi tức thời.',
    tags: ['Node.js', 'Express', 'Socket.IO', 'MongoDB'],
    badge: 'Backend',
    type: 'backend',
    github: 'https://github.com/Ds-Loc/Smart-School-Bus-System---be',
    demo: null,
  },

]



export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
]

export const FILTER_TABS = ['all', 'frontend', 'backend', 'fullstack']
