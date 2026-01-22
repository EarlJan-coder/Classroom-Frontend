import {Subject} from "@/types/index.ts";

export const mockSubjects: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "An overview of computer science, covering basic programming concepts, algorithms, and data structures.",
        created_at: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Math",
        description: "Study of vectors, vector spaces, linear transformations, and systems of linear equations.",
        created_at: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG301",
        name: "Advanced Technical Writing",
        department: "English",
        description: "Practical guidance on writing technical reports, proposals, and other professional documents.",
        created_at: new Date().toISOString(),
    }
];
