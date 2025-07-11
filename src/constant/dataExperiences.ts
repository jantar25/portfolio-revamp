export interface Experience {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
    mode: "On-site" | "Remote" | "Hybrid";
    location: string;
    type: "Full-time" | "Part-time" | "Internship" | "Contract" | "Consulting";
}

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Thrypes.GmbH",
        duration: "June 2023 - Present",
        description: [
          "Collaborating with cross-functional teams to design and implement new features.",
          "Developing and maintaining scalable web applications using React and Node.js.",
          "Optimizing application performance and ensuring high availability.",
          "Implementing CI/CD pipelines to streamline deployment processes.",
          "Participating in Agile ceremonies and contributing to sprint planning and retrospectives."
        ],
        technologies: ["Jira", "Bitbucket", "React", "TypeScript", "Docker", "Kubernetes", "AWS", "CI/CD", "Agile", "Jest"],
        mode: "Remote",
        location: "Berlin, Germany",
        type: "Full-time"
    },
    {
        id: 2,
        title: "Software Engineer",
        company: "SunCulture",
        duration: "January 2025 - May 2025",
        description: [
          "Collaborating with cross-functional teams to design and implement new features.",
          "Developing and maintaining scalable web applications using React and Node.js.",
          "Optimizing application performance and ensuring high availability.",
          "Implementing CI/CD pipelines to streamline deployment processes.",
          "Participating in Agile ceremonies and contributing to sprint planning and retrospectives."
        ],
        technologies: ["Architecture", "React", "Node.JS", "Docker", "Kubernetes", "AWS", "CI/CD", "Github", "PostgreSQL"],
        mode: "Remote",
        location: "Kenya, Nairobi",
        type: "Consulting"
    },
    {
        id: 3,
        title: "Teaching Assistant",
        company: "Carnegie Mellon University Africa",
        duration: "August 2024 - May 2025",
        description: [
            "Leading a team of 5 students in software engineering projects.",
            "Assisting in the delivery of the Foundation of Software Engineering course.",
            "Supporting students with coding assignments and project work.",
            "Conducting lab sessions and providing hands-on guidance.",
            "Conducted code reviews and provided mentorship to junior developers.",
        ],
        technologies: [ "Disign Patterns", "Algorithms", "Data Structures", "React", "Node.js", "CI/CD", "Agile", "Git"],
        mode: "Hybrid",
        location: "Kigali, Rwanda",
        type: "Contract"
    },
    {
        id: 4,
        title: "Full Stack Developer",
        company: "TL Business Solutions",
        duration: "May 2024 - December 2024",
        description: [
            "Developed and maintained web applications using React, Node.js, and GraphQL.",
            "Collaborated with designers to create user-friendly interfaces.",
            "Implemented RESTful APIs and integrated third-party services.",
            "Ensured application security and data integrity through best practices."
        ],
        technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS", "CI/CD", "Python", "GraphQL", "MongoDB"],
        mode: "Hybrid",
        location: "Kigali, Rwanda",
        type: "Internship"
    },
    {
        id: 5,
        title: "Network Engineer",
        company: "Innovis Telecom Services Pvt. Ltd.",
        duration: "February 2020 - August 2023",
        description: [
            "Designed and implemented network solutions for various clients.",
            "Configured and managed network devices including routers, switches, and firewalls.",
            "Monitored network performance and resolved issues to ensure optimal operation.",
            "Collaborated with cross-functional teams to deliver projects on time.",
            "Provided technical support and training to clients on network systems."
        ],
        technologies: ["Kali Linux", "Bash", "Kibana", "Elastic Search", "TCP/IP", "VPN", "Firewall", "OSS", "Network Monitoring"],
        mode: "On-site",
        location: "Kigali, Rwanda",
        type: "Contract"
    }
]