/* =============================================
   KELVIN ASAMOAH — PORTFOLIO JAVASCRIPT
   ============================================= */

/* ===== PROJECT DATA ===== */
const projects = [
  {
    name: 'Verp',
    desc: 'Full-stack fashion e-commerce PWA for a premium lifestyle brand. OTP auth, Paystack payments, real-time order tracking, and a powerful admin console.',
    tech: ['React 19', 'Vite', 'Express 5', 'Supabase', 'Tailwind', 'PWA'],
    live: 'https://verpembodiments.com',
    github: 'https://github.com/Lone-Wolf50/Verps',
    color: 'rgba(124,58,237,0.3)',
    slides: [
      { icon: 'fa-solid fa-cart-shopping', label: 'Premium E-Commerce Storefront', color: 'rgba(124,58,237,0.25)' },
      { icon: 'fa-solid fa-mobile-screen', label: 'Progressive Web App — Installable', color: 'rgba(6,182,212,0.2)' },
      { icon: 'fa-solid fa-shield-halved', label: 'OTP Auth + Paystack Payments', color: 'rgba(245,158,11,0.2)' },
      { icon: 'fa-solid fa-screwdriver-wrench', label: 'Admin Console + Order Management', color: 'rgba(16,185,129,0.2)' },
    ]
  },
  {
    name: 'Janina Luxury Bags',
    desc: 'Full-stack luxury bag store with OTP verification, Paystack GHS payments, live chat support, and polished transactional emails via Nodemailer.',
    tech: ['React 19', 'Express 5', 'Supabase', 'Paystack', 'Nodemailer'],
    live: 'https://my-ecomerce-gygn.vercel.app/',
    github: 'https://github.com/Lone-Wolf50/My-Ecomerce',
    color: 'rgba(236,72,153,0.25)',
    slides: [
      { icon: 'fa-solid fa-bag-shopping', label: 'Luxury Bag Catalogue & Cart', color: 'rgba(236,72,153,0.2)' },
      { icon: 'fa-solid fa-credit-card', label: 'Paystack GHS Payment Integration', color: 'rgba(6,182,212,0.2)' },
      { icon: 'fa-solid fa-comments', label: 'Live Chat + Email Notifications', color: 'rgba(245,158,11,0.2)' },
    ]
  },
  {
    name: 'AI Email App',
    desc: 'AI-powered tool that converts speech into formal, well-structured emails using the Gemini API. Built with TypeScript for type-safe reliability.',
    tech: ['TypeScript', 'Vite', 'Gemini API', 'CSS'],
    live: 'https://email-app-ecru.vercel.app/',
    github: 'https://github.com/Lone-Wolf50/EmailApp',
    color: 'rgba(6,182,212,0.25)',
    slides: [
      { icon: 'fa-solid fa-microphone', label: 'Speech to Formal Email', color: 'rgba(124,58,237,0.2)' },
      { icon: 'fa-solid fa-robot', label: 'Powered by Gemini AI', color: 'rgba(16,185,129,0.2)' },
      { icon: 'fa-solid fa-envelope', label: 'Instant Polished Email Output', color: 'rgba(245,158,11,0.2)' },
    ]
  },
  {
    name: 'Library Ads AI',
    desc: 'AI-assisted app that makes library idea management effortless. Uses Gemini API to generate and organise advertising content intelligently.',
    tech: ['TypeScript', 'Vite', 'Gemini API', 'AI Studio'],
    live: 'https://ai.studio/apps/5bdccbe8-4064-46ee-a780-2955bc8b6e52',
    github: 'https://github.com/Lone-Wolf50/LibraryAds',
    color: 'rgba(245,158,11,0.25)',
    slides: [
      { icon: 'fa-solid fa-book-open', label: 'Library Idea Management', color: 'rgba(245,158,11,0.2)' },
      { icon: 'fa-solid fa-wand-magic-sparkles', label: 'Gemini AI Content Generation', color: 'rgba(124,58,237,0.2)' },
      { icon: 'fa-solid fa-pen-to-square', label: 'Google AI Studio App', color: 'rgba(16,185,129,0.2)' },
    ]
  }
];

/* ===== BUILD PROJECT CARDS ===== */
function buildCard(p, index) {
  const card = document.createElement('div');
  card.className = 'proj-card reveal';
  card.style.transitionDelay = `${index * 0.1}s`;

  // carousel
  const car = document.createElement('div');
  car.className = 'proj-carousel';

  const track = document.createElement('div');
  track.className = 'proj-track';

  p.slides.forEach(s => {
    const slide = document.createElement('div');
    slide.className = 'proj-slide';
    slide.style.setProperty('--slide-color', s.color);
    slide.innerHTML = `
      <i class="${s.icon} proj-slide-icon"></i>
      <span class="proj-slide-label">${s.label}</span>
    `;
    track.appendChild(slide);
  });

  const prevBtn = document.createElement('button');
  prevBtn.className = 'proj-arrow proj-prev';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.setAttribute('aria-label', 'Previous slide');

  const nextBtn = document.createElement('button');
  nextBtn.className = 'proj-arrow proj-next';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.setAttribute('aria-label', 'Next slide');

  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'proj-dots';
  p.slides.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'proj-dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(d);
  });

  car.appendChild(track);
  car.appendChild(prevBtn);
  car.appendChild(nextBtn);
  car.appendChild(dotsWrap);

  let cur = 0;
  const dots = dotsWrap.querySelectorAll('.proj-dot');

  function goTo(n) {
    cur = (n + p.slides.length) % p.slides.length;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  prevBtn.onclick = () => goTo(cur - 1);
  nextBtn.onclick = () => goTo(cur + 1);

  let timer = setInterval(() => goTo(cur + 1), 3500);
  car.onmouseenter = () => clearInterval(timer);
  car.onmouseleave = () => { timer = setInterval(() => goTo(cur + 1), 3500); };

  // body
  const body = document.createElement('div');
  body.className = 'proj-body';

  const techHTML = p.tech.map(t => `<span class="proj-tech">${t}</span>`).join('');

  body.innerHTML = `
    <div class="proj-number">/ 0${index + 1}</div>
    <h3 class="proj-title">${p.name}</h3>
    <p class="proj-desc">${p.desc}</p>
    <div class="proj-tech-row">${techHTML}</div>
    <div class="proj-links">
      <a href="${p.live}" target="_blank" class="proj-btn proj-btn-primary">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Site
      </a>
      <a href="${p.github}" target="_blank" class="proj-btn">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
    </div>
  `;

  card.appendChild(car);
  card.appendChild(body);
  return card;
}

