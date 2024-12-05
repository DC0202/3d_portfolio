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
        "Implemented biometric authentication APIs using JavaScript for fingerprint and facial recognition, enhancing user security and access control for over 10,000 users.",
        "Created interactive dashboards using React Native for mobile users, allowing them to effectively track their spending, budgets, and financial goals, resulting in a 25% increase in user engagement.",
        "Ensured responsive design by employing Bootstrap and Tailwind CSS, providing a seamless user experience across 95% of devices.",
        "Applied HTML5 and CSS3 best practices to achieve compliance with accessibility standards, ensuring that 100% of users could navigate the application effectively.",
        "Optimized the backend using Spring MVC, implementing caching mechanisms for frequently accessed data, reducing server response times by 30% and improving overall application performance.",
        "Developed a real-time chat feature utilizing Java Server Faces (JSF), allowing users to connect directly with customer support, resulting in a 40% reduction in response times for immediate assistance.",
        "Developed a robust database schema using PostgreSQL to efficiently store and retrieve user accounts, transaction records, and biometric authentication data, enhancing performance and scalability by 50% while ensuring data integrity and compliance with regulatory standards.",
        "Deployed the mobile banking application on Google Cloud Platform (GCP), leveraging its scalability and reliability, which improved performance by 35% and facilitated seamless integration with other cloud services.",
        "Ensured compliance with data protection regulations such as GDPR and CCPA by implementing strong data encryption practices and managing user consent through Java and Spring Boot. ",
        "Utilized Scrum methodology with project management tools like Trello and Asana, ensuring timely development and delivery of new features, achieving a 15% increase in project efficiency."
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
        "Adopted MVVM architecture in a React app for stress monitoring, doing 99.9% uptime and proactively optimizing and improving user health tracking accuracy with PostgreSQL integration for robust data management."
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
        "Delivered security knowledge to 80 students, introducing innovative exercises on DES, AES, and Cipher techniques, advancing student proficiency in cybersecurity topics, and demonstrating effective educational engagement and subject mastery."
      ],
    },
    {
      title: "Software Developer",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#383E56",
      date: "Jan 2019 – Dec 2021",
      points: [
        "Utilized React.js to develop a dynamic and responsive user interface, significantly enhancing the overall user experience, resulting in a 30% increase in user satisfaction. This approach ensured intuitive navigation for users interacting with course content.",
        "Employed CSS3 and Bootstrap to create a responsive design, making the LMS (Learning Management System) accessible across 95% of devices, including desktops, tablets, and smartphones. This ensured a consistent user experience regardless of screen size.",
        "Implemented a robust RESTful API using Node.js and Express.js to facilitate efficient client-server communication. This API managed course data and user authentication.",
        "Chose GraphQL as the primary data store, leveraging its flexible schema to handle various course and user-related data efficiently, resulting in a 50% improvement in query performance.",
        "Developed a cross-platform mobile application using Flutter, enabling users to access the LMS on both iOS and Android devices, increasing mobile user engagement by 25%.",
        "Implemented the Apache Struts framework to structure the web application’s architecture, ensuring a clear separation of concerns. This approach enhanced the maintenance and scalability of the LMS, reducing development time by 20% by adhering to the Model-View-Controller (MVC) pattern.",
        "Utilized TypeScript to build interactive components within the LMS, enhancing user engagement and enabling dynamic content updates without full page reloads, which improved the overall responsiveness of the application by 35%.",
        "Implemented OAuth to secure user authentication processes, enabling safe registration and login features for over 10,000 users. This ensured that user data remained protected throughout their interactions with the platform, reducing unauthorized access attempts by 95%.",
        "Deployed the application on AWS, leveraging EC2 for scalable server hosting and S3 for the storage of static files. This cloud infrastructure provided high availability and optimized performance, reducing downtime.",
        "Conducted A/B testing to optimize user interface elements and course content delivery, resulting in a 20% increase in engagement and improved conversion rates.",
        "Ensured adherence to security best practices, including the use of HTTPS for secure data transmission and encryption for protecting sensitive user information. This commitment enhanced overall application security, resulting in a 90% decrease in security breaches.",
        "Developed a microservices architecture using Spring Boot, enabling independent deployment and scalability of various LMS components, such as user management and course data services.",
      ],
    },
    // {
    //   title: "Software Developer",
    //   company_name: "Ocean Transworld Logistics",
    //   icon: otwl,
    //   iconBg: "#E6DEDD",
    //   date: "Jun 2019 – May 2020",
    //   points: [
    //     "Managed development of a Java-based Android app with Firebase, cutting paper usage and reducing wage loss by 45%, showcasing deep RDBMS knowledge and query optimization in streamlining expense records and automating allowances.",
    //     "Innovated a route suggestion system employing AJAX, PHP, Bootstrap, alongside a sophisticated validation algorithm, resulting in fewer financial errors and 90% success rate in operational efficiency, proficiency in enterprise application development and large-scale system maintenance."
    //   ],
    // },
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
      source_code_link: "https://play.google.com/store/apps/details?id=in.co.freshnom.freshnom",
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
      source_code_link: "https://play.google.com/store/apps/details?id=com.daxy.gemstory",
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
      source_code_link: "https://play.google.com/store/apps/details?id=com.daxy.filemot",
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