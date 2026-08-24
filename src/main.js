import './style.css';

const courses = [
  { name: 'Cyber Security', slug: 'cyber-security', icon: '◈', accent: 'blue', detail: 'Level 1 — Security Foundations' },
  { name: 'AI Engineering', slug: 'ai-engineering', icon: '✦', accent: 'violet', detail: 'Level 1 — AI Foundations' },
  { name: 'Data Science', slug: 'data-science', icon: '▥', accent: 'cyan', detail: 'Python • SQL • Analytics • ML' }
];

const logo = `
<svg viewBox="0 0 420 112" aria-label="Institute 9" role="img">
  <defs><linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0878ff"/><stop offset="1" stop-color="#5930e8"/></linearGradient></defs>
  <g transform="translate(6 8)">
    <rect width="78" height="78" rx="24" fill="url(#logo-gradient)"/>
    <path d="M22 58V28l17-10 17 10v30l-17 10z" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/>
    <path d="M31 34h16v22H31z" fill="#fff" opacity=".96"/><circle cx="39" cy="39" r="4" fill="#fff"/>
  </g>
  <text x="101" y="48" font-family="Inter,Arial,sans-serif" font-size="39" font-weight="800" fill="#102a68" letter-spacing="-1.5">INSTITUTE 9</text>
  <text x="103" y="76" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="600" fill="#53698f" letter-spacing="1.8">SKILLS TODAY. OPPORTUNITIES TOMORROW.</text>
</svg>`;

const courseMenu = courses.map((course) => `
  <a class="course-item" href="#${course.slug}">
    <span class="course-icon ${course.accent}">${course.icon}</span>
    <span><strong>${course.name}</strong><small>${course.detail}</small></span>
    <b>›</b>
  </a>`).join('');

