// Portfolio Data
const portfolioData = {
  personal: {
    name: "Abu Talha Ansari",
    title: "AI & ML Innovator",
    location: "Bengaluru, India",
    phone: "+918147598020",
    email: "scientificallystarabu@gmail.com",
    avatar_url: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/cfabecf3-40ee-40b1-b7cf-831fd057c79d.png",
    cgpa: "9.71",
    objective: "Energetic and adaptable AI & ML undergraduate with experience in end-to-end development of AI solutions, aiming to bring technical depth, creativity, and problem-solving skills to dynamic teams tackling next-gen challenges."
  },
  
  taglines: [
    "AI & ML Innovator",
    "Deep Learning Specialist", 
    "NLP Expert",
    "Problem Solver",
    "Full-Stack Developer"
  ],
  
  projects: [
    {
      name: "E-commerce Text Classification",
      type: "Internship Project",
      description: "Designed and implemented deep learning models (LSTM, Bi-LSTM, GRU, CNN-LSTM, Attention LSTM) to classify product descriptions from an e-commerce dataset into categories. Utilized advanced NLP techniques and pre-trained embeddings to achieve superior accuracy in product categorization.",
      technologies: ["Python", "TensorFlow", "Keras", "NLP", "FastText", "LSTM"],
      results: "Achieved over 90% accuracy using optimized architectures and pre-trained embeddings. Improved the reliability of category tagging for product listings, demonstrating proficiency in deep learning and NLP applications.",
      github: "https://github.com/GamerBhai02"
    },
    {
      name: "Smart Power Grid Theft Detection", 
      type: "Mini Project",
      description: "Developed an AI-based anomaly detection system using smart meter data to identify patterns of electricity theft. Implemented machine learning algorithms including Isolation Forest and time series analysis to detect unusual consumption patterns.",
      technologies: ["Python", "Scikit-learn", "Isolation Forest", "Time Series Analysis", "Pandas"],
      results: "Increased anomaly detection accuracy by 35% compared to traditional methods. Proposed a scalable model for integration with smart grids, showcasing expertise in anomaly detection and data analysis.",
      github: "https://github.com/GamerBhai02"
    },
    {
      name: "NewsSense: Why Is My Fund Down?",
      type: "Hackathon Project",
      description: "Built a comprehensive system to analyze mutual fund drops by linking financial data to real-world news using advanced NLP and semantic search. Integrated multiple APIs and implemented efficient similarity search using FAISS vector database.",
      technologies: ["Python", "Alpha Vantage API", "Bing News Scraper", "Sentence Transformers", "FAISS", "NLP"],
      results: "Enabled semantic explanation for fund dips, enhancing investor awareness and decision-making. Achieved finalist status among top submissions in the hackathon, demonstrating innovation in financial technology.",
      github: "https://github.com/GamerBhai02"
    },
    {
      name: "PackPal: AI Travel Assistant", 
      type: "Personal Project",
      description: "Created an intelligent AI assistant that recommends personalized packing lists based on destination, weather conditions, trip duration, and user preferences. Integrated with weather APIs and OpenAI for natural language processing.",
      technologies: ["Python", "Streamlit", "OpenAI API", "Weather APIs", "NLP"],
      results: "Improved packing efficiency and reduced overpacking in user tests by 40%. Delivered an intuitive user experience with natural language input processing and smart recommendations.",
      github: "https://github.com/GamerBhai02"
    },
    {
      name: "Fish-Schooling Traffic Simulation",
      type: "Academic Project",
      description: "Simulated real-time traffic behavior using bio-inspired fish schooling algorithms to optimize vehicular flow at intersections. Implemented complex algorithms for traffic pattern analysis and congestion reduction.",
      technologies: ["Python", "Pygame", "NumPy", "Algorithm Design"],
      results: "Demonstrated 25% decrease in congestion under simulated urban conditions. Showcased understanding of bio-inspired algorithms and their practical applications in urban planning.",
      github: "https://github.com/GamerBhai02"
    },
    {
      name: "AI-Enhanced Retail Experience",
      type: "Sparkathon Project – Team Synapse",
      description: "Led the development of an AI-powered retail solution featuring personal shopping recommendations, automated product video generation, eco-score evaluation, and intelligent cart suggestions. Comprehensive full-stack application with modern UI/UX.",
      technologies: ["Python", "React", "NLP", "OpenAI", "FFMPEG", "Eco-score Metrics", "JavaScript"],
      results: "Delivered a fully functional prototype covering customer experience, sustainability metrics, and intelligent recommendations. Demonstrated leadership and full-stack development capabilities.",
      github: "https://github.com/GamerBhai02"
    }
  ],
  
  chatbotResponses: {
    about: "Hi! I'm Abu Talha Ansari, a passionate AI & ML undergraduate at New Horizon College with an outstanding 9.71 CGPA. I specialize in developing end-to-end AI solutions, from deep learning models to full-stack applications. I've worked on projects ranging from e-commerce classification to financial NLP systems.",
    
    cgpa: "Abu maintains an exceptional 9.71 CGPA in his BE AIML program at New Horizon College of Engineering (2023-2027). His academic excellence is also reflected in his PUC score of 94.16% and SSLC score of 86.5%. This consistent high performance demonstrates his dedication to learning and technical excellence.",
    
    projects: "Abu has completed 6 major projects showcasing diverse AI/ML skills: 1) E-commerce text classification with 90%+ accuracy, 2) Smart grid theft detection with 35% improvement, 3) NewsSense financial NLP system (hackathon finalist), 4) PackPal AI travel assistant with 40% efficiency boost, 5) Bio-inspired traffic simulation with 25% congestion reduction, and 6) AI-enhanced retail experience with full-stack implementation.",
    
    skills: "Abu is proficient in Python, TensorFlow, Keras, and specializes in Deep Learning, NLP, and full-stack development. His technical stack includes C, C++, Java, JavaScript, SQL, React.js, MongoDB, MySQL, and various AI frameworks. He also has experience with cloud platforms, data visualization tools like Power BI, and modern development practices.",
    
    contact: "You can reach Abu at scientificallystarabu@gmail.com or call +918147598020. Connect with him professionally on LinkedIn (linkedin.com/in/gamerbhai02), check his code on GitHub (github.com/GamerBhai02), or follow him on Twitter (@gamerbhai02). He's always open to discussing AI/ML opportunities and innovative projects!",
    
    education: "Abu is currently pursuing BE in AIML at New Horizon College of Engineering (2023-2027) with an outstanding 9.71 CGPA. He completed his PUC from Cambridge PU College with 94.16% and SSLC from SJES Central School with 86.5%. His educational journey shows consistent excellence and strong foundation in both technical and analytical skills.",
    
    experience: "Abu has diverse experience including internship work in e-commerce text classification, hackathon participation as a finalist, team leadership in Sparkathon projects, and independent development of innovative AI solutions. He has hands-on experience in machine learning, deep learning, NLP, web development, and has worked with real-world datasets and APIs.",
    
    achievements: "Key achievements include: 9.71 CGPA (top performer), 90%+ accuracy in ML projects, hackathon finalist status, 35% improvement in anomaly detection systems, successful team leadership, and development of multiple end-to-end AI applications. His work demonstrates both technical depth and practical problem-solving abilities.",
    
    interests: "Abu is passionate about exploring advancements in AI and emerging technologies, reading research papers, participating in community events, playing sports like cricket and badminton, volunteering for social causes, and staying updated with the latest trends in machine learning and artificial intelligence.",
    
    default: "I'm an AI assistant trained on Abu's portfolio data. You can ask me about his projects, skills, education, achievements, or contact information. Try asking: 'Tell me about Abu's projects', 'What is his CGPA?', 'What programming languages does he know?', or 'How can I contact Abu?'"
  }
};

