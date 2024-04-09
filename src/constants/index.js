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
    daxy,
    iu,
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
      title: "Full Stack Data Engineer",
      company_name: "Indiana University Bloomington",
      icon: iu,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Employed scrum agile methods to delve into healthcare IT solutions, developing 3 NIH-funded apps, aimed assisting individuals with health issues. Showcased JavaScript and React expertise by crafting fault-tolerant systems with 99.9% uptime, evidencing test-driven development capabilities.",
        "Developed an AI-powered chatbot, applying Python Flask and Large Language Models (LLM) for Alzheimers disease support, improving African American community engagement. Managed to acquire over 10,000 queries, embodying a passion for technology-driven enhancement.",
        "Incorporated additional native code, specifically Objective-C and Java, to augment user accessibility in app development. Accomplished a 98% crash-free rate through sophisticated integration of PostgreSQL, GPS, and APIs, refining user experience with targeted analytics.",
        "Directed a team of 8, utilizing TypeScript, React, NodeJs, and PostgreSQL, producing 3 innovative education technology solutions, leading to a 40% boost in problem-solving efficiency and promoting collaborative and analytical prowess."
      ],
    },
    {
      title: "Graduate Associate Instructor",
      company_name: "Indiana University Bloomington",
      icon: iu,
      iconBg: "#E6DEDD",
      date: "Aug 2022 – May 2023",
      points: [
        "Boosted problem-solving skills for 150+ students in Applied Algorithms, resulting in improvement in academic through interactive sessions.",
        "Elevated security knowledge among 80 students through detailed seminars on DES, AES, and Cipher techniques, achieving an increase in student proficiency in cybersecurity nuances, exhibiting effective educational engagement and subject mastery."
      ],
    },
    {
      title: "Software Engineer, Data Platform",
      company_name: "Daxy – The Digital Taxi",
      icon: daxy,
      iconBg: "#383E56",
      date: "Jun 2020 – Dec 2021",
      points: [
        "Cultivated B2B e-commerce Progressive Web Apps (PWA), improving diamond customization sales, leveraging React and Redux for custom UIs, resulting in increase client product listings with 250 products while authoring scalable design and featuring HTML/CSS, Django, and JavaScript skills.",
        "Architected 5+ responsive, full-stack e-commerce website applying Angular and React.Js, integrating customizable CRUD-based Admin backend, reducing product catalog controls. Utilized Apache Airflow for ETL orchestration, enhancing cross-team communication and workflow efficiency.",
        "Enhanced online transaction security by synthesizing Stripe payment gateway and implementing user authentication using Python, leading to a 99% reduction in fraudulent activities while illustrating expertise in system security, database management, and distributed computing practices."
      ],
    },
    {
      title: "Software Developer",
      company_name: "Ocean Transworld Logistics",
      icon: otwl,
      iconBg: "#E6DEDD",
      date: "Jun 2019 – May 2020",
      points: [
        "Managed development of a Java-based Android app with Firebase, cutting paper usage and reducing wage loss by 45%, showcasing deep RDBMS knowledge and query optimization in streamlining expense records and automating allowances.",
        "Innovated a route suggestion system employing AJAX, PHP, Bootstrap, alongside a sophisticated validation algorithm, resulting in fewer financial errors and 90% success rate in operational efficiency, proficiency in enterprise application development and large-scale system maintenance."
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
      // source_code_link: "",
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