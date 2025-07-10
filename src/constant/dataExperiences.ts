export interface Experience {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
    mode: "on-site" | "remote" | "hybrid";
    location: string;
    type: "full-time" | "part-time" | "internship" | "contract";
}

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "Jan 2020-Present",
        description: [
            "Developing scalable web applications using React and Node.js. Leading a team of developers to implement best practices in software development.",
            "Collaborating with cross-functional teams to design and implement new features. Mentoring junior developers and conducting code reviews."
        ],
        technologies: ["React", "Node.js", "TypeScript", "GraphQL"],
        mode: "hybrid",
        location: "New York, NY",
        type: "full-time"
    }
]