// Particle System for Hero Background
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = 80;
    this.mouse = { x: 0, y: 0 };
    
    this.resize();
    this.init();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.updateMouse(e));
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  updateMouse(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  }
  
  init() {
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Boundary collision
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
      
      // Mouse interaction
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx += dx * force * 0.01;
        particle.vy += dy * force * 0.01;
      }
      
      // Pulsing effect
      particle.pulsePhase += 0.02;
      const pulseSize = particle.size + Math.sin(particle.pulsePhase) * 0.5;
      
      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
      this.ctx.fill();
      
      // Draw connections
      this.particles.slice(index + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(otherParticle.x, otherParticle.y);
          const opacity = (120 - distance) / 120 * 0.15;
          this.ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// Tagline Rotator
class TaglineRotator {
  constructor(element, taglines) {
    this.element = element;
    this.taglines = taglines;
    this.currentIndex = 0;
    this.start();
  }
  
  start() {
    this.updateTagline();
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.taglines.length;
      this.updateTagline();
    }, 3500);
  }
  
  updateTagline() {
    this.element.style.opacity = '0';
    setTimeout(() => {
      this.element.textContent = this.taglines[this.currentIndex];
      this.element.style.opacity = '1';
    }, 300);
  }
}

// Scroll Animations and Navigation
class ScrollAnimator {
  constructor() {
    this.init();
    this.handleScroll();
    window.addEventListener('scroll', () => this.handleScroll());
  }
  
