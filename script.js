document.addEventListener("DOMContentLoaded", function () {
  // "Personal greeting" button on main page
  const greetBtn = document.querySelector("#greet-btn");
  if (greetBtn) {
    greetBtn.addEventListener("click", function () {
      const name = prompt("What is your name?");
      if (name) {
        alert("Nice to meet you, " + name + "!");
      }
    });
  }

  // Contact form processing
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

      console.log({ name: name, email: email, message: message });
    });
  }
});
