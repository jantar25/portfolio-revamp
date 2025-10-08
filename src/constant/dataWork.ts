import hireMe from '../assets/images/hire-me.png';
import saveDirectly from '../assets/images/save-directly.png';
import youthcare from '../assets/images/youthcare.png';
import fikra from '../assets/images/fikra.png';
// import petitPlat from '../assets/images/petit-plat.png';
// import brainstorm from '../assets/images/brainstorm.png';
// import rental from '../assets/images/kigali-rental.png';

export interface Project {
    id: number;
    img: string;
    title: string;
    cat: string;
    description: string;
    technologies: string[];
    linkWeb: string;
    linkGithub: string;
    repoType: 'public' | 'private';
}

export const ProjectData: Project[] =[
    {
        id:1,
        img:youthcare,
        title:"Youth Care",
        cat:"NGO WebSite",
        description:"A web platform for an NGO that provides information about their mission, programs, and services, as well as resources for youth empowerment and development.",
        technologies:['typescipt','Next.js','MongoDB','taiwind Css'],
        linkWeb:'https://youthcarerdc.org/',
        linkGithub:'https://github.com/fikra-digital/youth-care',
        repoType:'private',
    },
    {
        id:2,
        img:hireMe,
        title:"Hire Me Africa",
        cat:"Job Board",
        description:" A job board platform that connects job seekers with employers across Africa, allowing users to search and apply for jobs, and employers to post job listings.",
        technologies:['typescipt','react','node.js','express','redux','taiwind Css','AWS'],
        linkWeb:'https://www.hiremeafrika.com/',
        linkGithub:'https://github.com/orgs/HireMeAfrika/repositories',
        repoType:'private',
    },
    {
        id:3,
        img:saveDirectly,
        title:"Save Directly",
        cat:"System",
        description:"A system that allows users to save money directly from their salary to a savings account, with features for tracking savings goals and progress.",
        technologies:['WordPress', 'React','tailwindCSS'],
        linkWeb:'https://savedirectly.com/',
        linkGithub:'https://github.com/jantar25/save-directly',
        repoType:'private',
    },
    {
        id:4,
        img:fikra,
        title:"Fikra Digital",
        cat:"Corporate WebSite",
        description:"A corporate website for Fikra Digital, a digital agency that provides web development, design, and IT consulting services to clients across Africa.",
        technologies:['typescipt','Next.js','MongoDB','taiwind Css'],
        linkWeb:'https://fikra.digital/',
        linkGithub:'https://github.com/fikra-digital/fikra-landing',
        repoType:'private',
    },
    // {
    //     id:3,
    //     img:rental,
    //     title:"Rental",
    //     cat:"Real Estate App",
    //     description:"An application that links landlord and house seeker by allowing the first to advertize properties and second to rent online",
    //     technologies:['typescipt','react','node.js','express','redux','taiwind Css','i18next','mapbox-gl'],
    //     linkWeb:'https://kigalirental.vercel.app/',
    //     linkGithub:'https://github.com/jantar25/Rental',
    //     repoType:'public',
    // },
    // {
    //     id:4,
    //     img:organic_essantial,
    //     title:"Organic Essantial",
    //     cat:"Landing page",
    //     description:" Skin care treatment advertisement web site. ",
    //     technologies:['React','tailwindCSS'],
    //     linkWeb:'https://lorganic-essentials.vercel.app/',
    //     linkGithub:'https://github.com/jantar25/Lorganic-essentials',
    //     repoType:'public',
    // },
    // {
    //     id:5,
    //     img:ticketsShows,
    //     title:"ticketsShows",
    //     cat:"Tickets Selling",
    //     description:" Online shows selling platform with incorporated checkout payment methods, for concert, matchs,etc",
    //     technologies:['React','Tailwindcss','Redux','Redux toolkits'],
    //     linkWeb:'https://ticket-purchasing.vercel.app/',
    //     linkGithub:'https://github.com/jantar25/Ticket-purchasing',
    //     repoType:'public',
    // },
    // {
    //     id:6,
    //     img:petitPlat,
    //     title:"Le Petit-Plat",
    //     cat:"E-commerce",
    //     description:" Online Restaurant and fast-food ordering web site. ",
    //     technologies:['Html','Css','Javascript','Php','MySQL'],
    //     linkWeb:'https://le-petit-plat.vercel.app/',
    //     linkGithub:'https://github.com/jantar25/Azubi-Program/tree/master/Javascript/Project',
    //     repoType:'public',
    // },
    // {
    //     id:7,
    //     img:brainstorm,
    //     title:"Brainstorm",
    //     cat:"Landing page",
    //     description:" A beautifull landing page that showcase the live web site from a figma design with the use of different gradient colors nuance",
    //     technologies:['react','tailwind'],
    //     linkWeb:'https://branstorm.netlify.app/',
    //     linkGithub:'https://github.com/jantar25/Brainstorm-Tailwind',
    //     repoType:'public',
    // },
]