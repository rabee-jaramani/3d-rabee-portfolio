import {
    proj_1,
    proj_2,
    proj_3,
    proj_4,
    proj_5,
    proj_6,
    proj_7,
    proj_8,
    proj_9,
    proj_10,
    proj_11,
    proj_12,
    proj_0,
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
    star,
    ag,
    free,
    diamond,
    carrent,
    jobit,
    tripguide,
    threejs,
    wordpress,
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
        title: "React-js Developer",
        icon: mobile,
    },
    {
        title: "WordPress Developer",
        icon: backend,
    },
    {
        title: "Project Manager",
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
        name: "WordPress",
        icon: wordpress,
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
        title: "Web Developer and Project Manager",
        company_name: "Apparel Group L.L.C",
        icon: ag,
        iconBg: "#fff",
        date: "Oct 2021 - Present",
        points: [
            "Developing and managing the corporate website Apparel Group.",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Help and support the corporate’s brands on their online projects.",
            "Handling existed websites and update them on demand.",
            "Developing new websites for the corporate and the brands.",
            "Creating landing pages and HTML emailers.",
            "Coordinate with marketing team to enhance SEO and track websites traffic.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "Freelancer",
        icon: free,
        iconBg: "#E6DEDD",
        date: "Feb 2021 - Oct 2021",
        points: [
            "Information-gathering from the client.",
            "Planning and Creating the Website Sitemap.",
            "Design the website.",
            "Translate Design to code (develop) and give effective feedback.",
            "Launch and maintain the site (hosting and deploying).",

        ],
    },
    {
        title: "IT Engineer and Web Developer",
        company_name: "Diamond Island Office Equipment L.L.C",
        icon: diamond,
        iconBg: "#383E56",
        date: "Jan 2020 – Feb 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Developing a new system to enhance the workflow between employees and customers.",
            "Working on E-commerce website with payment gateway using React, Redux, nodejs.",
            "Testing Accounting system and report bugs.",
            "Hardware and software maintenance.",
            "Troubleshooting and problem solving.",
        ],
    },
    {
        title: "IT Engineer",
        company_name: "Star Computer",
        icon: star,
        iconBg: "#E6DEDD",
        date: "Sep 2012 – Nov 2019",
        points: [
            "Developing Desktop applications on demands.",
            "Software and hardware maintenance for laptops, computers, tablets, tablet PC’s and iPad",
            "Install and maintain networks, terminals, and internet access points.",
            "Recover lost or deleted data.",
            "Security cameras (CCTV and IP cameras) with online access.",
            "Testing new devices and solve any problems if existed.",
            "Customer service.",

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
        name: "Apparel Group",
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
        image: proj_1,
        source_code_link: "https://apparelglobal.com/en/",
    },
    {
        name: "Portfolio 2",
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
        image: proj_0,
        source_code_link: "https://jaramani.netlify.app/",
    },
    {
        name: "Portfolio 3",
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
        image: proj_2,
        source_code_link: "https://rabe.netlify.app/",
    },
    {
        name: "AGCTS",
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
        image: proj_3,
        source_code_link: "https://agcts.net/",
    },
    {
        name: "F5 Global",
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
        image: proj_4,
        source_code_link: "https://f5global.com/",
    },
    {
        name: "Portfolio 4",
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
        image: proj_5,
        source_code_link: "https://jad-amer.netlify.app/",
    },
    {
        name: "Portfolio 5",
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
        image: proj_6,
        source_code_link: "https://chri.netlify.app/",
    },
    {
        name: "Portfolio 6",
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
        image: proj_7,
        source_code_link: "https://mazyad-aljaramani.netlify.app/",
    },
    {
        name: "Amazona",
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
        image: proj_8,
        source_code_link: "https://rab.vercel.app/",
    },
    {
        name: "Rose Shop",
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
        image: proj_9,
        source_code_link: "https://rose-shop.netlify.app/",
    },
    {
        name: "Travel Agency",
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
        image: proj_10,
        source_code_link: "https://fastech-travelagency.netlify.app/",
    },
    {
        name: "Resturant",
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
        image: proj_11,
        source_code_link: "https://beirut-lounge.netlify.app/",
    },
    {
        name: "Store Locator",
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
        image: proj_12,
        source_code_link: "https://apparelgroupapps.com/store_locator_react/",
    },
];

export { services, technologies, experiences, testimonials, projects };