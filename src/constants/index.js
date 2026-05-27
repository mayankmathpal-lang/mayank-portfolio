import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    summiz,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        name: "Java",
        type: "Primary Language",
        description: "Core language. OOP principles, collections, exception handling, and clean code."
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        name: "Spring Boot",
        type: "Core Framework",
        description: "REST APIs, Spring MVC, Dependency Injection, application configuration & layered architecture."
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        name: "Spring AI",
        type: "Emerging Tech",
        description: "Integrating LLM APIs, prompt templating, AI-powered features inside Spring apps."
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        description: "Semantic markup, structure, and accessible web standards."
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
        description: "Responsive layouts, Flexbox, Grid, transitions, and clean frontends."
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        name: "Spring Data JPA",
        type: "Persistence",
        description: "Database integration via Hibernate, repository pattern, CRUD operations."
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
        name: "Maven",
        type: "Tooling",
        description: "Dependency management, build lifecycle, and project build configuration."
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Tooling",
        description: "Version control, code management, and collaborative engineering workflows."
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg",
        name: "JUnit",
        type: "Testing",
        description: "Unit testing with JUnit 5, writing test cases, assertions, and using Mockito for mocking dependencies in Spring Boot apps."
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        name: "MySQL",
        type: "Database",
        description: "Relational database design, writing SQL queries, joins, indexing, and integrating MySQL with Spring Boot via JPA."
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
        name: "Hibernate",
        type: "ORM",
        description: "ORM framework for mapping Java objects to database tables, managing sessions, transactions, and HQL queries."
    }
];

export const experiences = []; // Mayank is a fresher engineer, so we render detailed tech stack cards instead of corporate timeline.

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mayankmathpal-lang',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mayank-mathpal-58b8ab259',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'SmartChat API',
        description: 'A Spring Boot REST API integrated with Spring AI that powers a conversational chatbot. Uses prompt templates and LLM streaming responses.',
        link: 'https://github.com/mayankmathpal-lang/SmartChat-API',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Task Manager App',
        description: 'Full-stack task management system with Spring Boot backend, JPA persistence, and a clean HTML/CSS frontend with live CRUD operations.',
        link: 'https://github.com/mayankmathpal-lang/Task-Manager-App',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Student Portal REST API',
        description: 'A full CRUD REST API for managing student records. Implements layered architecture with Service, Repository, and Controller layers.',
        link: 'https://github.com/mayankmathpal-lang/Student-Portal-REST-API',
    }
];