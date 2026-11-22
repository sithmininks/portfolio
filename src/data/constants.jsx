import { Code2, Database, Wrench, Layers, Globe } from 'lucide-react'

// =========================================
// NAVIGATION LINKS
// =========================================
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact', href: '#contact' },
]

// =========================================
// TYPING TEXTS
// =========================================
export const TYPING_TEXTS = [
  'Information Technology Undergraduate',
  'Aspiring Software Developer',
  'Web Development Enthusiast',
  'Creative Problem Solver',
]

// =========================================
// SKILLS DATA
// =========================================
export const SKILLS = [
  {
    category: 'Programming Languages',
    icon: <Code2 size={20} />,
    colorClass: 'icon-purple',
    tags: [
      { name: 'Java', icon: '☕' },
      { name: 'C#', icon: '#️⃣' },
    ]
  },
  {
    category: 'Web Technologies',
    icon: <Globe size={20} />,
    colorClass: 'icon-blue',
    tags: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
    ]
  },
  {
    category: 'Database',
    icon: <Database size={20} />,
    colorClass: 'icon-cyan',
    tags: [
      { name: 'MySQL', icon: '🗄️' },
      { name: 'SQL', icon: '📋' },
    ]
  },
  {
    category: 'Development Tools',
    icon: <Wrench size={20} />,
    colorClass: 'icon-orange',
    tags: [
      { name: 'Visual Studio', icon: '🔵' },
      { name: 'VS Code', icon: '💻' },
      { name: 'IntelliJ IDEA', icon: '🧠' },
      { name: 'Android Studio', icon: '🤖' },
    ]
  },
  {
    category: 'Concepts & Areas',
    icon: <Layers size={20} />,
    colorClass: 'icon-green',
    tags: [
      { name: 'OOP', icon: '🔷' },
      { name: 'Data Structures', icon: '📊' },
      { name: 'UI/UX Design', icon: '🎭' },
      { name: 'Database Management', icon: '🗃️' },
      { name: 'Android Development', icon: '📱' },
    ]
  },
]

// =========================================
// PROJECTS DATA
// =========================================
export const PROJECTS = [
  {
    title: 'Hospital OPD Queue Management System',
    description: 'A hospital outpatient department queue management system designed to manage patient registration, token generation, and queue information. The system provides a user-friendly interface to improve patient queue management.',
    tech: ['C#', 'Windows Forms', 'MySQL', 'Visual Studio'],
    type: 'Group Project',
    typeBadge: 'badge-group',
    icon: '🏥',
    contribution: 'UI Design and backend development involvement.',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.1))',
    iconBg: 'rgba(139,92,246,0.15)',
    githubUrl: null,
  },
  {
    title: 'IntelliFlow AI – Adaptive Traffic Control System',
    description: 'An intelligent traffic control system that uses computer vision to detect vehicles and dynamically manage traffic signals. It also supports emergency vehicle prioritization to improve traffic flow.',
    tech: ['Python', 'YOLOv8', 'Flask', 'ESP32-CAM', 'Arduino'],
    type: 'AI & IoT',
    typeBadge: 'badge-personal',
    icon: '🚦',
    contribution: null,
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.1))',
    iconBg: 'rgba(6,182,212,0.15)',
    githubUrl: null,
  },
  {
    title: 'QuizUp – Android Quiz Application',
    description: 'An interactive Android quiz application designed to provide users with a simple and engaging quiz experience. Features multiple question categories and a clean, intuitive interface.',
    tech: ['Java', 'Android Studio'],
    type: 'Android App',
    typeBadge: 'badge-android',
    icon: '🧩',
    contribution: null,
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(139,92,246,0.1))',
    iconBg: 'rgba(249,115,22,0.15)',
    githubUrl: null,
  },
]

// =========================================
// INTERESTS DATA
// =========================================
export const INTERESTS = [
  { title: 'Web Development', desc: 'Building responsive, modern web experiences', icon: '🌐', bg: 'rgba(59,130,246,0.1)', color: '#60a5fa' },
  { title: 'Software Engineering', desc: 'Designing clean, scalable software solutions', icon: '⚙️', bg: 'rgba(139,92,246,0.1)', color: '#a78bfa' },
  { title: 'Database Management', desc: 'Structuring and optimizing data systems', icon: '🗄️', bg: 'rgba(6,182,212,0.1)', color: '#22d3ee' },
  { title: 'Mobile Development', desc: 'Creating Android apps with Java', icon: '📱', bg: 'rgba(34,197,94,0.1)', color: '#4ade80' },
  { title: 'UI/UX Design', desc: 'Crafting intuitive user interfaces', icon: '🎨', bg: 'rgba(236,72,153,0.1)', color: '#f472b6' },
  { title: 'Emerging Tech', desc: 'Exploring AI, IoT, and new technologies', icon: '🚀', bg: 'rgba(249,115,22,0.1)', color: '#fb923c' },
]
