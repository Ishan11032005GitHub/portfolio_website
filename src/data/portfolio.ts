export const portfolio = {
  name: "Ishan Tiwari",
  firstName: "Ishan",
  tagline: "Full-Stack Developer | AI Workflow Systems | CSE @ IIIT Guwahati",
  location: "Guwahati, Assam",
  email: "ishan11032005@gmail.com",
  phone: "+91-9038819333",
  links: {
    linkedin: "https://www.linkedin.com/in/ishan-tiwari-69b5a732a/",
    github: "https://github.com/Ishan11032005GitHub",
    leetcode: "https://leetcode.com/u/Ishan_LeetCode/",
    portfolio: "https://portfolio-website-zeta-nine-56.vercel.app/",
  },

  about:
    "B.Tech Computer Science and Engineering student at IIIT Guwahati (2023 - 2027), building full-stack products and AI-powered workflows with reliable APIs, practical automation, and measurable performance.",

  experience: [
    {
      company: "Carrier",
      role: "Tech Intern - Full Stack Developer",
      period: "Dec 2025 - Jan 2026 | Remote",
      bullets: [
        "Owned the end-to-end design and implementation of an internal Reimbursement Management System using Node.js, Express.js, SQL, and frontend UI, digitizing a previously manual workflow.",
        "Reduced multi-level reimbursement approval steps from 5 to 2 through deterministic state transitions and structured backend logic.",
        "Designed and implemented 8+ RESTful APIs for reimbursement creation, approvals, and audit-safe status updates.",
        "Modeled normalized SQL schemas for reimbursements, users, and approval states to support traceability and data integrity.",
        "Implemented secure authentication and 3-role RBAC (employee, manager, admin) with backend validation and centralized error handling.",
      ],
    },
  ],

  projects: [
    {
      name: "InboxIQ",
      subtitle: "AI Workflow-Based Email Assistant",
      stack: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "scikit-learn", "Gmail API", "OAuth2", "JavaScript"],
      highlights: [
        "Built an AI-powered Gmail workflow assistant for 3k+ real emails, achieving 88.25% classification accuracy across 8 categories.",
        "Integrated Google OAuth2, FastAPI, Gmail API, and deployed frontend/backend architecture using Vercel and Render.",
        "Implemented paginated email ingestion, thread reconstruction, HTML-to-text parsing, and context-aware AI reply generation.",
        "Developed adjustable AI replies, task tracking, contact memory, workflow history, snoozing, and scheduled email pipelines.",
      ],
      live: "https://inbox-iq-v2.vercel.app/",
      repo: "https://github.com/Ishan11032005GitHub/InboxIQ",
    },
    {
      name: "EchoAI",
      subtitle: "Full-Stack AI Assistant",
      stack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      highlights: [
        "Built a responsive AI assistant with chatbot and image generation APIs.",
        "Improved response time by 35-40% using asynchronous request handling.",
        "Load tested with 50 concurrent users: 42 req/s, 128ms average latency, and p95 below 180ms.",
        "Deployed via Vercel for the frontend and Railway for the backend.",
      ],
      live: "https://echo-ai-three.vercel.app/",
      repo: "https://github.com/Ishan11032005GitHub/EchoAI",
    },
  ],

  skills: {
    Languages: ["Java", "Python", "C", "C++", "JavaScript", "Prolog"],
    "Core Computer Science": ["DSA", "OS", "DBMS", "OOP", "Computer Networks", "Cloud Computing"],
    "Web & Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript", "Next.js", "Tailwind CSS"],
    "Backend & APIs": ["FastAPI", "Node.js", "Express.js", "RESTful APIs"],
    "ML / AI / NLP": ["NumPy", "Pandas", "scikit-learn", "NLTK", "Excel", "Feature Engineering", "Google ADK"],
    Systems: ["Authentication", "RBAC", "Workflow Orchestration", "State Management", "API Integration"],
    Databases: ["MySQL", "MongoDB", "DynamoDB", "SQLite"],
    "Cloud & Tools": ["AWS (EC2, S3, DynamoDB)", "Git", "GitHub", "Jupyter Notebook"],
  },

  achievements: [
    "Solved 300+ LeetCode problems; Max Rating 1730 (Top 10.95%).",
    "AlgoUniversity ATF 2024 - Stage 2 Candidate.",
    "Completed The Complete Machine Learning Course with Python (Udemy).",
  ],

  leadership: [
    "Technical Team Member - I&E Cell, IIITG (Jan 2024 - Present): Revamped and modernized the website to improve accessibility and user experience.",
    "Technical Team Member - INIZIO 2025 (Jan 2025 - Mar 2025): Built the Sponsors page and mentored juniors on academic and technical growth.",
  ],
};
