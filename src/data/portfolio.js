import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export const profile = {
  name: "Rehat Islam",
  designation: "Full Stack Developer",
  roles: ["Full Stack Developer", "Next.js Developer", "UI Enthusiast"],
  tagline:
    "I build fast, accessible and beautifully animated web experiences with React, Tailwind CSS and GSAP.",
  photo: "/profile.jpeg",
  resume: "/resume.pdf", // put your resume.pdf inside the /public folder
  email: "additislam@gmail.com",
  phone: "+880 1956416559",
  whatsapp: "8801956416559", // country code + number, no "+" or spaces
};

export const socials = [
  { name: "GitHub", url: "https://github.com/your-username", icon: FaGithub },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username", icon: FaLinkedin },
  { name: "Twitter", url: "https://twitter.com/your-username", icon: FaTwitter },
  { name: "Facebook", url: "https://facebook.com/your-username", icon: FaFacebook },
];

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const about = {
  paragraphs: [
    "Hi! I'm a passionate web developer who fell in love with programming the first time I made a button change colour on a web page. That tiny moment of cause and effect hooked me, and I've been learning and building ever since.",
    "My journey started with HTML, CSS and JavaScript, then grew into React, REST APIs and modern tooling. I enjoy turning ideas and designs into polished, responsive interfaces, and I especially love adding thoughtful motion that makes an app feel alive.",
    "I enjoy work that mixes problem solving with creativity: component architecture, performance tuning, and crafting small details like micro-interactions. I'm always curious, always learning, and I like working with people who care about quality.",
  ],
  hobbies: [
    { emoji: "⚽", label: "Football" },
    { emoji: "🎨", label: "Sketching" },
    { emoji: "📚", label: "Reading" },
    { emoji: "🎧", label: "Music" },
    { emoji: "✈️", label: "Travelling" },
  ],
  traits: ["Curious", "Detail-oriented", "Team player", "Fast learner"],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "GSAP", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 68 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Vite / npm", level: 85 },
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Green University Bangladesh",
    period: "2025 - present ",
    detail:
      "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Technologies, Software Engineering.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Scholastica Model Collage",
    period: "2023 – 2025",
    detail: "Science group. GPA: 4.25 / 5.00.",
  },
];

export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Company Name",
    period: "Jun 2025 – Dec 2025",
    points: [
      "Built reusable React components and responsive pages with Tailwind CSS.",
      "Integrated REST APIs and improved page load time by 30%.",
      "Collaborated with designers and backend developers in an agile team.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2024 – Present",
    points: [
      "Delivered landing pages and small business websites for local clients.",
      "Added GSAP scroll animations to boost engagement and polish.",
    ],
  },
];

export const projects = [
  {
    slug: "shopease-ecommerce",
    name: "ShopEase – E-commerce App",
    image: "/projects/shopease.svg",
    short: "A modern online store with cart, filters and secure checkout.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    description:
      "ShopEase is a full-stack e-commerce web app where users can browse products, filter by category and price, manage a cart and place orders. Admins can add and edit products from a dashboard.",
    live: "https://example.com/shopease",
    github: "https://github.com/your-username/shopease-client",
    challenges: [
      "Keeping cart state in sync between the UI and the server.",
      "Designing a filter system that stays fast with many products.",
      "Handling secure authentication with JWT and protected routes.",
    ],
    future: [
      "Integrate a real payment gateway.",
      "Add product reviews and wishlists.",
      "Server-side rendering for better SEO.",
    ],
  },
  {
    slug: "taskflow-manager",
    name: "TaskFlow – Task Manager",
    image: "/projects/taskflow.svg",
    short: "Drag-and-drop kanban board to plan and track daily work.",
    stack: ["React", "Firebase", "Tailwind CSS", "GSAP"],
    description:
      "TaskFlow is a kanban-style productivity app with drag-and-drop columns, due dates and real-time sync across devices. GSAP powers the smooth card and modal animations.",
    live: "https://example.com/taskflow",
    github: "https://github.com/your-username/taskflow-client",
    challenges: [
      "Implementing smooth drag-and-drop with accessible keyboard support.",
      "Real-time updates without causing unnecessary re-renders.",
      "Coordinating GSAP animations with React's lifecycle.",
    ],
    future: [
      "Team workspaces and role-based permissions.",
      "Calendar view and email reminders.",
      "Offline support with a PWA.",
    ],
  },
  {
    slug: "weatherly-dashboard",
    name: "Weatherly – Weather Dashboard",
    image: "/projects/weatherly.svg",
    short: "Live weather, 7-day forecast and charts for any city.",
    stack: ["React", "Tailwind CSS", "OpenWeather API", "Chart.js"],
    description:
      "Weatherly lets users search any city and see current conditions, an hourly timeline and a 7-day forecast with clean charts. It remembers favourite cities and supports light/dark themes.",
    live: "https://example.com/weatherly",
    github: "https://github.com/your-username/weatherly-client",
    challenges: [
      "Handling API rate limits and caching responses.",
      "Creating a layout that stays readable on small screens.",
      "Normalising inconsistent data returned from the API.",
    ],
    future: [
      "Weather alerts and push notifications.",
      "Location detection with the Geolocation API.",
      "Multi-language support.",
    ],
  },
];