  init() {
    // Smooth scroll for all navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
          const headerHeight = 80;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  handleScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 100;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
    
    // Update navigation active state
    this.updateActiveNavigation();
  }
  
  updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-list a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

// Counter Animation
class CounterAnimator {
  static animate(element, target, duration = 2000, decimals = 0) {
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * easeOutCubic;
      
      if (decimals > 0) {
        element.textContent = current.toFixed(decimals);
      } else {
        element.textContent = Math.round(current);
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }
    
    requestAnimationFrame(updateCounter);
  }
  
  static init() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          const target = parseFloat(entry.target.dataset.target);
          const decimals = target % 1 !== 0 ? 2 : 0;
          this.animate(entry.target, target, 2000, decimals);
          entry.target.classList.add('counted');
        }
      });
    });
    
    counters.forEach(counter => observer.observe(counter));
  }
}

// Project Renderer and Modal
class ProjectManager {
  static render() {
    const container = document.querySelector('.projects-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.projects.forEach((project, index) => {
      const projectElement = document.createElement('div');
      projectElement.className = 'card project-card glass';
      projectElement.innerHTML = `
        <div class="card__body">
          <div class="project-type">${project.type}</div>
          <h3 class="project-title">${project.name}</h3>
          <p class="project-description">${this.truncateText(project.description, 150)}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-result">${this.truncateText(project.results, 100)}</div>
        </div>
      `;
      
      projectElement.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openModal(project);
      });
      
