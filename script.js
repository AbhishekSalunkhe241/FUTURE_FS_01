<script>
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const submitBtn = contactForm.querySelector(".btn");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    // Show confirmation with fade-in
    formStatus.textContent = "✅ Message sent! Thank you for reaching out.";
    formStatus.style.color = "green";
    formStatus.classList.add("show");

    // Clear form fields
    contactForm.reset();

    // Add pulse animation to button
    submitBtn.classList.add("pulse");
    setTimeout(() => {
      submitBtn.classList.remove("pulse");
    }, 400); // remove after animation ends

    // Fade-out after 4 seconds
    setTimeout(() => {
      formStatus.classList.remove("show");
    }, 4000);
  });
</script>