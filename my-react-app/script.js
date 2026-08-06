// ─── NAV SCROLL ───────────────────────────────────────────
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);

  // Show floating CTA after scrolling past hero
  const floatingCta = document.querySelector(".floating-cta");
  if (floatingCta) {
    floatingCta.classList.toggle("visible", window.scrollY > 500);
  }
});

// ─── BURGER MENU ──────────────────────────────────────────
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

function closeMobile() {
  mobileMenu.classList.remove("open");
}

// ─── SCROLL ANIMATIONS ────────────────────────────────────
const fadeEls = document.querySelectorAll(
  ".service-card, .team-card, .testi-card, .process-step, " +
    ".tech__text, .tech__visual, .about__grid > *, " +
    ".contact__info, .contact__form-wrap, .faq-item",
);

fadeEls.forEach((el) => el.classList.add("fade-up"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(
          () => {
            entry.target.classList.add("in-view");
          },
          80 * (Array.from(fadeEls).indexOf(entry.target) % 6),
        );
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

fadeEls.forEach((el) => io.observe(el));

// ─── FAQ ACCORDION ────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const isOpen = item.classList.contains("open");

  // Close all
  document
    .querySelectorAll(".faq-item.open")
    .forEach((el) => el.classList.remove("open"));

  // Open clicked if it was closed
  if (!isOpen) item.classList.add("open");
}

// ─── FORM SUBMIT ──────────────────────────────────────────
function submitForm() {
  const fname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;

  if (!fname || !email || !service) {
    alert("Please fill in your name, email, and the service you need.");
    return;
  }

  document.getElementById("bookingForm").style.display = "none";
  document.getElementById("formSuccess").style.display = "block";
}

// ─── SMOOTH SCROLL OFFSET ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const navH = document.getElementById("nav").offsetHeight;
      window.scrollTo({
        top: target.offsetTop - navH,
        behavior: "smooth",
      });
    }
  });
});

// ─── SET MIN DATE ON BOOKING ──────────────────────────────
const dateInput = document.getElementById("date");
if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
}
