// BB Helping Edge — small static-site configuration.
// Update these values before publishing.
const CONFIG = {
  contactEmail: "contact@bbhelpingedge.com",
  phone: "YOUR PHONE NUMBER",
  whatsapp: "919705813391"
};

document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form?.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(data.get("subject"));
  const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
  if (!CONFIG.contactEmail || CONFIG.contactEmail.includes("YOUR_EMAIL")) {
    note.textContent = "Please add the official contact email in script.js before using this form.";
    return;
  }
  window.location.href = `mailto:${CONFIG.contactEmail}?subject=${subject}&body=${body}`;
});

// Active navigation section.
const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll('.nav a[href^="#"]')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
  });
}, {rootMargin: "-40% 0px -55% 0px", threshold: 0});
sections.forEach(section => observer.observe(section));

// Optional contact display values.
if (CONFIG.phone && !CONFIG.phone.includes("YOUR")) document.getElementById("phoneText").innerHTML = CONFIG.phone;
if (CONFIG.contactEmail && !CONFIG.contactEmail.includes("YOUR_EMAIL")) document.getElementById("emailText").innerHTML = CONFIG.contactEmail;

// WhatsApp chat link.
const whatsappLink = document.getElementById("whatsappLink");
if (whatsappLink) {
  const whatsappNumber = CONFIG.whatsapp?.replace(/\D/g, "") || "";
  if (whatsappNumber) {
    const message = encodeURIComponent("Hello BB Helping Edge, I want to know more about your work.");
    whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  }
}