function studentSvg(side = 'left') {
  const tint = side === 'left' ? '#7fd1ff' : '#c7a4ff';
  return `<svg class="student-art" viewBox="0 0 360 520" role="img" aria-label="College student with backpack and laptop">
    <defs><linearGradient id="shirt-${side}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${side === 'left' ? '#0c68d8' : '#6546dc'}"/><stop offset="1" stop-color="${side === 'left' ? '#45a9ff' : '#a56dff'}"/></linearGradient></defs>
    <circle cx="238" cy="116" r="70" fill="${tint}" opacity=".24"/>
    <circle cx="154" cy="104" r="49" fill="#f3c7a3"/>
    <path d="M104 105c6-68 90-86 123-28 8 15 7 34 2 48-13-22-28-35-52-35-23 0-51 7-73 15z" fill="#2a2941"/>
    <path d="M116 166c-4 7-8 20-7 38l-18 93h153l-16-105c-5-23-18-37-31-43-17 10-54 11-81-3z" fill="url(#shirt-${side})"/>
    <path d="M81 290l-11 113h205l-23-113z" fill="#153367" opacity=".96"/>
    <path d="M116 304l-17 144" stroke="#0e2452" stroke-width="11" stroke-linecap="round"/>
    <path d="M215 304l19 144" stroke="#0e2452" stroke-width="11" stroke-linecap="round"/>
    <path d="M74 184c-38 33-51 95-36 158" stroke="#112c58" stroke-width="11" fill="none" stroke-linecap="round"/>
    <path d="M245 177c38 41 56 84 48 147" stroke="#112c58" stroke-width="11" fill="none" stroke-linecap="round"/>
    <path d="M38 184c34 10 56 21 79 48v171c-58-25-85-62-94-115-5-32 0-69 15-104z" fill="#1c3564"/>
    <rect x="122" y="230" width="83" height="54" rx="7" fill="#202a44" transform="rotate(4 122 230)"/>
    <rect x="127" y="235" width="73" height="41" rx="4" fill="#d9efff" transform="rotate(4 127 235)"/>
    <rect x="116" y="284" width="103" height="7" rx="3" fill="#8ea1c5" transform="rotate(4 116 284)"/>
    <path d="M135 450h96" stroke="#202c49" stroke-width="12" stroke-linecap="round"/>
  </svg>`;
}

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="nav-shell">
      <a class="brand" href="#top">${logo}</a>
      <nav class="main-nav" aria-label="Primary navigation">
        <div class="course-menu">
          <button class="nav-link course-trigger" aria-expanded="false">Courses <span>⌄</span></button>
          <div class="course-panel">${courseMenu}</div>
        </div>
        <a class="nav-link" href="#about">About Us</a>
        <a class="nav-link" href="#insights">Insights / Blog</a>
      </nav>
      <div class="nav-actions">
        <a class="whatsapp" href="https://wa.me/916362868562" target="_blank" rel="noopener" aria-label="WhatsApp">◔</a>
        <a class="session-button" href="#session"><span>Book a</span><strong>Free Session</strong><em>→</em></a>
        <button class="menu-button" aria-label="Open navigation">☰</button>
      </div>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="curve curve-left"></div>
      <div class="curve curve-right"></div>
      <div class="glow glow-left"></div>
      <div class="glow glow-right"></div>

      <div class="hero-head">
        <span class="batch-pill">OUR UPCOMING COURSE BATCH</span>
        <h1>BATCH STARTING<br><span>SEP 10<sup>th</sup>, 2026</span></h1>
        <div class="date-rule"></div>
        <p>Start your journey into high-demand technology with focused foundations, practical learning and a clear path forward.</p>
      </div>

      <div class="hero-grid">
        <div class="student-panel left-student">${studentSvg('left')}</div>
        <article class="course-card cyber" id="cyber-security">
          <div class="course-card-copy">
            <div class="round-icon">◈</div>
            <div class="eyebrow blue-text">CYBER SECURITY</div>
            <h2>LEVEL 1 —<br>SECURITY FOUNDATIONS</h2>
            <p>Build the fundamentals behind modern security work — networking, threats, vulnerabilities, security tools and ethical hacking concepts.</p>
            <ul>
              <li>Network &amp; Security Fundamentals</li>
              <li>Threats, Vulnerabilities &amp; Attacks</li>
              <li>Security Tools &amp; Technologies</li>
              <li>Hands-on Labs &amp; Practical Learning</li>
            </ul>
            <a class="explore-button blue-button" href="#cyber-security">EXPLORE FULL CYBER SECURITY CURRICULUM <b>→</b></a>
          </div>
        </article>

        <article class="course-card ai" id="ai-engineering">
          <div class="course-card-copy">
            <div class="round-icon violet-icon">✦</div>
            <div class="eyebrow violet-text">AI ENGINEERING</div>
            <h2>LEVEL 1 —<br>AI FOUNDATIONS</h2>
            <p>Build a strong AI base with Python, machine learning, Generative AI, LLM concepts and the building blocks of modern AI applications.</p>
            <ul>
              <li>Python for AI &amp; Data Handling</li>
              <li>Machine Learning Fundamentals</li>
              <li>Generative AI &amp; LLM Basics</li>
              <li>Real-world Projects &amp; Labs</li>
            </ul>
            <a class="explore-button violet-button" href="#ai-engineering">EXPLORE AI ENGINEERING CURRICULUM <b>→</b></a>
          </div>
        </article>
        <div class="student-panel right-student">${studentSvg('right')}</div>
      </div>

      <div class="feature-strip">
        <div><b>▣</b><span><strong>Industry-Relevant Skills</strong><small>Learn what teams use.</small></span></div>
        <div><b>⚙</b><span><strong>Hands-on Learning</strong><small>Labs, projects &amp; practice.</small></span></div>
        <div><b>▤</b><span><strong>Career-Ready Path</strong><small>Build strong foundations.</small></span></div>
        <div><b>♙</b><span><strong>Expert Mentorship</strong><small>Learn from practitioners.</small></span></div>
      </div>
    </section>

    <section id="about" class="anchor-section"></section>
    <section id="insights" class="anchor-section"></section>
    <section id="data-science" class="anchor-section"></section>
    <section id="session" class="anchor-section"></section>
  </main>
`;

const courseMenuRoot = document.querySelector('.course-menu');
const trigger = document.querySelector('.course-trigger');
trigger.addEventListener('click', () => {
  const open = courseMenuRoot.classList.toggle('open');
  trigger.setAttribute('aria-expanded', String(open));
});

document.addEventListener('click', (event) => {
  if (!courseMenuRoot.contains(event.target)) {
    courseMenuRoot.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }
});

const mobileButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
mobileButton.addEventListener('click', () => nav.classList.toggle('mobile-open'));
