const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// Mobile navigation
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Close mobile navigation after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// Reservation modal
const reservationForm = document.getElementById("reservationForm");
const reservationModal = document.getElementById("reservationModal");
const modalClose = document.getElementById("modalClose");
const modalDone = document.getElementById("modalDone");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  reservationModal.classList.add("active");

  reservationForm.reset();
});

function closeModal() {
  reservationModal.classList.remove("active");
}

modalClose.addEventListener("click", closeModal);
modalDone.addEventListener("click", closeModal);


// Close modal when clicking outside
reservationModal.addEventListener("click", (event) => {
  if (event.target === reservationModal) {
    closeModal();
  }
});


// Escape key closes modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});


// Full menu button
const fullMenuBtn = document.getElementById("fullMenuBtn");

fullMenuBtn.addEventListener("click", () => {

  const menuCards = document.querySelectorAll(".menu-card");

  menuCards.forEach((card, index) => {

    card.style.transform = "translateY(-10px)";

    setTimeout(() => {
      card.style.transform = "";
    }, 400 + index * 100);

  });

  alert(
    "Our full seasonal menu is being prepared. Please contact Maison Noir for today's complete selection."
  );
});


// Navbar appearance on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    navbar.style.position = "fixed";
    navbar.style.background = "rgba(21, 21, 19, .95)";
    navbar.style.backdropFilter = "blur(12px)";
    navbar.style.height = "75px";

  } else {

    navbar.style.position = "absolute";
    navbar.style.background = "transparent";
    navbar.style.backdropFilter = "none";
    navbar.style.height = "90px";

  }

});


// Reveal animation
const revealElements = document.querySelectorAll(
  ".intro-content, .story-content, .menu-card, .experience-card, .reservation-content, .contact-grid"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("revealed");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {

  element.classList.add("reveal");

  observer.observe(element);

});


// Set minimum reservation date to today
const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;
