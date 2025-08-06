// Toggle Tools Section with accessibility improvements
const toggleBtn = document.getElementById("toggleToolsBtn");
const toolsSection = document.getElementById("toolsSection");

toggleBtn.addEventListener("click", () => {
  const isOpen = toolsSection.classList.toggle("open");
  toggleBtn.textContent = isOpen ? "See Less" : "See More";
  toggleBtn.setAttribute("aria-expanded", isOpen);
});