      container.appendChild(projectElement);
    });
  }
  
  static truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
  
  static openModal(project) {
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    if (!modal || !title || !body) return;
    
    title.textContent = project.name;
    body.innerHTML = `
      <div class="project-type" style="margin-bottom: 16px; color: var(--cyber-purple);">
        <strong>Type:</strong> ${project.type}
      </div>
      <div style="margin-bottom: 20px;">
        <strong style="color: var(--cyber-cyan);">Description:</strong>
        <p style="margin-top: 8px; line-height: 1.6;">${project.description}</p>
      </div>
      <div style="margin-bottom: 20px;">
        <strong style="color: var(--cyber-cyan);">Technologies Used:</strong>
        <div class="project-tech" style="margin-top: 8px;">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
      <div style="margin-bottom: 20px;">
        <strong style="color: var(--cyber-green);">Results & Impact:</strong>
        <p style="margin-top: 8px; line-height: 1.6;">${project.results}</p>
      </div>
      <div class="flex gap-8 mt-8" style="justify-content: center;">
        <a href="${project.github}" target="_blank" class="btn btn--primary btn--sm">
          View on GitHub
        </a>
        <button class="btn btn--outline btn--sm" onclick="ProjectManager.closeModal(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'});">
          Discuss Project
        </button>
      </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  
  static closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }
}

// AI Chatbot
class AIChatbot {
  constructor() {
    this.isOpen = false;
    this.chatBody = document.getElementById('chatBody');
    this.isTyping = false;
    this.init();
  }
  
  init() {
    const toggleBtn = document.getElementById('chatToggle');
    const closeBtn = document.getElementById('chatClose');
    const chatForm = document.getElementById('chatForm');
    const chatCta = document.getElementById('chatCta');
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggle();
      });
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.close();
      });
    }
    
    if (chatCta) {
      chatCta.addEventListener('click', (e) => {
        e.stopPropagation();
        this.open();
      });
    }
    
    if (chatForm) {
      chatForm.addEventListener('submit', (e) => this.handleMessage(e));
    }
    
    // Initialize with welcome message
    if (this.chatBody) {
      this.addMessage('bot', 'Hi there! 👋 I\'m AI Abu, your virtual assistant trained on Abu Talha Ansari\'s portfolio. Ask me anything about his background, projects, skills, or achievements!');
      setTimeout(() => {
        this.addSuggestions();
      }, 1000);
    }
  }
  
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  
  open() {
    const chatWidget = document.getElementById('chatWidget');
    if (chatWidget) {
      chatWidget.classList.remove('hidden');
      this.isOpen = true;
      const chatInput = document.getElementById('chatMessage');
      if (chatInput) {
        chatInput.focus();
      }
    }
  }
  
  close() {
    const chatWidget = document.getElementById('chatWidget');
    if (chatWidget) {
      chatWidget.classList.add('hidden');
      this.isOpen = false;
    }
  }
  
  addMessage(sender, message) {
    if (!this.chatBody) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message chat-message--${sender}`;
    messageElement.textContent = message;
    this.chatBody.appendChild(messageElement);
    this.chatBody.scrollTop = this.chatBody.scrollHeight;
  }
  
  addSuggestions() {
    if (!this.chatBody) return;
    
    const suggestions = [
      'Tell me about Abu\'s projects',
      'What is his CGPA?', 
      'What programming languages does he know?',
      'How can I contact Abu?',
      'What are his achievements?'
    ];
    
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'chat-suggestions';
    suggestionsContainer.style.cssText = 'margin-top: 12px; display: flex; flex-direction: column; gap: 6px;';
    
    const suggestionLabel = document.createElement('p');
    suggestionLabel.textContent = 'Quick questions:';
    suggestionLabel.style.cssText = 'font-size: 12px; color: var(--color-text-secondary); margin: 0 0 8px 0;';
    suggestionsContainer.appendChild(suggestionLabel);
    
    suggestions.forEach(suggestion => {
      const button = document.createElement('button');
      button.className = 'btn btn--outline btn--sm';
      button.style.cssText = 'font-size: 11px; padding: 6px 10px; text-align: left; justify-content: flex-start;';
      button.textContent = suggestion;
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const chatInput = document.getElementById('chatMessage');
        if (chatInput) {
          chatInput.value = suggestion;
          const chatForm = document.getElementById('chatForm');
          if (chatForm) {
            chatForm.dispatchEvent(new Event('submit'));
          }
        }
        suggestionsContainer.remove();
      });
      suggestionsContainer.appendChild(button);
    });
    
    this.chatBody.appendChild(suggestionsContainer);
    this.chatBody.scrollTop = this.chatBody.scrollHeight;
  }
  
  showTypingIndicator() {
    if (!this.chatBody) return null;
    
    const typingElement = document.createElement('div');
    typingElement.className = 'chat-message chat-message--bot typing-indicator';
    typingElement.innerHTML = '<span>AI Abu is typing</span><span class="typing-dots">...</span>';
    typingElement.style.cssText = 'opacity: 0.7; font-style: italic;';
    this.chatBody.appendChild(typingElement);
    this.chatBody.scrollTop = this.chatBody.scrollHeight;
    return typingElement;
  }
  
  handleMessage(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const input = document.getElementById('chatMessage');
    if (!input) return;
    
    const message = input.value.trim().toLowerCase();
    
    if (!message || this.isTyping) return;
    
    this.addMessage('user', input.value);
    input.value = '';
    this.isTyping = true;
    
    // Show typing indicator
    const typingIndicator = this.showTypingIndicator();
    
    // Simulate realistic typing delay
    setTimeout(() => {
      if (typingIndicator && typingIndicator.parentNode) {
        typingIndicator.remove();
      }
      const response = this.getResponse(message);
      this.addMessage('bot', response);
      this.isTyping = false;
    }, 1000 + Math.random() * 1500);
  }
  
  getResponse(message) {
    // Advanced keyword matching with context
    if (message.includes('project') || message.includes('work') || message.includes('built')) {
      return portfolioData.chatbotResponses.projects;
    } else if (message.includes('cgpa') || message.includes('grade') || message.includes('gpa') || message.includes('marks')) {
      return portfolioData.chatbotResponses.cgpa;
    } else if (message.includes('skill') || message.includes('programming') || message.includes('language') || message.includes('technology') || message.includes('tech')) {
      return portfolioData.chatbotResponses.skills;
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach') || message.includes('connect')) {
      return portfolioData.chatbotResponses.contact;
    } else if (message.includes('about') || message.includes('who') || message.includes('introduce') || message.includes('tell me')) {
      return portfolioData.chatbotResponses.about;
    } else if (message.includes('education') || message.includes('college') || message.includes('university') || message.includes('study') || message.includes('degree')) {
      return portfolioData.chatbotResponses.education;
    } else if (message.includes('experience') || message.includes('internship') || message.includes('job')) {
      return portfolioData.chatbotResponses.experience;
    } else if (message.includes('achievement') || message.includes('accomplish') || message.includes('award') || message.includes('recognition')) {
      return portfolioData.chatbotResponses.achievements;
    } else if (message.includes('interest') || message.includes('hobby') || message.includes('like') || message.includes('passion')) {
      return portfolioData.chatbotResponses.interests;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to chat with you. I'm here to share everything about Abu's impressive journey in AI & ML. What would you like to know about his work or achievements?";
    } else if (message.includes('thanks') || message.includes('thank you')) {
      return "You're welcome! Feel free to ask me anything else about Abu's portfolio, or reach out to him directly if you'd like to discuss opportunities or collaborations.";
    } else {
      return portfolioData.chatbotResponses.default;
    }
  }
}

