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
    threejs,
    github,
    android,
    resume,
    linkedin,
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
      title: "Graduate Research Assistantship",
      company_name: "Indiana University - Bloomington",
      icon: iu,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Employed scrum agile development of 3 healthcare apps funded by the National Institute of Health (NIH) increasing user interface accessibility by 60% based on feedback. Engineered fault-tolerant, highly available, large-scale distributed systems, ensuring 99.9% uptime.",
        "Led design and development of an AI-Powered chatbot app, LOLA, for ADRD support to African American community enhancing user interaction and attracting over 10,000 queries.",
        "Engineered app using Flutter, Objective-C, Java (Object-Oriented programming), PostgreSQL, GPS-based event updates and Google Search API for event data retrieval, resulting in 98% crash-free rate, and provided valuable analytics to further tailor user experience."
      ],
    },
    {
      title: "Graduate Associate Instructor",
      company_name: "Indiana University - Bloomington",
      icon: iu,
      iconBg: "#E6DEDD",
      date: "Aug 2022 – May 2023",
      points: [
        "Orchestrated and tutored sessions on Applied Algorithms and Cybersecurity Mathematics, enabling students to grasp intricate concepts and excel in computational and mathematical tasks.",
        "Conducted seminars on Cryptography, DES, AES, and Cipher techniques, deepening students' grasp of cybersecurity nuances."
      ],
    },
    {
      title: "Software Developer",
      company_name: "Daxy – The Digital Taxi Inc.",
      icon: daxy,
      iconBg: "#383E56",
      date: "Jun 2020 – Dec 2021",
      points: [
        "Developed a B2B e-commerce app for diamond customization sales, enhancing vendor offerings with custom UIs, resulting in a 40% increase in client product listings of order personalization. Authored clear and scalable design documentation.",
        "Elevated inventory management efficiency by architecting a responsive, full-stack e-commerce website with a customizable CRUD-based Admin backend, reducing product catalog control efforts by 35%.",
        "Enhanced security of online transactions by integrating Stripe payment gateway and implementing user authentication, resulting in a robust system with a 99% reduction in fraudulent activities."
      ],
    },
    {
      title: "Software Developer",
      company_name: "Ocean Transworld Logistics PVT. LTD.",
      icon: otwl,
      iconBg: "#E6DEDD",
      date: "Jun 2019 – May 2020",
      points: [
        "Managed creation of Java based Android app and Firebase, leading to a 50% reduction in paper usage and a 20% cut in wage loss by digitalizing expense records and automating daily allowance.",
        "Designed a sophisticated validation algorithm, resulting in 30% decrease in financial errors, and developed an administrative web portal improving efficiency of expense monitoring and employee tracking by 25%."
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
        "Conducted analysis on 1800+ Disney+ titles and scraped data using Python, Selenium, and BeautifulSoup, evaluating content strategy to optimize subscriber growth and provide actionable recommendations.",
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
        "Led the creation of a React-based food delivery app, achieving 80% household reach through API integration and team collaboration. Enhanced UI using Swift and Java, increasing stability by 65%.",
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
      name: "Filemot",
      description:
        "Developed a cost-effective Progressive Web App using React and MongoDB, reducing maintenance by 30%. Enhanced inventory management and security, cutting fraud by 99% and easing product control by 35%.",
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
      image: three,
      source_image: android,
      source_code_link: "https://play.google.com/store/apps/details?id=com.daxy.filemot",
    },
    {
      name: "GemStory",
      description:
        "Developed a B2B e-commerce app for diamond customization, enhancing vendor offerings with custom interfaces, resulting in a 40% increase in personalized product listings. Provided detailed and scalable design documentation.",
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
      name: "TellMeAStoryMom",
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
      name: "STRIVE",
      description:
        "Engineered NIH-funded stress management app with Java and GPS, enhancing insights by 35%. Improved GPS accuracy by 40%, boosting user experience. Rapidly delivered within two weeks, increasing engagement by 30%.",
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
      image: six,
      source_image: github,
      source_code_link: "https://github.com/DC0202/STRIVE",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };