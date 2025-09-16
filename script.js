// VANTA Waves background
let vantaEffect = VANTA.WAVES({
  el: "#background",  // attach to background div
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x1e1e1e,
  shininess: 15.00,
  waveHeight: 20.00,
  waveSpeed: 0.75,
  zoom: 1.00,
  backgroundColor: 0x111111
});

// Expanding divider effect
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

function handleScroll() {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const title = section.querySelector(".section-title");
    const divider = section.querySelector(".full-divider");

    if (title && divider) {
      const rect = title.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

      let minWidth = 40;
      let maxWidth = section.clientWidth * 0.9; // stays inside section
      let newWidth = minWidth + (maxWidth - minWidth) * progress;

      divider.style.width = newWidth + "px";
    }
  });
}

// Contact Form Submission (Web3Forms)
document.querySelector(".contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset(); // clear fields
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("⚠️ Could not send message. Check internet or Web3Forms setup.");
  }
});

// Typewriter Effect (one-time tagline)
const tagline = document.querySelector(".hero-tagline");
const text = "Computer Engineer | Aspiring Data Scientist | AI & Web Developer";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    tagline.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 30); 
  }
}

window.addEventListener("load", typeWriter);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetSelector = this.getAttribute('href');
    if (targetSelector.length > 1) { // skip "#" links
      const target = document.querySelector(targetSelector);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Auto-close when clicking a link (optional)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
