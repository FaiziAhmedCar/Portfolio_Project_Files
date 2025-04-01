export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "iPhone-15-Clone-site",
    desc: "Experience the elegance of the iPhone 15 Titanium through this immersive and responsive website. Built with React.js and styled using Tailwind CSS, the site delivers a sleek, modern interface enriched with dynamic animations.",
    subdesc:
      "Leveraging the power of Three.js for stunning 3D visuals and GSAP for fluid transitions, this project brings the iPhone 15 Titanium to life. Fully responsive and deployed via GitHub Pages, it ensures seamless accessibility across all devices.",
    href: "https://faiziahmedcar.github.io/iPhone-15-Clone-site/",
    texture: "/assets/ProjectSource/iPhone15.mp4",
    logo: "/assets/ProjectSource/iPhone15.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.svg",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/assets/threejs.svg",
      },
      {
        id: 5,
        name: "GSAP",
        path: "/assets/gsap.svg",
      },
    ],
  },
  {
    title: "SpaceX Site Clone",
    desc: "A simple yet captivating SpaceX-inspired webpage, built using only HTML, CSS, and JavaScript. This project showcases a clean and visually appealing design, delivering an engaging user experience.",
    subdesc:
      "With smooth animations and a responsive layout, this SpaceX-themed site highlights the power of core web technologies. Crafted without frameworks, it demonstrates the elegance of pure HTML, CSS, and JavaScript in action.",
    href: "https://faiziahmedcar.github.io/project_4_Spacex/",
    texture: "/assets/ProjectSource/SpaceX.mp4",
    logo: "/assets/ProjectSource/SpaceX_logo.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.svg",
      }, 
    ],
  },
];

// isSmall=> 440px,   441px <=isMobile=> 768px,   769px<=isTablet=>1024
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 70 : isMobile ? 80 : 120,
    cubeScale: isSmall ? 1 : isMobile ? 1.3 : 1.5,
    reactLogoScale: isSmall ? 0.25 : isMobile ? 0.3 : 0.3,
    ringScale: isSmall ? 1 : isMobile ? 1 : 20,
    targetScale: isSmall ? 2 : isMobile ? 2.3 : 2.5,

    deskPosition: isSmall
      ? [2.5, -4.5, 0]
      : isMobile
      ? [4.5, -12, 0]
      : [5, -10, 0],
    cubePosition: isSmall
      ? [5.5, -10, 0]
      : isMobile
      ? [15, -9, 0]
      : isTablet
      ? [5, -5, 0]
      : [19, -10, 0],
    reactLogoPosition: isSmall
      ? [5.5, 10, 0]
      : isMobile
      ? [15.5, 8, 0]
      : isTablet
      ? [5, 4, 0]
      : [14, 6, 0],
    ringPosition: isSmall
      ? [-12, 20, 0]
      : isMobile
      ? [-29, 14, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-38, 13, 0],
    targetPosition: isSmall
      ? [-8, -15, -10]
      : isMobile
      ? [-14.5, -12, 0]
      : isTablet
      ? [-11, -7, -10]
      : [-25, -14, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Sara Sae India Pvt Ltd",
    pos: "ERP Data Analyst",
    duration: "2024 - 2025",
    title:
      "After transitioning to the IT department at Sara Sae India Pvt Ltd, I took on the role of an ERP Data Analyst. I collaborate with a team to manage and oversee data within Epicor, a new enterprise software. My work involves ensuring data accuracy, streamlining processes, and contributing to its development before full-scale implementation.This experience has deepened my understanding of ERP systems and their impact on business operations.",
    icon: "/assets/Sara.png",
    animation: "walk",
  },

  {
    id: 2,
    name: 'Sara Sae India Pvt Ltd',
    pos: "Purchase Executive",
    duration: "2024 - 2024",
    title:
      "As a Temporary Purchase Executive at Sara Sae India Pvt Ltd, I managed cost approvals, purchase orders, and material receipts in ERP. I coordinated with vendors, ensured accurate documentation, and generated reports. This role helped me gain core knowledge of industry workflows, procurement processes, and the operations of a well-organized company.",
    icon: "/assets/Sara.png",
  },
  {
    id: 3,
    name: "MD INNOVATORS PVT LTD",
    pos: "STEM Teachers",
    duration: "2022 - 2023",
    title:
      "At MD Innovators Pvt Ltd, I taught STEM concepts through practical projects, including IoT, self-driving cars, Bluetooth-controlled cars, and robotic arms using Arduino and NodeMCU with C/C++. My role involved both teaching and continuous learning in robotics and machine learning, making technology accessible through hands-on experience.",
    icon: "/assets/MD.png",
    animation: "robot",
  },
  {
    id: 4,
    name: "Happy Puppy",
    pos: "Dog Trainer",
    duration: "2020 - 2021",
    title:
      "During the lockdown, I worked as a Dog Trainer at Happy Puppy, where I gained my first job experience. Training dogs taught me patience, communication, and problem-solving—skills that now help me in web development. It was a rewarding journey that shaped my ability to learn, adapt, and teach effectively.",
    icon: "/assets/notion.svg",
    animation: "run",
  },
];
