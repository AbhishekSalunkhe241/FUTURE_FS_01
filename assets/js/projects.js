/* ==========================================================================
   Projects Module
   Abhishek Salunkhe - Software Developer Portfolio
   ========================================================================== */

export function initProjectsAndSkills() {
  // Project Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-wrapper');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.classList.add('reveal', 'revealed');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Modal Logic
  const modalOverlay = document.getElementById('projectModal');
  const modalContainer = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const viewDetailsBtns = document.querySelectorAll('.view-project-details');

  const projectDetailsMap = {
    lostfound: {
      title: 'Lost & Found System',
      subtitle: 'Full-Stack Web Application for Reporting and Retrieving Lost Items',
      badge: 'Full-Stack Project',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS'],
      summary: 'The Lost & Found System is a robust full-stack web application built to streamline the process of reporting lost items, posting found items, and facilitating item recovery. It incorporates complete database integration, authentication, and structured backend API logic.',
      highlights: [
        'Lost and Found item reporting workflows with item details and categories',
        'Secure user authentication and role-based administration',
        'MongoDB database integration using Mongoose models for persistent item storage',
        'Image upload capability for visual item verification',
        'Restful backend API routes built with Node.js and Express.js'
      ],
      github: 'https://github.com/AbhishekSalunkhe241/lost-and-found-system',
      demo: 'https://lost-and-found-abhisheksalunkhe241.vercel.app/'
    },
    cartnova: {
      title: 'CartNova (Future FS-02)',
      subtitle: 'Full-Stack Mini E-Commerce Platform (Future Interns Task 2 Submission)',
      badge: 'Full-Stack Project',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      summary: 'CartNova (Future FS-02) is a responsive e-commerce storefront submission built for Task 2. It combines an interactive frontend UI with custom branding, live search filtering, and backend database persistence for product listings.',
      highlights: [
        'Product listings with real product images and hover effects',
        'Live search filtering for quick product lookup',
        'Add to Cart interaction with real-time item count badge update',
        'Modal popup for detailed product specs and preview',
        'Custom branding and logo design with responsive layout'
      ],
      github: 'https://github.com/AbhishekSalunkhe241/FUTURE_FS_02',
      demo: 'https://cartnova-abhisheksalunkhe241.vercel.app/'
    },
    netflix: {
      title: 'Netflix Clone',
      subtitle: 'Frontend Netflix-Inspired Interface & Media Catalog',
      badge: 'Frontend Project',
      tech: ['HTML', 'CSS', 'JavaScript'],
      summary: 'A clean, responsive frontend Netflix clone designed to replicate modern streaming user experience, featuring dynamic hero banners, movie card rows, accordion FAQ, and crisp CSS design.',
      highlights: [
        'Responsive hero section with background overlay and modern typography',
        'Movie catalog cards with smooth hover elevation',
        'Interactive accordion section for frequently asked questions',
        'Fluid layout optimized across mobile, tablet, and desktop viewports'
      ],
      github: 'https://github.com/AbhishekSalunkhe241',
      demo: 'https://netflix-clone-abhisheksalunkhe241.vercel.app/'
    }
  };

  viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      const details = projectDetailsMap[projectId];

      if (details && modalContainer && modalOverlay) {
        modalContainer.innerHTML = `
          <div style="margin-bottom: 1.5rem;">
            <span class="badge badge-cyan" style="margin-bottom: 0.75rem;">${details.badge}</span>
            <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--text-primary);">${details.title}</h2>
            <p style="color: var(--text-muted); font-size: 1rem;">${details.subtitle}</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--cyan-glow); font-family: var(--font-mono); margin-bottom: 0.75rem;">Technologies Used</h4>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              ${details.tech.map(t => `<span class="badge badge-primary">${t}</span>`).join('')}
            </div>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--cyan-glow); font-family: var(--font-mono); margin-bottom: 0.5rem;">Project Overview</h4>
            <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.98rem;">${details.summary}</p>
          </div>

          <div style="margin-bottom: 2rem;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--cyan-glow); font-family: var(--font-mono); margin-bottom: 0.75rem;">Key Engineering Features</h4>
            <ul style="list-style: none; padding-left: 0;">
              ${details.highlights.map(h => `
                <li style="display: flex; align-items: flex-start; gap: 0.6rem; color: var(--text-secondary); margin-bottom: 0.5rem; font-size: 0.95rem;">
                  <span style="color: var(--secondary-accent);">✔</span> ${h}
                </li>
              `).join('')}
            </ul>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding-top: 1rem; border-top: 1px solid var(--border-color);">
            <a href="${details.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <i class="fab fa-github"></i> GitHub Repository
            </a>
            ${details.demo && details.demo !== '#' ? `
              <a href="${details.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            ` : ''}
          </div>
        `;

        modalOverlay.classList.add('active');
      }
    });
  });

  modalCloseBtn?.addEventListener('click', () => {
    modalOverlay?.classList.remove('active');
  });

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
}
