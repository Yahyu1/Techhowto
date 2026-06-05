import type { Roadmap } from "@/types";

export const roadmaps: Roadmap[] = [
  {
    id: "frontend-developer",
    slug: "frontend-developer",
    title: "Frontend Developer",
    description:
      "Learn to build fast, accessible, and responsive web interfaces with modern JavaScript frameworks and strong UI engineering practices.",
    duration: "8-10 months",
    level: "Beginner",
    skills: [
      "HTML5 semantics",
      "Modern CSS and layouts",
      "JavaScript fundamentals",
      "TypeScript for UI development",
      "React component architecture",
      "State management patterns",
      "Accessibility (WCAG basics)",
      "Performance optimization",
      "Testing frontend applications",
      "API integration patterns",
    ],
    tools: [
      "VS Code",
      "Git and GitHub",
      "Chrome DevTools",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "Jest",
      "Playwright",
    ],
    projects: [
      {
        title: "Responsive Portfolio Site",
        description:
          "Build a multi-page portfolio with reusable components, dark mode, and SEO-friendly metadata.",
      },
      {
        title: "E-commerce Product Listing UI",
        description:
          "Create a product catalog with filtering, sorting, pagination, and mobile-first layouts.",
      },
      {
        title: "SaaS Dashboard",
        description:
          "Implement authenticated routes, charts, and settings pages with accessible form workflows.",
      },
    ],
    phases: [
      {
        title: "Web Foundations",
        duration: "6 weeks",
        topics: [
          "HTML structure",
          "CSS box model",
          "Flexbox and Grid",
          "Responsive design",
          "Basic JavaScript",
        ],
      },
      {
        title: "Modern Frontend Development",
        duration: "8 weeks",
        topics: [
          "ES6+ syntax",
          "TypeScript basics",
          "React fundamentals",
          "Hooks",
          "Routing",
        ],
      },
      {
        title: "Production UI Engineering",
        duration: "10 weeks",
        topics: [
          "Next.js app router",
          "Data fetching",
          "UI state management",
          "Accessibility testing",
          "Performance budgets",
        ],
      },
      {
        title: "Testing and Deployment",
        duration: "6 weeks",
        topics: [
          "Unit tests",
          "Component tests",
          "End-to-end tests",
          "CI workflows",
          "Vercel deployment",
        ],
      },
    ],
    resources: [
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        type: "Documentation",
      },
      {
        title: "React Documentation",
        url: "https://react.dev/",
        type: "Documentation",
      },
      {
        title: "Next.js Learn",
        url: "https://nextjs.org/learn",
        type: "Course",
      },
      {
        title: "web.dev Learn Performance",
        url: "https://web.dev/learn/performance/",
        type: "Guide",
      },
    ],
  },
  {
    id: "backend-developer",
    slug: "backend-developer",
    title: "Backend Developer",
    description:
      "Master server-side development, database design, APIs, and system reliability for scalable web services.",
    duration: "9-12 months",
    level: "Beginner",
    skills: [
      "Programming fundamentals",
      "REST API design",
      "Authentication and authorization",
      "Database schema design",
      "SQL query optimization",
      "Caching strategies",
      "Message queues",
      "System design basics",
      "Observability and logging",
      "Security best practices",
    ],
    tools: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Postman",
      "Prisma",
      "GitHub Actions",
    ],
    projects: [
      {
        title: "Task Management API",
        description:
          "Design a multi-user task API with role-based access, pagination, and robust validation.",
      },
      {
        title: "Authentication Service",
        description:
          "Build a secure auth service with JWT, refresh tokens, password reset, and email verification.",
      },
      {
        title: "Order Processing System",
        description:
          "Implement asynchronous order workflows with retries, idempotency keys, and webhook handling.",
      },
    ],
    phases: [
      {
        title: "Programming and HTTP Basics",
        duration: "6 weeks",
        topics: [
          "Server architecture",
          "HTTP methods",
          "JSON and serialization",
          "Error handling",
          "Input validation",
        ],
      },
      {
        title: "Databases and Data Modeling",
        duration: "8 weeks",
        topics: [
          "Relational databases",
          "Indexes",
          "Transactions",
          "ORM usage",
          "Query performance",
        ],
      },
      {
        title: "Scalable Backend Patterns",
        duration: "10 weeks",
        topics: [
          "Caching with Redis",
          "Background jobs",
          "Queue processing",
          "Rate limiting",
          "Service decomposition",
        ],
      },
      {
        title: "Testing and Operations",
        duration: "6 weeks",
        topics: [
          "Integration testing",
          "API contract testing",
          "Containerization",
          "CI/CD pipelines",
          "Monitoring and alerts",
        ],
      },
    ],
    resources: [
      {
        title: "Node.js Documentation",
        url: "https://nodejs.org/en/docs",
        type: "Documentation",
      },
      {
        title: "PostgreSQL Documentation",
        url: "https://www.postgresql.org/docs/",
        type: "Documentation",
      },
      {
        title: "Designing Data-Intensive Applications",
        url: "https://dataintensive.net/",
        type: "Book",
      },
      {
        title: "OWASP Top Ten",
        url: "https://owasp.org/www-project-top-ten/",
        type: "Security Guide",
      },
    ],
  },
  {
    id: "full-stack-developer",
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    description:
      "Develop end-to-end products by combining frontend craftsmanship, backend engineering, and deployment skills.",
    duration: "10-14 months",
    level: "Intermediate",
    skills: [
      "Frontend architecture",
      "Backend API design",
      "Database integration",
      "Authentication flows",
      "State synchronization",
      "Testing strategy",
      "CI/CD fundamentals",
      "Cloud deployment basics",
      "Performance tuning",
      "System debugging",
    ],
    tools: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Sentry",
    ],
    projects: [
      {
        title: "Project Collaboration Platform",
        description:
          "Build a full-stack app with teams, workspaces, comments, and real-time activity feeds.",
      },
      {
        title: "Subscription Billing Portal",
        description:
          "Implement plans, checkout, invoices, and account management with secure backend integrations.",
      },
      {
        title: "Content Management System",
        description:
          "Create an editorial dashboard and public site with drafts, publishing workflow, and search.",
      },
    ],
    phases: [
      {
        title: "Web and API Foundations",
        duration: "8 weeks",
        topics: [
          "HTML/CSS/JS refresh",
          "REST APIs",
          "Auth basics",
          "SQL essentials",
          "Git workflow",
        ],
      },
      {
        title: "Building Full-Stack Features",
        duration: "10 weeks",
        topics: [
          "Next.js server and client components",
          "Database models",
          "CRUD APIs",
          "Form handling",
          "Role-based access",
        ],
      },
      {
        title: "Reliability and Scalability",
        duration: "8 weeks",
        topics: [
          "Caching and pagination",
          "Background processing",
          "Observability",
          "Error budgets",
          "Performance audits",
        ],
      },
      {
        title: "Production Delivery",
        duration: "6 weeks",
        topics: [
          "Automated testing",
          "CI/CD release flow",
          "Containerized deployments",
          "Incident handling",
          "Post-release monitoring",
        ],
      },
    ],
    resources: [
      {
        title: "Next.js Documentation",
        url: "https://nextjs.org/docs",
        type: "Documentation",
      },
      {
        title: "Prisma Guides",
        url: "https://www.prisma.io/docs/guides",
        type: "Guide",
      },
      {
        title: "The Twelve-Factor App",
        url: "https://12factor.net/",
        type: "Architecture Guide",
      },
      {
        title: "Full Stack Open",
        url: "https://fullstackopen.com/en/",
        type: "Course",
      },
    ],
  },
  {
    id: "devops-engineer",
    slug: "devops-engineer",
    title: "DevOps Engineer",
    description:
      "Learn automation, infrastructure, and delivery pipelines to build reliable systems and high-velocity engineering workflows.",
    duration: "9-12 months",
    level: "Intermediate",
    skills: [
      "Linux administration",
      "Infrastructure as Code",
      "CI/CD pipeline design",
      "Container orchestration",
      "Monitoring and alerting",
      "Incident response",
      "Release engineering",
      "Cloud networking basics",
      "Configuration management",
      "Cost optimization",
    ],
    tools: [
      "Linux",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    projects: [
      {
        title: "Automated Deployment Pipeline",
        description:
          "Create CI/CD workflows with testing, artifact publishing, and staged deployments.",
      },
      {
        title: "Kubernetes Service Platform",
        description:
          "Deploy and scale a multi-service app with ingress, autoscaling, and rolling updates.",
      },
      {
        title: "Observability Stack",
        description:
          "Set up metrics, logs, tracing, and alert routing for production-grade monitoring.",
      },
    ],
    phases: [
      {
        title: "Infrastructure Fundamentals",
        duration: "6 weeks",
        topics: [
          "Linux CLI",
          "Networking basics",
          "Shell scripting",
          "Process management",
          "Security hardening",
        ],
      },
      {
        title: "Containers and Orchestration",
        duration: "8 weeks",
        topics: [
          "Docker images",
          "Container networking",
          "Kubernetes objects",
          "Helm basics",
          "Service discovery",
        ],
      },
      {
        title: "Infrastructure Automation",
        duration: "8 weeks",
        topics: [
          "Terraform modules",
          "State management",
          "Provisioning workflows",
          "Configuration management",
          "Environment promotion",
        ],
      },
      {
        title: "Operations Excellence",
        duration: "8 weeks",
        topics: [
          "SLOs and SLIs",
          "Incident management",
          "Postmortems",
          "Chaos testing",
          "Capacity planning",
        ],
      },
    ],
    resources: [
      {
        title: "Kubernetes Documentation",
        url: "https://kubernetes.io/docs/",
        type: "Documentation",
      },
      {
        title: "Terraform Documentation",
        url: "https://developer.hashicorp.com/terraform/docs",
        type: "Documentation",
      },
      {
        title: "Google SRE Book",
        url: "https://sre.google/sre-book/table-of-contents/",
        type: "Book",
      },
      {
        title: "The DevOps Handbook",
        url: "https://itrevolution.com/product/the-devops-handbook-second-edition/",
        type: "Book",
      },
    ],
  },
  {
    id: "cloud-engineer",
    slug: "cloud-engineer",
    title: "Cloud Engineer",
    description:
      "Build expertise in cloud architecture, managed services, security, and operations across modern cloud platforms.",
    duration: "8-11 months",
    level: "Intermediate",
    skills: [
      "Cloud architecture principles",
      "Identity and access management",
      "Virtual networking",
      "Compute and storage services",
      "Serverless design",
      "Cloud security controls",
      "Cost and billing analysis",
      "Disaster recovery planning",
      "Infrastructure automation",
      "Cloud observability",
    ],
    tools: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Terraform",
      "CloudFormation",
      "Docker",
      "Kubernetes",
      "CloudWatch",
    ],
    projects: [
      {
        title: "Multi-Tier Cloud Application",
        description:
          "Deploy a web app with load balancing, managed database, and private networking.",
      },
      {
        title: "Serverless Event Processor",
        description:
          "Build an event-driven pipeline with cloud functions, queues, and storage triggers.",
      },
      {
        title: "Disaster Recovery Drill",
        description:
          "Design backup and failover workflows with recovery runbooks and validation tests.",
      },
    ],
    phases: [
      {
        title: "Cloud Core Concepts",
        duration: "6 weeks",
        topics: [
          "Shared responsibility model",
          "Regions and availability zones",
          "IAM basics",
          "Networking primitives",
          "Managed databases",
        ],
      },
      {
        title: "Building in the Cloud",
        duration: "8 weeks",
        topics: [
          "Compute services",
          "Object and block storage",
          "Serverless architecture",
          "CDN and edge delivery",
          "Secrets management",
        ],
      },
      {
        title: "Automation and Security",
        duration: "8 weeks",
        topics: [
          "Infrastructure as Code",
          "Policy as code",
          "Network segmentation",
          "Audit logging",
          "Vulnerability management",
        ],
      },
      {
        title: "Operations and Optimization",
        duration: "6 weeks",
        topics: [
          "Monitoring and alerting",
          "Cost optimization",
          "Capacity planning",
          "Backup strategies",
          "Recovery objectives",
        ],
      },
    ],
    resources: [
      {
        title: "AWS Well-Architected Framework",
        url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
        type: "Framework",
      },
      {
        title: "Microsoft Azure Architecture Center",
        url: "https://learn.microsoft.com/azure/architecture/",
        type: "Documentation",
      },
      {
        title: "Google Cloud Architecture Framework",
        url: "https://cloud.google.com/architecture/framework",
        type: "Framework",
      },
      {
        title: "Cloud Native Landscape",
        url: "https://landscape.cncf.io/",
        type: "Reference",
      },
    ],
  },
  {
    id: "ai-engineer",
    slug: "ai-engineer",
    title: "AI Engineer",
    description:
      "Develop practical AI systems by combining machine learning foundations, model development, and production deployment practices.",
    duration: "10-14 months",
    level: "Intermediate",
    skills: [
      "Python for machine learning",
      "Data preprocessing",
      "Supervised learning",
      "Deep learning fundamentals",
      "Model evaluation",
      "Prompt engineering",
      "LLM application design",
      "MLOps workflows",
      "Experiment tracking",
      "Responsible AI practices",
    ],
    tools: [
      "Python",
      "NumPy",
      "Pandas",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Jupyter",
      "MLflow",
    ],
    projects: [
      {
        title: "Customer Support Intent Classifier",
        description:
          "Train and evaluate a text classification model with clear metrics and error analysis.",
      },
      {
        title: "Retrieval-Augmented Q&A Assistant",
        description:
          "Build an LLM-powered assistant using vector search, prompt templates, and grounding.",
      },
      {
        title: "Model Monitoring Dashboard",
        description:
          "Track model drift, latency, and prediction quality to support production reliability.",
      },
    ],
    phases: [
      {
        title: "ML and Data Foundations",
        duration: "8 weeks",
        topics: [
          "Python data stack",
          "Feature engineering",
          "Train/validation/test split",
          "Bias and variance",
          "Baseline models",
        ],
      },
      {
        title: "Deep Learning and NLP",
        duration: "10 weeks",
        topics: [
          "Neural networks",
          "Optimization and regularization",
          "Embeddings",
          "Transformers overview",
          "Text processing pipelines",
        ],
      },
      {
        title: "LLM Applications",
        duration: "8 weeks",
        topics: [
          "Prompt engineering",
          "RAG architecture",
          "Tool calling patterns",
          "Evaluation frameworks",
          "Safety constraints",
        ],
      },
      {
        title: "MLOps and Deployment",
        duration: "8 weeks",
        topics: [
          "Model serving",
          "Experiment tracking",
          "CI for ML",
          "Monitoring and retraining",
          "Governance and compliance",
        ],
      },
    ],
    resources: [
      {
        title: "scikit-learn User Guide",
        url: "https://scikit-learn.org/stable/user_guide.html",
        type: "Documentation",
      },
      {
        title: "Deep Learning Specialization",
        url: "https://www.coursera.org/specializations/deep-learning",
        type: "Course",
      },
      {
        title: "PyTorch Tutorials",
        url: "https://pytorch.org/tutorials/",
        type: "Tutorials",
      },
      {
        title: "Made With ML",
        url: "https://madewithml.com/",
        type: "Guide",
      },
    ],
  },
  {
    id: "cybersecurity-engineer",
    slug: "cybersecurity-engineer",
    title: "Cybersecurity Engineer",
    description:
      "Build defensive security expertise across networks, applications, cloud systems, and incident response.",
    duration: "10-13 months",
    level: "Intermediate",
    skills: [
      "Network security fundamentals",
      "Threat modeling",
      "Vulnerability assessment",
      "Secure coding practices",
      "Identity and access controls",
      "SIEM and log analysis",
      "Incident response workflows",
      "Security automation",
      "Cloud security posture",
      "Compliance awareness",
    ],
    tools: [
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Splunk",
      "Wazuh",
      "OWASP ZAP",
      "Kali Linux",
    ],
    projects: [
      {
        title: "Web Application Security Audit",
        description:
          "Assess a sample web app for common vulnerabilities and produce remediation guidance.",
      },
      {
        title: "SOC Alert Triage Pipeline",
        description:
          "Build rules and automation for classifying, escalating, and documenting security alerts.",
      },
      {
        title: "Cloud Security Baseline",
        description:
          "Implement IAM hardening, logging, encryption standards, and posture checks for cloud workloads.",
      },
    ],
    phases: [
      {
        title: "Security Fundamentals",
        duration: "8 weeks",
        topics: [
          "CIA triad",
          "Network protocols",
          "Common attack vectors",
          "Cryptography basics",
          "Security policies",
        ],
      },
      {
        title: "Application and Network Defense",
        duration: "8 weeks",
        topics: [
          "OWASP Top Ten",
          "Web security testing",
          "Firewall and IDS concepts",
          "Endpoint security",
          "Vulnerability management",
        ],
      },
      {
        title: "Detection and Response",
        duration: "8 weeks",
        topics: [
          "SIEM querying",
          "Threat intelligence",
          "Playbook creation",
          "Forensic basics",
          "Incident communication",
        ],
      },
      {
        title: "Cloud and Enterprise Security",
        duration: "8 weeks",
        topics: [
          "Cloud IAM",
          "Container security",
          "Zero trust principles",
          "Compliance mapping",
          "Security automation",
        ],
      },
    ],
    resources: [
      {
        title: "OWASP Web Security Testing Guide",
        url: "https://owasp.org/www-project-web-security-testing-guide/",
        type: "Guide",
      },
      {
        title: "NIST Cybersecurity Framework",
        url: "https://www.nist.gov/cyberframework",
        type: "Framework",
      },
      {
        title: "SANS Reading Room",
        url: "https://www.sans.org/white-papers/",
        type: "Research",
      },
      {
        title: "MITRE ATT&CK",
        url: "https://attack.mitre.org/",
        type: "Knowledge Base",
      },
    ],
  },
  {
    id: "mobile-app-developer",
    slug: "mobile-app-developer",
    title: "Mobile App Developer",
    description:
      "Build high-quality iOS and Android applications with strong UX, performance tuning, and release discipline.",
    duration: "9-12 months",
    level: "Beginner",
    skills: [
      "Mobile UI principles",
      "Platform-specific navigation",
      "State management for mobile",
      "Offline-first data sync",
      "API integration",
      "Push notifications",
      "Mobile testing",
      "Performance profiling",
      "App security basics",
      "Store release process",
    ],
    tools: [
      "React Native",
      "Flutter",
      "Android Studio",
      "Xcode",
      "Firebase",
      "Fastlane",
      "Expo",
      "Figma",
    ],
    projects: [
      {
        title: "Habit Tracker App",
        description:
          "Create a cross-platform app with reminders, streak tracking, and local persistence.",
      },
      {
        title: "Food Delivery Mobile Client",
        description:
          "Implement maps, real-time order status, payment flow, and account management screens.",
      },
      {
        title: "Offline Notes Application",
        description:
          "Build secure local storage with sync conflict handling and background synchronization.",
      },
    ],
    phases: [
      {
        title: "Mobile Fundamentals",
        duration: "6 weeks",
        topics: [
          "Mobile architecture",
          "UI layouts and navigation",
          "Device lifecycle",
          "Network requests",
          "Storage basics",
        ],
      },
      {
        title: "App Feature Development",
        duration: "8 weeks",
        topics: [
          "State management",
          "Authentication",
          "Forms and validation",
          "Push notifications",
          "Media handling",
        ],
      },
      {
        title: "Quality and Performance",
        duration: "8 weeks",
        topics: [
          "Unit and UI tests",
          "Crash reporting",
          "Performance profiling",
          "Accessibility support",
          "Battery and memory optimization",
        ],
      },
      {
        title: "Release and Maintenance",
        duration: "6 weeks",
        topics: [
          "CI/CD for mobile",
          "Store submission",
          "Feature flags",
          "User analytics",
          "Version rollout strategy",
        ],
      },
    ],
    resources: [
      {
        title: "React Native Documentation",
        url: "https://reactnative.dev/docs/getting-started",
        type: "Documentation",
      },
      {
        title: "Flutter Documentation",
        url: "https://docs.flutter.dev/",
        type: "Documentation",
      },
      {
        title: "Android Developers Guide",
        url: "https://developer.android.com/guide",
        type: "Guide",
      },
      {
        title: "Apple Human Interface Guidelines",
        url: "https://developer.apple.com/design/human-interface-guidelines/",
        type: "Design Guide",
      },
    ],
  },
  {
    id: "data-scientist",
    slug: "data-scientist",
    title: "Data Scientist",
    description:
      "Learn to extract actionable insights from data through statistics, machine learning, and clear communication.",
    duration: "10-14 months",
    level: "Intermediate",
    skills: [
      "Python for analytics",
      "Statistical inference",
      "Exploratory data analysis",
      "Data visualization",
      "Feature engineering",
      "Machine learning modeling",
      "Experiment design",
      "Model interpretation",
      "SQL for analytics",
      "Data storytelling",
    ],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Jupyter",
      "SQL",
      "Tableau",
      "Power BI",
    ],
    projects: [
      {
        title: "Customer Churn Prediction",
        description:
          "Develop and evaluate churn models, then recommend retention interventions from findings.",
      },
      {
        title: "A/B Test Analysis Framework",
        description:
          "Design a repeatable experiment analysis template for product teams with clear statistical guardrails.",
      },
      {
        title: "Demand Forecasting Pipeline",
        description:
          "Build time-series forecasts and reporting dashboards for inventory planning decisions.",
      },
    ],
    phases: [
      {
        title: "Math and Data Foundations",
        duration: "8 weeks",
        topics: [
          "Probability basics",
          "Descriptive statistics",
          "Data wrangling",
          "SQL joins",
          "Data quality checks",
        ],
      },
      {
        title: "Analysis and Visualization",
        duration: "8 weeks",
        topics: [
          "EDA workflows",
          "Visualization principles",
          "Hypothesis testing",
          "Correlation vs causation",
          "Communication techniques",
        ],
      },
      {
        title: "Machine Learning Practice",
        duration: "10 weeks",
        topics: [
          "Regression and classification",
          "Model validation",
          "Hyperparameter tuning",
          "Ensemble methods",
          "Interpretability methods",
        ],
      },
      {
        title: "Business Impact Delivery",
        duration: "6 weeks",
        topics: [
          "Experimentation strategy",
          "Metric design",
          "Stakeholder reporting",
          "Model monitoring",
          "Decision support",
        ],
      },
    ],
    resources: [
      {
        title: "An Introduction to Statistical Learning",
        url: "https://www.statlearning.com/",
        type: "Book",
      },
      {
        title: "Kaggle Learn",
        url: "https://www.kaggle.com/learn",
        type: "Course",
      },
      {
        title: "Pandas Documentation",
        url: "https://pandas.pydata.org/docs/",
        type: "Documentation",
      },
      {
        title: "Seeing Theory",
        url: "https://seeing-theory.brown.edu/",
        type: "Interactive Guide",
      },
    ],
  },
  {
    id: "ui-ux-designer",
    slug: "ui-ux-designer",
    title: "UI UX Designer",
    description:
      "Design intuitive digital products through user research, interaction design, visual systems, and usability validation.",
    duration: "7-10 months",
    level: "Beginner",
    skills: [
      "User research methods",
      "Personas and journey mapping",
      "Information architecture",
      "Wireframing",
      "Interaction design",
      "Visual design principles",
      "Design systems",
      "Prototyping",
      "Usability testing",
      "Design handoff communication",
    ],
    tools: [
      "Figma",
      "FigJam",
      "Adobe XD",
      "Miro",
      "Notion",
      "Maze",
      "Hotjar",
      "Loom",
    ],
    projects: [
      {
        title: "Onboarding Experience Redesign",
        description:
          "Research friction points and redesign a product onboarding flow to improve activation.",
      },
      {
        title: "Design System Starter Kit",
        description:
          "Create reusable tokens, components, and documentation for a small product team.",
      },
      {
        title: "Mobile Banking App Prototype",
        description:
          "Design and prototype secure, accessible flows for transactions, statements, and card controls.",
      },
    ],
    phases: [
      {
        title: "UX Research Foundations",
        duration: "5 weeks",
        topics: [
          "User interviews",
          "Survey design",
          "Persona creation",
          "Problem framing",
          "Opportunity mapping",
        ],
      },
      {
        title: "Interaction and Visual Design",
        duration: "7 weeks",
        topics: [
          "Wireframing",
          "User flows",
          "Typography and color systems",
          "Accessibility in design",
          "Micro-interactions",
        ],
      },
      {
        title: "Prototyping and Validation",
        duration: "6 weeks",
        topics: [
          "High-fidelity prototypes",
          "Usability testing",
          "Heuristic evaluation",
          "Iteration cycles",
          "Design critique practices",
        ],
      },
      {
        title: "Design Systems and Handoff",
        duration: "6 weeks",
        topics: [
          "Component libraries",
          "Design tokens",
          "Documentation patterns",
          "Developer collaboration",
          "Success metrics",
        ],
      },
    ],
    resources: [
      {
        title: "Nielsen Norman Group UX Articles",
        url: "https://www.nngroup.com/articles/",
        type: "Articles",
      },
      {
        title: "Material Design",
        url: "https://m3.material.io/",
        type: "Design System",
      },
      {
        title: "Figma Learn",
        url: "https://help.figma.com/hc/en-us/categories/360002051613",
        type: "Learning Hub",
      },
      {
        title: "Laws of UX",
        url: "https://lawsofux.com/",
        type: "Reference",
      },
    ],
  },
];

export function getRoadmapBySlug(slug: string): Roadmap | undefined {
  return roadmaps.find((roadmap) => roadmap.slug === slug);
}

export function getAllRoadmapSlugs(): string[] {
  return roadmaps.map((roadmap) => roadmap.slug);
}
