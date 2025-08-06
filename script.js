// Toggle Tools Section with accessibility improvements
const toggleBtn = document.getElementById("toggleToolsBtn");
const toolsSection = document.getElementById("toolsSection");

toggleBtn.addEventListener("click", () => {
  const isOpen = toolsSection.classList.toggle("open");
  toggleBtn.textContent = isOpen ? "See Less" : "See More";
  toggleBtn.setAttribute("aria-expanded", isOpen);
});

// Intersection Observer options
const observerOptions = {
  root: null,
  rootMargin: "0px 0px -100px 0px", // Trigger a bit before element fully in view
  threshold: 0,
};

// Observer for elements with animate-on-scroll class
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target); // Stop observing after reveal
    }
  });
}, observerOptions);

// Observe all animate-on-scroll elements
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  revealObserver.observe(el);
});

// Observer for skills with hidden/show classes
const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
      observer.unobserve(entry.target); // Stop observing after showing
    }
  });
}, observerOptions);

// Observe all skills with hidden class
document.querySelectorAll(".skill.hidden").forEach((skill) => {
  skillObserver.observe(skill);
});

// Optional: On load, you could still run these functions to catch already visible elements (fallback)
window.addEventListener("load", () => {
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    if (el.classList.contains("revealed")) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("revealed");
    }
  });

  document.querySelectorAll(".skill.hidden").forEach((skill) => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      skill.classList.add("show");
      skill.classList.remove("hidden");
    }
  });
});
