const sections = document.querySelectorAll(
  "#home, #about, #skills, #projects, #experience, #education, #contact",
);
const navLinks = document.querySelectorAll("#navbar a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `#navbar a[href="#${entry.target.id}"]`,
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { threshold: 0.3 },
);

sections.forEach((section) => observer.observe(section));