// Contact Form Handler
class ContactForm {
  static init() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };
      
      // Form validation
      if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      if (!submitBtn) return;
      
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      
      // Simulate API call
      setTimeout(() => {
        alert(`Thank you, ${data.name}! Your message has been received. Abu will get back to you soon at ${data.email}.`);
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
      }, 2000);
    });
  }
}

// Main Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio app initializing...');
  
  // Initialize all components
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    new ParticleSystem(canvas);
  }
  
  const taglineElement = document.getElementById('rotatingTagline');
  if (taglineElement) {
    new TaglineRotator(taglineElement, portfolioData.taglines);
  }
  
  new ScrollAnimator();
  CounterAnimator.init();
  ProjectManager.render();
  new AIChatbot();
  ContactForm.init();
  
  // Modal event handlers
  const modalClose = document.getElementById('modalClose');
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.stopPropagation();
      ProjectManager.closeModal();
    });
  }
  
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      e.stopPropagation();
      ProjectManager.closeModal();
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('projectModal');
      const chatWidget = document.getElementById('chatWidget');
      
      if (modal && !modal.classList.contains('hidden')) {
        ProjectManager.closeModal();
      } else if (chatWidget && !chatWidget.classList.contains('hidden')) {
        const chatClose = document.getElementById('chatClose');
        if (chatClose) {
          chatClose.click();
        }
      }
    }
  });
  
  // Prevent modal/chatbot conflicts
  document.addEventListener('click', (e) => {
    // Allow normal form interactions
    if (e.target.closest('#contactForm')) {
      e.stopPropagation();
      return;
    }
    
    // Close chat if clicking outside
    const chatWidget = document.getElementById('chatWidget');
    const chatToggle = document.getElementById('chatToggle');
    const chatCta = document.getElementById('chatCta');
    
    if (chatWidget && !chatWidget.classList.contains('hidden')) {
      if (!e.target.closest('#chatWidget') && 
          e.target !== chatToggle && 
          e.target !== chatCta &&
          !e.target.closest('.chat-toggle') &&
          !e.target.closest('.btn')) {
        const closeBtn = document.getElementById('chatClose');
        if (closeBtn) closeBtn.click();
      }
    }
  });
  
  // Smooth page load effect
  setTimeout(() => {
    document.body.classList.add('loaded');
    console.log('Portfolio app loaded successfully!');
  }, 100);
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden - optimizing performance');
  } else {
    console.log('Page visible - full performance');
  }
});

// Handle resize events efficiently
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    console.log('Window resized - updating layouts');
  }, 250);
});

// Export for debugging and future use
window.PortfolioApp = {
  ParticleSystem,
  TaglineRotator,
  ScrollAnimator,
  CounterAnimator,
  ProjectManager,
  AIChatbot,
  ContactForm,
  portfolioData
};