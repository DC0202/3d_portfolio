import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fifththird,
  daxy,
  iu,
  accenture,
  otwl,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  threejs,
  github,
  android,
  resume,
  linkedin,
  bg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/darshilchheda",
    icon: linkedin,
  },
  {
    title: "Resume",
    specialClass: "resume-button",
  },
];

const services = [
  {
    title: "Mobile & Website Development",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Software Development",
    icon: backend,
  },
  {
    title: "Cybersecurity Analyst & Ethical Hacker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Fifth Third Bank",
    icon: fifththird,
    iconBg: "#E6DEDD",
    date: "Sep 2023 – Present",
    points: [
      "Developed a secure mobile banking and budgeting app with responsive React Native dashboards, enabling users to manage spending, set financial goals, and track budgets across various devices, leading to a 25% increase in user engagement and improved financial literacy.",
      "Implemented custom UI components with HTML5, CSS3, and Tailwind CSS, adhering to best practices in responsive design, ensuring 95% device compatibility for mobile and desktop users.",
      "Integrated biometric authentication (fingerprint and facial recognition) in the mobile app using JavaScript, improving user security and access control for over 10,000 users.",
      "Leveraged ReactJS to build dynamic and user-friendly interfaces, providing users with the ability to easily track their financial goals and budgets.",
      "Optimized back-end performance by implementing caching mechanisms in Spring MVC, reducing server response times by 30% and improving overall application performance.",
      "Designed and developed RESTful APIs with Node.js to support secure data communication between the mobile front-end and back-end services, ensuring reliable user authentication and financial data transactions.",
      "Ensured compliance with data protection regulations (GDPR, CCPA) by applying data encryption practices in Spring Boot, securing user data and improving privacy controls for over 10,000 users.",
      "Developed a high-performance PostgreSQL database schema to efficiently store and manage user accounts, transaction records, and biometric data, enhancing scalability by 50%.",
      "Implemented JDBC to streamline database management, ensuring seamless communication between the FinTrack mobile app and PostgreSQL database while maintaining data integrity.",
      "Deployed the mobile banking app on Google Cloud Platform (GCP), leveraging its scalability and reliability to improve app performance by 35% and enhance integration with other cloud services.",
      "Utilized AWS cloud services to ensure high availability and fault tolerance of the FinTrack app, improving system reliability and user experience across regions.",
      "Implemented comprehensive unit testing using Jest for the app, ensuring the accuracy and reliability of core features such as transaction tracking and budget management, while minimizing bugs and improving code quality.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Indiana University Bloomington",
    icon: iu,
    iconBg: "#383E56",
    date: "May 2023 – Oct 2023",
    points: [
      "Led Agile-driven, HIPAA-compliant development of an AI-powered chatbot for Alzheimer's by leveraging ChatGPT to enhance readability and LLM models, engaging over 50,000 users and increasing interaction by 40% in the African American community.",
      "Developed a cross-platform mobile application built with Flutter for Alzheimer's support, working closely with design and QA teams to boost engagement with 10,000+ iOS and Android users and elevate accessibility for dementia patients.",
      "Utilized Docker and Kubernetes to deploy healthcare app features in isolated containers while conducting comprehensive testing with Selenium and JUnit, achieving a 98% crash-free rate for 5,000 daily users and strengthening data security for 3,000 patients.",
      "Adopted MVVM architecture in a React app for stress monitoring, doing 99.9% uptime and proactively optimizing and improving user health tracking accuracy with PostgreSQL integration for robust data management.",
    ],
  },
  {
    title: "Graduate Associate Instructor",
    company_name: "Indiana University Bloomington",
    icon: iu,
    iconBg: "#E6DEDD",
    date: "Aug 2022 – May 2023",
    points: [
      "Facilitated problem-solving skills for 150 students in Applied Algorithms, educating through interactive sessions.",
      "Delivered security knowledge to 80 students, introducing innovative exercises on DES, AES, and Cipher techniques, advancing student proficiency in cybersecurity topics, and demonstrating effective educational engagement and subject mastery.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "Jan 2019 – Dec 2021",
    points: [
      "Developed a dynamic and responsive user interface for the Learning Management System using Angular, significantly improving user engagement and delivering an enhanced user experience across devices with a 30% increase in user satisfaction.",
      "Utilized CSS3, HTML5, and Bootstrap to create a mobile-first, responsive design for the Learning Management System, ensuring compatibility across 95% of devices, including desktops, tablets, and smartphones.",
      "Implemented TypeScript to build interactive, type-safe components within the LMS, optimizing real-time content updates without page reloads, boosting platform responsiveness by 35%.",
      "Built a cross-platform mobile app for iOS and Android using Flutter, enabling seamless access to the LMS and increasing mobile user engagement by 25%.",
      "Leveraged modern front-end frameworks like Angular and Vue.js for developing reusable web components, improving code maintainability and scalability for LMS features.",
      "Designed and implemented a robust RESTful API using Express.js, enabling efficient client-server communication and ensuring smooth data handling for course content and user authentication.",
      "Utilized Spring Boot and Hibernate to build scalable back-end services for the LMS, including user management and course data, ensuring high availability and low latency for user interactions.",
      "Implemented OAuth for secure user authentication in the LMS, ensuring a high level of security for over 10,000 users and reducing unauthorized access attempts by 95%.",
      "Optimized LMS data retrieval by integrating GraphQL, improving query performance by 50% and providing a flexible schema for efficient management of course content and user data.",
      "Utilized MySQL for managing relational data, ensuring high consistency and optimized data storage for user profiles, course materials, and progress tracking within the LMS.",
      "Deployed the LMS on AWS using EC2 for scalable server hosting and S3 for static file storage, ensuring high availability, performance, and minimal downtime for users.",
      "Conducted A/B testing on various LMS user interface elements and course content delivery, leading to a 20% increase in user engagement and improved conversion rates for course sign-ups and content interaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Disney+ Sub. Growth",
    description:
      "This project pioneered extensive data analysis of 1800+ Disney+ titles using web scraping and SQL, assessing content strategy to boost subscriber growth. It also enhanced data system efficiency through 50+ complex SQL queries, optimizing Disney+'s integrations and reporting processes.",
    tags: [
      {
        name: "data-anaylsis",
        color: "blue-text-gradient",
      },
      {
        name: "webscraping",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: one,
    source_image: github,
    source_code_link: "https://github.com/DC0202/Disney-Webscrapping",
  },
  {
    name: "Daily Dash",
    description:
      "Developed a food delivery app using Flutter and REST API microservices, achieving extensive coverage. UI enhancements led to a 65% increase in stability, significantly boosting subscriptions and vendor participation through effective teamwork in a startup environment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: two,
    source_image: android,
    source_code_link:
      "https://play.google.com/store/apps/details?id=in.co.freshnom.freshnom",
  },
  {
    name: "Reverse Engineering: IDA Pro",
    description:
      "In a detailed reverse engineering project using IDA Pro, analyzed an Objective-C application to uncover and document over 200 unnecessary data extraction methods, significantly enhancing device security and user privacy on more than 1,000 devices during a graduate independent study.",
    tags: [
      {
        name: "progressive web app",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: eight,
    source_image: android,
  },
  {
    name: "GemStory",
    description:
      "Developed B2B e-commerce PWAs for diamond customization with React/Redux, increasing listings by 250. Built 5+ responsive sites using Angular/React, streamlined admin processes. Enhanced security with Stripe, reducing fraud by 99%, showcasing system security proficiency.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: four,
    source_image: android,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.daxy.gemstory",
  },
  {
    name: "Tell Me A Story Mom",
    description:
      "Led a team to launch a storytelling app for kids of entrepreneurial mothers using Flutter, filling a market niche. Enhanced efficiency by 50% with a detailed database schema and engaged users with innovative text-to-speech functionality.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "leadership",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: five,
    source_image: android,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.daxy.filemot",
  },
  {
    name: "Psychometric Assessments",
    description:
      "Developed mobile app for psychometric assessments using Flutter, introducing mobile versions of psychological tests to 2,000+ users for phishing defense awareness. Implemented 150+ SQL and Python routines for analyzing 2,500+ user responses, boosting cybersecurity awareness.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "analysis",
        color: "pink-text-gradient",
      },
    ],
    image: seven,
    source_image: github,
    source_code_link: "https://github.com/DC0202/GlobalPhishingMobileApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
