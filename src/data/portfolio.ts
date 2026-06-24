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
      subtitle: "Machine Learning-Powered Email Intelligence Platform",
      stack: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "scikit-learn", "Gmail API", "OAuth2", "JavaScript", "Vercel", "Render"],
      highlights: [
        "Built an AI-powered Gmail workflow assistant for 3k+ real emails using TF-IDF and Logistic Regression, achieving 88.25% accuracy across 8 categories.",
        "Engineered full-stack infrastructure with Google OAuth2, FastAPI, Gmail API, and frontend/backend deployments using Vercel and Render.",
        "Implemented scalable email ingestion with API pagination, thread reconstruction, HTML-to-text parsing, and context-aware AI reply generation.",
        "Built persistent workflow state management with SQLite and SQLAlchemy, including refresh-safe synchronization and duplicate prevention.",
        "Improved classification of ambiguous work and general emails through confusion-matrix analysis, feature engineering, and hybrid rule-based optimization.",
      ],
      live: "https://inbox-iq-v2.vercel.app/",
      repo: "https://github.com/Ishan11032005GitHub/InboxIQ-v2",
    },
    {
      name: "InsightFlow",
      subtitle: "AI Analytics & Report Generation Platform",
      stack: ["React", "Flask", "MongoDB", "Sentence Transformers", "FAISS", "Qdrant", "Pandas", "NumPy", "JWT", "Gemini API", "Grok API"],
      highlights: [
        "Built an AI analytics platform that transforms PDFs, CSVs, and Excel datasets into conversational insights, reports, and interactive visualizations.",
        "Engineered hybrid retrieval using browser-side TF-IDF and semantic search with Sentence Transformers, FAISS, and Qdrant.",
        "Developed automated workflows for report generation, dataset summarization, chart creation, and AI-powered insight extraction.",
        "Processed datasets with 10,000+ records and built a dual-RAG pipeline supporting retrieval across 5,000+ document chunks.",
        "Architected a microservices-based system integrating 10+ libraries and frameworks across frontend, backend, retrieval, and AI orchestration layers.",
      ],
      live: "https://insight-flow-flame-three.vercel.app/",
      repo: "https://github.com/Ishan11032005GitHub/InsightFlow",
    },
  ],

  skills: {
    Languages: ["Java", "Python", "C", "C++", "JavaScript", "Prolog"],
    "Core Computer Science": ["DSA", "OS", "DBMS", "OOP", "Computer Networks", "Cloud Computing"],
    "Web & Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript", "Next.js", "Tailwind CSS"],
    "Backend & APIs": ["FastAPI", "Node.js", "Express.js", "RESTful APIs"],
    "ML / AI / NLP": ["NumPy", "Pandas", "scikit-learn", "NLTK", "PyTorch", "Feature Engineering", "LangChain", "LangGraph", "Google ADK"],
    Systems: ["Authentication", "RBAC", "Workflow Orchestration", "State Management", "API Integration"],
    Databases: ["MySQL", "MongoDB", "DynamoDB", "SQLite"],
    "Cloud & Tools": ["AWS (EC2, S3, DynamoDB)", "Git", "GitHub", "Jupyter Notebook"],
  },

  achievements: [
    "HackWithInfy '26 - Round 1 Qualifier.",
    "Solved 300+ LeetCode problems; Max Rating 1730 (Top 10.95%).",
    "AlgoUniversity ATP 2024 - Stage 2 Candidate.",
  ],

  leadership: [
    "Technical Team Member - I&E Cell, IIITG (Jan 2024 - Present): Revamped and modernized the website to improve accessibility and user experience.",
    "Technical Team Member - INIZIO 2025 (Jan 2025 - Mar 2025): Built the Sponsors page and mentored juniors on academic and technical growth.",
  ],
};
