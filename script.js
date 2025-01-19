document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Form validation
  document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully!");
  });
});
// JavaScript to highlight the active navigation menu
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active class from all nav links
          navLinks.forEach((link) => link.classList.remove("active"));

          // Add active class to the current nav link
          const id = entry.target.id;
          const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    {
      root: null, // Observe in the viewport
      threshold: 0.5, // Trigger when 50% of the section is visible
    }
  );

  // Observe all sections
  sections.forEach((section) => observer.observe(section));
});

// Adjust scrolling to account for the fixed header height
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 60; // Adjust this based on your header height
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    const skillLevel = bar.getAttribute("data-skill");
    bar.style.width = skillLevel + "%";
  });
});
