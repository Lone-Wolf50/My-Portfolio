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
    slides: [
      {
        icon: 'fa-solid fa-cart-shopping',
        title: 'E-Commerce Storefront',
        detail: 'Fully responsive product catalogue, cart, and a polished checkout flow built for conversion.',
        grad: 'linear-gradient(135deg,#3b0764 0%,#1e1b4b 100%)',
        accent: '#a855f7'
      },
      {
        icon: 'fa-solid fa-mobile-screen',
        title: 'Progressive Web App',
        detail: 'Installable on any device with offline support, push-ready architecture and fast load times.',
        grad: 'linear-gradient(135deg,#0c4a6e 0%,#0f172a 100%)',
        accent: '#06b6d4'
      },
      {
        icon: 'fa-solid fa-shield-halved',
        title: 'OTP Auth & Payments',
        detail: 'Secure one-time-password authentication paired with Paystack for seamless GHS transactions.',
        grad: 'linear-gradient(135deg,#78350f 0%,#1c1917 100%)',
        accent: '#f59e0b'
      },
      {
        icon: 'fa-solid fa-screwdriver-wrench',
        title: 'Admin Console',
        detail: 'Full back-office dashboard — manage orders, inventory, users and analytics in real time.',
        grad: 'linear-gradient(135deg,#064e3b 0%,#0f172a 100%)',
        accent: '#10b981'
      },
    ]
  },
  {
    name: 'Janina Luxury Bags',
    desc: 'Full-stack luxury bag store with OTP verification, Paystack GHS payments, live chat support, and polished transactional emails via Nodemailer.',
    tech: ['React 19', 'Express 5', 'Supabase', 'Paystack', 'Nodemailer'],
    live: 'https://my-ecomerce-gygn.vercel.app/',
    github: 'https://github.com/Lone-Wolf50/My-Ecomerce',
    slides: [
      {
        icon: 'fa-solid fa-bag-shopping',
        title: 'Luxury Bag Catalogue',
        detail: 'Curated product display with smooth filtering, detail pages, and a streamlined add-to-cart flow.',
        grad: 'linear-gradient(135deg,#831843 0%,#1c1917 100%)',
        accent: '#ec4899'
      },
      {
        icon: 'fa-solid fa-credit-card',
        title: 'Paystack GHS Payments',
        detail: 'Integrated Paystack for secure Ghana Cedi transactions with real-time payment confirmation.',
        grad: 'linear-gradient(135deg,#0c4a6e 0%,#0f172a 100%)',
        accent: '#38bdf8'
      },
      {
        icon: 'fa-solid fa-comments',
        title: 'Live Chat & Emails',
        detail: 'Built-in real-time chat support and automated transactional emails via Nodemailer.',
        grad: 'linear-gradient(135deg,#3b1f00 0%,#1c1917 100%)',
        accent: '#f59e0b'
      },
    ]
  },
  {
    name: 'AI Email App',
    desc: 'AI-powered tool that converts speech into formal, well-structured emails using the Gemini API. Built with TypeScript for type-safe reliability.',
    tech: ['TypeScript', 'Vite', 'Gemini API', 'CSS'],
    live: 'https://email-app-ecru.vercel.app/',
    github: 'https://github.com/Lone-Wolf50/EmailApp',
    slides: [
      {
        icon: 'fa-solid fa-microphone',
        title: 'Voice Input',
        detail: 'Speak naturally — the app captures your voice and transcribes it into raw text instantly.',
        grad: 'linear-gradient(135deg,#3b0764 0%,#0f172a 100%)',
        accent: '#c084fc'
      },
      {
        icon: 'fa-solid fa-robot',
        title: 'Gemini AI Processing',
        detail: "Google's Gemini API reformats your spoken words into a polished professional email.",
        grad: 'linear-gradient(135deg,#064e3b 0%,#0f172a 100%)',
        accent: '#34d399'
      },
      {
        icon: 'fa-solid fa-envelope-open-text',
        title: 'Instant Email Output',
        detail: 'Copy your beautifully structured email with one click — ready to send in seconds.',
        grad: 'linear-gradient(135deg,#78350f 0%,#1c1917 100%)',
        accent: '#fbbf24'
      },
    ]
  },
  {
    name: 'Library Ads AI',
    desc: 'AI-assisted app that makes library idea management effortless. Uses Gemini AI to generate and organise advertising content intelligently.',
    tech: ['TypeScript', 'Vite', 'Gemini API', 'AI Studio'],
    live: 'https://ai.studio/apps/5bdccbe8-4064-46ee-a780-2955bc8b6e52',
    github: 'https://github.com/Lone-Wolf50/LibraryAds',
    slides: [
      {
        icon: 'fa-solid fa-book-open',
        title: 'Idea Management',
        detail: 'Centralised space to store, organise, and browse library advertising concepts and campaigns.',
        grad: 'linear-gradient(135deg,#78350f 0%,#1c1917 100%)',
        accent: '#fbbf24'
      },
      {
        icon: 'fa-solid fa-wand-magic-sparkles',
        title: 'AI Content Generation',
        detail: 'Prompt Gemini AI to write, refine, and suggest engaging library promo content in seconds.',
        grad: 'linear-gradient(135deg,#3b0764 0%,#1e1b4b 100%)',
        accent: '#a78bfa'
      },
      {
        icon: 'fa-solid fa-layer-group',
        title: 'Google AI Studio App',
        detail: 'Deployed as a full AI Studio application — shareable, scalable, and always available online.',
        grad: 'linear-gradient(135deg,#064e3b 0%,#0f172a 100%)',
        accent: '#6ee7b7'
      },
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
    slide.style.background = s.grad;
    slide.innerHTML = `
      <div class="slide-inner">
        <div class="slide-icon-wrap" style="background:${s.accent}22;border-color:${s.accent}44">
          <i class="${s.icon} proj-slide-icon" style="color:${s.accent}"></i>
        </div>
        <div class="slide-text">
          <p class="slide-title" style="color:${s.accent}">${s.title}</p>
          <p class="slide-detail">${s.detail}</p>
        </div>
      </div>
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

/* ===== CONTACT FORM — FORMSPREE ===== */
(function initForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const ENDPOINT = form.action; // reads from the form's action attribute

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
    btn.disabled = true;
    feedback.className = 'form-feedback';

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (res.ok) {
        feedback.className = 'form-feedback success';
        feedback.textContent = '🎉 Message sent! I\'ll get back to you soon.';
        form.reset();
      } else {
        const data = await res.json();
        const msg = data.errors
          ? data.errors.map(err => err.message).join(', ')
          : 'Something went wrong. Please try again.';
        feedback.className = 'form-feedback error';
        feedback.textContent = '⚠️ ' + msg;
      }
    } catch (_) {
      feedback.className = 'form-feedback error';
      feedback.textContent = '⚠️ Network error. Please check your connection and try again.';
    } finally {
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      btn.disabled = false;
      setTimeout(() => { feedback.className = 'form-feedback'; }, 6000);
    }
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
