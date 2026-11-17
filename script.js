(function () {
  "use strict";

  function esc(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatInline(str) {
    return esc(str)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function renderDetailsBox(sys) {
    if (!sys) return "";
    let parts = [];

    if (sys.problem) {
      parts.push(`<h4>Problem</h4><p>${formatInline(sys.problem)}</p>`);
    }

    if (sys.pipeline && sys.pipeline.length) {
      const steps = sys.pipeline
        .map(
          (p) =>
            `<div class="pipe-step"><strong>${esc(p.step)}. ${esc(p.name)}</strong><span>${formatInline(p.desc)}</span></div>`
        )
        .join("");
      parts.push(`<h4>Architecture Pipeline</h4><div class="pipeline-list">${steps}</div>`);
    }

    if (sys.deepDive && sys.deepDive.length) {
      const items = sys.deepDive
        .map((d) => `<li><strong>${esc(d.title)}:</strong> ${formatInline(d.detail)}</li>`)
        .join("");
      parts.push(`<h4>Technical Deep Dive</h4><ul class="deep-list">${items}</ul>`);
    }

    if (sys.benchmarks && sys.benchmarks.length) {
      const rows = sys.benchmarks
        .map(
          (b) =>
            `<tr><td>${esc(b.metric)}</td><td>${esc(b.baseline)}</td><td class="res">${esc(b.result)}</td><td>${esc(b.delta)}</td></tr>`
        )
        .join("");
      parts.push(
        `<h4>Benchmarks &amp; Impact</h4>
         <table class="bench-table">
           <thead><tr><th>Metric</th><th>Baseline</th><th>Result</th><th>Impact</th></tr></thead>
           <tbody>${rows}</tbody>
         </table>`
      );
    }

    if (sys.visualAsset || sys.secondaryAsset) {
      let imgs = "";
      if (sys.visualAsset) imgs += `<img src="${esc(sys.visualAsset)}" alt="${esc(sys.title)}" loading="lazy" />`;
      if (sys.secondaryAsset) imgs += `<img src="${esc(sys.secondaryAsset)}" alt="${esc(sys.title)} output" loading="lazy" />`;
      parts.push(`<h4>Visual Output</h4><div class="visual-wrap">${imgs}</div>`);
    }

    if (sys.stack && sys.stack.length) {
      parts.push(`<div class="stack-line"><strong>Stack:</strong> ${sys.stack.map(esc).join(" · ")}</div>`);
    }

    return `
      <details class="sys-details">
        <summary>Details, architecture &amp; benchmarks ▾</summary>
        <div class="details-box">${parts.join("")}</div>
      </details>
    `;
  }

  function renderExperience() {
    const groups = [
      {
        elId: "terafac-bullets",
        ids: ["vision-301", "api-103", "vision-106", "sam-microservices", "obj-maker", "sim-pnc-301"],
      },
      {
        elId: "attentionverse-bullets",
        ids: ["thecoder-ecosystem", "thecoder-search", "iit-mandi-health", "repetition-cerebro"],
      },
      {
        elId: "samsung-bullets",
        ids: ["samsung-display"],
      },
    ];

    groups.forEach((g) => {
      const ul = document.getElementById(g.elId);
      if (!ul) return;
      ul.innerHTML = g.ids
        .map((id) => {
          const sys = SYSTEMS[id];
          if (!sys) return "";
          const badge = sys.metricBadge ? ` <span class="proj-badge">${esc(sys.metricBadge)}</span>` : "";
          const commits = sys.commits ? ` <span style="color:#6b7280;font-size:12.5px;">(${esc(sys.commits)})</span>` : "";
          return `
            <li id="sys-${esc(id)}">
              <strong>${esc(sys.title)}</strong>${badge}${commits} — ${formatInline(sys.summary)}
              ${renderDetailsBox(sys)}
            </li>
          `;
        })
        .join("");
    });
  }

  const PROJECT_ITEMS = [
    { id: "gail-backend", cat: "client" },
    { id: "coal-india-rag", cat: "client" },
    { id: "proj-welding-mujoco", cat: "robotics" },
    { id: "proj-dexgraspvla", cat: "robotics" },
    { id: "proj-food101", cat: "aiml" },
    { id: "proj-i2v", cat: "aiml" },
    { id: "proj-amazon-ml", cat: "aiml" },
    { id: "proj-grammar-engine", cat: "aiml" },
    { id: "proj-chess-stream", cat: "backend" },
    { id: "proj-npc-world", cat: "backend" },
    { id: "proj-gemini-tutor", cat: "aiml" },
    { id: "proj-synchub", cat: "backend" },
    { id: "proj-quizzer", cat: "backend" },
    { id: "proj-fcn-decode", cat: "aiml" },
    { id: "proj-cuda-fractal", cat: "robotics" },
    { id: "proj-sunlink-face", cat: "backend" },
  ];

  let activeFilter = "all";
  let searchQuery = "";

  function renderProjects() {
    const container = document.getElementById("projects-list");
    if (!container) return;

    const filtered = PROJECT_ITEMS.filter(({ id, cat }) => {
      const sys = SYSTEMS[id];
      if (!sys) return false;
      const matchesCat = activeFilter === "all" || cat === activeFilter;
      if (!matchesCat) return false;
      if (!searchQuery) return true;
      const hay = [sys.title, sys.subtitle, sys.summary, (sys.stack || []).join(" "), sys.category]
        .join(" ")
        .toLowerCase();
      return hay.includes(searchQuery);
    });

    if (!filtered.length) {
      container.innerHTML = `<p style="color:#6b7280;font-size:14px;padding:12px 0;">No projects matched "${esc(searchQuery)}".</p>`;
      return;
    }

    container.innerHTML = filtered
      .map(({ id }) => {
        const sys = SYSTEMS[id];
        const linkHtml = (sys.links || [])
          .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`)
          .join(" · ");
        const badge = sys.metricBadge ? `<span class="proj-badge">${esc(sys.metricBadge)}</span>` : "";
        const timeline = sys.timeline ? `<span class="proj-year">${esc(sys.timeline)}</span>` : "";

        return `
          <div class="proj-row" id="sys-${esc(id)}">
            <div class="proj-title-line">
              <span class="proj-title">${esc(sys.title)}</span>
              ${badge}
              ${timeline}
            </div>
            <p class="proj-desc">${formatInline(sys.summary)}</p>
            <div class="proj-meta-line">
              <span>${esc(sys.category)}</span>
              ${linkHtml ? `<span>${linkHtml}</span>` : ""}
            </div>
            ${renderDetailsBox(sys)}
          </div>
        `;
      })
      .join("");
  }

  function renderSkills() {
    const container = document.getElementById("skills-container");
    const proofBox = document.getElementById("skill-proof");
    if (!container || !proofBox || typeof SKILL_NODES === "undefined") return;

    const grouped = {};
    SKILL_NODES.forEach((node) => {
      if (!grouped[node.category]) grouped[node.category] = [];
      grouped[node.category].push(node);
    });

    container.innerHTML = Object.entries(grouped)
      .map(
        ([cat, nodes]) => `
        <div class="skills-group">
          <div class="skills-group-title">${esc(cat)}</div>
          <div class="skill-pills">
            ${nodes
              .map(
                (n) =>
                  `<button type="button" class="skill-pill" data-skill="${esc(n.name)}">${esc(n.name)}</button>`
              )
              .join("")}
          </div>
        </div>
      `
      )
      .join("");

    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".skill-pill");
      if (!btn) return;
      const skillName = btn.dataset.skill;
      const node = SKILL_NODES.find((n) => n.name === skillName);
      if (!node) return;

      const wasActive = btn.classList.contains("active");
      container.querySelectorAll(".skill-pill").forEach((b) => b.classList.remove("active"));

      if (wasActive) {
        proofBox.classList.remove("visible");
        proofBox.innerHTML = "";
        return;
      }

      btn.classList.add("active");
      const links = (node.items || [])
        .map((id) => {
          const s = SYSTEMS[id];
          if (!s) return "";
          return `<li><a href="#sys-${esc(id)}" onclick="jumpToSystem('${esc(id)}')"><strong>${esc(s.title)}</strong></a> — ${esc(s.metricBadge || s.category)}</li>`;
        })
        .filter(Boolean)
        .join("");

      proofBox.innerHTML = `<strong>Production proof for ${esc(node.name)}:</strong><ul class="deep-list" style="margin-top:6px;">${links}</ul>`;
      proofBox.classList.add("visible");
    });
  }

  window.jumpToSystem = function (id) {
    const target = document.getElementById("sys-" + id);
    if (!target) {
      // Reset filters if hidden in projects
      activeFilter = "all";
      searchQuery = "";
      const searchEl = document.getElementById("proj-search");
      if (searchEl) searchEl.value = "";
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.filter === "all");
      });
      renderProjects();
    }
    const el = document.getElementById("sys-" + id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const det = el.querySelector("details");
      if (det) det.open = true;
    }
  };

  function renderEducation() {
    const container = document.getElementById("education-list");
    if (!container) return;
    const ids = ["edu-ggsipu", "edu-diploma"];
    container.innerHTML = ids
      .map((id) => {
        const sys = SYSTEMS[id];
        if (!sys) return "";
        return `
          <div class="edu-item" id="sys-${esc(id)}">
            <div class="edu-head">
              <span>${esc(sys.title)}</span>
              <span class="edu-date">${esc(sys.timeline)}</span>
            </div>
            <div class="edu-sub">${esc(sys.subtitle)}</div>
            ${renderDetailsBox(sys)}
          </div>
        `;
      })
      .join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();

    const tabs = document.getElementById("filter-tabs");
    if (tabs) {
      tabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        tabs.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilter = btn.dataset.filter || "all";
        renderProjects();
      });
    }

    const searchInput = document.getElementById("proj-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderProjects();
      });
    }
  });
})();
