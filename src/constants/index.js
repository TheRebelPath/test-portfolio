import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  metavs,
  threets,
  hobank,
  movies,
  cheeseq,
  ytclone,
  threejs,
  github,
  twitter,
  instagram,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Creative Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Metaversus",
    description:
      "Metaversus is a basic landing page built with Next.js, Framer Motion, and Tailwind CSS that showcases the power of these technologies in creating responsive and visually appealing websites.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metavs,
    source_code_link: "https://github.com/TheRebelPath/metaversus-app",
    live_link: "https://therebelpath.github.io/metaversus-app/",
  },
  {
    name: "Movieland",
    description:
      "Movieland is a web app built with React, CSS, and a REST API that allows you to access an external movie database. It provides an intuitive user interface to search for various films and television series.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/TheRebelPath/react-movie-app",
    live_link: "https://therebelpath.github.io/react-movie-app/",
  },
  {
    name: "T-shirt Design Lab",
    description:
      "T-Shirt Design Lab is a web app built with React, Tailwind CSS, and Three.js that allows you to design custom t-shirts from scratch. It provides an intuitive user interface to create unique designs and showcase your creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threets,
    source_code_link: "https://github.com/TheRebelPath/threejs-tshirt-app",
    live_link: "https://therebelpath.github.io/threejs-tshirt-app/",
  },
  {
    name: "BuzFeed Cheese Quiz",
    description:
    "Web development project built with React, CSS, and a REST API that tells you what type of cheese you are based on your answers to some questions. It’s inspired by the popular BuzzFeed quizzes and uses an external database to access the quiz data.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cheeseq,
    source_code_link: "https://github.com/TheRebelPath/react-buzfeed-clone",
    live_link: "https://therebelpath.github.io/react-buzfeed-clone/",
  },
  {
    name: "Bank Landing Page",
    description:
      "This project is a landing page for a bank that uses React and Tailwind to create a modern and responsive design. The project demonstrates how to use React hooks, custom components, and Tailwind utilities to build a fast and elegant web page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hobank,
    source_code_link: "https://github.com/TheRebelPath/react-bank-app",
    live_link: "https://therebelpath.github.io/react-bank-app/",
  },
  {
    name: "YouTube Clone",
    description:
      "YouTube clone that showcases the power of CSS and HTML in creating visually appealing websites. It demonstrates the basic skills of web development, such as creating layouts, adding media elements, styling elements, and using CSS selectors and properties.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: ytclone,
    source_code_link: "https://github.com/TheRebelPath/youtube-clone",
    live_link: "https://therebelpath.github.io/youtube-clone/",
  },
];

const socials = [
  {
    name: 'twitter',
    icon: twitter,
    url: 'https://twitter.com/',
  },
  {
    name: 'linkedin',
    icon: linkedin,
    url: 'https://www.linkedin.com/in/rodrigo-yáñez-64a07428b',
  },
  {
    name: 'instagram',
    icon: instagram,
    url: 'https://www.instagram.com/',
  },
  {
    name: 'github',
    icon: github,
    url: 'https://github.com/TheRebelPath',
  },
];

export { services, technologies, projects, socials };