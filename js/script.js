(function() {
  'use strict';

  /* ============ ICONS CONFIG ============ */
  const ICONS = {
    home: '<svg viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    user: '<svg viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    layers: '<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    folder: '<svg viewBox="0 0 24 24"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    palette: '<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    navigation: '<svg viewBox="0 0 24 24"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    code: '<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    repeat: '<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
    lightbulb: '<svg viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    bot: '<svg viewBox="0 0 24 24"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24"><path stroke="none" fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path stroke="none" fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.7 5.48-1.52 1.96-4.04 2.87-6.4 2.37-2.67-.54-4.83-2.73-5.32-5.44-.3-1.63-.14-3.35.59-4.86.82-1.64 2.4-2.88 4.22-3.32 1.75-.41 3.65-.23 5.25.61v4.22c-.67-.32-1.44-.45-2.18-.34-.9.12-1.74.74-2.11 1.56-.37.84-.33 1.85.1 2.66.41.76 1.19 1.25 2.04 1.34 1.11.11 2.23-.46 2.76-1.43.34-.63.48-1.37.49-2.1V.02h-1.8Z"/></svg>'
  };

  /* ============ DATA BINDING ============ */
  function renderData() {
    if (!window.PORTFOLIO_DATA) return;
    const data = PORTFOLIO_DATA;

    // --- Header ---
    document.getElementById('nav-footer-copy').innerHTML = `&copy; ${new Date().getFullYear()} amerafgan`;

    // Nav Links
    const navUl = document.getElementById('nav-links-list');
    navUl.innerHTML = data.nav.map(item => `
      <li><a href="${item.href}" class="nav-link" data-nav>
        <span class="icon">${ICONS[item.icon] || ''}</span> ${item.label}
      </a></li>
    `).join('');

    // --- Splash ---
    document.getElementById('splash-name').innerText = data.profile.name;

    // --- Hero ---
    document.getElementById('hero-img').src = data.profile.avatar;
    document.getElementById('hero-fallback').innerText = data.profile.avatarFallback;
    document.getElementById('hero-greeting').innerText = data.profile.greeting;
    document.getElementById('hero-name').innerHTML = data.profile.heroTitle;
    document.getElementById('hero-role').innerHTML = data.profile.roles.join(' <span class="hero-role-sep">|</span> ');
    document.getElementById('hero-status').innerText = data.profile.statusText;
    
    const socialWrap = document.getElementById('hero-social');
    socialWrap.innerHTML = `
      <a href="${data.profile.social.instagram}" target="_blank" class="social-icon"><span class="icon">${ICONS.instagram}</span></a>
      <a href="${data.profile.social.whatsapp}" target="_blank" class="social-icon"><span class="icon">${ICONS.whatsapp}</span></a>
      <a href="${data.profile.social.tiktok}" target="_blank" class="social-icon"><span class="icon">${ICONS.tiktok}</span></a>
      <a href="${data.profile.social.linkedin}" target="_blank" class="social-icon"><span class="icon">${ICONS.linkedin}</span></a>
      <a href="${data.profile.social.email}" class="social-icon"><span class="icon">${ICONS.mail}</span></a>
    `;

    // --- About ---
    document.getElementById('about-bio').innerHTML = data.about.bio.map(p => `<p>${p}</p>`).join('');
    document.getElementById('approach-grid').innerHTML = data.about.approach.map(item => `
      <div class="approach-item"><span class="icon">${ICONS[item.icon] || ''}</span> ${item.label}</div>
    `).join('');

    document.getElementById('detail-name').innerText = data.profile.name;
    document.getElementById('detail-location').innerText = data.profile.location;
    document.getElementById('detail-education').innerText = data.profile.education;
    document.getElementById('detail-interests').innerHTML = data.profile.interests.map(i => `<span class="interest-tag">${i}</span>`).join('');

    // --- Skills ---
    document.getElementById('skills-grid').innerHTML = data.skills.map(skill => `
      <div class="glass-card skill-card">
        <div class="skill-card-header">
          <div class="skill-icon-wrap"><span class="icon">${ICONS[skill.icon] || ''}</span></div>
          <div>
            <div class="skill-card-name">${skill.category}</div>
            <div class="skill-card-sub">${skill.subtitle}</div>
          </div>
        </div>
        <div class="skill-tags">
          ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');

    // --- Experience ---
    document.getElementById('experience-timeline').innerHTML = '<div class="timeline-line"></div>' + data.experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="glass-card timeline-card">
          <div class="timeline-year-row">
            <span class="timeline-year">${exp.year}</span>
            ${exp.isCurrent ? '<span class="timeline-present">Present</span>' : ''}
          </div>
          <h3 class="timeline-title">${exp.title}</h3>
          <p class="timeline-subtitle">${exp.type}</p>
          <p class="timeline-desc">${exp.description}</p>
          <div class="focus-tags">
            ${exp.focus.map(f => `<span class="focus-tag">${f}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    // --- Contact ---
    document.getElementById('contact-heading').innerText = data.contact.heading;
    document.getElementById('contact-desc').innerText = data.contact.description;
    document.getElementById('contact-email-val').innerText = data.profile.email;
    document.getElementById('contact-loc-val').innerText = data.profile.location;

    // --- Footer ---
    document.getElementById('footer-copy').innerText = data.footer.copy;
    document.getElementById('footer-tagline').innerText = data.footer.tagline;
    document.getElementById('footer-social').innerHTML = `
      <a href="${data.profile.social.instagram}" target="_blank" class="footer-social"><span class="icon">${ICONS.instagram}</span></a>
      <a href="${data.profile.social.whatsapp}" target="_blank" class="footer-social"><span class="icon">${ICONS.whatsapp}</span></a>
      <a href="${data.profile.social.tiktok}" target="_blank" class="footer-social"><span class="icon">${ICONS.tiktok}</span></a>
      <a href="${data.profile.social.linkedin}" target="_blank" class="footer-social"><span class="icon">${ICONS.linkedin}</span></a>
      <a href="${data.profile.social.email}" class="footer-social"><span class="icon">${ICONS.mail}</span></a>
    `;

    // --- Chat Bot ---
    document.getElementById('chat-bot-name').innerText = data.chatBot.name;
    document.getElementById('chat-quick-replies').innerHTML = data.chatBot.quickReplies.map(reply => `
      <button class="chat-quick-btn" data-q="${reply}">${reply}</button>
    `).join('');
  }

  /* ============ SPLASH SCREEN ============ */
  function initSplash() {
    const splash = document.getElementById('splash-screen');
    const header = document.getElementById('main-header');
    const content = document.getElementById('main-content');

    setTimeout(() => {
      splash.classList.add('hidden');
      setTimeout(() => {
        splash.style.display = 'none';
        content.classList.add('visible');
        header.classList.add('visible');
      }, 400);
    }, 2400);
  }

  /* ============ THEME TOGGLE ============ */
  function initTheme() {
    const root = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');

    function applyTheme(theme) {
      if (theme === 'light') {
        root.classList.remove('dark');
        root.classList.add('light');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'inline-flex';
      } else {
        root.classList.remove('light');
        root.classList.add('dark');
        iconSun.style.display = 'inline-flex';
        iconMoon.style.display = 'none';
      }
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
      const isDark = root.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }

  /* ============ MOBILE NAV ============ */
  function initNav() {
    const hamburger = document.getElementById('hamburger-btn');
    const navOverlay = document.getElementById('nav-overlay');
    const navDrawer = document.getElementById('nav-drawer');
    const navClose = document.getElementById('nav-close');

    function openNav() {
      navOverlay.classList.add('open');
      navDrawer.classList.add('open');
      hamburger.classList.add('hamburger-open');
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      navOverlay.classList.remove('open');
      navDrawer.classList.remove('open');
      hamburger.classList.remove('hamburger-open');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
      navDrawer.classList.contains('open') ? closeNav() : openNav();
    });
    navOverlay.addEventListener('click', closeNav);
    navClose.addEventListener('click', closeNav);
    
    // Bind after rendering
    document.querySelectorAll('[data-nav]').forEach(link => link.addEventListener('click', closeNav));
  }

  /* ============ SCROLL REVEAL ============ */
  function initScroll() {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 80
        ? '0 4px 30px rgba(0,0,0,0.15)' : 'none';
    });
  }

  /* ============ CONTACT FORM ============ */
  function initContact() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit-btn');
    const successMsg = document.getElementById('form-success');

    if(!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          submitBtn.innerHTML = '<span class="icon" style="width:16px;height:16px"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Sent!';
          successMsg.classList.add('show');
          contactForm.reset();
        } else {
          submitBtn.innerHTML = 'Error! Try again';
        }
      } catch (error) {
        submitBtn.innerHTML = 'Error! Try again';
      }

      setTimeout(() => {
        submitBtn.innerHTML = '<span class="icon" style="width:16px;height:16px"><svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></span> Send Message';
        submitBtn.disabled = false;
        successMsg.classList.remove('show');
      }, 3000);
    });
  }

  /* ============ AI CHAT WIDGET ============ */
  function initChat() {
    const chatFab = document.getElementById('chat-fab');
    const chatWidget = document.getElementById('chat-widget');
    const chatCloseBtn = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send');
    const chatNotif = document.getElementById('chat-notif');
    let chatOpen = false;
    let chatInitialized = false;

    if(!chatFab || !chatWidget) return;

    const data = window.PORTFOLIO_DATA?.chatBot || {};

    function toggleChat() {
      chatOpen = !chatOpen;
      if (chatOpen) {
        chatWidget.classList.add('open');
        chatNotif.style.display = 'none';
        chatInput.focus();
        if (!chatInitialized) {
          chatInitialized = true;
          addBotMsg(data.greeting);
        }
      } else {
        chatWidget.classList.remove('open');
      }
    }

    chatFab.addEventListener('click', toggleChat);
    chatCloseBtn.addEventListener('click', toggleChat);

    function addBotMsg(text) {
      const div = document.createElement('div');
      div.className = 'chat-msg chat-msg-bot';
      div.innerHTML = '<div class="chat-msg-avatar">' + ICONS.bot + '</div>'
        + '<div class="chat-bubble chat-bubble-bot">' + text + '</div>';
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addUserMsg(text) {
      const div = document.createElement('div');
      div.className = 'chat-msg chat-msg-user';
      div.innerHTML = '<div class="chat-bubble chat-bubble-user">' + text + '</div>';
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTyping() {
      const div = document.createElement('div');
      div.id = 'typing-ind';
      div.className = 'chat-msg chat-msg-bot';
      div.innerHTML = '<div class="chat-msg-avatar">' + ICONS.bot + '</div>'
        + '<div class="chat-bubble chat-bubble-bot"><div class="typing-dots"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div></div>';
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTyping() {
      const t = document.getElementById('typing-ind');
      if (t) t.remove();
    }

    function getBotResponse(q) {
      if(!data.responses) return "Sorry, I can't answer that right now.";
      const lowerQ = q.toLowerCase();
      
      for(let res of data.responses) {
        for(let key of res.keywords) {
          if(lowerQ.includes(key)) {
            return res.answer;
          }
        }
      }
      return data.fallback;
    }

    function processChat(text) {
      showTyping();
      setTimeout(() => {
        removeTyping();
        addBotMsg(getBotResponse(text));
      }, 800 + Math.random() * 700);
    }

    function sendMessage() {
      const text = chatInput.value.trim();
      if (!text) return;
      chatInput.value = '';
      addUserMsg(text);
      processChat(text);
    }

    chatSendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });
    
    document.querySelectorAll('.chat-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = btn.getAttribute('data-q');
        addUserMsg(q);
        processChat(q);
      });
    });
  }

  /* ============ INITIALIZATION ============ */
  document.addEventListener('DOMContentLoaded', () => {
    renderData();
    initSplash();
    initTheme();
    initNav();
    initScroll();
    initContact();
    initChat();
  });

})();
