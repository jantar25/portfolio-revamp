export interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    text: string;
}

export const TestimonialData: Testimonial[] = [
    {
        id: 1,
        name: "Tom Vranken",
        position: "Director of Innovation",
        company: "SunCulture, Kenya",
        text: "I had the privilege to work with Gloire during his time at CMU. He at the time was managing a team of 4 developers, delivering a Greenfield software solution for SunCulture. I thoroughly enjoyed working with Gloire and by extension the team. Gloire communicates incredibly well and has strong project management skills. He is a great value in any project."
    },
    {
        id: 2,
        name: "Jean Pierre Imanirunva",
        position: "Senior Software Engineer",
        company: "HISP Rwanda",
        text: "I had the pleasure of working with Gloire as a Teaching Assistant for the Foundations of Software Engineering (FSE) course at Carnegie Mellon University. Gloire demonstrated exceptional technical expertise, leadership, and mentorship skills throughout the semester. He provided thoughtful guidance to students, helping them understand complex software engineering concepts, from architectural design to best coding practices. His dedication, deep technical knowledge, and outstanding communication skills make him an asset to any team or organization. I highly recommend Gloire for any role that values strong problem-solving skills, leadership, and a passion for software engineering excellence."
    }
]