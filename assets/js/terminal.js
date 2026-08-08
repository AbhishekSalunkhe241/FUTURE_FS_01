/* ==========================================================================
   Interactive Developer Terminal Module
   Abhishek Salunkhe - Developer Portfolio
   ========================================================================== */

export function initTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalBody = document.getElementById('terminalBody');
  const commandChips = document.querySelectorAll('.chip');

  if (!terminalInput || !terminalBody) return;

  const commands = {
    help: () => `
<div class="terminal-output">
  <p>💡 <span style="color: var(--cyan-glow); font-weight: 600;">Available Commands:</span></p>
  <p>  <span style="color: var(--secondary-accent);">about</span>     - Software Developer background & summary</p>
  <p>  <span style="color: var(--secondary-accent);">skills</span>    - Technical stack breakdown</p>
  <p>  <span style="color: var(--secondary-accent);">projects</span>  - Real-world full-stack & frontend projects</p>
  <p>  <span style="color: var(--secondary-accent);">contact</span>   - Connect with Abhishek</p>
  <p>  <span style="color: var(--secondary-accent);">clear</span>     - Clear terminal history</p>
  <p>  <span style="color: var(--secondary-accent);">sudo hire</span> - Direct message prompt for recruiters</p>
</div>`,

    about: () => `
<div class="terminal-output">
  <p>👨‍💻 <span style="color: var(--text-primary); font-weight: 600;">Abhishek Salunkhe</span></p>
  <p>Software Developer | Full-Stack Developer</p>
  <p>Engineering student (Graduation: 2028) targeting Software Developer & Full-Stack engineering opportunities at product-based companies. Skilled in modern web technologies, backend APIs, and database integration.</p>
</div>`,

    skills: () => `
<div class="terminal-output">
  <p>🛠️ <span style="color: var(--cyan-glow); font-weight: 600;">Tech Stack Overview:</span></p>
  <p>  <span style="color: var(--text-primary);">Frontend:</span> HTML, CSS, JavaScript, React</p>
  <p>  <span style="color: var(--text-primary);">Backend:</span> Node.js, Express.js</p>
  <p>  <span style="color: var(--text-primary);">Database:</span> MongoDB</p>
  <p>  <span style="color: var(--text-primary);">Programming:</span> C, C++, Java, Python</p>
  <p>  <span style="color: var(--text-primary);">Tools:</span> Git, GitHub</p>
</div>`,

    projects: () => `
<div class="terminal-output">
  <p>🚀 <span style="color: var(--purple-glow); font-weight: 600;">Featured Software Projects:</span></p>
  <p>1. <span style="color: #6EE7B7; font-weight: 600;">Lost & Found System</span> [Full-Stack] - Node, Express, MongoDB, EJS, Auth</p>
  <p>2. <span style="color: #67E8F9; font-weight: 600;">CartNova</span> [Full-Stack] - E-Commerce Storefront, Node, Express, MongoDB</p>
  <p>3. <span style="color: #A5B4FC; font-weight: 600;">Netflix Clone</span> [Frontend] - HTML, CSS, JavaScript, Responsive UI</p>
</div>`,

    contact: () => `
<div class="terminal-output">
  <p>📬 <span style="color: var(--secondary-accent); font-weight: 600;">Contact Details:</span></p>
  <p>  Email:    abhishelsalunkhe568@gmail.com</p>
  <p>  LinkedIn: linkedin.com/in/abhishek-salunkhe-a876b3362/</p>
  <p>  GitHub:   github.com/AbhishekSalunkhe241</p>
  <p>  LeetCode: leetcode.com/u/Abhishek241/</p>
  <p>  CodeChef: codechef.com/users/watch_card_87</p>
</div>`,

    'sudo hire': () => `
<div class="terminal-output" style="border-left-color: var(--secondary-accent);">
  <p>🎉 <span style="color: var(--secondary-accent); font-weight: 700; font-size: 1rem;">HIRING MODE ACTIVATED!</span></p>
  <p>I am actively seeking Software Developer / SDE internships and entry-level roles at product-based companies.</p>
  <p style="margin-top: 0.5rem;"><a href="#contact" class="btn btn-primary" style="padding: 0.4rem 1rem; font-size: 0.8rem; display: inline-flex;">Connect via Contact Form →</a></p>
</div>`,

    clear: () => {
      const historyLines = terminalBody.querySelectorAll('.history-line');
      historyLines.forEach(line => line.remove());
      return '';
    }
  };

  function executeCommand(cmdStr) {
    const cleanCmd = cmdStr.trim().toLowerCase();
    
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line history-line';
    commandLine.innerHTML = `
      <span class="prompt-symbol">❯</span>
      <span class="prompt-dir">abhishek@portfolio:~$</span>
      <span class="command-text">${escapeHtml(cmdStr)}</span>
    `;
    
    const inputWrapper = terminalBody.querySelector('.terminal-input-wrapper');
    terminalBody.insertBefore(commandLine, inputWrapper);

    if (cleanCmd === '') return;

    if (commands[cleanCmd]) {
      const outputHtml = commands[cleanCmd]();
      if (outputHtml) {
        const outputDiv = document.createElement('div');
        outputDiv.className = 'history-line';
        outputDiv.innerHTML = outputHtml;
        terminalBody.insertBefore(outputDiv, inputWrapper);
      }
    } else {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'terminal-output history-line';
      errorDiv.style.borderLeftColor = '#EF4444';
      errorDiv.innerHTML = `<p style="color: #F87171;">Command not found: '${escapeHtml(cmdStr)}'. Type <span style="color: var(--cyan-glow); cursor: pointer;" onclick="document.getElementById('terminalInput').value='help'; document.getElementById('terminalInput').focus();">help</span> to view commands.</p>`;
      terminalBody.insertBefore(errorDiv, inputWrapper);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.value;
      terminalInput.value = '';
      executeCommand(cmd);
    }
  });

  commandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        terminalInput.value = cmd;
        executeCommand(cmd);
        terminalInput.value = '';
      }
    });
  });

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
  }
}
