document.addEventListener("DOMContentLoaded", function () {
  // === Language toggle ===
  const langToggleBtn = document.querySelector("#lang-toggle");
  const i18nElements = document.querySelectorAll("[data-i18n]");

  function applyLanguage(lang) {
    i18nElements.forEach(function (el) {
      const text = el.getAttribute("data-" + lang);
      if (text) {
        el.textContent = text;
      }
    });

    if (langToggleBtn) {
      langToggleBtn.textContent = lang === "en" ? "RU" : "EN";
    }

    localStorage.setItem("language", lang);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", function () {
      const current = localStorage.getItem("language") || "en";
      const next = current === "en" ? "ru" : "en";
      applyLanguage(next);
    });
  }

  const savedLang = localStorage.getItem("language") || "en";
  applyLanguage(savedLang);

  // === Personal greeting ===
  const greetBtn = document.querySelector("#greet-btn");
  if (greetBtn) {
    greetBtn.addEventListener("click", function () {
      const name = prompt("What is your name?");
      if (name) {
        alert("Nice to meet you, " + name + "!");
      }
    });
  }

  // === Contact form ===
  const contactForm = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");
  if (contactForm && feedback) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        feedback.textContent = "Please fill in all fields.";
        feedback.classList.remove("text-success");
        feedback.classList.add("text-danger");
        return;
      }

      feedback.textContent = "Thank you, " + name + "! Your message has been recorded (demo).";
      feedback.classList.remove("text-danger");
      feedback.classList.add("text-success");
      contactForm.reset();
    });
  }
});
