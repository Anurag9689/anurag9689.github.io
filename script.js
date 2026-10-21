const PROJECTS = [
  {
    title: "Vision-Tactile Guided Robotic Welding in MuJoCo",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "Feb 2026 – May 2026",
    highlight: "85–90% Error Reduction (4.5 mm → 0.3 mm) · 36/40 (#1 in Batch)",
    desc: "Closed-loop robotic welding pipeline for the ABB IRB 1520ID in MuJoCo 3.x. Combines RealSense RGB-D and FoundationPose with BFS raycast surface probing, Kabsch/SVD plane fitting, and 3-plane intersection to achieve sub-millimeter weld precision in 18–22s.",
    tags: ["MuJoCo 3.x", "Open3D", "FoundationPose", "Kabsch / SVD", "Python"],
    link: ""
  },
  {
    title: "DexGraspVLA MuJoCo Simulation Bridge",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "Nov 2025 – Dec 2025",
    highlight: "7-DoF Franka Panda + 18-DoF Shadow Hand VLA Control",
    desc: "Ported the DexGraspVLA grasping policy to MuJoCo 3.x with a custom 6D-to-18D kinematic hand joint mapper, SAM 2 + Cutie video mask tracking, and a multi-head DINOv2 attention heatmap visualizer.",
    tags: ["MuJoCo 3.x", "PyTorch", "SAM 2", "Cutie", "DINOv2"],
    link: ""
  },
  {
    title: "obj_maker — 3D CAD/STEP Compiler & Gemini Multi-Agent Pipeline",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "Sep 2026",
    highlight: "20+ Primitives · Watertight ISO AP214 STEP Exporter",
    desc: "Parametric 3D geometry compiler and Three.js builder for welded industrial assemblies, paired with a Vertex AI Gemini multi-agent pipeline that reconstructs 3D CAD models from manufacturer photos.",
    tags: ["Node.js", "Three.js", "STEP B-Rep", "Vertex AI Gemini"],
    link: ""
  },
  {
    title: "3D Point Cloud Registration & Hemisphere Reachability",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "2024 – 2026",
    highlight: "Batched 64-Ray Hemisphere Raycasting · RANSAC + ICP Fusion",
    desc: "Built batched Golden-Ratio Spiral hemisphere raycasting with SLERP corner extrapolation to orient parts within robot wrist limits, plus multi-camera FPFH + RANSAC + Point-to-Plane ICP registration.",
    tags: ["Open3D", "Trimesh / PyEmbree", "RANSAC + ICP", "three-mesh-bvh"],
    link: ""
  },
  {
    title: "Terafac ML Challenge 2026 — FOOD-101 Ensemble",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Jan 2026",
    highlight: "84.24% Top-1 Accuracy on 101k Images (+23.8% over Baseline)",
    desc: "4-stage deep learning pipeline on 101 food classes combining ResNet-50, a custom Squeeze-and-Excitation ResNet-50 with Grad-CAM explainability, and Google ViT in a weighted ensemble.",
    tags: ["PyTorch", "ViT", "Custom SE-ResNet-50", "Grad-CAM"],
    link: "https://github.com/Anurag9689/Terafac_ML_Challenge_2026"
  },
  {
    title: "Amazon ML Challenge 2025 — Multimodal Product Pricing",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Oct 2025",
    highlight: "150k Products · Custom Differentiable SMAPELoss + LightGBM",
    desc: "Two-phase multimodal pricing model fusing DeBERTa-v3 text embeddings, ViT image features, and regex pack quantities under a custom HybridLoss (SMAPE + MAE), stacked with a 2,500-tree LightGBM regressor.",
    tags: ["DeBERTa-v3", "ViT", "Custom SMAPELoss", "LightGBM", "PyTorch"],
    link: ""
  },
  {
    title: "I2V 24-Hour Vehicle Classification & ONNX Challenge",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Jan 2026",
    highlight: "86.35% Accuracy · 86.80% F1 · Verified ONNX Runtime Export",
    desc: "Cleaned a severely imbalanced 12-class Indian traffic dataset using CleanVision, trained ResNet-50 with WeightedRandomSampler and label smoothing, and exported to ONNX Runtime with numerical parity.",
    tags: ["PyTorch", "ResNet-50", "CleanVision", "ONNX Runtime"],
    link: ""
  },
  {
    title: "Spoken Grammar Scoring Engine (SHL Assessment)",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Apr 2025",
    highlight: "0.763 Validation MAE · 0.625 Pearson Correlation",
    desc: "Evaluates spoken English grammar from voice recordings using OpenAI Whisper transcription, Flan-T5-Large grammatical edit ratios, spaCy linguistic features, and fine-tuned DistilBERT regression.",
    tags: ["OpenAI Whisper", "Flan-T5-Large", "DistilBERT", "LightGBM"],
    link: ""
  },
  {
    title: "Gemini 3 Pro Multimodal Book-to-Podcast Tutor",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Nov 2025",
    highlight: "High-Reasoning Page Analysis · Multi-Speaker FLAC Audio",
    desc: "Converts technical PDF textbooks into page-by-page multi-speaker podcasts using Gemini 3 Pro for equation/diagram reasoning and Gemini 2.5 Flash TTS with background page prefetching.",
    tags: ["Gemini 3 Pro", "Multi-Speaker TTS", "PyMuPDF", "FLAC"],
    link: ""
  },
  {
    title: "Chess Stream Arena — 1v1 Video & Chess Platform",
    category: "systems",
    categoryLabel: "Backend, WebRTC & Agents",
    date: "Oct 2026",
    highlight: "Go Matchmaking Server · Flutter App · WebRTC Data Channels",
    desc: "Cross-platform Flutter client and stateless Go matchmaking/JWT coordinator streaming low-latency 1v1 camera video over LiveKit WebRTC SFU while syncing chess moves and clocks over lossless Data Channels.",
    tags: ["Go", "Flutter (Dart)", "LiveKit WebRTC", "Data Channels"],
    link: "https://github.com/Anurag9689/chess_stream"
  },
  {
    title: "NPC World — Persistent 2D Multiplayer AI World",
    category: "systems",
    categoryLabel: "Backend, WebRTC & Agents",
    date: "Aug 2026",
    highlight: "Authoritative WebSockets · Episodic Memory · 7-D Relationship State",
    desc: "2D multiplayer world (Godot 4.7 + FastAPI WebSockets + PostgreSQL/pgvector) where LLM-powered NPCs form episodic memories, update 7-dimensional player relationship vectors, and initiate proactive dialogue.",
    tags: ["FastAPI", "WebSockets", "PostgreSQL + pgvector", "LiteLLM", "Godot 4.7"],
    link: ""
  },
  {
    title: "SyncHub (Dew Computing Storage) & Quizzer (Go Real-Time Engine)",
    category: "systems",
    categoryLabel: "Backend, WebRTC & Agents",
    date: "2024 – 2025",
    highlight: "Offline-First Edge-to-S3 Sync · Concurrent Go WebSocket Hub",
    desc: "Built SyncHub, an offline-first LAN object storage system with a background daemon that auto-syncs local buckets to AWS S3; and Quizzer-Backend in Go using Gorilla WebSockets and channels for live multiplayer quizzes.",
    tags: ["Go", "Python / Flask", "Gorilla WebSockets", "AWS S3", "React"],
    link: "https://github.com/Anurag9689/SyncHub"
  },
  {
    title: "FCN-DP Video Object Tracker & DECODE.IT Steganography",
    category: "scratch",
    categoryLabel: "From-Scratch & GPU",
    date: "May 2025",
    highlight: "Vectorized Dynamic Programming · Self-Replicating PNG Code",
    desc: "Implemented globally optimal video object tracking using FP16 FCN_ResNet50 probability maps and vectorized Dynamic Programming, plus DECODE.IT — a PNG that embeds and reconstructs its own Python source code.",
    tags: ["PyTorch FP16", "Dynamic Programming", "OpenCV", "Steganography"],
    link: "https://github.com/Anurag9689/CV-experiments"
  },
  {
    title: "CUDA C++ Fractal Renderer, MiniGPT & SumTree PER-DQN",
    category: "scratch",
    categoryLabel: "From-Scratch & GPU",
    date: "2024 – 2025",
    highlight: "Native CUDA C++ · 100/100 Perfect CartPole Episodes · CuPy MLP",
    desc: "Built a native CUDA C++ procedural flame renderer (__constant__ memory & fast-math intrinsics), a 4-layer causal MiniGPT with Flash SDPA, a framework-free CuPy MLP on MNIST, and a custom SumTree PER-DQN.",
    tags: ["CUDA C++", "CuPy", "PyTorch Flash SDPA", "Reinforcement Learning"],
    link: ""
  }
];

