/* ==========================================================================
   Contact Form & Toast Notification Module
   Abhishek Salunkhe - Developer Portfolio
   ========================================================================== */

export function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const toastNotification = document.getElementById('toastNotification');
  const toastText = document.getElementById('toastText');
  const submitBtn = contactForm?.querySelector('button[type="submit"]');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Preparing Message...`;

      setTimeout(() => {
        // Open default mail client with prefilled details for guaranteed delivery
        const mailtoUri = `mailto:abhishelsalunkhe568@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        window.location.href = mailtoUri;

        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fas fa-check"></i> Email Client Opened!`;
        submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';

        showToast(`Thank you, ${name}! Your email client has been launched.`, 'success');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
        }, 3500);
      }, 800);
    }
  });

  function showToast(msg, type = 'success') {
    if (!toastNotification || !toastText) return;

    toastText.innerText = msg;
    toastNotification.classList.add('show');

    if (type === 'error') {
      toastNotification.style.borderColor = '#EF4444';
    } else {
      toastNotification.style.borderColor = 'var(--secondary-accent)';
    }

    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4500);
  }
}
