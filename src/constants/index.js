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
    firebase,
    mongodb,
    git,
    figma,
    flutter,
    coding,
    full_stack,
    iot,
    planning,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.Js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Flutter Developer",
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Firebase",
      icon: firebase,
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
      name: "flutter",
      icon: flutter,
    },
  ];
  
  const experiences = [
    {
      title: " Full-Stack Developer",
      company_name: "",
      icon: full_stack,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developed scalable web and mobile applications using React, Flutter, and Firebase.",
        "Built real-time features like chat apps and weather apps with GETX and Dart.",
        "Designed efficient backend systems using Node.js and Firebase.",
        "Collaborated with clients to deliver user-centric, innovative solutions."
      ],
    },
    {
      title: "IoT Developer",
      company_name: "",
      icon: iot,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - March 2024",
      points: [
        "Designed an AI-driven crop and water management system with IoT integration.",
        "Implemented moisture sensing, automated valve control, and leak detection.",
        "Developed a multilingual, voice-enabled user-friendly app using Flutter.",
        "Leveraged Arduino ESP8266 and Firebase to enable real-time monitoring."
      ],
    },
    {
      title: "Competitive Coding Enthusiast",
      company_name: "",
      icon: coding,
      iconBg: "#383E56",
      date: "May 2022 - Dec 2024",
      points: [
        "Secured recognition as a finalist in the 2022 Great Chennai Police Cyber Hackathon.",
        "Won the college-level round of Kavach Cybersecurity 2023.",
        "Participated in the Smart India Hackathon 2023, showcasing problem-solving expertise.",
        "Built solutions for real-world challenges under tight deadlines in team settings."
      ],
    },
    {
      title: "Agile Project Manager (Personal Projects)",
      company_name: "",
      icon: planning,
      iconBg: "#E6DEDD",
      date: "Oct 2024 - Present",
      points: [
        "Applied Agile methodologies like Scrum and Kanban for project planning.",
        "Took on the Scrum Master role, managing teams and ensuring timely deliverables.",
        "Implemented system design principles (SOLID, State, Repository) for optimized solutions.",
        "Successfully completed the HP LIFE Agile Project Management certification.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };