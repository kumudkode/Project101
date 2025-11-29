// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Scroll to projects button
const scrollBtn = document.getElementById("scrollToProjects");
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-icon");

  question.addEventListener("click", () => {
    const isOpen = answer.style.maxHeight;
    // Close all
    faqItems.forEach((i) => {
      i.querySelector(".faq-answer").style.maxHeight = null;
      i.querySelector(".faq-icon").textContent = "+";
    });

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});

// Simple fade-in on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

// Attach to elements
document
  .querySelectorAll(
    ".hero-text, .hero-card, .project-card, .service-card, .pricing-card, .team, .faq-item"
  )
  .forEach((el) => {
    el.setAttribute("data-animate", "");
    observer.observe(el);
  });
