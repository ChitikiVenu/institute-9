import './style.css';

const courses = [
  { name: 'Cyber Security', slug: 'cyber-security', icon: '◈', accent: 'blue', detail: 'Level 1 — Security Foundations' },
  { name: 'AI Engineering', slug: 'ai-engineering', icon: '✦', accent: 'violet', detail: 'Level 1 — AI Foundations' },
  { name: 'Data Science', slug: 'data-science', icon: '▥', accent: 'cyan', detail: 'Python • SQL • Analytics • ML' }
];

const logo = `<svg viewBox="0 0 420 112" aria-label="Institute 9" role="img"><defs><linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0878ff"/><stop offset="1" stop-color="#5930e8"/></linearGradient></defs><g transform="translate(4 5)"><text x="0" y="73" font-family="Inter,Arial,sans-serif" font-size="83" font-weight="900" fill="url(#logo-gradient)" letter-spacing="-12">i9</text></g><text x="104" y="48" font-family="Inter,Arial,sans-serif" font-size="38" font-weight="900" fill="#102a68" letter-spacing="-1.8">INSTITUTE 9</text><text x="106" y="76" font-family="Inter,Arial,sans-serif" font-size="13" font-weight="600" fill="#53698f" letter-spacing="1.5">SKILLS TODAY. OPPORTUNITIES TOMORROW.</text></svg>`;

const courseMenu = courses.map((course) => `<a class="course-item" href="#${course.slug}"><span class="course-icon ${course.accent}">${course.icon}</span><span><strong>${course.name}</strong><small>${course.detail}</small></span><b>›</b></a>`).join('');

const students = {
  left: '/assets/homepage-student-left.png',
  right: '/assets/homepage-student-right.png'
};

const whatsappIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5A10.1 10.1 0 0 0 4.6 16.1L3.2 21l5-1.3A10 10 0 1 0 20.5 3.5Zm-8.4 16a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8.2 8.2 0 1 1 6.9 3.8Zm4.5-6.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.2-.3.2-.5.1-1.6-.8-2.7-1.5-3.7-3.2-.3-.5.3-.5.7-1.6.1-.2 0-.3-.1-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5 1.4.6 1.9.7 2.6.6.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/></svg>`;
const calendarIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8 13h3v3H8z" fill="currentColor"/></svg>`;

document.querySelector('#app').innerHTML = `
<header class="site-header"><div class="nav-shell"><a class="brand" href="#top">${logo}</a><nav class="main-nav" aria-label="Primary navigation"><div class="course-menu"><button class="nav-link course-trigger" aria-expanded="false">Courses <span>⌄</span></button><div class="course-panel">${courseMenu}</div></div><a class="nav-link" href="#about">About Us</a><a class="nav-link" href="#insights">Insights / Blog</a></nav><div class="nav-actions"><a class="whatsapp" href="https://wa.me/916362868562" target="_blank" rel="noopener" aria-label="WhatsApp">${whatsappIcon}</a><a class="session-button" href="#session"><span class="calendar-icon">${calendarIcon}</span><span class="session-copy"><small>Book a</small><strong>Free Session</strong></span><em>→</em></a><button class="menu-button" aria-label="Open navigation">☰</button></div></div></header>
<main id="top"><section class="hero"><div class="curve curve-left"></div><div class="curve curve-right"></div><div class="hero-dot dot-a"></div><div class="hero-dot dot-b"></div><div class="hero-head"><h1>We train you to become a <span id="role-rotator">SOC Analyst</span></h1><p class="hero-sub">Hands-on training built around practical labs,<br>real-world projects and career-ready skills — not slides and theory.</p><div class="batch-pill">OUR UPCOMING COURSE BATCH • <strong>SEP 13<sup>th</sup>, 2026</strong></div></div>
<div class="hero-grid"><div class="student-panel left-student"><div class="student-circle blue-circle"></div><img src="${students.left}" alt="Student with laptop and backpack"/></div>
<article class="course-card cyber" id="cyber-security"><div class="course-card-copy"><div class="round-icon">◈</div><div class="eyebrow blue-text">CYBER SECURITY</div><h2>LEVEL 1 —<br>SECURITY FOUNDATIONS</h2><p>Learn the core concepts of cybersecurity, network security, threat landscape, vulnerabilities, ethical hacking basics, and security best practices to build a strong foundation for your career.</p><ul><li>Network &amp; Security Fundamentals</li><li>Threats, Vulnerabilities &amp; Attacks</li><li>Security Tools &amp; Technologies</li><li>Hands-on Labs &amp; Practical Learning</li></ul><a class="explore-button blue-button" href="#cyber-security">EXPLORE FULL<br>CYBER SECURITY CURRICULUM <b>→</b></a></div></article>
<article class="course-card ai" id="ai-engineering"><div class="course-card-copy"><div class="round-icon violet-icon">✦</div><div class="eyebrow violet-text">AI ENGINEERING</div><h2>LEVEL 1 —<br>AI FOUNDATIONS</h2><p>Build a strong foundation in Artificial Intelligence with Python, Machine Learning basics, Generative AI, LLMs and the core concepts that power modern AI applications.</p><ul><li>Python for AI &amp; Data Handling</li><li>Machine Learning Fundamentals</li><li>Generative AI &amp; LLM Basics</li><li>Real-world Projects &amp; Labs</li></ul><a class="explore-button violet-button" href="#ai-engineering">EXPLORE AI ENGINEERING<br>CURRICULUM <b>→</b></a></div></article>
<div class="student-panel right-student"><div class="student-circle purple-circle"></div><img src="${students.right}" alt="Student with laptop and backpack"/></div></div>
</section><section id="about" class="anchor-section"></section><section id="insights" class="anchor-section"></section><section id="data-science" class="anchor-section"></section><section id="session" class="anchor-section"></section></main>`;

const courseMenuRoot = document.querySelector('.course-menu');
const trigger = document.querySelector('.course-trigger');
trigger.addEventListener('click', () => { const open = courseMenuRoot.classList.toggle('open'); trigger.setAttribute('aria-expanded', String(open)); });
document.addEventListener('click', (event) => { if (!courseMenuRoot.contains(event.target)) { courseMenuRoot.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); } });
const mobileButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
mobileButton.addEventListener('click', () => nav.classList.toggle('mobile-open'));
