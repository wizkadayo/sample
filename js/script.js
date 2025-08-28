// Contact form validation + fake send + toast
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Basic HTML5 + manual validity check
    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      return;
    }
    // Simulate async send (replace with Formspree/EmailJS later)
    setTimeout(() => {
      // Reset & show toast
      contactForm.reset();
      contactForm.classList.remove("was-validated");
      const toastEl = document.getElementById("formToast");
      if (toastEl) bootstrap.Toast.getOrCreateInstance(toastEl).show();
    }, 300);
  });
}