document.addEventListener('DOMContentLoaded', () => {
    // --- 1. 데이터 정의 (data/constants.js 및 data/translations.js 역할 통합) ---
    const CV_DATA = {
        profile: {
            name: { en: "Gildong Hong", ko: "홍길동" },
            tagline: { en: "Full-Stack Developer | AI Enthusiast | Problem Solver", ko: "풀스택 개발자 | 인공지능 연구가 | 문제 해결사" },
            image: "assets/images/profile.png",
            contact: {
                email: "gildong.hong@example.com",
                phone: "010-1234-5678",
                location: { en: "Seoul, South Korea", ko: "대한민국 서울" }
            },
            keywords: [
                { en: "JavaScript", ko: "자바스크립트" },
                { en: "React", ko: "리액트" },
                { en: "Node.js", ko: "노드.js" },
                { en: "Python", ko: "파이썬" },
                { en: "REST API", ko: "REST API" },
                { en: "Database", ko: "데이터베이스" },
                { en: "Cloud", ko: "클라우드" },
                { en: "DevOps", ko: "데브옵스" }
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
                    en: `Hello! I'm Gildong Hong, a passionate full-stack developer with a master's degree in Software Engineering and a bachelor's in Computer Science. My journey in software development began with a deep fascination for how technology can solve real-world problems and enhance user experiences. I thrive in dynamic environments where I can leverage my skills in both front-end and back-end development to build robust and scalable applications. I am committed to continuous learning and staying updated with the latest industry trends. My goal is to contribute to innovative projects that make a significant impact.`,
                    ko: `안녕하세요! 소프트웨어공학 석사 및 컴퓨터공학 학사 학위를 가진 열정적인 풀스택 개발자 홍길동입니다. 기술이 실제 문제를 해결하고 사용자 경험을 향상시키는 방식에 대한 깊은 매력으로 소프트웨어 개발 여정을 시작했습니다. 저는 강력하고 확장 가능한 애플리케이션을 구축하기 위해 프론트엔드 및 백엔드 개발 모두에서 제 기술을 활용할 수 있는 역동적인 환경에서 성장합니다. 지속적인 학습과 최신 산업 트렌드를 따라가는 데 전념하고 있습니다. 저의 목표는 중요한 영향을 미치는 혁신적인 프로젝트에 기여하는 것입니다.`
                },
                goals: {
                    en: `My primary goal is to join a forward-thinking team where I can apply my expertise in developing cutting-edge web applications and contribute to challenging projects. I am particularly interested in roles that involve architecting scalable systems, optimizing performance, and integrating new technologies. I aspire to grow into a leadership position, mentoring junior developers and driving technical excellence within an organization. Furthermore, I aim to continuously expand my knowledge in emerging fields such as artificial intelligence and machine learning, seeking opportunities to integrate these advanced capabilities into future software solutions.`,
                    ko: `저의 주요 목표는 최첨단 웹 애플리케이션을 개발하는 데 저의 전문 지식을 적용하고 도전적인 프로젝트에 기여할 수 있는 선도적인 팀에 합류하는 것입니다. 특히 확장 가능한 시스템을 설계하고, 성능을 최적화하며, 새로운 기술을 통합하는 역할에 관심이 있습니다. 저는 주니어 개발자를 멘토링하고 조직 내에서 기술적 우수성을 이끄는 리더십 위치로 성장하기를 열망합니다. 또한, 인공지능 및 머신러닝과 같은 신흥 분야에서 지식을 지속적으로 확장하여 이러한 고급 기능을 미래 소프트웨어 솔루션에 통합할 기회를 모색하고자 합니다.`
                }
            },
            education: [
                {
                    degree: { en: "Master of Science in Software Engineering", ko: "소프트웨어공학 석사" },
                    institution: { en: "Seoul National University", ko: "서울대학교" },
                    period: { en: "Mar 2022 - Feb 2024", ko: "2022.03 - 2024.02" },
                    description: { en: "Graduated with honors. Thesis: 'Optimizing Machine Learning Models for Real-time Applications'.", ko: "우등 졸업. 논문: '실시간 애플리케이션을 위한 머신러닝 모델 최적화'." }
                },
                {
                    degree: { en: "Bachelor of Science in Computer Science", ko: "고려대학교" },
                    institution: { en: "Korea University", ko: "컴퓨터공학 학사" },
                    period: { en: "Mar 2018 - Feb 2022", ko: "2018.03 - 2022.02" },
                    description: { en: "Focused on data structures and algorithms. Participated in several programming contests.", ko: "자료구조 및 알고리즘 집중. 여러 프로그래밍 대회 참가." }
                }
            ],
            experience: [
                {
                    position: { en: "Senior Software Engineer", ko: "시니어 소프트웨어 엔지니어" },
                    company: { en: "Tech Solutions Inc.", ko: "테크 솔루션즈 (주)" },
                    period: { en: "Mar 2024 - Present", ko: "2024.03 - 현재" },
                    duties: [
                        { en: "Led the development of a scalable cloud-based microservices architecture using Node.js and AWS.", ko: "Node.js와 AWS를 활용한 확장 가능한 클라우드 기반 마이크로서비스 아키텍처 개발 주도." },
                        { en: "Mentored junior engineers and conducted code reviews to maintain high code quality.", ko: "주니어 엔지니어 멘토링 및 코드 리뷰를 통해 높은 코드 품질 유지." },
                        { en: "Optimized database queries and API responses, reducing latency by 30%.", ko: "데이터베이스 쿼리 및 API 응답 최적화, 대기 시간 30% 감소." }
                    ],
                    projects: [
                        { en: "Cloud Data Platform (CDP)", ko: "클라우드 데이터 플랫폼 (CDP)" },
                        { en: "Real-time Analytics Dashboard", ko: "실시간 분석 대시보드" }
                    ]
                },
                {
                    position: { en: "Software Engineer", ko: "소프트웨어 엔지니어" },
                    company: { en: "Innovative Corp.", ko: "이노베이티브 (주)" },
                    period: { en: "Mar 2020 - Feb 2024", ko: "2020.03 - 2024.02" },
                    duties: [
                        { en: "Developed and maintained full-stack web applications using React and Express.js.", ko: "React 및 Express.js를 사용하여 풀스택 웹 애플리케이션 개발 및 유지 보수." },
                        { en: "Implemented RESTful APIs for mobile and web clients.", ko: "모바일 및 웹 클라이언트를 위한 RESTful API 구현." },
                        { en: "Collaborated with UX/UI designers to improve user interfaces.", ko: "UX/UI 디자이너와 협력하여 사용자 인터페이스 개선." }
                    ],
                    projects: [
                        { en: "Customer Relationship Management (CRM) System", ko: "고객 관계 관리 (CRM) 시스템" },
                        { en: "E-commerce Front-end Redesign", ko: "전자상거래 프론트엔드 재설계" }
                    ]
                },
                 {
                    position: { en: "Junior Web Developer (Intern)", ko: "주니어 웹 개발자 (인턴)" },
                    company: { en: "Startup Labs", ko: "스타트업 랩스" },
                    period: { en: "Jul 2019 - Feb 2020", ko: "2019.07 - 2020.02" },
                    duties: [
                        { en: "Assisted in front-end development, converting design mockups into interactive web pages.", ko: "디자인 목업을 인터랙티브 웹 페이지로 변환하는 프론트엔드 개발 지원." },
                        { en: "Participated in daily stand-ups and sprint planning meetings.", ko: "데일리 스크럼 및 스프린트 계획 회의 참가." }
                    ],
                    projects: [
                        { en: "Company Marketing Website", ko: "회사 마케팅 웹사이트" }
                    ]
                }
            ],
            projects: [
                {
                    id: 1,
                    name: { en: "Personal Portfolio Website", ko: "개인 포트폴리오 웹사이트" },
                    description: { en: "Developed a responsive personal portfolio website to showcase my projects and skills. Implemented dynamic content loading and language switching without frameworks.", ko: "나의 프로젝트와 기술을 보여주기 위한 반응형 개인 포트폴리오 웹사이트를 개발했습니다. 프레임워크 없이 동적 콘텐츠 로딩 및 언어 전환 기능을 구현했습니다." },
                    technologies: ["HTML", "CSS", "JavaScript (Vanilla)"],
                    period: { en: "Jan 2025 - Feb 2025", ko: "2025.01 - 2025.02" },
                    link: "https://gildonghong.github.io/portfolio-sample",
                    image: "assets/images/project1.png"
                },
                {
                    id: 2,
                    name: { en: "E-commerce Backend API", ko: "전자상거래 백엔드 API" },
                    description: { en: "Designed and implemented a scalable RESTful API for an e-commerce platform, handling product, user, and order management. Integrated with MongoDB.", ko: "전자상거래 플랫폼을 위한 확장 가능한 RESTful API를 설계하고 구현하여 상품, 사용자, 주문 관리를 처리했습니다. MongoDB와 통합했습니다." },
                    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
                    period: { en: "Sep 2023 - Dec 2023", ko: "2023.09 - 2023.12" },
                    link: "https://github.com/gildonghong/ecommerce-backend-api",
                    image: "assets/images/project2.png"
                },
                {
                    id: 3,
                    name: { en: "Real-time Chat Application", ko: "실시간 채팅 애플리케이션" },
                    description: { en: "Built a real-time chat application with user authentication, group chats, and direct messaging using WebSockets.", ko: "웹소켓을 사용하여 사용자 인증, 그룹 채팅 및 직접 메시징 기능을 갖춘 실시간 채팅 애플리케이션을 구축했습니다." },
                    technologies: ["React", "Socket.IO", "Node.js", "Express", "PostgreSQL"],
                    period: { en: "Apr 2023 - Jul 2023", ko: "2023.04 - 2023.07" },
                    link: "https://github.com/gildonghong/realtime-chat-app",
                    image: "assets/images/project3.png" // Assume exists
                },
                {
                    id: 4,
                    name: { en: "Personal Expense Tracker", ko: "개인 지출 관리 앱" },
                    description: { en: "Developed a web-based application to track personal expenses, categorize spending, and visualize financial data.", ko: "개인 지출을 추적하고, 지출을 분류하며, 재정 데이터를 시각화하는 웹 기반 애플리케이션을 개발했습니다." },
                    technologies: ["Vue.js", "Firebase", "Chart.js"],
                    period: { en: "Jan 2023 - Mar 2023", ko: "2023.01 - 2023.03" },
                    link: "https://github.com/gildonghong/expense-tracker",
                    image: "assets/images/project4.png" // Assume exists
                },
                {
                    id: 5,
                    name: { en: "Image Recognition API", ko: "이미지 인식 API" },
                    description: { en: "Created a backend API service that utilizes pre-trained machine learning models for image classification and object detection.", ko: "이미지 분류 및 객체 감지를 위한 사전 학습된 머신러닝 모델을 활용하는 백엔드 API 서비스를 만들었습니다." },
                    technologies: ["Python", "Flask", "TensorFlow", "Docker"],
                    period: { en: "Oct 2022 - Dec 2022", ko: "2022.10 - 2022.12" },
                    link: "https://github.com/gildonghong/image-recognition-api",
                    image: "assets/images/project5.png" // Assume exists
                },
                {
                    id: 6,
                    name: { en: "Blog Platform with Markdown Support", ko: "마크다운 지원 블로그 플랫폼" },
                    description: { en: "Built a full-featured blog platform where users can create, edit, and publish posts using Markdown. Includes comment system.", ko: "사용자가 마크다운을 사용하여 게시물을 작성, 편집, 게시할 수 있는 완전한 기능의 블로그 플랫폼을 구축했습니다. 댓글 시스템을 포함합니다." },
                    technologies: ["Next.js", "Strapi (CMS)", "GraphQL"],
                    period: { en: "Jul 2022 - Sep 2022", ko: "2022.07 - 2022.09" },
                    link: "https://github.com/gildonghong/markdown-blog-platform",
                    image: "assets/images/project6.png" // Assume exists
                },
                 {
                    id: 7,
                    name: { en: "Weather Forecast Application", ko: "날씨 예보 애플리케이션" },
                    description: { en: "A simple web application that displays current weather and 5-day forecasts using a third-party weather API.", ko: "제3자 날씨 API를 사용하여 현재 날씨와 5일 예보를 표시하는 간단한 웹 애플리케이션입니다." },
                    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
                    period: { en: "May 2022 - Jun 2022", ko: "2022.05 - 2022.06" },
                    link: "https://github.com/gildonghong/weather-app",
                    image: "assets/images/project7.png" // Assume exists
                },
                {
                    id: 8,
                    name: { en: "Task Management CLI Tool", ko: "작업 관리 CLI 도구" },
                    description: { en: "A command-line interface tool for managing daily tasks, including adding, listing, and marking tasks as complete.", ko: "일상 작업을 추가, 나열, 완료 표시 등 관리하는 명령줄 인터페이스 도구입니다." },
                    technologies: ["Python", "Click (CLI)"],
                    period: { en: "Mar 2022 - Apr 2022", ko: "2022.03 - 2022.04" },
                    link: "https://github.com/gildonghong/task-cli-tool",
                    image: "assets/images/project8.png" // Assume exists
                }
            ],
            skills: {
                languages: [
                    { name: "JavaScript (ES6+)", level: 5 },
                    { name: "Python", level: 4 },
                    { name: "TypeScript", level: 3 },
                    { name: "Java", level: 2 }
                ],
                frontend: [
                    { name: "HTML5/CSS3", level: 5 },
                    { name: "React", level: 4 },
                    { name: "Vue.js", level: 3 },
                    { name: "Responsive Design", level: 5 }
                ],
                backend: [
                    { name: "Node.js (Express)", level: 4 },
                    { name: "RESTful APIs", level: 4 },
                    { name: "GraphQL", level: 3 },
                    { name: "Spring Boot", level: 2 }
                ],
                databases: [
                    { name: "MongoDB", level: 4 },
                    { name: "PostgreSQL", level: 3 },
                    { name: "MySQL", level: 3 }
                ],
                devops: [
                    { name: "Git & GitHub", level: 5 },
                    { name: "Docker", level: 3 },
                    { name: "AWS (EC2, S3, Lambda)", level: 2 }
                ],
                tools: [
                    { name: "VS Code", level: 5 },
                    { name: "Jira/Confluence", level: 4 },
                    { name: "Figma", level: 2 }
                ]
            },
            research: [
                {
                    title: { en: "Optimizing Machine Learning Models for Real-time Applications", ko: "실시간 애플리케이션을 위한 머신러닝 모델 최적화" },
                    publisher: { en: "Journal of Artificial Intelligence Research", ko: "인공지능 연구 학회지" },
                    date: { en: "Jan 2024", ko: "2024년 1월" },
                    link: "http://sol-link.com/ai-optimization-paper"
                },
                {
                    title: { en: "A Comparative Study of Frontend Frameworks Performance", ko: "프론트엔드 프레임워크 성능 비교 연구" },
                    publisher: { en: "International Conference on Web Technologies", ko: "웹 기술 국제 학술 대회" },
                    date: { en: "Oct 2023", ko: "2023년 10월" },
                    link: "http://sol-link.com/frontend-frameworks-paper"
                }
            ],
            awards: [
                {
                    name: { en: "Best Capstone Project Award", ko: "최우수 캡스톤 프로젝트상" },
                    issuer: { en: "Seoul National University, Department of Software Engineering", ko: "서울대학교 소프트웨어공학과" },
                    date: { en: "Feb 2024", ko: "2024년 2월" }
                },
                {
                    name: { en: "Information Processing Engineer (기사)", ko: "정보처리기사" },
                    issuer: { en: "Human Resources Development Service of Korea", ko: "한국산업인력공단" },
                    date: { en: "May 2020", ko: "2020년 5월" }
                },
                {
                    name: { en: "Excellence in Algorithm Competition", ko: "알고리즘 경진대회 우수상" },
                    issuer: { en: "Korea University, Computer Science Department", ko: "고려대학교 컴퓨터공학과" },
                    date: { en: "Nov 2019", ko: "2019년 11월" }
                }
            ]
        }
    };

    const TRANSLATIONS = {
        en: {
            NAV_HOME: "Home",
            NAV_INTRODUCTION: "Introduction",
            NAV_EDUCATION: "Education",
            NAV_EXPERIENCE: "Experience",
            NAV_PROJECTS: "Projects",
            NAV_SKILLS: "Skills",
            NAV_RESEARCH: "Research",
            NAV_AWARDS: "Awards/Certifications",
            LANG_KOR: "KOR",
            LANG_ENG: "ENG",
            SUMMARY_AREA_TITLE: "Summary",
            CONTACT_ME: "Contact Me",
            SELF_INTRODUCTION: "Self Introduction",
            GOALS: "Goals",
            VIEW_PROJECT: "View Project",
            VIEW_PAPER: "View Paper",
            PROJECT_LINK: "Project Link",
            TECHNOLOGIES_USED: "Technologies Used",
            PERIOD: "Period",
            CONTACT_FORM_TITLE: "Contact Me",
            YOUR_NAME: "Your Name:",
            YOUR_EMAIL: "Your Email:",
            YOUR_MESSAGE: "Your Message:",
            SEND: "Send",
            PROJECTS_INVOLVED: "Projects Involved:",
            FOOTER_TEXT: "© 2025 Gildong Hong. All Rights Reserved."
        },
        ko: {
            NAV_HOME: "홈",
            NAV_INTRODUCTION: "소개",
            NAV_EDUCATION: "학력",
            NAV_EXPERIENCE: "경력",
            NAV_PROJECTS: "프로젝트",
            NAV_SKILLS: "기술",
            NAV_RESEARCH: "연구",
            NAV_AWARDS: "수상/자격증",
            LANG_KOR: "한",
            LANG_ENG: "영",
            SUMMARY_AREA_TITLE: "요약",
            CONTACT_ME: "문의하기",
            SELF_INTRODUCTION: "자기소개",
            GOALS: "목표",
            VIEW_PROJECT: "프로젝트 보기",
            VIEW_PAPER: "논문 보기",
            PROJECT_LINK: "프로젝트 링크",
            TECHNOLOGIES_USED: "사용 기술",
            PERIOD: "기간",
            CONTACT_FORM_TITLE: "문의하기",
            YOUR_NAME: "이름:",
            YOUR_EMAIL: "이메일:",
            YOUR_MESSAGE: "메시지:",
            SEND: "보내기",
            PROJECTS_INVOLVED: "참여 프로젝트:",
            FOOTER_TEXT: "© 2025 홍길동. All Rights Reserved."
        }
    };

    let currentLang = 'ko'; // Default language

    // --- 2. 유틸리티 함수 (utils/helpers.js 및 utils/ui-builder.js 역할 통합) ---
    function getTranslatedText(key) {
        return TRANSLATIONS[currentLang][key] || key;
    }

    function createElement(tag, className = '', id = '', textContent = '', attributes = {}) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (id) element.id = id;
        if (textContent) element.textContent = textContent;
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        return element;
    }

    // --- 3. UI 렌더링 함수 (components 역할 통합) ---

    // NavBar 렌더링
    function renderNavBar() {
        const navBar = document.getElementById('navbar');
        const navTitle = navBar.querySelector('#cv-owner-name');
        const navMenu = navBar.querySelector('.nav-menu');
        const langToggle = navBar.querySelector('.lang-toggle');

        navTitle.textContent = CV_DATA.profile.name[currentLang];
        navTitle.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

        navMenu.innerHTML = '';
        const menuItems = [
            { id: "introduction", textKey: "NAV_INTRODUCTION" },
            { id: "education", textKey: "NAV_EDUCATION" },
            { id: "experience", textKey: "NAV_EXPERIENCE" },
            { id: "projects", textKey: "NAV_PROJECTS" },
            { id: "skills", textKey: "NAV_SKILLS" },
            { id: "research", textKey: "NAV_RESEARCH" },
            { id: "awards", textKey: "NAV_AWARDS" }
        ];

        menuItems.forEach(item => {
            const li = createElement('li');
            const a = createElement('a', '', '', getTranslatedText(item.textKey), { 'href': `#${item.id}`, 'data-section': item.id });
            li.appendChild(a);
            navMenu.appendChild(li);
        });

        // Language toggle
        langToggle.innerHTML = `
            <span class="lang-btn ${currentLang === 'ko' ? 'active' : ''}" data-lang="ko">${getTranslatedText('LANG_KOR')}</span> /
            <span class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">${getTranslatedText('LANG_ENG')}</span>
        `;
        langToggle.querySelectorAll('.lang-btn').forEach(button => {
            button.onclick = (e) => {
                currentLang = e.target.dataset.lang;
                updateUI();
                navToggleActiveLangButton(currentLang);
            };
        });

        // Smooth scroll for nav menu items
        navMenu.querySelectorAll('a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    function navToggleActiveLangButton(lang) {
        document.querySelectorAll('.lang-toggle .lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Summary Area 렌더링
    function renderSummaryArea() {
        const summaryArea = document.getElementById('summary-area');
        const profile = CV_DATA.profile;

        summaryArea.innerHTML = `
            <div class="profile-info">
                <img src="${profile.image}" alt="Profile Picture" class="profile-pic">
                <h2 class="user-name">${profile.name[currentLang]}</h2>
                <p class="tagline">${profile.tagline[currentLang]}</p>
            </div>
            <div class="contact-info">
                <p><img src="assets/icons/email.svg" alt="Email Icon"> ${profile.contact.email}</p>
                <p><img src="assets/icons/phone.svg" alt="Phone Icon"> ${profile.contact.phone}</p>
                <p><img src="assets/icons/location.svg" alt="Location Icon"> ${profile.contact.location[currentLang]}</p>
            </div>
            <div class="keywords">
                ${profile.keywords.map(kw => `<span class="keyword-tag">${kw[currentLang]}</span>`).join('')}
            </div>
            <div class="qualifications">
                <p>${profile.qualifications[currentLang]}</p>
            </div>
            <div class="external-links">
                <a href="${profile.externalLinks.github}" target="_blank"><img src="assets/icons/github.svg" alt="GitHub"></a>
                <a href="${profile.externalLinks.linkedin}" target="_blank"><img src="assets/icons/linkedin.svg" alt="LinkedIn"></a>
                <a href="${profile.externalLinks.blog}" target="_blank"><img src="assets/icons/blog.svg" alt="Blog"></a>
            </div>
            <button class="contact-cta-btn">${getTranslatedText('CONTACT_ME')}</button>
        `;

        summaryArea.querySelector('.contact-cta-btn').onclick = () => showModal('contact-form-modal');
    }

    // Contents Area 렌더링
    function renderContentsArea() {
        const contentsArea = document.getElementById('contents-area');
        contentsArea.innerHTML = ''; // Clear previous content

        // Introduction Section
        const introSection = createElement('section', 'content-section', 'introduction');
        introSection.innerHTML = `
            <h2 class="section-title"><img src="assets/icons/intro.svg" alt="Intro Icon"> ${getTranslatedText('NAV_INTRODUCTION')}</h2>
            <div class="subsection">
                <h3>${getTranslatedText('SELF_INTRODUCTION')}</h3>
                <p>${CV_DATA.sections.introduction.selfIntro[currentLang]}</p>
            </div>
            <div class="subsection">
                <h3>${getTranslatedText('GOALS')}</h3>
                <p>${CV_DATA.sections.introduction.goals[currentLang]}</p>
            </div>
        `;
        contentsArea.appendChild(introSection);

        // Education Section
        const educationSection = createElement('section', 'content-section', 'education');
        let educationHtml = `<h2 class="section-title"><img src="assets/icons/education.svg" alt="Education Icon"> ${getTranslatedText('NAV_EDUCATION')}</h2><div class="timeline">`;
        CV_DATA.sections.education.forEach(edu => {
            educationHtml += `
                <div class="timeline-item">
                    <div class="timeline-date">${edu.period[currentLang]}</div>
                    <div class="timeline-content">
                        <h4>${edu.degree[currentLang]}</h4>
                        <p>${edu.institution[currentLang]}</p>
                        <p>${edu.description[currentLang]}</p>
                    </div>
                </div>
            `;
        });
        educationHtml += `</div>`;
        educationSection.innerHTML = educationHtml;
        contentsArea.appendChild(educationSection);

        // Experience Section
        const experienceSection = createElement('section', 'content-section', 'experience');
        let experienceHtml = `<h2 class="section-title"><img src="assets/icons/experience.svg" alt="Experience Icon"> ${getTranslatedText('NAV_EXPERIENCE')}</h2><div class="experience-cards">`;
        CV_DATA.sections.experience.forEach(exp => {
            experienceHtml += `
                <div class="experience-card">
                    <h4>${exp.position[currentLang]}</h4>
                    <p class="company">${exp.company[currentLang]}</p>
                    <p class="period">${exp.period[currentLang]}</p>
                    <ul>
                        ${exp.duties.map(duty => `<li>${duty[currentLang]}</li>`).join('')}
                    </ul>
                    ${exp.projects && exp.projects.length > 0 ? `
                        <div class="projects-involved">
                            <h5>${getTranslatedText('PROJECTS_INVOLVED')}</h5>
                            <span>${exp.projects.map(p => p[currentLang]).join(', ')}</span>
                        </div>
                    ` : ''}
                </div>
            `;
        });
        experienceHtml += `</div>`;
        experienceSection.innerHTML = experienceHtml;
        contentsArea.appendChild(experienceSection);

        // Projects Section
        const projectsSection = createElement('section', 'content-section', 'projects');
        let projectsHtml = `<h2 class="section-title"><img src="assets/icons/projects.svg" alt="Projects Icon"> ${getTranslatedText('NAV_PROJECTS')}</h2><div class="project-grid">`;
        CV_DATA.sections.projects.forEach(proj => {
            projectsHtml += `
                <div class="project-card">
                    <img src="${proj.image}" alt="${proj.name[currentLang]} Thumbnail" class="project-thumbnail">
                    <h4>${proj.name[currentLang]}</h4>
                    <p>${proj.description[currentLang].substring(0, 100)}...</p>
                    <div class="technologies">${proj.technologies.join(', ')}</div>
                    <button class="view-project-btn" data-project-id="${proj.id}">${getTranslatedText('VIEW_PROJECT')}</button>
                </div>
            `;
        });
        projectsHtml += `</div>`;
        projectsSection.innerHTML = projectsHtml;
        contentsArea.appendChild(projectsSection);

        // Skills Section
        const skillsSection = createElement('section', 'content-section', 'skills');
        let skillsHtml = `<h2 class="section-title"><img src="assets/icons/skills.svg" alt="Skills Icon"> ${getTranslatedText('NAV_SKILLS')}</h2>`;
        for (const category in CV_DATA.sections.skills) {
            skillsHtml += `
                <div class="skill-category">
                    <h3>${TRANSLATIONS[currentLang][category.toUpperCase()] || category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <ul>
                        ${CV_DATA.sections.skills[category].map(skill => `
                            <li>
                                <span>${skill.name}</span>
                                <div class="skill-level-bar" style="--skill-percent: ${(skill.level / 5) * 100}%;"></div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }
        skillsSection.innerHTML = skillsHtml;
        contentsArea.appendChild(skillsSection);

        // Research Section
        const researchSection = createElement('section', 'content-section', 'research');
        let researchHtml = `<h2 class="section-title"><img src="assets/icons/research.svg" alt="Research Icon"> ${getTranslatedText('NAV_RESEARCH')}</h2><ul class="research-list">`;
        CV_DATA.sections.research.forEach(res => {
            researchHtml += `
                <li>
                    <h4>${res.title[currentLang]}</h4>
                    <p>${res.publisher[currentLang]}, ${res.date[currentLang]}</p>
                    <a href="${res.link}" target="_blank">${getTranslatedText('VIEW_PAPER')}</a>
                </li>
            `;
        });
        researchHtml += `</ul>`;
        researchSection.innerHTML = researchHtml;
        contentsArea.appendChild(researchSection);

        // Awards Section
        const awardsSection = createElement('section', 'content-section', 'awards');
        let awardsHtml = `<h2 class="section-title"><img src="assets/icons/awards.svg" alt="Awards Icon"> ${getTranslatedText('NAV_AWARDS')}</h2><ul class="awards-list">`;
        CV_DATA.sections.awards.forEach(award => {
            awardsHtml += `
                <li>
                    <h4>${award.name[currentLang]}</h4>
                    <p>${award.issuer[currentLang]}, ${award.date[currentLang]}</p>
                </li>
            `;
        });
        awardsHtml += `</ul>`;
        awardsSection.innerHTML = awardsHtml;
        contentsArea.appendChild(awardsSection);

        // Attach event listeners for project modals after rendering
        document.querySelectorAll('.view-project-btn').forEach(button => {
            button.onclick = (e) => {
                const projectId = parseInt(e.target.dataset.projectId);
                const project = CV_DATA.sections.projects.find(p => p.id === projectId);
                if (project) {
                    showProjectModal(project);
                }
            };
        });
    }

    // Footer 렌더링
    function renderFooter() {
        const footer = document.getElementById('footer');
        footer.querySelector('p').textContent = getTranslatedText('FOOTER_TEXT');
    }

    // 전체 UI 업데이트 (언어 전환 시 호출)
    function updateUI() {
        renderNavBar();
        renderSummaryArea();
        renderContentsArea();
        renderFooter();
    }

    // --- 4. 모달 관련 기능 (Modals.js 역할 통합) ---
    const projectDetailModal = document.getElementById('project-detail-modal');
    const contactFormModal = document.getElementById('contact-form-modal');

    function showModal(modalId) {
        document.getElementById(modalId).style.display = 'flex'; // Use flex for centering
    }

    function hideModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    // Close buttons for modals
    document.querySelectorAll('.modal .close-button').forEach(button => {
        button.onclick = (e) => {
            hideModal(e.target.closest('.modal').id);
        };
    });

    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === projectDetailModal) {
            hideModal('project-detail-modal');
        }
        if (event.target === contactFormModal) {
            hideModal('contact-form-modal');
        }
    };

    function showProjectModal(project) {
        document.getElementById('modal-project-name').textContent = project.name[currentLang];
        document.getElementById('modal-project-image').src = project.image;
        document.getElementById('modal-project-image').alt = project.name[currentLang];
        document.getElementById('modal-project-description').textContent = project.description[currentLang];
        document.getElementById('modal-project-tech').textContent = `${getTranslatedText('TECHNOLOGIES_USED')}: ${project.technologies.join(', ')}`;
        document.getElementById('modal-project-period').textContent = `${getTranslatedText('PERIOD')}: ${project.period[currentLang]}`;

        const projectLink = document.getElementById('modal-project-link');
        projectLink.href = project.link;
        projectLink.textContent = getTranslatedText('VIEW_PROJECT'); // 버튼 텍스트 변경
        projectLink.style.display = project.link ? 'inline-block' : 'none'; // 링크가 없으면 숨김

        showModal('project-detail-modal');
    }

    // Contact Form submission (Placeholder for future API integration)
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        // In a real application, you would send this data to a backend API
        console.log({ name, email, message });
        alert('문의 메시지가 성공적으로 전송되었습니다! (실제로는 서버로 전송되지 않습니다)'); // Placeholder
        hideModal('contact-form-modal');
        e.target.reset(); // Reset form fields
    });

    // --- 5. 초기화 및 이벤트 리스너 설정 ---
    updateUI(); // Initial rendering
});
