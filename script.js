// ============================================================================
// ANURAG PANDEY (@feignbird) — WORKBENCH CONTROLLER & TECHNICAL INSPECTOR
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const DATA = window.INSPECTOR_DATA || {};
  const SKILLS = window.SKILL_NODES || [];
  const orderedIds = Object.keys(DATA);
  let currentInspectId = null;

  // --------------------------------------------------------------------------
  // 1. SLIDE-OVER TECHNICAL INSPECTOR DRAWER
  // --------------------------------------------------------------------------
  const drawer = document.getElementById('inspector-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawerBody = document.getElementById('drawer-body');
  const drawerCode = document.getElementById('drawer-code');
  const drawerCat = document.getElementById('drawer-category');
  const prevBtn = document.getElementById('drawer-prev-btn');
  const nextBtn = document.getElementById('drawer-next-btn');
  const closeBtn = document.getElementById('drawer-close-btn');

  function formatInlineCode(str) {
    if (!str) return '';
    return str.replace(/`([^`]+)`/g, '<code style="font-family:var(--font-mono);font-size:0.8em;color:var(--accent-cyan);background:rgba(56,189,248,0.1);padding:1px 5px;border-radius:4px;">$1</code>');
  }

  function openInspector(id, pushHash = true) {
    const item = DATA[id];
    if (!item) return;

    currentInspectId = id;
    drawerCode.textContent = item.code || 'SYS // INSPECTOR';
    drawerCat.textContent = item.category || 'Technical Dossier';

    // Build Pipeline HTML
    let pipelineHtml = '';
    if (item.pipeline && item.pipeline.length) {
      pipelineHtml = `
        <div class="d-section-label">01 // Architecture &amp; Execution Pipeline</div>
        <div class="d-pipeline">
          ${item.pipeline.map(p => `
            <div class="d-pipe-node">
              <span class="d-pipe-step">STEP ${p.step}</span>
              <div class="d-pipe-name">${formatInlineCode(p.name)}</div>
              <div class="d-pipe-desc">${formatInlineCode(p.desc)}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Build Visual Artifact Showcase HTML (if visualAsset exists)
    let visualHtml = '';
    if (item.visualAsset) {
      visualHtml = `
        <div class="d-section-label">Visual Output Artifact</div>
        <div class="d-visual-box">
          <div class="d-visual-grid">
            <img src="${item.visualAsset}" alt="${item.title}" class="d-visual-img" />
            ${item.secondaryAsset ? `<img src="${item.secondaryAsset}" alt="${item.title} output 2" class="d-visual-img" />` : ''}
          </div>
          <p class="d-visual-caption">${formatInlineCode(item.visualCaption || '')}</p>
        </div>
      `;
    }

    // Build Deep Dive HTML
    let deepDiveHtml = '';
    if (item.deepDive && item.deepDive.length) {
      deepDiveHtml = `
        <div class="d-section-label">02 // Deep Technical &amp; Mathematical Breakdown</div>
        <div class="d-deep-list">
          ${item.deepDive.map(d => `
            <div class="d-deep-item">
              <div class="d-deep-title">${formatInlineCode(d.title)}</div>
              <div class="d-deep-detail">${formatInlineCode(d.detail)}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Build Quantitative Benchmarks HTML
    let benchHtml = '';
    if (item.benchmarks && item.benchmarks.length) {
      benchHtml = `
        <div class="d-section-label">03 // Quantitative Benchmarks &amp; Verification</div>
        <table class="d-bench-table">
          <thead>
            <tr>
              <th>Metric / Evaluation Case</th>
              <th>Baseline / Context</th>
              <th>Measured Result</th>
              <th>Impact / Delta</th>
            </tr>
          </thead>
          <tbody>
            ${item.benchmarks.map(b => `
              <tr>
                <td>${formatInlineCode(b.metric)}</td>
                <td>${formatInlineCode(b.baseline)}</td>
                <td class="d-res">${formatInlineCode(b.result)}</td>
                <td class="d-delta">${formatInlineCode(b.delta)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }

    // Build Stack HTML
    let stackHtml = '';
    if (item.stack && item.stack.length) {
      stackHtml = `
        <div class="d-section-label">04 // Technology &amp; Mathematical Stack</div>
        <div class="d-stack-wrap">
          ${item.stack.map(s => `<span class="d-stack-pill">${s}</span>`).join('')}
        </div>
      `;
    }

    // Build Links HTML
    let linksHtml = '';
    if (item.links && item.links.length) {
      linksHtml = `
        <div class="d-links-row">
          ${item.links.map(l => {
            if (l.url.startsWith('#inspect=')) {
              const targetId = l.url.replace('#inspect=', '');
              return `<button type="button" class="btn btn-primary btn-sm" data-inspect-inner="${targetId}">${l.label} →</button>`;
            }
            return `<a href="${l.url}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">${l.label} ↗</a>`;
          }).join('')}
        </div>
      `;
    }

    drawerBody.innerHTML = `
      <h2 class="d-title">${formatInlineCode(item.title)}</h2>
      <div class="d-subtitle">${formatInlineCode(item.subtitle)}</div>

      <div class="d-meta-strip">
        <span class="d-meta-pill">Timeline: <strong>${item.timeline}</strong></span>
        <span class="d-meta-pill">Scope: <strong>${item.commits}</strong></span>
        <span class="d-meta-pill">Role: <strong>${item.role}</strong></span>
      </div>

      <div class="d-summary-box">
        ${formatInlineCode(item.summary)}
      </div>

      ${item.problem ? `
        <div class="d-section-label">00 // Engineering Problem &amp; Constraints</div>
        <p class="d-problem-text">${formatInlineCode(item.problem)}</p>
      ` : ''}

      ${visualHtml}
      ${pipelineHtml}
      ${deepDiveHtml}
      ${benchHtml}
      ${stackHtml}
      ${linksHtml}
    `;

    // Bind any inner inspect buttons
    drawerBody.querySelectorAll('[data-inspect-inner]').forEach(btn => {
      btn.addEventListener('click', () => {
        openInspector(btn.getAttribute('data-inspect-inner'));
      });
    });

    drawerBody.scrollTop = 0;
    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');

    if (pushHash) {
      history.replaceState(null, '', `#inspect=${id}`);
    }
  }

  // Open Skill Node Inspector
  function openSkillInspector(skillObj) {
    currentInspectId = null;
    drawerCode.textContent = 'SKILL // GRAPH';
    drawerCat.textContent = skillObj.category;

    const linkedItems = (skillObj.items || [])
      .map(id => DATA[id])
      .filter(Boolean);

    drawerBody.innerHTML = `
      <h2 class="d-title">${skillObj.name}</h2>
      <div class="d-subtitle">Production Repositories, Dissertations &amp; Systems Built With This Technology</div>

      <div class="d-summary-box">
        Verified across <strong>${linkedItems.length} core engineering systems</strong> in Anurag Pandey's portfolio. Click any system below to open its full architectural breakdown and benchmarks.
      </div>

      <div class="d-section-label">Connected Production Systems &amp; Projects (${linkedItems.length})</div>
      <div class="d-deep-list">
        ${linkedItems.map(item => `
          <div class="d-deep-item" style="cursor:pointer;border-color:rgba(56,189,248,0.28);" data-skill-target="${item.id}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px;">
              <span style="font-family:var(--font-mono);font-size:0.7rem;color:var(--accent-cyan);">${item.code} · ${item.timeline}</span>
              <span style="font-family:var(--font-mono);font-size:0.72rem;color:var(--accent-emerald);">Open Dossier →</span>
            </div>
            <div class="d-deep-title">${formatInlineCode(item.title)}</div>
            <div class="d-deep-detail">${formatInlineCode(item.summary)}</div>
          </div>
        `).join('')}
      </div>
    `;

    drawerBody.querySelectorAll('[data-skill-target]').forEach(card => {
      card.addEventListener('click', () => {
        openInspector(card.getAttribute('data-skill-target'));
      });
    });

    drawerBody.scrollTop = 0;
    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
  }

  function closeInspector() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
    if (window.location.hash.startsWith('#inspect=')) {
      history.replaceState(null, '', window.location.pathname);
    }
  }

  function cycleInspector(dir) {
    if (!orderedIds.length) return;
    const idx = currentInspectId ? orderedIds.indexOf(currentInspectId) : 0;
    const nextIdx = (idx + dir + orderedIds.length) % orderedIds.length;
    openInspector(orderedIds[nextIdx]);
  }

  // Bind all [data-inspect] elements across the page
  document.querySelectorAll('[data-inspect]').forEach(el => {
    el.addEventListener('click', (e) => {
      const id = el.getAttribute('data-inspect');
      if (id) {
        e.preventDefault();
        openInspector(id);
      }
    });
  });

  closeBtn.addEventListener('click', closeInspector);
  backdrop.addEventListener('click', closeInspector);
  prevBtn.addEventListener('click', () => cycleInspector(-1));
  nextBtn.addEventListener('click', () => cycleInspector(1));

  // Render Interactive Skill Nodes
  const skillContainer = document.getElementById('skill-nodes-container');
  if (skillContainer && SKILLS.length) {
    skillContainer.innerHTML = SKILLS.map((s, idx) => `
      <button type="button" class="skill-node-btn spotlight-card" data-skill-idx="${idx}">
        <div class="skill-node-left">
          <span class="skill-node-cat">${s.category}</span>
          <span class="skill-node-name">${s.name}</span>
        </div>
        <span class="skill-node-count">${s.items.length} systems →</span>
      </button>
    `).join('');

    skillContainer.querySelectorAll('[data-skill-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-skill-idx'), 10);
        if (SKILLS[idx]) openSkillInspector(SKILLS[idx]);
      });
    });
  }

  // Check URL hash on initial load (e.g., #inspect=vision-301)
  if (window.location.hash.startsWith('#inspect=')) {
    const initialId = window.location.hash.replace('#inspect=', '');
    if (DATA[initialId]) {
      setTimeout(() => openInspector(initialId, false), 150);
    }
  }

  // --------------------------------------------------------------------------
  // 2. ⌘K / CTRL+K COMMAND PALETTE MODAL
  // --------------------------------------------------------------------------
  const cmdkBackdrop = document.getElementById('cmdk-backdrop');
  const cmdkInput = document.getElementById('cmdk-input');
  const cmdkResults = document.getElementById('cmdk-results');
  const cmdkOpenBtn = document.getElementById('cmdk-open-btn');
  const heroCmdkBtn = document.getElementById('hero-cmdk-btn');
  const cmdkCloseBtn = document.getElementById('cmdk-close-btn');
  let cmdkActiveIdx = 0;
  let currentCmdkList = [];

  function buildSearchCorpus() {
    const items = orderedIds.map(id => {
      const d = DATA[id];
      return {
        type: 'inspect',
        id: d.id,
        code: d.code,
        title: d.title,
        subtitle: `${d.category} · ${d.timeline} · ${d.commits}`,
        searchBlob: `${d.title} ${d.subtitle} ${d.summary} ${(d.stack || []).join(' ')} ${d.category}`.toLowerCase()
      };
    });

    SKILLS.forEach((s, idx) => {
      items.push({
        type: 'skill',
        skillIdx: idx,
        code: 'SKILL // NODE',
        title: `Skill: ${s.name}`,
        subtitle: `${s.category} · Inspect ${s.items.length} connected systems`,
        searchBlob: `${s.name} ${s.category}`.toLowerCase()
      });
    });

    items.push(
      {
        type: 'link',
        url: 'resume.html',
        code: 'DOC // PDF',
        title: 'Open Printable 1-Page CV / Resume',
        subtitle: 'ATS-friendly 1-page engineering resume',
        searchBlob: 'resume cv pdf print 1-page'
      },
      {
        type: 'link',
        url: 'Anurag_Pandey_Resume.tex',
        code: 'DOC // LATEX',
        title: 'Download LaTeX Resume Source (.tex)',
        subtitle: 'Anurag_Pandey_Resume.tex',
        searchBlob: 'latex tex source resume download'
      }
    );
    return items;
  }

  const corpus = buildSearchCorpus();

  function renderCmdkResults(query = '') {
    const q = query.trim().toLowerCase();
    currentCmdkList = q
      ? corpus.filter(item => item.searchBlob.includes(q))
      : corpus.slice(0, 14);

    cmdkActiveIdx = 0;

    if (!currentCmdkList.length) {
      cmdkResults.innerHTML = `<div style="padding:18px;text-align:center;color:var(--text-muted);font-family:var(--font-mono);font-size:0.8rem;">No matching systems found for "${query}"</div>`;
      return;
    }

    cmdkResults.innerHTML = currentCmdkList.map((item, i) => `
      <button type="button" class="cmdk-item ${i === 0 ? 'active' : ''}" data-cmdk-idx="${i}">
        <div class="cmdk-item-left">
          <span class="cmdk-item-title">${item.title}</span>
          <span class="cmdk-item-sub">${item.subtitle}</span>
        </div>
        <span class="cmdk-item-code">${item.code} →</span>
      </button>
    `).join('');

    cmdkResults.querySelectorAll('.cmdk-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-cmdk-idx'), 10);
        triggerCmdkItem(currentCmdkList[idx]);
      });
    });
  }

  function triggerCmdkItem(item) {
    if (!item) return;
    closeCmdk();
    if (item.type === 'inspect') {
      openInspector(item.id);
    } else if (item.type === 'skill') {
      openSkillInspector(SKILLS[item.skillIdx]);
    } else if (item.type === 'link') {
      window.open(item.url, '_blank');
    }
  }

  function openCmdk() {
    cmdkBackdrop.classList.add('open');
    cmdkBackdrop.setAttribute('aria-hidden', 'false');
    cmdkInput.value = '';
    renderCmdkResults('');
    setTimeout(() => cmdkInput.focus(), 40);
  }

  function closeCmdk() {
    cmdkBackdrop.classList.remove('open');
    cmdkBackdrop.setAttribute('aria-hidden', 'true');
  }

  if (cmdkOpenBtn) cmdkOpenBtn.addEventListener('click', openCmdk);
  if (heroCmdkBtn) heroCmdkBtn.addEventListener('click', openCmdk);
  if (cmdkCloseBtn) cmdkCloseBtn.addEventListener('click', closeCmdk);
  if (cmdkBackdrop) {
    cmdkBackdrop.addEventListener('click', (e) => {
      if (e.target === cmdkBackdrop) closeCmdk();
    });
  }

  if (cmdkInput) {
    cmdkInput.addEventListener('input', (e) => {
      renderCmdkResults(e.target.value);
    });
  }

  // Global Keyboard Shortcuts (⌘K / Ctrl+K, Esc, ←, →, ↑, ↓, Enter)
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdkBackdrop.classList.contains('open')) {
        closeCmdk();
      } else {
        openCmdk();
      }
      return;
    }

    if (cmdkBackdrop.classList.contains('open')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeCmdk();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentCmdkList.length) {
          cmdkActiveIdx = (cmdkActiveIdx + 1) % currentCmdkList.length;
          updateCmdkHighlight();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentCmdkList.length) {
          cmdkActiveIdx = (cmdkActiveIdx - 1 + currentCmdkList.length) % currentCmdkList.length;
          updateCmdkHighlight();
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentCmdkList[cmdkActiveIdx]) {
          triggerCmdkItem(currentCmdkList[cmdkActiveIdx]);
        }
      }
      return;
    }

    if (drawer.classList.contains('open')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeInspector();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        cycleInspector(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        cycleInspector(1);
      }
    }
  });

  function updateCmdkHighlight() {
    const buttons = cmdkResults.querySelectorAll('.cmdk-item');
    buttons.forEach((b, idx) => {
      b.classList.toggle('active', idx === cmdkActiveIdx);
      if (idx === cmdkActiveIdx) {
        b.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. PROFILE PHOTO vs. @FEIGNBIRD AVATAR HUD SWITCHER
  // --------------------------------------------------------------------------
  const switchBtns = document.querySelectorAll('.switch-btn');
  const imgReal = document.getElementById('profile-img-real');
  const imgAvatar = document.getElementById('profile-img-avatar');
  const caption = document.getElementById('profile-caption');
  const hudMode = document.getElementById('hud-mode-label');

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-target');
      if (target === 'avatar') {
        imgReal.classList.remove('active');
        imgAvatar.classList.add('active');
        caption.textContent = '@feignbird · GitHub & Systems Alias';
        if (hudMode) hudMode.textContent = 'MODE: SYNTH_AVATAR';
      } else {
        imgAvatar.classList.remove('active');
        imgReal.classList.add('active');
        caption.textContent = 'Anurag Pandey · Delhi / Chandigarh';
        if (hudMode) hudMode.textContent = 'MODE: REAL_OPTICAL';
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. PROJECT CATEGORY FILTER TABS
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.bento-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 5. CURSOR-TRACKING RADIAL SPOTLIGHT ON CARDS
  // --------------------------------------------------------------------------
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.spotlight-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // --------------------------------------------------------------------------
  // 6. 3D POINT-CLOUD BACKGROUND + BOTTOM-LEFT SE(3) COORDINATE TRIAD HUD
  // --------------------------------------------------------------------------
  const canvas = document.getElementById('bg-canvas');
  const triadCanvas = document.getElementById('triad-canvas');
  const triadCoords = document.getElementById('triad-coords');

  if (canvas) {
    const ctx = canvas.getContext('2d');
    const tCtx = triadCanvas ? triadCanvas.getContext('2d') : null;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const numPoints = Math.min(75, Math.floor((width * height) / 18000));
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: (Math.random() - 0.5) * width * 1.1,
        y: (Math.random() - 0.5) * height * 1.1,
        z: Math.random() * 400 + 100,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28
      });
    }

    let angleX = 0.25;
    let angleY = 0.4;

    window.addEventListener('mousemove', (e) => {
      const nx = (e.clientX / width - 0.5) * 2;
      const ny = (e.clientY / height - 0.5) * 2;
      angleY = nx * 0.65;
      angleX = ny * 0.45;
    });

    function drawTriad(yaw, pitch) {
      if (!tCtx) return;
      tCtx.clearRect(0, 0, 54, 54);
      const cx = 27;
      const cy = 27;
      const len = 18;

      const axes = [
        { label: 'X', color: '#f87171', v: [1, 0, 0] },
        { label: 'Y', color: '#34d399', v: [0, -1, 0] },
        { label: 'Z', color: '#38bdf8', v: [0, 0, 1] }
      ];

      const cyaw = Math.cos(yaw), syaw = Math.sin(yaw);
      const cp = Math.cos(pitch), sp = Math.sin(pitch);

      axes.forEach(ax => {
        const [x, y, z] = ax.v;
        // Rotate Y then X
        const rx = x * cyaw + z * syaw;
        const rz = -x * syaw + z * cyaw;
        const ry = y * cp - rz * sp;

        const ex = cx + rx * len;
        const ey = cy + ry * len;

        tCtx.strokeStyle = ax.color;
        tCtx.lineWidth = 1.8;
        tCtx.beginPath();
        tCtx.moveTo(cx, cy);
        tCtx.lineTo(ex, ey);
        tCtx.stroke();

        tCtx.fillStyle = ax.color;
        tCtx.font = 'bold 8px JetBrains Mono, monospace';
        tCtx.fillText(ax.label, ex + (rx >= 0 ? 2 : -7), ey + (ry >= 0 ? 7 : -2));
      });
    }

    let tick = 0;
    function animate() {
      tick += 0.006;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -width * 0.6 || p.x > width * 0.6) p.vx *= -1;
        if (p.y < -height * 0.6 || p.y > height * 0.6) p.vy *= -1;

        const sx = width / 2 + p.x;
        const sy = height / 2 + p.y;

        ctx.fillStyle = 'rgba(56, 189, 248, 0.42)';
        ctx.beginPath();
        ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const s2x = width / 2 + p2.x;
          const s2y = height / 2 + p2.y;
          const dx = sx - s2x;
          const dy = sy - s2y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 135) {
            const alpha = (1 - dist / 135) * 0.14;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(s2x, s2y);
            ctx.stroke();
          }
        }
      }

      const yaw = tick + angleY;
      const pitch = 0.35 + angleX;
      drawTriad(yaw, pitch);

      if (triadCoords && Math.floor(tick * 100) % 4 === 0) {
        const degY = ((yaw * 180 / Math.PI) % 360).toFixed(1);
        const degP = ((pitch * 180 / Math.PI) % 360).toFixed(1);
        triadCoords.textContent = `RPY: ${degP}° / ${degY}° · PTS: ${numPoints}`;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }
});
