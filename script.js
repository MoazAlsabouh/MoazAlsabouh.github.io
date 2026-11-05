/**
 * Moaz Alsabouh - Personal CV & Portfolio Interactive Script
 * Handles Bilingual Translation (AR/EN), Theme Switching (Dark/Light),
 * Copy Email, Mobile Navigation, and Print/PDF Export.
 */

const translations = {
    ar: {
        brandName: "معاذ الصبوح",
        nav: {
            about: "نبذة عني",
            skills: "المهارات",
            projects: "المشاريع",
            education: "التعليم والشهادات",
            contact: "تواصل معي",
            downloadCv: "تحميل CV (PDF)"
        },
        hero: {
            status: "متاح للعمل الحر والمشاريع البرمجية",
            greeting: "مرحباً، أنا",
            name: "معاذ الصبوح",
            role: "مطور ويب متكامل (Full-Stack Web Developer)",
            bio: "مطور برمجيات شغوف ببناء تطبيقات ويب متكاملة، عصرية وعالية الأداء. حاصل على شهادة Full-Stack Web Developer Nanodegree من Udacity، وأمتلك خبرة عملية في تطوير الواجهات التفاعلية (React, TypeScript, Modern CSS) وبناء الخلفيات البرمجية وواجهات RESTful APIs باستخدام (Python, Flask, PostgreSQL, Docker).",
            location: "سوريا، إدلب، معرة النعمان",
            viewProjects: "استعراض المشاريع",
            contactMe: "تواصل معي"
        },
        stats: {
            repos: "مستودع ومشروع على GitHub",
            cert: "خريج Udacity Nanodegree"
        },
        about: {
            tag: "نبذة تعريفية",
            title: "شغف مبكر وهندسة برمجية متكاملة",
            p1: "بدأت رحلتي في عالم البرمجة وتطوير الويب بشغف كبير لبناء حلول رقمية حقيقية تلامس احتياجات المستخدمين. إلى جانب دراستي في المرحلة الثانوية (الثالث الثانوي)، كرّست وقتي لإتقان هندسة البرمجيات وتطوير الويب المتكامل وفق المعايير العالمية.",
            p2: "أتممت بنجاح برنامج <strong>Full-Stack Web Developer Nanodegree</strong> من منصة <strong>Udacity</strong> العالمية، حيث قمت بتصميم وبناء أنظمة خلفية مؤمّنة، نمذجة قواعد البيانات، إدارة الهوية والصلاحيات (IAM & Auth0)، نشر الخوادم باستخدام Docker، إلى جانب بناء أكثر من 75 مشروعاً وتطبيقاً تفاعلياً على GitHub.",
            pillar1Title: "تطوير الواجهات الأمامية",
            pillar1Desc: "تصميم وبناء واجهات مستخدم متجاوبة، سريعة، وتفاعلية باستخدام HTML5, CSS3, JavaScript, TypeScript, و React.",
            pillar2Title: "الأنظمة الخلفية وقواعد البيانات",
            pillar2Desc: "تطوير واجهات برمجية (RESTful APIs) موثقة ومؤمّنة باستخدام Python و Flask و SQLAlchemy مع قواعد بيانات PostgreSQL.",
            pillar3Title: "الأمان والنشر السحابي",
            pillar3Desc: "تطبيق مصادقة المستخدمين والصلاحيات (RBAC / JWT / Auth0) وحوسبة الحاويات عبر Docker والنشر على السحابة."
        },
        skills: {
            tag: "المهارات",
            title: "المهارات والتقنيات",
            frontend: "الواجهات الأمامية",
            backend: "البرمجة الخلفية وقواعد البيانات",
            tools: "الأدوات، الأمان والنشر"
        },
        projects: {
            tag: "معرض الأعمال",
            title: "أبرز المشاريع البرمجية",
            subtitle: "مشاريع مختارة تجمع بين هندسة النظم الخلفية وتطبيقات الويب التفاعلية",
            p1: {
                badge: "مشروع تخرج Udacity",
                title: "نظام إدارة المطاعم (Restaurant API Capstone)",
                desc: "مشروع التخرج النهائي لدرجة الـ Nanodegree في Udacity. عبارة عن واجهة برمجية متكاملة (RESTful API) لإدارة المطاعم والقوائم والطلبات، مزودة بنظام صلاحيات مبني على الأدوار (RBAC) عبر Auth0 و JWT، مع اختبارات برمجية شاملة ونشر سحابي."
            },
            p2: {
                badge: "تطبيق ويب حي",
                title: "منصة خُطى (Khuta)",
                desc: "تطبيق ويب تفاعلي عصري مصمم لتنظيم الخطوات والأهداف والمتابعة بأسلوب بصري سلس وسريع الاستجابة، مع تجربة مستخدم مخصصة وواجهة عربية متقنة على نطاق خاص."
            },
            p3: {
                title: "منصة Fyyur ونمذجة البيانات (SQL & Data Modeling)",
                desc: "تطبيق ويب متكامل لحجز الفعاليات والعروض الفنية، يركز على هندسة ونمذجة قواعد البيانات العلائقية المتقدمة (Many-to-Many Relationships) وإدارة الهجرات عبر Flask-Migrate و SQLAlchemy."
            },
            p4: {
                title: "نشر الخوادم بالحاويات وإدارة الهوية (IAM & Docker)",
                desc: "مشاريع متخصصة في بناء حاويات لتطبيقات Flask باستخدام Docker وربطها بخدمات AWS، بالإضافة إلى تطبيق معايير التشفير والتحقق من الهوية والصلاحيات في تطبيق المقهى الرقمي."
            },
            viewAll: "استكشاف جميع المشاريع (+75) على GitHub"
        },
        edu: {
            tag: "المسار الأكاديمي والمهني",
            title: "الشهادات والتعليم",
            item1: {
                type: "شهادة احترافية عالمية (Nanodegree)",
                title: "Full-Stack Web Developer Nanodegree",
                status: "مكتمل بتفوق",
                desc: "برنامج تدريبي عملي مكثف شمل 5 مسارات رئيسية: نمذجة البيانات والـ SQL للويب، تطوير وتوثيق واجهات برمجة التطبيقات (APIs)، إدارة الهوية والوصول (IAM)، نشر الخوادم عبر الحاويات (Docker & AWS)، ومشروع التخرج المتكامل."
            },
            item2: {
                type: "التعليم الأكاديمي",
                title: "المرحلة الثانوية العامة (الثالث الثانوي)",
                org: "سوريا، إدلب، معرة النعمان",
                status: "حالياً",
                desc: "الجمع بين التفوق الدراسي في المرحلة الثانوية والتعلم الذاتي المستمر في علوم الحاسوب، الخوارزميات، وتطوير تطبيقات الويب الحديثة."
            }
        },
        contact: {
            tag: "تواصل مباشر",
            title: "هل لديك مشروع أو فرصة عمل؟",
            desc: "يسعدني دائماً التواصل لمناقشة المشاريع البرمجية، فرص العمل الحر أو الوظائف، أو التعاون التقني. يمكنك مراسلتي مباشرة عبر البريد الإلكتروني أو حساباتي المهنية.",
            emailLabel: "البريد الإلكتروني",
            copy: "نسخ",
            copied: "تم النسخ!"
        },
        footer: {
            rights: "© 2026 معاذ الصبوح. جميع الحقوق محفوظة."
        }
    },
    en: {
        brandName: "Moaz Alsabouh",
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            education: "Education & Certs",
            contact: "Contact",
            downloadCv: "Download CV (PDF)"
        },
        hero: {
            status: "Available for Freelance & Software Projects",
            greeting: "Hello, I'm",
            name: "Moaz Alsabouh",
            role: "Full-Stack Web Developer",
            bio: "Passionate software developer building modern, scalable, and high-performance web applications. Udacity Full-Stack Web Developer Nanodegree graduate experienced in interactive front-end interfaces (React, TypeScript, Modern CSS) and secure back-end architectures & RESTful APIs (Python, Flask, PostgreSQL, Docker).",
            location: "Syria, Idlib, Maarrat al-Nu'man",
            viewProjects: "View Projects",
            contactMe: "Contact Me"
        },
        stats: {
            repos: "GitHub Repositories & Projects",
            cert: "Udacity Nanodegree Graduate"
        },
        about: {
            tag: "About Me",
            title: "Early Passion & Full-Stack Engineering",
            p1: "My journey in software engineering started with a strong drive to build real-world digital solutions that make an impact. Alongside my high school senior studies (12th Grade), I have dedicated my time to mastering full-stack web development according to industry standards.",
            p2: "I successfully graduated from the <strong>Udacity Full-Stack Web Developer Nanodegree</strong>, where I architected secure backend systems, relational database models, Identity & Access Management (IAM & Auth0), and containerized cloud deployments with Docker—alongside building 75+ repositories on GitHub.",
            pillar1Title: "Front-End Development",
            pillar1Desc: "Crafting responsive, accessible, and interactive user interfaces using HTML5, CSS3, JavaScript, TypeScript, and React.",
            pillar2Title: "Back-End & Databases",
            pillar2Desc: "Building documented, unit-tested RESTful APIs using Python, Flask, and SQLAlchemy ORM backed by PostgreSQL.",
            pillar3Title: "Security & Cloud Deployment",
            pillar3Desc: "Implementing Role-Based Access Control (RBAC / JWT / Auth0), containerizing apps with Docker, and deploying to the cloud."
        },
        skills: {
            tag: "Skills",
            title: "Skills & Technologies",
            frontend: "Front-End Development",
            backend: "Back-End & Databases",
            tools: "DevOps, Security & Tools"
        },
        projects: {
            tag: "Portfolio",
            title: "Featured Projects",
            subtitle: "Selected works combining robust backend engineering with interactive web experiences",
            p1: {
                badge: "Udacity Capstone",
                title: "Restaurant Management API (Capstone Project)",
                desc: "Final Capstone project for the Udacity Full-Stack Nanodegree. A comprehensive RESTful API backend featuring Role-Based Access Control (RBAC) with Auth0 & JWT, relational database modeling with PostgreSQL & SQLAlchemy, automated unit tests, and cloud deployment on Render."
            },
            p2: {
                badge: "Live Web App",
                title: "Khuta Platform (منصة خُطى)",
                desc: "A modern, interactive web application designed to organize goals, steps, and progress tracking with a smooth, responsive user experience hosted on a custom domain."
            },
            p3: {
                title: "Fyyur Artist Booking & SQL Data Modeling",
                desc: "A full-stack musical venue and artist booking platform emphasizing complex relational database modeling (Many-to-Many relationships), schema migrations with Flask-Migrate, and SQLAlchemy ORM."
            },
            p4: {
                title: "Containerized Server Deployment & IAM Security",
                desc: "Specialized Udacity projects covering Docker containerization and AWS EKS cloud deployment for Flask apps, alongside JWT & Auth0 authentication in the Digital Coffee Shop platform."
            },
            viewAll: "Explore All 75+ Projects on GitHub"
        },
        edu: {
            tag: "Academic & Professional Path",
            title: "Certifications & Education",
            item1: {
                type: "Professional Nanodegree Certification",
                title: "Full-Stack Web Developer Nanodegree",
                status: "Graduated",
                desc: "Intensive project-based curriculum covering 5 core tracks: SQL & Data Modeling for the Web, API Development & Documentation, Identity & Access Management (IAM), Server Deployment & Containerization (Docker & AWS), and the Full-Stack Capstone."
            },
            item2: {
                type: "Academic Education",
                title: "High School Senior (12th Grade / Baccalaureate)",
                org: "Syria, Idlib, Maarrat al-Nu'man",
                status: "Present",
                desc: "Combining academic dedication in high school with continuous self-driven mastery in computer science, algorithms, and modern full-stack web engineering."
            }
        },
        contact: {
            tag: "Get In Touch",
            title: "Have a Project or Opportunity?",
            desc: "I am always open to discussing software projects, freelance opportunities, internships, or technical collaborations. Feel free to reach out via email or connect with me on LinkedIn and GitHub.",
            emailLabel: "Email Address",
            copy: "Copy",
            copied: "Copied!"
        },
        footer: {
            rights: "© 2026 Moaz Alsabouh. All rights reserved."
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const htmlEl = document.documentElement;
    const langToggleBtn = document.getElementById("langToggle");
    const langLabel = document.getElementById("langLabel");
    const themeToggleBtn = document.getElementById("themeToggle");
    const printBtn = document.getElementById("printBtn");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    const copyBtnText = document.getElementById("copyBtnText");

    // 1. Initialize Theme & Language from LocalStorage
    let currentLang = localStorage.getItem("cv_lang") || "ar";
    let currentTheme = localStorage.getItem("cv_theme") || "dark";

    applyTheme(currentTheme);
    applyLanguage(currentLang);

    // 2. Language Switcher
    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "en" : "ar";
        localStorage.setItem("cv_lang", currentLang);
        applyLanguage(currentLang);
    });

    function applyLanguage(lang) {
        const dir = lang === "ar" ? "rtl" : "ltr";
        htmlEl.setAttribute("lang", lang);
        htmlEl.setAttribute("dir", dir);
        langLabel.textContent = lang === "ar" ? "EN" : "عربي";

        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach((el) => {
            const keyPath = el.getAttribute("data-i18n").split(".");
            let value = translations[lang];
            for (const key of keyPath) {
                if (value && value[key] !== undefined) {
                    value = value[key];
                } else {
                    value = null;
                    break;
                }
            }
            if (value !== null) {
                el.innerHTML = value;
            }
        });
    }

    // 3. Theme Switcher (Dark / Light)
    themeToggleBtn.addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("cv_theme", currentTheme);
        applyTheme(currentTheme);
    });

    function applyTheme(theme) {
        htmlEl.setAttribute("data-theme", theme);
    }

    // 4. Print / Save as PDF
    printBtn.addEventListener("click", () => {
        window.print();
    });

    // 5. Copy Email Button
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", async () => {
            const email = copyEmailBtn.getAttribute("data-email");
            try {
                await navigator.clipboard.writeText(email);
                copyBtnText.textContent = translations[currentLang].contact.copied;
                setTimeout(() => {
                    copyBtnText.textContent = translations[currentLang].contact.copy;
                }, 2000);
            } catch {
                window.location.href = `mailto:${email}`;
            }
        });
    }

    // 6. Mobile Menu Toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
            });
        });
    }
});
