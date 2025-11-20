// This data array is exported so the React component can access it
const projectList = [
    {
        id: 1,
        title: "Offline IoT Water Monitor",
        category: "IoT & Hardware",
        description: "A low-cost, real-time water quality monitoring system for rural households. Operates entirely offline using an ESP32 and local Wi-Fi dashboard to track TDS and temperature levels.",
        image: "/project3.PNG", 
        link: "project-hero.html" 
    },
    {
        id: 2,
        title: "CYBEX: AI-Powered Cybersecurity",
        category: "Cybersecurity & AI",
        description: "A mission-driven startup empowering SMEs with smart, affordable, and effective cybersecurity. Solutions include Real-Time Threat Monitoring, Email Security Setup, and AI-driven threat detection.",
        image: "/brav.jpeg", 
        link: "https://cybexv2.vercel.app" 
    },
    {
        id: 3,
        title: "E-Cycle: E-Waste Management Platform",
        category: "Web Platform & Logistics",
        description: "A digital platform connecting e-waste producers with certified recyclers. Features include item listing, location matching, and impact tracking to promote responsible disposal.",
        image: "img1.jpeg", 
        link: "https://waste-frontend-two.vercel.app/" 
    },
    {
        id: 4,
        title: "AI Health Translator",
        category: "AI & Healthcare",
        description: "A specialized AI translator that bridges the language gap in healthcare. It provides instant translation of medical terms and conversations into local Kenyan languages (Swahili/Luo), featuring a built-in health dictionary.",
        image: "/sejjo.jpeg", 
        link: "project-health-translator.html"
    },
    {
        id: 5,
        title: "JengaSafi: Green Construction Monitor",
        category: "AI & Sustainability",
        description: "An AI-powered sustainability platform for Kenya's construction industry. It tracks real-time CO₂ emissions, recommends greener materials, and generates automatic compliance reports for climate-smart urban planning.",
        image: "/hero-bg.jpg", 
        link: "https://jengasafi-local.vercel.app/" 
    },
    {
        id: 6,
        title: "Kazi Nyumbani: AI Property Valuation",
        category: "Web Platform & AI",
        description: "An AI-powered real estate platform specializing in the Kenyan market. It uses machine learning to predict property valuation, analyze neighborhood growth, and offer personalized investment recommendations to buyers and developers.",
        image: "/logo.jpg",
        link: "project-kazi-nyumbani.html"
    }
];

export const projects = projectList;
export default projectList;