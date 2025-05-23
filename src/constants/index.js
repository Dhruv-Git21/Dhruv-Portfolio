const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Applied ML Projects" },
  { value: 5, suffix: "+", label: "Research Collaborations" },
  { value: 4, suffix: "+", label: "Years of Experience in Python and C++" },
  { value: 2, suffix: "+", label: "Pending/Completed Publications" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-7.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-8.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-9.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-10.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-11.png",
  // },
];

const abilities = [
  {
    imgPath: "/images/Algo.png",
    title: "Proficient Algorithm Designer",
    desc: "With a great understanding of Data Structure and Algorithm design able to deliver effecient and optimized solutions.",
  },
  {
    imgPath: "/images/ML.png",
    title: "Knowledge of ML Algorithms",
    desc: "Aware of prevelant and state of the art Machine Learning algorithms and their applications especially those fine tuned for Chemistry.",
  },
  {
    imgPath: "/images/Res.png",
    title: "Research Enthusiast",
    desc: "Able to apply research findings in the field of Chemistry and Machine Learning to solve real world problems.",
  },
  {
    imgPath: "/images/MDE.png",
    title: "Mechanical Design Engineer",
    desc: "Having worked on large scale projects being Racing Team and Humonoid Project, able to design and build complex mechanical systems.",
  },
  {
    imgPath: "/images/Lead.png",
    title: "Leadership and Teamwork",
    desc: "Leading various teams to deliver projects on time and on budget, and working with a team to achieve common goals.",
  },
  {
    imgPath: "/images/mang.png",
    title: "Project Manager and Solution Crafter",
    desc: "Designing and implementing effective project timeline and managing resources to ensure successful project completion.",
  },
];

const techStackImgs = [
  {
    name: "ML Researcher",
    imgPath: "/images/logos/MLR.png",
  },
  {
    name: "Mechanical Engineer",
    imgPath: "/images/logos/ME.png",
  },
  {
    name: "Algorithm Designer",
    imgPath: "/images/logos/AD.png",
  },
  {
    name: "C++ Developer",
    imgPath: "/images/logos/C++.png",
  },
  {
    name: "Profecient SQL",
    imgPath: "/images/logos/SQL.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "At an early stage of defining the problem statement and devising a problem solving approach to generate a proper research presentation.(Review to be updated)",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Climate Research Analytics",
    date: "March 2025 - Present",
    responsibilities: [
      "Researching on key variable responsible for regime identification for availability of renewable energy source.",
      "Understanding seasonal behaviour as a response of changing geopotential height.",
      "Optimised approach of EOF generation and NAO/ENSO index correlation.",
    ],
  },
  {
    review:
      "Dhruv's research work on this topic is a unique combination of machine learning in chemistry that has the potential to revolutionize the field. Also was given Undergraduate Research Award for exceptional research work.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Contrastive Learning Research Compilation",
    date: "March 2025 - Present",
    responsibilities: [
      "Developed a robust contrastive learning framework for classification of high/low yielding ligands.",
      "Designed a pipeline comprising 5 different fingerprinting techniques and 3 different training loss functions to conduct a comparative study.",
      // "Conductive an exhaustive analysis of the performance of the contrastive learning framework on multiple reaction systems to validate the method.",
      "Examine the learning space of contrastive embedding to traceback the root of clustering as a combination of structural features.",
    ],
  },
  {
    review:
      "Dhruv's contributions to the Formula Student team have been instrumental in the development and design of the electric racing car for the Formula Student - Netherlands competition.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Junior Design Engineer",
    date: "September 2024 - Present",
    responsibilities: [
      "Design and perform simulations in the creation of suspension geometry of the electric racing car for Formula Student - Netherlands.",
      "Fabricate neccessary components and aid in mechanical assembly of the vehicle and document the process.",
      "Coordinate with the team of 70 + people to participate in the competition and prepare design reports and cost presentations.",
    ],
  },
  {
    review:
      "Dhruv's contribution in the establishment of a humanoid robot team is a testament to his dedication to engineering and problem-solving.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Mechanical Design Engineer",
    date: "November 2023 - August 2024",
    responsibilities: [
      "Designed and assembled core mechanical subsystems for a fully functional humanoid robot.",
      "Collaborated with a 20+ member engineering team to integrate control systems and mechanical components.",
      "Developed a Python-based torque solver incorporating Forward and Inverse Kinematics using DH parameters.",
    ],
  },
  {
    review:
      "Dhruv was adept at extracting valuable insights from datasets and creating detailed, informative dashboards. His coding skills in AppScript were impressive, leading to the development of a robust AI-based automation tool.His dedication and professionalism made a notable impact on our projects. ",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "Data Analyst Intern",
    date: "June 2024 - July 2024",
    responsibilities: [
      "Built an interactive Hospital Record Management System with full CRUD functionality linked to Google Sheets.",
      "Created dynamic dashboards in Looker Studio to visualize startup growth metrics and actionable insights.",
      "Successfully delivered individual and team-based projects during training, earning an LOR and Performance Award.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/Dhruv-Git21",
    imgPath: "/images/github.png",
  },
  {
    name: "resume",
    url: "https://drive.google.com/file/d/1hJtwHY_sj12yc8mkLesDwg96hYORDaCv/view?usp=sharing",
    imgPath: "/images/resume.png",
  },
  {
    name: "codeforces",
    url: "https://codeforces.com/profile/Dhruv2107",
    imgPath: "/images/cf.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/dhruv-goyal-iitb27",
    imgPath: "/images/linkin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};