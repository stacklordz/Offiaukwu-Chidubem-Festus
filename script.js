const toggleBtn = document.getElementById('toggleToolsBtn');
const toolsSection = document.getElementById('toolsSection');

toggleBtn.addEventListener('click', () => {
    toolsSection.classList.toggle('open');
    toggleBtn.textContent = toolsSection.classList.contains('open') ? 'See Less' : 'See More';
});

// Check if element is in viewport
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
}

// Show all skills together on scroll when visible
function showSkillsOnScroll() {
    const skills = document.querySelectorAll('.skill.hidden');
    let anyVisible = false;
    skills.forEach(skill => {
        if (isInView(skill)) {
            skill.classList.add('show');
            skill.classList.remove('hidden');
            anyVisible = true;
        }
    });
    // Optional: If all skills shown, remove listener to optimize
    if (anyVisible && document.querySelectorAll('.skill.hidden').length === 0) {
        window.removeEventListener('scroll', showSkillsOnScroll);
    }
}

window.addEventListener('scroll', showSkillsOnScroll);
window.addEventListener('load', showSkillsOnScroll);
