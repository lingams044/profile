// Single source of truth: edit this file to update the whole portfolio.
export const portfolioData = {
  name: "Lingaguru S",
  role: "Final-Year CSE Student | Software Developer",
  tagline: "I build web applications and software projects, with a growing interest in secure software and machine learning.",
  email: "lingaguru232@gmail.com",
  github: "https://github.com/lingams044",
  linkedin: "https://www.linkedin.com/in/lingaguru-s-606405386",
  resume: "resume.pdf", // file lives in /public/resume.pdf
  about: {
    intro: "Final-year Computer Science student with a strong interest in software development and web technologies. I enjoy solving programming problems, building web applications, and learning new technologies through hands-on projects.",
    interests: ["Web Development", "Networking", "Secure Software Development", "Machine Learning"],
    goals: "Looking for an opportunity to apply my technical skills, improve as a developer, and contribute to real-world software projects.",
    strengths: ["Teamwork", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"],
    languages: ["Tamil", "English"],
  },
  skills: [
    { category: "Programming", items: ["Java", "C", "Python", "SQL"] },
    { category: "Web", items: ["HTML", "CSS", "JavaScript", "Node.js", "Flask"] },
    { category: "Database", items: ["MySQL"] },
    { category: "Security & Networking", items: ["Nmap", "Wireshark", "Ethical Hacking (Basics)"] },
    { category: "Tools & OS", items: ["Git", "GitHub", "VS Code", "VirtualBox", "Windows", "Linux"] },
  ],
  projects: [
    {
      name: "Online Examination Portal", year: "2024", org: "Mepco Schlenk Engineering College", featured: true,
      description: "A secure online examination portal with remote proctoring, automated grading and performance analytics for diverse question types.",
      features: ["Remote proctoring", "Automated grading", "Performance analytics", "Support for diverse question types"],
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      role: "", github: "https://github.com/lingams044", demo: "",
    },
    {
      name: "Regional Beverage Dispatch and Inventory System", year: "2025", org: "Mepco Schlenk Engineering College", featured: false,
      description: "A real-time beverage dispatch and inventory system with predictive analytics, aimed at reducing wastage and optimizing stock levels for regional distributors.",
      features: ["Real-time dispatch tracking", "Predictive analytics", "Inventory and stock-level optimization"],
      tech: ["Python", "Flask", "MySQL"],
      role: "", github: "https://github.com/lingams044", demo: "",
    },
    {
      name: "Evaluating Weather Forecasting Explainability (REXQUAL)", year: "2026", org: "Mepco Schlenk Engineering College", featured: false,
      description: "An evaluation framework for assessing the explainability of machine-learning and deep-learning weather forecasting models using an Association Rule-based metric (REXQUAL).",
      features: ["Explainability evaluation framework", "Association rule-based REXQUAL metric", "Analysis of large-scale time series data"],
      tech: ["Machine Learning", "Deep Learning", "Association Rules"],
      role: "", github: "https://github.com/lingams044", demo: "",
    },
  ],
  education: [
    { title: "B.E. Computer Science and Engineering", place: "Mepco Schlenk Engineering College, Sivakasi", period: "2023 – 2027", detail: "CGPA: 7.7" },
    { title: "Higher Secondary Certificate", place: "GHSS, Pullukkatuvalasai, Tenkasi", period: "2022 – 2023", detail: "Percentage: 86" },
  ],
  certifications: [
    "Cisco Networking Academy – Introduction to Cybersecurity (2025)",
    "Building Scalable Full Stack Application Using Cloud (2025)",
    "NPTEL – Practical Cyber Security for Cyber Security Practitioners (2025)",
    "IEEE – English for Technical Professionals (2024)",
  ],
  activities: [
    "Participant – AI Conclave on “Empowering Future Engineers with AI Technologies”, Mepco Schlenk Engineering College (2025)",
    "Participated in Science Quiz Competition on National Science Day, Mepco Schlenk Engineering College (2024)",
  ],
}
export type Project = (typeof portfolioData.projects)[number]