function renderProjects(filter = "all", query = "") {
  const grid = document.getElementById("projects-grid");
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = PROJECTS.filter((p) => {
    const matchesCat = filter === "all" || p.category === filter;
    const hay = `${p.title} ${p.highlight} ${p.desc} ${p.tags.join(" ")}`.toLowerCase();
    const matchesQuery = !normalizedQuery || hay.includes(normalizedQuery);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-muted);">No matching projects found for "${query}".</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (p) => `
      <article class="project-card">
        <div>
          <div class="project-meta">
            <span class="project-cat">${p.categoryLabel}</span>
            <span class="project-date">${p.date}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <div class="project-highlight">${p.highlight}</div>
          <p class="project-desc">${p.desc}</p>
        </div>
        <div>
          <div class="tag-row" style="margin-top:0; margin-bottom: 12px;">
            ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          ${
            p.link
              ? `<div class="project-footer">
                  <a href="${p.link}" target="_blank" rel="noopener" class="project-link">View Repository on GitHub ↗</a>
                </div>`
              : ""
          }
        </div>
      </article>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  let activeFilter = "all";
  let searchQuery = "";

  renderProjects(activeFilter, searchQuery);

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderProjects(activeFilter, searchQuery);
    });
  });

  const searchInput = document.getElementById("project-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProjects(activeFilter, searchQuery);
    });
  }

  const avatarToggle = document.getElementById("avatar-toggle");
  const mainPortrait = document.getElementById("main-portrait");
  const thumbPortrait = document.getElementById("thumb-portrait");
  const switcherLabel = document.getElementById("switcher-label");
  const switcherSub = document.getElementById("switcher-sub");

  if (avatarToggle && mainPortrait && thumbPortrait) {
    let showingAvatar = false;
    avatarToggle.addEventListener("click", () => {
      showingAvatar = !showingAvatar;
      if (showingAvatar) {
        mainPortrait.src = "assets/AnuragAvatar1.jpeg";
        thumbPortrait.src = "assets/20220822_002536.jpg";
        switcherLabel.textContent = "Anurag Pandey";
        switcherSub.textContent = "Tap for real photo";
      } else {
        mainPortrait.src = "assets/20220822_002536.jpg";
        thumbPortrait.src = "assets/AnuragAvatar1.jpeg";
        switcherLabel.textContent = "@feignbird";
        switcherSub.textContent = "Tap to view avatar";
      }
    });
  }

  initPointCloudCanvas();
});

function initPointCloudCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numPoints = 72;
  const points = [];
  const radius = Math.min(width, height) * 0.44;

  for (let i = 0; i < numPoints; i++) {
    const y = 1 - (i / (numPoints - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = ((2 * Math.PI) / 1.61803398875) * i;
    points.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius
    });
  }

  let angleY = 0;
  let angleX = 0.2;
  let targetY = 0;
  let targetX = 0.2;

  window.addEventListener("mousemove", (e) => {
    targetY = ((e.clientX / width) - 0.5) * 0.6;
    targetX = ((e.clientY / height) - 0.5) * 0.4;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    angleY += 0.0022 + (targetY - angleY) * 0.02;
    angleX += (targetX - angleX) * 0.02;

    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);

    const projected = points.map((p) => {
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.z * cosY + p.x * sinY;
      const y1 = p.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + p.y * sinX;

      const fov = 700;
      const scale = fov / (fov + z2 + 450);
      return {
        x: width * 0.5 + x1 * scale,
        y: height * 0.48 + y1 * scale,
        z: z2,
        scale
      };
    });

    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const dx = projected[i].x - projected[j].x;
        const dy = projected[i].y - projected[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 135) {
          const alpha = (1 - dist / 135) * 0.16;
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(projected[i].x, projected[i].y);
          ctx.lineTo(projected[j].x, projected[j].y);
          ctx.stroke();
        }
      }
    }

    for (const pt of projected) {
      ctx.fillStyle = "rgba(129, 140, 248, 0.55)";
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, Math.max(1.2, 2.4 * pt.scale), 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
}
