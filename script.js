export const CV_DATA = {
    profile: {
        name: {
            en: "Gildong Hong",
            ko: "홍길동"
        },
        tagline: {
            en: "Software Engineer | Web Developer | Problem Solver",
            ko: "소프트웨어 엔지니어 | 웹 개발자 | 문제 해결사"
        },
        image: "assets/images/profile.png",
        contact: {
            email: "gildong.hong@example.com",
            phone: "010-1234-5678",
            location: {
                en: "Seoul, South Korea",
                ko: "대한민국 서울"
            }
        },
        keywords: [
            { en: "JavaScript", ko: "자바스크립트" },
            { en: "React", ko: "리액트" },
            { en: "Node.js", ko: "노드.js" },
            { en: "Full-Stack", ko: "풀스택" },
            { en: "Problem Solving", ko: "문제 해결" }
        ],
        qualifications: {
            en: "M.S. in Software Engineering, B.S. in Computer Science",
            ko: "소프트웨어공학 석사, 컴퓨터공학 학사"
        },
        externalLinks: {
            github: "https://github.com/gildonghong",
            linkedin: "https://www.linkedin.com/in/gildonghong",
            blog: "https://gildonghong.tistory.com"
        }
    },
    sections: {
        introduction: {
            selfIntro: {
                en: "...",
                ko: "..."
            },
            goals: {
                en: "...",
                ko: "..."
            }
        },
        education: [
            {
                degree: { en: "Master of Science in Software Engineering", ko: "소프트웨어공학 석사" },
                institution: { en: "Seoul National University", ko: "서울대학교" },
                period: { en: "Mar 2022 - Feb 2024", ko: "2022.03 - 2024.02" },
                description: { en: "Graduated with honors.", ko: "우등 졸업." }
            },
            {
                degree: { en: "Bachelor of Science in Computer Science", ko: "컴퓨터공학 학사" },
                institution: { en: "Korea University", ko: "고려대학교" },
                period: { en: "Mar 2018 - Feb 2022", ko: "2018.03 - 2022.02" },
                description: { en: "Thesis on AI.", ko: "인공지능 관련 논문." }
            }
        ],
        experience: [
            {
                position: { en: "Senior Software Engineer", ko: "시니어 소프트웨어 엔지니어" },
                company: { en: "Tech Solutions Inc.", ko: "테크 솔루션즈 (주)" },
                period: { en: "Mar 2024 - Present", ko: "2024.03 - 현재" },
                duties: [
                    { en: "Developed scalable backend systems.", ko: "확장 가능한 백엔드 시스템 개발." },
                    { en: "Led cross-functional teams.", ko: "다기능 팀 리드." }
                ],
                projects: [
                    { en: "Project Alpha", ko: "프로젝트 알파" },
                    { en: "Project Beta", ko: "프로젝트 베타" }
                ]
            },
            {
                position: { en: "Software Engineer", ko: "소프트웨어 엔지니어" },
                company: { en: "Innovative Corp.", ko: "이노베이티브 (주)" },
                period: { en: "Mar 2020 - Feb 2024", ko: "2020.03 - 2024.02" },
                duties: [
                    { en: "Developed web applications.", ko: "웹 애플리케이션 개발." }
                ]
            },
             {
                position: { en: "Junior Developer", ko: "주니어 개발자" },
                company: { en: "Startup Labs", ko: "스타트업 랩스" },
                period: { en: "Jul 2019 - Feb 2020", ko: "2019.07 - 2020.02" },
                duties: [
                    { en: "Assisted in front-end development.", ko: "프론트엔드 개발 지원." }
                ]
            }
        ],
        projects: [
            {
                name: { en: "Portfolio Website", ko: "개인 포트폴리오 웹사이트" },
                description: { en: "...", ko: "..." },
                technologies: ["HTML", "CSS", "JavaScript"],
                period: { en: "Jan 2025 - Feb 2025", ko: "2025.01 - 2025.02" },
                link: "https://gildonghong.github.io/portfolio",
                image: "assets/images/project1.png"
            },
            {
                name: { en: "E-commerce Platform", ko: "전자상거래 플랫폼" },
                description: { en: "...", ko: "..." },
                technologies: ["React", "Node.js", "MongoDB"],
                period: { en: "Mar 2024 - Dec 2024", ko: "2024.03 - 2024.12" },
                link: "https://example.com/ecommerce",
                image: "assets/images/project2.png"
            },
            // ... 6 more projects
        ],
        skills: {
            languages: [
                { name: "JavaScript", level: 5 }, // 1-5 level
                { name: "Python", level: 4 }
            ],
            frontend: [
                { name: "HTML/CSS", level: 5 },
                { name: "React", level: 4 }
            ],
            backend: [
                { name: "Node.js", level: 4 },
                { name: "Express", level: 3 }
            ]
        },
        research: [
            {
                title: { en: "A Study on AI Ethics", ko: "인공지능 윤리에 대한 연구" },
                publisher: { en: "Journal of AI", ko: "인공지능 학회지" },
                date: { en: "Jan 2023", ko: "2023년 1월" },
                link: "http://sol-link.com/ai-ethics"
            }
        ],
        awards: [
            {
                name: { en: "Best Project Award", ko: "최우수 프로젝트상" },
                issuer: { en: "National University", ko: "국립대학교" },
                date: { en: "Dec 2021", ko: "2021년 12월" }
            },
            {
                name: { en: "Information Processing Engineer", ko: "정보처리기사" },
                issuer: { en: "Human Resources Development Service of Korea", ko: "한국산업인력공단" },
                date: { en: "May 2020", ko: "2020년 5월" }
            }
        ]
    }
};
