const PROJECTS = [
  {
    title: "Vision-Tactile Guided Robotic Welding in MuJoCo",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "Feb 2026 – May 2026",
    highlight: "85–90% Error Reduction (2.5–4.5 mm → 0.3–0.5 mm) · 36/40 (#1 in Batch)",
    desc: "5-service closed-loop robotic welding architecture (pnc-301, api-103, vision-301, path-301, sim-301) for the ABB IRB 1520ID in MuJoCo 3.x. Combines RealSense RGB-D + FoundationPose coarse alignment with KD-tree/PCA surface framing, <3s BFS raycast grid scanning, 9-point MoveT tactile probing, Kabsch/SVD plane fitting with lever-arm reliability gating (≥50 mm), and 3-plane linear intersection.",
    tags: ["MuJoCo 3.x", "Open3D", "FoundationPose", "Kabsch / SVD", "IKFast", "ABB IRB 1520ID", "Python"],
    link: ""
  },
  {
    title: "DexGraspVLA MuJoCo Simulation Bridge & Attention Visualizer",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "Nov 2025 – Dec 2025",
    highlight: "7-DoF Franka Panda + 18-DoF Shadow Dexterous Hand VLA Control",
    desc: "Adapted the hierarchical Vision-Language-Action (DexGraspVLA) model from proprietary RealMan/PsiBot hardware to MuJoCo 3.x. Built a thread-safe MuJoCoInterface with dual head/wrist cameras, a bidirectional 6-DoF ↔ 18-DoF kinematic hand joint mapper, upgraded segmentation to SAM 2 + Cutie video mask tracking, and built a multiprocess DINOv2 multi-head attention heatmap visualizer.",
    tags: ["MuJoCo 3.x", "PyTorch", "SAM 2", "Cutie", "DINOv2", "Diffusion Policy", "Shadow Hand"],
    link: ""
  },
  {
    title: "obj_maker — Autonomous 3D CAD/STEP Compiler & Multi-Agent Pipeline",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "Sep 2026",
    highlight: "20+ Industrial Primitives · Watertight ISO-10303-21 AP214 STEP Exporter",
    desc: "Deterministic Z-up millimeter 3D geometry compiler and Three.js web builder for welded industrial assemblies with typed port attachments and physical triangle-mesh contact/support validation. Paired with a Vertex AI Gemini 3.5 Flash multi-agent pipeline (Research, SceneSpec, Render, Comparator & Evolution workers) that reconstructs 3D CAD models from manufacturer photographs.",
    tags: ["Node.js", "Three.js", "ISO AP214 STEP", "Vertex AI Gemini", "Multi-Agent", "CAD B-Rep"],
    link: ""
  },
  {
    title: "Coarse-Touch Analytical IK Follower & STag PnP Torch Calibrator",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "2025 – 2026",
    highlight: "79% Faster Fixture Search (282s → 58s) · 0.006° TCP Fit Accuracy",
    desc: "Pre-calibration tactile wall-probing engine modeling 3D torch bend (33°), wire stickout (18 mm), and nozzle clearance (55 mm) with 10 mm/3° analytical IK joint-window tracking and automatic wrist unwinding. Paired with an HD15 STag fiducial PnP camera-drift monitor (solvePnPRefineLM) and non-linear least-squares flange-to-TCP tool fitter.",
    tags: ["Analytical IKFast", "Open3D Raycast", "STag Fiducials", "solvePnPRefineLM", "SciPy Least-Squares"],
    link: ""
  },
  {
    title: "J6 Hemisphere Raycast Reachability & BVH Seam Ranking Engine",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "2025 – 2026",
    highlight: "Batched 64-Ray Golden-Ratio Spiral Raycasting · SLERP Corner Extrapolation",
    desc: "Evaluates unobstructed 3D welding torch approach cones every 40 mm along candidate seams using a single batched pyembree/trimesh raycast call, extrapolates corner vectors via SLERP, and sweeps part Z-rotations (0°–360°) to maximize Joint-6 (±180°) wrist margin. Also built headless three-mesh-bvh safeEdgeSelection.js for automated seam ranking.",
    tags: ["Trimesh", "PyEmbree", "Open3D", "SLERP", "three-mesh-bvh", "cKDTree Symmetry"],
    link: ""
  },
  {
    title: "3D Point Cloud RANSAC/FPFH/ICP Registration & Eigen-Curvature Edge Detector",
    category: "robotics",
    categoryLabel: "3D Vision & Robotics",
    date: "Jul 2024 – Dec 2024",
    highlight: "80%+ Multi-Camera 3D Registration Reliability · PPF Surface Matching",
    desc: "Built multi-camera Intel RealSense point cloud fusion using 33-D FPFH features, RANSAC global registration, and Point-to-Plane ICP refinement, alongside a parallelized (multiprocessing.Pool) KDTree covariance eigenvalue 3D sharp-edge detector and OpenCV ppf_match_3d surface matching.",
    tags: ["Open3D", "FPFH + RANSAC + ICP", "OpenCV ppf_match_3d", "RealSense RGB-D", "Multiprocessing"],
    link: ""
  },
  {
    title: "Terafac ML Challenge 2026 — FOOD-101 Multi-Architecture Ensemble",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Jan 2026",
    highlight: "84.24% Top-1 Test Accuracy on 101,000 Images (+23.81% over Baseline)",
    desc: "4-level progressive deep learning pipeline across 101 food classes. Improved ResNet-50 baseline from 60.43% to 79.96% via label smoothing and CosineAnnealingLR, designed a custom Squeeze-and-Excitation ResNet-50 (ResNet50_SE) with Grad-CAM explainability, fine-tuned Google ViT (80.27%), and built a weighted soft-voting ensemble reaching 84.24%.",
    tags: ["PyTorch AMP", "Vision Transformer (ViT)", "Custom SE-ResNet-50", "Grad-CAM", "FOOD-101"],
    link: "https://github.com/Anurag9689/Terafac_ML_Challenge_2026"
  },
  {
    title: "Amazon ML Challenge 2025 — Multimodal Smart Product Pricing",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Oct 2025",
    highlight: "150,000 Products · Custom Differentiable SMAPELoss + 2,500-Tree LightGBM",
    desc: "Two-phase multimodal price prediction pipeline fusing Microsoft DeBERTa-v3 text representations, Google ViT image embeddings, and regex-extracted Item Pack Quantity (IPQ) features. Trained end-to-end with differential learning rates under a custom HybridLoss (0.7 SMAPE + 0.3 MAE), followed by penultimate deep feature extraction into a 2,500-tree LightGBM stack.",
    tags: ["DeBERTa-v3", "ViT", "Custom SMAPELoss", "LightGBM", "SentenceTransformers", "PyTorch"],
    link: ""
  },
  {
    title: "I2V 24-Hour Indian Traffic Vehicle Classification & ONNX Challenge",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Jan 2026",
    highlight: "86.35% Accuracy · 88.27% Precision · 86.80% F1 · <6.9e-4 ONNX Diff",
    desc: "Audited and cleaned a noisy, severely imbalanced 12-class Indian traffic dataset using CleanVision, trained an imbalance-aware ResNet-50 using WeightedRandomSampler and label smoothing, and exported to ONNX Runtime with verified numerical parity (<0.00069 max abs diff).",
    tags: ["PyTorch", "ResNet-50", "CleanVision", "ONNX Runtime", "WeightedRandomSampler"],
    link: ""
  },
  {
    title: "Spoken Grammar Scoring Engine (SHL Hiring Assessment)",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Apr 2025",
    highlight: "0.763 Validation MAE · 0.625 Pearson Correlation (r)",
    desc: "End-to-end spoken English proficiency evaluator from 45–60s audio recordings. Combines OpenAI Whisper (large/turbo) transcription, regex disfluency cleaning, Flan-T5-Large grammatical synthesis Levenshtein edit ratios, spaCy/textstat linguistic readability features, contextual word-embedding augmentation (nlpaug), and fine-tuned DistilBERT regression meta-ensembling.",
    tags: ["OpenAI Whisper", "Flan-T5-Large", "DistilBERT", "XGBoost / LightGBM", "spaCy", "nlpaug"],
    link: ""
  },
  {
    title: "Gemini 3 Pro Multimodal Book-to-Podcast & Visual Page Tutor",
    category: "aiml",
    categoryLabel: "AI / ML & Competitions",
    date: "Nov 2025",
    highlight: "High-Reasoning Equation/Diagram Parsing · Lossless 24kHz Multi-Speaker FLAC",
    desc: "Transforms dense technical PDF textbooks (e.g., Goodfellow's Deep Learning) into page-by-page multi-speaker podcasts. Renders 2× pages via PyMuPDF, analyzes equations and diagrams with gemini-3-pro-preview (thinking_level='high') to script a 2-persona dialogue, synthesizes native multi-speaker TTS (Kore & Puck) compressed to FLAC, and prefetches upcoming pages in a background thread.",
    tags: ["Gemini 3 Pro", "Gemini 2.5 Flash TTS", "PyMuPDF", "FLAC Audio", "Multithreading"],
    link: ""
  },
  {
    title: "Chess Stream Arena — Cross-Platform 1v1 Video & Chess Platform",
    category: "systems",
    categoryLabel: "Backend, WebRTC & Agents",
    date: "Oct 2026",
    highlight: "Go Matchmaking & LiveKit JWT Server · 3,293-LOC Flutter App · WebRTC Data Channels",
    desc: "Monorepo featuring a stateless Go 1.20+ matchmaking coordinator (thread-safe sync.Map random queue + 6-digit private room codes + LiveKit JWT minting) and a multiplatform Flutter client. Streams bi-directional camera/mic video over LiveKit WebRTC SFU while synchronizing chess moves, increment clocks, and chat over lossless WebRTC Data Channels.",
    tags: ["Go (Golang)", "Flutter 3.x (Dart)", "LiveKit WebRTC SFU", "Data Channels", "JWT"],
    link: "https://github.com/Anurag9689/chess_stream"
  },
  {
    title: "NPC World — AI-Native Persistent 2D Multiplayer Social World",
    category: "systems",
    categoryLabel: "Backend, WebRTC & Agents",
    date: "Aug 2026",
    highlight: "Server-Authoritative WebSockets · Episodic Memory · 7-D Relationship Vectors",
    desc: "Playable 2D multiplayer world (Godot 4.7 client + FastAPI async WebSocket server) with persistent AI NPCs powered by LiteLLM / AWS Bedrock. NPCs form structured episodic memories (importance, emotional valence), update a 7-dimensional per-player relationship state (familiarity, trust, affection, respect, fear, obligation, grievance) in PostgreSQL 16 + pgvector, and initiate proactive greetings.",
    tags: ["FastAPI", "Async WebSockets", "PostgreSQL 16 + pgvector", "SQLAlchemy Async", "LiteLLM / Bedrock", "Godot 4.7"],
    link: ""
  },
  {
    title: "SyncHub — Dew Computing Offline-First Edge Storage & S3 Sync Platform",
    category: "systems",
    categoryLabel: "Backend, WebRTC & Agents",
    date: "Aug 2024 – Dec 2024",
    highlight: "Self-Referential Storage Trees · Fernet Encryption · 60s Auto AWS S3 Daemon",
    desc: "Offline-first LAN edge object storage system with adaptive online/offline JWT & concurrent SMTP OTP auth, adjacency-list bucket/folder/object hierarchies, SHA-256 Fernet-encrypted file streaming, and an APScheduler background daemon that automatically provisions public AWS S3 buckets and syncs local edge files when internet connectivity returns.",
    tags: ["Python", "Flask", "SQLAlchemy", "Fernet Cryptography", "AWS S3 (boto3)", "React + Three.js"],
    link: "https://github.com/Anurag9689/SyncHub"
  },
  {
    title: "Quizzer-Backend (Go Real-Time Engine), Sunlink & FaceConnect",
    category: "systems",
    categoryLabel: "Backend, WebRTC & Agents",
    date: "Apr 2024 – May 2025",
    highlight: "Go Gorilla WebSocket Hub · FastAPI GPT-4 Support Portal · 128-D Face Recognition",
    desc: "Built Quizzer-Backend in Go 1.23 (Gorilla WebSockets, Go channels, atomic.Bool room state machines, GORM/MySQL); Sunlink (Geek Verse Hackathon solar support portal in FastAPI, PostgreSQL, AsyncOpenAI WebSockets & React/TS); and FaceConnect (Django 5 + dlib 128-D face recognition in group photos with multi-threaded email dispatch).",
    tags: ["Go 1.23", "Gorilla WebSockets", "FastAPI", "Django 5", "dlib Face Recognition", "React / TypeScript"],
    link: "https://github.com/Anurag9689/Quizzer-Backend"
  },
  {
    title: "FCN-DP Globally Optimal Video Object Tracker & DECODE.IT Steganography",
    category: "scratch",
    categoryLabel: "From-Scratch & GPU",
    date: "May 2025",
    highlight: "Vectorized Dynamic Programming Trajectory Solver · Self-Replicating PNG Code",
    desc: "Implemented 'Globally Optimal Object Tracking with Fully Convolutional Networks' using FP16 FCN_ResNet50 21-class semantic probability maps and vectorized Dynamic Programming (sliding_window_view backpointers). Also built DECODE.IT, a steganographic 'digital ouroboros' PNG that embeds and reconstructs its own Python source code byte-for-byte.",
    tags: ["PyTorch FP16", "Vectorized Dynamic Programming", "OpenCV", "zlib Steganography", "NumPy"],
    link: "https://github.com/Anurag9689/CV-experiments"
  },
  {
    title: "CUDA C++ Procedural Mathematical Flame Renderer & CuPy Deep MLP",
    category: "scratch",
    categoryLabel: "From-Scratch & GPU",
    date: "2024 – Sep 2025",
    highlight: "Native CUDA C++ (__constant__ Memory & Fast-Math) · Framework-Free CuPy MLP",
    desc: "Ported a 50-iteration non-linear trigonometric/exponential procedural art renderer (1800×1200) to native CUDA C++ using host-precomputed __constant__ memory tables, #pragma unroll 10, and hardware fast-math intrinsics (__sinf, __cosf, __expf). Also built an arbitrary-depth GPU-accelerated MLP from scratch in pure CuPy/NumPy on MNIST.",
    tags: ["CUDA C++", "nvcc", "CuPy", "GPU Memory Optimization", "NumPy From-Scratch"],
    link: ""
  },
  {
    title: "From-Scratch MiniGPT (Flash SDPA) & SumTree Prioritized Replay DQN",
    category: "scratch",
    categoryLabel: "From-Scratch & GPU",
    date: "2024 – 2025",
    highlight: "100 / 100 Perfect CartPole-v1 Test Episodes (499.0 Reward) · Causal GPT + CuPy Word2Vec",
    desc: "Built a 4-layer causal MiniGPT language model with Flash SDPA and mixed precision alongside a pure NumPy/CuPy 3-layer ContextualEmbedder from scratch. In Reinforcement Learning, built a custom binary SumTree and Prioritized Experience Replay (PER) DQN with importance-sampling annealing, achieving 100/100 consecutive perfect test episodes.",
    tags: ["PyTorch Flash SDPA", "Reinforcement Learning (PER-DQN)", "Binary SumTree", "FAISS Vector Search"],
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

// Initialize filter buttons & search
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

  initPointCloudCanvas();
});

// Subtle 3D Point-Cloud & Geometric Wireframe Canvas Background
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
    // Golden ratio sphere distribution (inspired by reach_check_j6.py!)
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

    // Draw edges between nearby 3D points
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

    // Draw vertices
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
