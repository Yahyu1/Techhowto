import type { FAQ } from "@/components/seo/FAQSection";

export const FAQ_TOPICS: Record<string, FAQ[]> = {
  nextjs: [
    { question: "What is Next.js used for?", answer: "Next.js is a React framework for building full-stack web applications with server rendering, routing, and optimized production builds." },
    { question: "Should beginners learn Next.js?", answer: "Beginners should understand HTML, CSS, and React fundamentals first. Next.js is a strong next step when you are ready to build production apps." },
    { question: "What is the App Router in Next.js?", answer: "The App Router is Next.js file-based routing system using the app directory, supporting layouts, server components, and nested routes." },
  ],
  react: [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces using reusable components and a declarative programming model." },
    { question: "What are React hooks?", answer: "Hooks are functions like useState and useEffect that let functional components manage state and side effects." },
    { question: "When should I use React?", answer: "React is ideal for interactive UIs, dashboards, and apps that need efficient updates without full page reloads." },
  ],
  javascript: [
    { question: "Is JavaScript enough for web development?", answer: "JavaScript is essential for interactive web apps. Most developers also learn HTML, CSS, and a framework like React or Next.js." },
    { question: "How long does it take to learn JavaScript?", answer: "Basics can take a few weeks of consistent practice. Proficiency grows over months as you build real projects." },
    { question: "What is the difference between var, let, and const?", answer: "let and const are block-scoped. const cannot be reassigned. var is function-scoped and is generally avoided in modern code." },
  ],
  "web-development": [
    { question: "What skills do web developers need?", answer: "Core skills include HTML, CSS, JavaScript, responsive design, version control, and familiarity with a modern framework." },
    { question: "What is frontend vs backend development?", answer: "Frontend focuses on UI and user experience. Backend handles servers, databases, APIs, and business logic." },
    { question: "How do I start learning web development?", answer: "Start with HTML and CSS, then JavaScript. Build small projects and gradually add frameworks and backend skills." },
  ],
  programming: [
    { question: "What is the best programming language for beginners?", answer: "Python and JavaScript are popular beginner choices because of readable syntax and strong learning communities." },
    { question: "How do I improve as a programmer?", answer: "Write code daily, build projects, read others code, and learn debugging and testing fundamentals." },
    { question: "What are coding interviews?", answer: "Coding interviews assess problem-solving, algorithms, and communication. Practice with structured prep and real examples." },
  ],
};

export function getFaqsForTopic(topic: string): FAQ[] {
  return FAQ_TOPICS[topic] ?? [];
}
