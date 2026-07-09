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
      company: "Stealth Startup",
      role: "AI & Backend Engineering Intern",
      period: "Jun 2026 - Present | Remote",
      bullets: [
        "Working with the founding team to build an AI-powered emotional wellness platform, expanding the existing product across backend systems, AI infrastructure, authentication, and user workflows.",
        "Engineered the AI companion backend using Node.js, Express.js, TypeScript, Supabase, Drizzle ORM, and Gemini 2.5 Flash, delivering persistent conversational experiences with secure session management.",
        "Built 15+ backend APIs for AI chat, journals, memory, daily wellness tracking, onboarding, listeners, circles, and profile services while integrating authenticated frontend-backend communication.",
        "Designed scalable data persistence, migration workflows, encrypted AI chat storage, guest continuity, and resilient backend architecture with graceful degradation during infrastructure failures.",
        "Improved platform reliability by integrating AI safety checks, crisis detection, dashboard functionality, authentication flows, search, notifications, and production-ready full-stack integrations for the MVP launch.",
      ],
    },
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
    {
      name: "DealFlow",
      subtitle: "VC Deal Intake and Review System",
      stack: ["React.js", "Node.js", "Express.js", "REST APIs", "SQLite", "API Integration", "JWT", "Gemini API"],
      highlights: [
        "Built a VC deal intake and review system with public submissions, secure admin workflows, status tracking, and AI-generated pitch summaries.",
        "Built public submission flows and authenticated admin review with status tracking and internal notes.",
        "Designed JWT-secured REST APIs with rate limiting, handling 30+ concurrent requests reliably.",
        "Integrated the Gemini API to auto-generate structured pitch summaries, reducing manual review effort by ~40%.",
        "Validated performance under sustained load, achieving p95 latency below 1.6s.",
      ],
    },
    {
      name: "EchoAI",
      subtitle: "End-to-End AI Assistant Platform",
      stack: ["HTML", "CSS", "JavaScript", "REST APIs", "Node.js", "Express.js", "MongoDB", "API Integration"],
      highlights: [
        "Built an end-to-end AI assistant platform combining secure user flows, asynchronous AI services, and measurable performance at scale.",
        "Integrated chatbot and image generation services with async request handling, improving response time by ~35-40%.",
        "Benchmarked 50 concurrent users at 42 requests per second with ~128ms average latency and p95 below 180ms.",
        "Deployed the frontend on GitHub Pages and the backend on Railway.",
      ],
    },
    {
      name: "TweetMood",
      subtitle: "Real-Time NLP Sentiment Analyzer",
      stack: ["Python", "Machine Learning", "scikit-learn", "NLP", "NLTK", "Streamlit Cloud"],
      highlights: [
        "Built a real-time NLP system that turns live text into actionable sentiment signals with optimized inference and proven concurrent-load performance.",
        "Built and deployed a web app for real-time sentiment prediction using a Logistic Regression model trained on 1.6M tweets, achieving 82% accuracy.",
        "Benchmarked 50 concurrent users over 30s with 69 requests per second, 0% failures, ~416ms average latency, and p95 below 470ms.",
        "Optimized the model inference pipeline for faster response times and deployed via Streamlit Cloud.",
      ],
    },
    {
      name: "LeetPeek",
      subtitle: "Interactive LeetCode Analytics Dashboard",
      stack: ["React.js", "Application Programming Interfaces (API)", "Chart.js", "Recharts", "Next.js"],
      highlights: [
        "Built an interactive LeetCode dashboard with problem breakdowns, submission heatmaps, contest graphs, and analytics.",
        "Added dual-user comparison with bar-graph benchmarking.",
        "Implemented theme toggle, animated skeleton loaders, and responsive components.",
        "Created shareable profile cards optimized for LinkedIn.",
      ],
    },
  ],

  skills: {
    Languages: ["Java", "Python", "C", "C++", "JavaScript", "Prolog"],
    "Core Computer Science": ["DSA", "OS", "DBMS", "OOP", "Computer Networks", "Cloud Computing"],
    "Web & Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript", "Next.js", "Tailwind CSS"],
    "Backend & APIs": ["FastAPI", "Node.js", "Express.js", "RESTful APIs"],
    "ML / AI / NLP": ["NumPy", "Pandas", "scikit-learn", "NLTK", "PyTorch", "Feature Engineering", "LangChain", "LangGraph", "Google ADK"],
    Systems: ["Authentication", "RBAC", "Workflow Orchestration", "State Management", "API Integration", "AI Memory/Continuity", "Safety & Crisis Detection"],
    Databases: ["MySQL", "MongoDB", "DynamoDB", "SQLite", "Supabase"],
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
