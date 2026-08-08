/* ==========================================================================
   Navigation Module
   Abhishek Salunkhe - Developer Portfolio
   ========================================================================== */

export function initNavigation() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.querySelector('.back-to-top');

  // Sticky Header state on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Back to top visibility
    if (window.scrollY > 500) {
      if (backToTopBtn) backToTopBtn.style.opacity = '1';
      if (backToTopBtn) backToTopBtn.style.pointerEvents = 'auto';
    } else {
      if (backToTopBtn) backToTopBtn.style.opacity = '0';
      if (backToTopBtn) backToTopBtn.style.pointerEvents = 'none';
    }

    // Active link highlighting
    let current = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Menu Toggle
  mobileToggle?.addEventListener('click', () => {
    navLinksContainer?.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (icon) {
      if (navLinksContainer?.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    }
  });

  // Close Mobile Menu when link clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer?.classList.remove('active');
      const icon = mobileToggle?.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });

  // Smooth Back to Top Scroll
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
