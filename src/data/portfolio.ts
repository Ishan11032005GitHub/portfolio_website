export const portfolio = {
  name: "Ishan Tiwari",
  tagline: "AI Full-Stack Developer • Agentic Systems • Product-first Engineering",
  location: "Guwahati, Assam (IIITG)",
  email: "ishan11032005@gmail.com",
  phone: "+91-9038819333",
  links: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    leetcode: "https://leetcode.com/",
  },

  about: [
    "B.Tech CSE @ IIIT Guwahati (2023–2027). I build full-stack products that ship: clean UX, reliable APIs, and measurable performance.",
    "I've worked on an internal reimbursement system with role-based access, normalized SQL design, and approval workflows.",
  ],

  experience: [
    {
      company: "Carrier",
      role: "Tech Intern – Full Stack Developer",
      period: "Dec 2025 – Jan 2026 (Remote)",
      bullets: [
        "Owned end-to-end design + implementation of an internal Reimbursement Management System (Node.js, Express.js, SQL, frontend UI).",
        "Reduced approval workflow steps from 5 → 2 using deterministic state transitions.",
        "Designed and implemented 8+ REST APIs for creation, approvals, and audit-safe status updates.",
        "Built secure auth + 3-role RBAC (employee/manager/admin) with backend validation + centralized error handling.",
      ],
    },
  ],

  projects: [
    {
      name: "EchoAI",
      stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"],
      highlights: [
        "Responsive UI with theme toggle + route protection.",
        "Chatbot + image generation integrations; improved response time ~35–40% with async handling.",
        "Benchmarked 50 concurrent users: 42 req/s, avg latency ~128ms (p95 < 180ms).",
        "Deployed: GitHub Pages (FE) + Railway (BE).",
      ],
      live: "#",
      repo: "#",
    },
    {
      name: "LeetPeek",
      stack: ["Next.js", "React", "Recharts"],
      highlights: [
        "Interactive LeetCode dashboard: breakdowns, heatmap, contest graphs, analytics.",
        "Dual-user comparison with bar-graph benchmarking.",
        "Theme toggle + animated skeleton loaders + responsive components.",
        "Shareable profile cards for LinkedIn.",
      ],
      live: "#",
      repo: "#",
    },
  ],

  skills: {
    Languages: ["Java", "Python", "C", "C++", "JavaScript", "Prolog"],
    "Core CS": ["DSA", "OS", "DBMS", "OOP", "Computer Networks", "Cloud Computing"],
    "ML/NLP": ["NumPy", "Pandas", "Statsmodels", "scikit-learn", "NLTK"],
    Databases: ["MySQL", "MongoDB", "DynamoDB"],
    Web: ["HTML5", "CSS3", "React", "Next.js", "Node.js", "Express", "REST APIs"],
    "Cloud & Tools": ["AWS (S3/EC2/DynamoDB)", "Git", "GitHub", "Jupyter"],
  },

  achievements: [
    "300+ LeetCode problems; Max Rating 1730 (Top 10.95%).",
    "AlgoUniversity ATF 2024 – Stage 2 Candidate.",
    "Completed The Complete Machine Learning Course with Python (Udemy).",
  ],

  leadership: [
    "Technical Team Member – I&E Cell, IIITG (Jan 2024 – Present): Revamped and modernized the website for better accessibility/UX.",
    "Technical Team Member – INIZIO 2025 (Jan 2025 – Mar 2025): Built Sponsors page and mentored juniors.",
  ],
};
