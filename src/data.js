// Vite serves the app under a sub-path in production (see vite.config.js "base").
// Plain "/images/..." strings don't get that prefix automatically, so this
// helper builds correct paths for both `npm run dev` and the deployed site.
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const profile = {
  name: "Ravi Singh",
  role: "Software Engineer",
  company: "Virtusa Consulting Services",
  location: "India",
  email: "ravisinghrajputana9@gmail.com",
  phone: "+91-6202480403",
  avatar: asset("/images/avatar-placeholder.png"),
  tagline:
    "Backend systems that scale. APIs that don't break. Problems that don't come back.",
  summary:
    "Software Engineer with 2+ years building enterprise-scale applications in Java, Spring Boot, REST APIs, PostgreSQL, AWS and React.js. Focused on backend systems, microservices, and cloud deployment for banking platforms. Google Cloud certified, 1200+ LeetCode problems solved, and building AI-powered tools on top of the Gemini API.",
  resumeUrl: "https://drive.google.com/file/d/1E-vnTLwfbGP6U3hlZOCQuXulwYvNafIU/view?usp=sharing",
  resumePreviewUrl: "https://drive.google.com/file/d/1E-vnTLwfbGP6U3hlZOCQuXulwYvNafIU/preview",
  githubUsername: "SigmaRajput",
  leetcodeUsername: "Sigma-lord",
  githubStatsImg: asset("/images/github-stats.png"),
  githubLangsImg: asset("/images/github-langs.png"),
};

export const featuredSkills = [
  "Java",
  "Spring Boot",
  "AWS",
  "React.js",
  "PostgreSQL",
  "REST APIs",
];

export const tickerStats = [
  "2+ years experience",
  "1200+ LeetCode solved",
  "1000+ day streak",
  "20+ APIs in production",
  "30% query time cut",
  "Google Cloud certified",
];

export const socials = [
  { label: "github", href: "https://github.com/SigmaRajput" },
  { label: "linkedin", href: "https://www.linkedin.com/in/ravi-singh-2799b9156" },
  { label: "leetcode", href: "https://leetcode.com/" },
  { label: "twitter", href: "https://twitter.com/Singh__ji__" },
  { label: "stackoverflow", href: "https://stackoverflow.com/users/16566598/ravi-singh" },
  { label: "mail", href: "mailto:ravisinghrajputana9@gmail.com" },
];

export const skillGroups = [
  {
    dir: "languages/",
    items: ["Java", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    dir: "frontend/",
    items: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    dir: "backend/",
    items: ["Spring Boot", "Node.js", "REST APIs", "Microservices"],
  },
  {
    dir: "cloud-devops/",
    items: ["AWS EC2", "AWS S3", "DynamoDB", "Docker", "CI/CD"],
  },
  {
    dir: "databases/",
    items: ["PostgreSQL", "DynamoDB"],
  },
  {
    dir: "qa-testing/",
    items: ["Manual Testing", "Selenium WebDriver", "API Testing", "Regression Testing"],
  },
  {
    dir: "tools/",
    items: ["Git", "GitHub", "Postman", "Jira", "Confluence"],
  },
];

export const experience = [
  {
    hash: "a3f9c1e",
    role: "Software Engineer",
    org: "Virtusa Consulting Services",
    period: "Jan 2026 — Present",
    bullets: [
      "Developing and maintaining scalable backend applications using Java, Spring Boot, REST APIs and microservices architecture for enterprise banking solutions.",
      "Designing and maintaining 20+ RESTful APIs supporting enterprise banking workflows and system integrations.",
      "Optimized PostgreSQL queries and indexing strategies, cutting query execution time by 30%.",
      "Using AWS EC2, S3 and DynamoDB for cloud deployment, storage management and production support.",
      "Working cross-functionally in an Agile/Scrum environment to ship releases and resolve production issues.",
    ],
  },
  {
    hash: "7d2b4a0",
    role: "QA Engineer — Client: JPMC (Investment Banking)",
    org: "Virtusa Consulting Services",
    period: "Jan 2024 — Dec 2025",
    bullets: [
      "Worked on the AWS Migration Project moving JPM and Chase investment banking services from on-prem to AWS Cloud.",
      "Ran manual, functional and API testing (Postman) to validate system stability and financial data integrity during migration.",
      "Designed and executed test plans and regression suites across critical banking modules for compliance and accuracy.",
      "Partnered with developers to troubleshoot defects using SQL queries, logs and API responses.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Lovely Professional University, Phagwara, Punjab",
    period: "2019 — 2023",
    note: "CGPA: 8.0",
  },
  {
    degree: "Intermediate, Science (CBSE)",
    school: "Surendranath Centenary School, Ranchi, Jharkhand",
    period: "2017 — 2018",
    note: "82%",
  },
];

export const achievements = [
  { value: "1200+", label: "LeetCode problems solved" },
  { value: "1000+", label: "day LeetCode streak" },
  { value: "20+", label: "REST APIs shipped in production" },
  { value: "30%", label: "query time reduction (PostgreSQL)" },
];

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "AWS", file: "aws-cloud-practitioner.pdf" },
  { name: "ISTQB Foundation Level", issuer: "ISTQB", file: "istqb-foundation.pdf" },
  { name: "Associate Cloud Engineer", issuer: "Google Cloud", file: "gcp-ace.pdf" },
  { name: "Professional Data Engineer", issuer: "Google Cloud", file: "gcp-data-engineer.pdf" },
  { name: "Data Structures & Algorithms", issuer: "GeeksforGeeks", file: "dsa-gfg.pdf" },
  { name: "Generative AI L400", issuer: "Google Cloud", file: "genai-l400.pdf" },
];

export const projects = [
  {
    slot: "full-stack-cloud-app",
    title: "Full-Stack Cloud Application",
    tag: "full-stack",
    stack: ["React.js", "JavaScript", "REST APIs", "AWS EC2", "DynamoDB"],
    bullets: [
      "Responsive full-stack web app with reusable UI components and dynamic data rendering.",
      "Frontend integrated with backend services through secure REST API communication.",
      "Deployed on AWS EC2 with DynamoDB for scalable cloud-based data storage and retrieval.",
      "Implemented CRUD operations and optimized performance for production deployment.",
    ],
    image: asset("/images/project-cloud-app.png"),
  },
  {
    slot: "ai-document-analytics",
    title: "AI-Powered Document Analytics Platform",
    tag: "ai / ml",
    stack: ["Python", "Flask", "SQL", "Google Gemini API"],
    bullets: [
      "AI-powered document processing platform for ingestion, storage, retrieval and analytics.",
      "Integrated Google Gemini API for contextual question answering and intelligent document search.",
      "Database-backed storage for efficient document management and query processing.",
      "RESTful endpoints supporting scalable document analytics and AI-assisted information retrieval.",
    ],
    image: asset("/images/project-ai-docs.png"),
  },
  {
    slot: "project-03",
    status: "draft",
    image: asset("/images/project-placeholder.svg"),
  },
];