const grid = document.getElementById('projects-grid');
projects.forEach((p, i) => grid.appendChild(buildCard(p, i)));

/* ===== PARTICLE CANVAS ===== */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const PARTICLE_COUNT = 60;
  const particles = [];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '124,58,237' : '6,182,212';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  // Draw connections
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,237,${0.15 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ===== CUSTOM CURSOR ===== */
(function initCursor() {
  const ring = document.getElementById('cursor-ring');
  const dot = document.getElementById('cursor-dot');
  let ringX = 0, ringY = 0, dotX = 0, dotY = 0;
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    // dot follows instantly
    dotX += (mouseX - dotX) * 0.9;
    dotY += (mouseY - dotY) * 0.9;
    dot.style.left = dotX + 'px';
    dot.style.top = dotY + 'px';

    // ring follows with lag
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animateCursor);
  }
  animateCursor();
})();

/* ===== NAV SCROLL EFFECT ===== */
(function initNav() {
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinksList = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);

    // Active nav link
    let currentSection = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) currentSection = section.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
  });

  // Mobile hamburger
  hamburger.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });

  navLinksList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinksList.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
})();

/* ===== TYPEWRITER ===== */
(function initTypewriter() {
  const words = [
    'stunning web apps.',
    'full-stack products.',
    'smooth experiences.',
    'AI-powered tools.',
    'things that matter.',
  ];
  const el = document.getElementById('typewriter');
  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const word = words[wordIdx];
    if (deleting) {
      charIdx--;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(type, 500);
        return;
      }
      setTimeout(type, 60);
    } else {
      charIdx++;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
      }
      setTimeout(type, 80);
    }
  }
  type();
})();

/* ===== COUNTER ANIMATION ===== */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  let started = false;

  function runCounters() {
    if (started) return;
    started = true;
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      const duration = 1500;
      const step = target / (duration / 16);
      let current = 0;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        counter.textContent = Math.floor(current);
      }, 16);
    });
  }

  const observer = new IntersectionObserver(
    entries => { if (entries[0].isIntersecting) runCounters(); },
    { threshold: 0.4 }
  );
  observer.observe(document.getElementById('hero'));
})();

/* ===== SCROLL REVEAL ===== */
(function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Add reveal to section elements
  document.querySelectorAll('.about-grid, .contact-grid, .contact-form').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();

/* ===== SKILL BAR ANIMATION ===== */
(function initSkillBars() {
  const panel = document.getElementById('tab-tech');
  let animated = false;

  function animateBars() {
    if (animated) return;
    animated = true;
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const pct = bar.dataset.pct;
      bar.style.width = pct + '%';
    });
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && document.getElementById('tab-tech').classList.contains('active')) {
      animateBars();
    }
  }, { threshold: 0.3 });

  observer.observe(document.getElementById('skills'));

  // Re-animate when switching to tech tab
  document.querySelectorAll('.skill-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.dataset.tab === 'tech' && !animated) {
        setTimeout(animateBars, 100);
      }
    });
  });
})();

/* ===== SKILLS TABS ===== */
(function initTabs() {
  const tabs = document.querySelectorAll('.skill-tab');
  const panels = document.querySelectorAll('.skills-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });
})();

/* ===== CONTACT FORM ===== */
(function initForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
    btn.disabled = true;

    // Simulate send (replace with real EmailJS / Formspree etc.)
    setTimeout(() => {
      feedback.className = 'form-feedback success';
      feedback.textContent = '🎉 Message sent! I\'ll get back to you soon.';
      form.reset();
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      btn.disabled = false;
      setTimeout(() => { feedback.className = 'form-feedback'; }, 5000);
    }, 1600);
  });
})();

/* ===== ADD REVEAL CLASSES TO SECTIONS ===== */
document.querySelectorAll('#about .section-label, #about .section-title, #skills .section-label, #skills .section-title, #skills .skills-tabs, #projects .section-label, #projects .section-title, #projects .section-subtitle, #contact .section-label, #contact .section-title, #contact .section-subtitle').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.05}s`;
});

document.querySelectorAll('.skill-bar-item, .tool-card, .soft-card, .contact-card, .availability-badge').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.08}s`;
});

// Re-observe all newly-added reveal elements
const globalObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      globalObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => globalObserver.observe(el));
