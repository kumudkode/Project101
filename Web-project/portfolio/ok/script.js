// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Nav Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains('active');
  if (isOpen) {
    navLinks.style.display = 'none';
    navLinks.classList.remove('active');
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '10px';
    navLinks.style.right = '10px';
    navLinks.style.background = '#0a0f1e';
    navLinks.style.padding = '2rem';
    navLinks.style.borderRadius = '16px';
    navLinks.style.border = '1px solid rgba(255,255,255,0.1)';
    navLinks.classList.add('active');
  }
});

// Scroll to Section
document.getElementById("scrollToProjects").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// --------------------------------------------------------
// 1. Intersection Observer for Staggered Animations
// --------------------------------------------------------
const animateElements = document.querySelectorAll(
  ".hero-text, .hero-card, .section-head, .project-card, .service-card, .pricing-card, .contact-box"
);

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

animateElements.forEach((el, index) => {
  el.setAttribute("data-animate", "");
  // Add a slight delay based on child index for grid items
  if(el.parentElement.classList.contains('grid')) {
     const siblings = Array.from(el.parentElement.children);
     const index = siblings.indexOf(el);
     el.style.transitionDelay = `${index * 100}ms`;
  }
  observer.observe(el);
});

// --------------------------------------------------------
// 2. Mouse "Spotlight" Effect for Cards
// --------------------------------------------------------
const cards = document.querySelectorAll(".card");

document.addEventListener("mousemove", (e) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});