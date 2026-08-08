/* ==========================================================================
   Main Application Bootstrapper
   Abhishek Salunkhe - Developer Portfolio
   ========================================================================== */

import { initNavigation } from './navigation.js';
import { initTerminal } from './terminal.js';
import { initProjectsAndSkills } from './projects.js';
import { initContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize sub-modules
  initNavigation();
  initTerminal();
  initProjectsAndSkills();
  initContactForm();

  // Scroll Reveal Observer Setup
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
