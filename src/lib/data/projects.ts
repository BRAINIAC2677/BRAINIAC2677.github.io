import sunshine_poster from "$lib/images/sunshine.jpg";
import buet_cse_courseworks_poster from "$lib/images/buet_cse_courseworks.jpg";
import taskflow_poster from "$lib/images/taskflow.png";
import c_compiler_poster from "$lib/images/c_compiler_poster.webp";

export const projects = [
    {
        title: "BUET CSE Courseworks",
        imageUrl: buet_cse_courseworks_poster,
        githubUrl: "https://github.com/BRAINIAC2677/BUET-CSE-Courseworks",
        tags: ["BUET CSE", "Courseworks"],
        year: "2023",
        description: "This repository contains the links to all of my course works and course related extra works of BUET CSE."
    },
    {
        title: "Minimal C Compiler",
        imageUrl: c_compiler_poster,
        githubUrl: "https://github.com/BRAINIAC2677/CSE310-Compiler",
        tags: ["C", "Flex", "Bison"],
        year: "2023",
        description: "Developed a simplified C compiler as part of the CSE310 coursework. The project progressed through key stages: lexical analysis, grammar rules, syntax analysis (symbol table and parse tree), semantic analysis, and assembly code generation using Flex and Bison."
    },
    {
        title: "TaskFlow",
        imageUrl: taskflow_poster,
        githubUrl: "https://github.com/BRAINIAC2677/taskflow",
        tags: ["Svelte", "Typescript", "Node.js", "postgreSQL"],
        year: "2024",
        description:
            "TaskFlow is an advanced AI powered task management system that helps you to manage your tasks efficiently.",
    },
    {
        title: "Sunshine",
        imageUrl: sunshine_poster,
        githubUrl: "https://github.com/BRAINIAC2677/Sunshine",
        tags: ["NASA Space Apps Challenge", "React-Native", "Firebase"],
        year: "2021",
        description:
            "Sunshine app will help to empower and encourage solar energy among mass people and assist to keep track of the system of the installed solar system.",
    },

];
