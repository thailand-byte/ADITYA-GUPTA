export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  gradient: string;
  features: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools & Design';
  level: string;
  iconName: string;
  color: string;
  bgLight: string;
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Aditya Kumar Gupta',
    role: 'Full Stack Web Developer',
    location: 'India',
    tagline: 'Turning Ideas into Reality',
    bio: "I'm a passionate full stack web developer from India who loves creating clean, modern, scalable, and user-friendly digital experiences. Specializing in high-performance web applications, fluid interactive interfaces, and robust backend services.",
    shortBio: "I'm a passionate full stack web developer who loves creating clean, modern and user-friendly digital experiences. This is my portfolio, showcasing some of my best work.",
    avatar: '/assets/aistudio/aditya_45b4e5c8.jpg',
    experienceYears: '4+',
    completedProjects: '25+',
    clientSatisfaction: '100%',
    status: 'Available for freelance & full-time roles',
  },

  contact: {
    email: {
      address: 'vediocreationai@gmail.com',
      label: 'Email Me',
      buttonText: 'Send an Email',
      url: 'mailto:vediocreationai@gmail.com',
    },
    telegram: {
      username: 'Adityaguptadeveloper',
      displayTag: '@Adityaguptadeveloper',
      label: 'Connect on Telegram',
      buttonText: 'Message Me',
      url: 'https://t.me/Adityaguptadeveloper',
    },
    instagram: {
      username: 'aditya_kumar_gupta.ak47',
      displayTag: '@aditya_kumar_gupta.ak47',
      label: 'Follow on Instagram',
      buttonText: 'Visit Instagram',
      url: 'https://www.instagram.com/aditya_kumar_gupta.ak47/',
    },
  },

  skills: [
    {
      name: 'HTML5',
      category: 'Frontend',
      level: 'Advanced',
      iconName: 'html5',
      color: '#E34F26',
      bgLight: 'rgba(227, 79, 38, 0.1)',
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      level: 'Advanced',
      iconName: 'css3',
      color: '#1572B6',
      bgLight: 'rgba(21, 114, 182, 0.1)',
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      level: 'Advanced',
      iconName: 'javascript',
      color: '#F7DF1E',
      bgLight: 'rgba(247, 223, 30, 0.15)',
    },
    {
      name: 'React',
      category: 'Frontend',
      level: 'Expert',
      iconName: 'react',
      color: '#61DAFB',
      bgLight: 'rgba(97, 218, 251, 0.12)',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 'Expert',
      iconName: 'tailwind',
      color: '#06B6D4',
      bgLight: 'rgba(6, 182, 212, 0.12)',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      level: 'Proficient',
      iconName: 'nodejs',
      color: '#339933',
      bgLight: 'rgba(51, 153, 51, 0.12)',
    },
    {
      name: 'Express.js',
      category: 'Backend',
      level: 'Proficient',
      iconName: 'express',
      color: '#64748B',
      bgLight: 'rgba(100, 116, 139, 0.12)',
    },
    {
      name: 'PostgreSQL / MongoDB',
      category: 'Backend',
      level: 'Proficient',
      iconName: 'database',
      color: '#336791',
      bgLight: 'rgba(51, 103, 145, 0.12)',
    },
    {
      name: 'Figma',
      category: 'Tools & Design',
      level: 'Advanced',
      iconName: 'figma',
      color: '#F24E1E',
      bgLight: 'rgba(242, 78, 30, 0.12)',
    },
    {
      name: 'Git & GitHub',
      category: 'Tools & Design',
      level: 'Advanced',
      iconName: 'git',
      color: '#F05032',
      bgLight: 'rgba(240, 80, 50, 0.12)',
    },
  ] as SkillItem[],

  projects: [
    {
      id: 'startup-landing-page',
      title: 'Startup Landing Page',
      description: 'A modern and responsive landing page for a tech startup.',
      longDescription:
        'Engineered a high-converting, responsive landing page equipped with fluid micro-interactions, dark/light theme toggle, custom SVG illustrations, and high-retention feature sections.',
      category: 'Web App',
      tags: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-blue-600/90 via-indigo-600/90 to-purple-700/90',
      image: 'startup',
      metrics: '45% increase in conversion rate',
      features: [
        'Fully responsive across all screen breakpoints',
        'Fluid CSS keyframe motion and scroll transitions',
        'Optimized for 98+ Google Lighthouse performance score',
        'SEO-ready semantic markup and OpenGraph tags',
      ],
      demoUrl: 'https://example.com/startup',
      githubUrl: 'https://github.com/Adityaguptadeveloper',
    },
    {
      id: 'finance-tracker-app',
      title: 'Finance Tracker App',
      description: 'A simple and clean UI for tracking expenses and income.',
      longDescription:
        'A comprehensive personal finance and budget analytics application designed with real-time expense classification, visual spending charts, multi-currency support, and clean glassmorphic dashboards.',
      category: 'Fintech',
      tags: ['React Native', 'Firebase', 'UI/UX'],
      gradient: 'from-sky-500/90 via-cyan-600/90 to-blue-700/90',
      image: 'finance',
      metrics: 'Real-time sync & budget alerts',
      features: [
        'Interactive financial reporting charts and breakdowns',
        'Live transaction ledger with categorisation filters',
        'Instant spending anomaly and budget limit alerts',
        'Local caching for offline data reliability',
      ],
      demoUrl: 'https://example.com/finance',
      githubUrl: 'https://github.com/Adityaguptadeveloper',
    },
    {
      id: 'personal-portfolio-website',
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies.',
      longDescription:
        'An ultra-fast, accessible personal developer portfolio site featuring dark glassmorphism, responsive bento grids, interactive case study viewers, and comprehensive contact integrations.',
      category: 'Portfolio',
      tags: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-neutral-900 via-neutral-800 to-zinc-950',
      image: 'portfolio',
      metrics: '100% responsive and accessible',
      features: [
        'Sleek dark mode with glassmorphic cards and neon accents',
        'Direct multi-channel contact integration (Email, Telegram, Instagram)',
        'Zero-dependency fast client hydration',
        'Modular architecture with central configuration data',
      ],
      demoUrl: 'https://example.com/portfolio',
      githubUrl: 'https://github.com/Adityaguptadeveloper',
    },
    {
      id: 'admin-dashboard',
      title: 'Admin Dashboard',
      description: 'A dashboard UI for managing users, reports and analytics.',
      longDescription:
        'An enterprise-grade administration console featuring modular data tables, role-based access control displays, dynamic KPI metrics, activity timelines, and real-time visualization widgets.',
      category: 'SaaS & Enterprise',
      tags: ['React', 'Tailwind CSS', 'Chart.js'],
      gradient: 'from-slate-900 via-blue-950 to-indigo-950',
      image: 'dashboard',
      metrics: '50k+ daily mock transaction records',
      features: [
        'Dynamic time-series chart analytics with date-range filters',
        'User management table with search, pagination, and status filters',
        'System telemetry and operational health indicators',
        'Export reports to CSV and JSON formats',
      ],
      demoUrl: 'https://example.com/admin',
      githubUrl: 'https://github.com/Adityaguptadeveloper',
    },
  ] as Project[],

  experience: [
    {
      period: '2023 - Present',
      role: 'Full Stack Web Developer',
      company: 'Independent / Digital Solutions',
      description:
        'Architecting and deploying modern web applications, high-performance UI systems, and backend REST APIs for international and domestic clients.',
      highlights: ['React & Node.js ecosystem', 'Modern responsive UI/UX', 'Performance optimization'],
    },
    {
      period: '2021 - 2023',
      role: 'Frontend Developer',
      company: 'Tech Studio',
      description:
        'Built responsive web interfaces, interactive component libraries, and integrated third-party APIs with high fidelity to Figma designs.',
      highlights: ['Tailwind CSS architectures', 'Cross-browser testing', 'State management'],
    },
  ],
};
