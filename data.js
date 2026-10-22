// ============================================================================
// ANURAG PANDEY (@feignbird / Anurag9689) — TECHNICAL INSPECTOR DATABASE
// Structured Deep-Dive Data for Slide-Over Inspector Drawer & Command Palette
// ============================================================================

window.INSPECTOR_DATA = {
  // --------------------------------------------------------------------------
  // HERO TELEMETRY METRICS
  // --------------------------------------------------------------------------
  "metric-commits": {
    id: "metric-commits",
    code: "TELEMETRY // 01",
    category: "Engineering Velocity",
    title: "1,300+ Production & R&D Git Commits",
    subtitle: "Verified commit history authored under @feignbird & @Anurag9689 (2022–2026)",
    timeline: "Jan 2022 – Sep 2026",
    commits: "1,300+ Commits",
    role: "Lead / #1 Author across Core Vision & Backend Repos",
    summary: "Sustained multi-year engineering output across industrial 3D computer vision, robotic welding control, low-VRAM CUDA microservices, and distributed SaaS backends.",
    problem: "Building production-grade physical AI and full-stack platforms from scratch required end-to-end ownership across hardware drivers, 3D geometry math, deep learning inference servers, and real-time WebSocket/WebRTC backends.",
    pipeline: [
      { step: "01", name: "Terafac Stack", desc: "790+ commits across 24+ vision, robotics & cloud repos" },
      { step: "02", name: "AttentionVerse", desc: "500+ commits across 10+ AI app-builder & RAG repos" },
      { step: "03", name: "Personal R&D", desc: "25+ repos in 6D pose, RL, WebRTC, Go & CUDA C++" }
    ],
    deepDive: [
      {
        title: "Terafac Technologies (`790+ Commits`, #1 Author)",
        detail: "Authored 446 commits in `vision-301` (Core 3D Vision & Tactile Calibration), 86 commits in `api-103` + 18 in `pnc-api` (Cloud/Edge Hub & 3D Raycasting), 60 commits in `terafac-vision-6` (FoundationPose Low-VRAM Server), 61 commits across `sam-101..106` (SAM 3 & Mask Compression), 46 commits in `mini_robo_code`, and 23 commits in `obj_maker` (100% author)."
      },
      {
        title: "AttentionVerse & Enterprise Clients (`500+ Commits`)",
        detail: "Authored 120 commits in `thecoder-backend`, 60 in `thecoder-feign`, 43 in `thecoder-ai`, 40 in `thecoder-account`, 31 in `thecoder-json`, 31 in `thecoder-search-2` (AST + ChromaDB), 67 in `repetition-backend`, and 51 in `iitmandi-health-api` (IIT Mandi iHUB)."
      },
      {
        title: "Multi-Site Field Deployments",
        detail: "Codebase powers live industrial robotic welding workcells across Faridabad, Ludhiana (Eastman), Parwanoo (Electrowave), Havells, and CS Electric."
      }
    ],
    benchmarks: [
      { metric: "vision-301 (3D Vision & Tactile Engine)", baseline: "Core Repo", result: "446 Commits (#1 Author)", delta: "6,000+ LOC CLI & Solvers" },
      { metric: "api-103 + pnc-api (Cloud/Edge Hub)", baseline: "Core Repo", result: "104 Commits (#1 Author)", delta: "2,045+ Weld Cycles Logged" },
      { metric: "terafac-vision-6 + sam-101..106", baseline: "Vision AI", result: "121 Commits (#1 Author)", delta: "4GB VRAM & 25x Compression" },
      { metric: "thecoder-* & Client Systems", baseline: "SaaS / RAG", result: "500+ Commits", delta: "10+ Production Services" }
    ],
    stack: ["Python", "C++17 / CUDA", "PyTorch", "Open3D", "Go", "FastAPI", "Django", "MuJoCo", "React / Three.js"],
    links: [
      { label: "GitHub (@Anurag9689)", url: "https://github.com/Anurag9689" }
    ]
  },

  "metric-precision": {
    id: "metric-precision",
    code: "TELEMETRY // 02",
    category: "Robotic Precision",
    title: "0.3–0.5 mm Sub-Millimeter Weld Seam Localization",
    subtitle: "85–90% Error Reduction via Coarse-to-Fine Vision + Tactile Probing",
    timeline: "2025 – 2026",
    commits: "vision-301 & 8th-Sem Dissertation",
    role: "Lead Architect & Author",
    summary: "Pure RGB-D 6-DoF pose estimation on reflective industrial steel exhibits 2.5–4.5 mm localization drift, which causes weld blow-through on 1–2 mm joints. Our hybrid closed-loop pipeline brings error down to 0.3–0.5 mm.",
    problem: "Industrial MIG/MAG welding requires ≤ 0.5 mm seam accuracy. Specular reflections on milled steel, thermal camera mount drift, and depth sensor noise prevent RGB-D cameras alone from achieving sub-millimeter precision.",
    pipeline: [
      { step: "01", name: "RGB-D + Vision-6", desc: "Coarse 6D pose (~3–4 mm accuracy) in ~4s" },
      { step: "02", name: "BFS Grid Scan", desc: "50k-polygon mesh raycast (<3s) for probe targets" },
      { step: "03", name: "9-Pt MoveT Touch", desc: "3 orthogonal planes × 3 tactile wire probes" },
      { step: "04", name: "Kabsch + SVD", desc: "Lever-arm gated rotation + Ax=b plane intersection" }
    ],
    deepDive: [
      {
        title: "Lever-Arm Gated Kabsch Rotation Alignment",
        detail: "Fits plane normals n_i = (v1 × v2) / ||v1 × v2|| via SVD and enforces outward sign consistency against CAD outward normals. Uses a 50 mm minimum lever-arm spatial spread threshold to reject ill-conditioned rotational axes before solving H = N_CAD^T W N_touch."
      },
      {
        title: "Exact 3-Plane Linear Intersection (Ax = b)",
        detail: "Locks the corrected rotation R_corr, re-projects CAD normals n'_i = R_corr n_i, and solves the 3×3 linear system A t_corr = b where row i is (n'_i)^T and b_i = n'_i · c_i (probe centroid) to recover exact 3D translation decoupled from probe sliding."
      }
    ],
    benchmarks: [
      { metric: "Case 1 (+15mm X, -10mm Y, +5° Yaw)", baseline: "3.1 mm (Vision Only)", result: "0.3 mm (Vision+Touch)", delta: "-90.3% Error (0.18 mm val residual)" },
      { metric: "Case 2 (-20mm X, +25mm Y, -8° Yaw)", baseline: "3.8 mm (Vision Only)", result: "0.4 mm (Vision+Touch)", delta: "-89.5% Error (0.22 mm val residual)" },
      { metric: "Case 3 (+30mm X, +15mm Y, +12° Yaw)", baseline: "4.3 mm (Vision Only)", result: "0.5 mm (Vision+Touch)", delta: "-88.4% Error (0.28 mm val residual)" },
      { metric: "Case 4 (-10mm X, -30mm Y, +3°Pitch/-6°Yaw)", baseline: "2.7 mm (Vision Only)", result: "0.3 mm (Vision+Touch)", delta: "-88.9% Error (0.14 mm val residual)" }
    ],
    stack: ["Open3D", "NumPy / SciPy", "Kabsch / SVD", "FoundationPose", "MuJoCo 3.x", "ABB IRB 1520ID"],
    links: [
      { label: "Inspect Full vision-301 Engine", url: "#inspect=vision-301" }
    ]
  },

  "metric-calibration": {
    id: "metric-calibration",
    code: "TELEMETRY // 03",
    category: "Cycle Time Optimization",
    title: "79% Reduction in Fixture Search Cycle Time (282s → 58s)",
    subtitle: "Coarse Touch Pre-Alignment & Analytical IK Joint-Window Follower",
    timeline: "2025 – 2026",
    commits: "vision-301 / coarse_touch.py",
    role: "Lead Author",
    summary: "Cut multi-wall industrial fixture probing time from nearly 5 minutes (282s) down to under 1 minute (58s) by replacing wide blind search sweeps with a 3D torch-geometry-aware coarse pre-alignment pass.",
    problem: "When large welded sub-assemblies are clamped with ±50–100 mm placement variance, fine tactile probing across dozens of walls required slow 150 mm search strokes (taking ~282 seconds per cycle) and frequently triggered robot wrist singularities.",
    pipeline: [
      { step: "01", name: "Torch Geometry Model", desc: "33° bend angle, 18mm wire stickout, 55mm nozzle" },
      { step: "02", name: "Coarse Wall Probe", desc: "Fast initial localization of global fixture shift" },
      { step: "03", name: "10mm / 3° IK Follower", desc: "Analytical IK joint-window tracking (A2..A6)" },
      { step: "04", name: "12mm Fine Window", desc: "Tightened fine probe stroke cuts cycle to 58s" }
    ],
    deepDive: [
      {
        title: "3D Torch Clearance & Geometry Modeling (`coarse_touch.py`)",
        detail: "Explicitly models the physical welding torch neck bend (33°), wire stickout (18 mm), and nozzle diameter clearance (55 mm) to compute collision-free approach vectors above fixture walls."
      },
      {
        title: "Analytical IK Branch Follower & Automatic Wrist Unwinding",
        detail: "Evaluates analytical inverse kinematics along 10 mm linear and 3° angular discretization steps, enforcing strict joint-window continuity across joints A2..A6 and inserting automatic 'via home' wrist unwinding moves when Joint 6 approaches ±180°/±225° limits."
      }
    ],
    benchmarks: [
      { metric: "End-to-End Fixture Search Cycle Time", baseline: "282 seconds", result: "58 seconds", delta: "79.4% Faster (-224s per cycle)" },
      { metric: "Fine Tactile Probe Search Stroke", baseline: "100–150 mm window", result: "12 mm window", delta: "10x Tighter Search Window" },
      { metric: "IK Trajectory Step Resolution", baseline: "Unchecked endpoints", result: "10 mm / 3° verified", delta: "Zero Joint-Limit Halts" }
    ],
    stack: ["Python", "Analytical IK", "3D Rigid Transformations", "Trajectory Planning", "ABB RAPID"],
    links: [
      { label: "Inspect Full vision-301 Engine", url: "#inspect=vision-301" }
    ]
  },

  "metric-compression": {
    id: "metric-compression",
    code: "TELEMETRY // 04",
    category: "Edge AI Throughput",
    title: "25× (2500%) Segmentation Mask Payload Compression",
    subtitle: "Sparse Row-Run Encoding & Hu-Moment Shape Matching in sam-106",
    timeline: "2025 – 2026",
    commits: "61 Commits across sam-101..106",
    role: "Core Author",
    summary: "Engineered a custom sparse row-run mask serializer and scale-invariant Hu-moment shape matcher for Meta SAM 3 / SAM 3.1 microservices, slashing network payload size by 25×.",
    problem: "Streaming dense full-HD (1920×1080) multi-object boolean/integer segmentation masks from GPU inference servers to edge robot clients over shop-floor Wi-Fi created multi-megabyte JSON bottlenecks per frame.",
    pipeline: [
      { step: "01", name: "SAM 3 / 3.1 Inference", desc: "Multiplex video & promptable image segmentation" },
      { step: "02", name: "Hu-Moment Filter", desc: "Log-transformed scale/rotation invariant ranking" },
      { step: "03", name: "Row-Run Encoder", desc: "Sparse [row, start_col, length] interval packing" },
      { step: "04", name: "Edge Reconstruction", desc: "Zero-loss mask decoding in <2ms on client" }
    ],
    deepDive: [
      {
        title: "Sparse Row-Run Mask Compression (`sam-106`)",
        detail: "Exploits spatial contiguity of industrial part masks by encoding only active foreground scanline intervals rather than dense 2D pixel grids, achieving a 25× (2500%) reduction in serialized payload size with zero loss in pixel accuracy."
      },
      {
        title: "Hu-Moment Reference Mask Matching (`/segment/image/v4`)",
        detail: "Computes 7 invariant Hu image moments on candidate SAM masks and compares them in log-space against a canonical CAD/reference mask, automatically filtering out background clutter, welding tables, and clamps."
      }
    ],
    benchmarks: [
      { metric: "Serialized Mask Payload Size", baseline: "100% (Dense 2D Array)", result: "4% (Sparse Row-Run)", delta: "25x (2500%) Compression" },
      { metric: "Supported Foundation Models", baseline: "Single SAM v1", result: "SAM 3.1, LangSAM, FastSAM, EfficientSAM, HED", delta: "6 Microservices (sam-101..106)" }
    ],
    stack: ["Meta SAM 3 / 3.1", "FastAPI", "Flask", "PyTorch", "OpenCV", "Hu Moments", "Run-Length Encoding"],
    links: [
      { label: "Inspect sam-101..106 Microservices", url: "#inspect=sam-microservices" }
    ]
  },

  "metric-dissertation": {
    id: "metric-dissertation",
    code: "TELEMETRY // 05",
    category: "Academic Excellence",
    title: "36 / 40 — Ranked 1st in AIML Batch (8th-Sem Major Dissertation)",
    subtitle: "University School of Automation & Robotics (USAR), GGSIPU",
    timeline: "Feb 2026 – May 2026",
    commits: "Course Code: ARP 452 / ART 454",
    role: "Sole Author (Enrollment: 00319071623)",
    summary: "Awarded the highest supervisor evaluation score (36/40) across the entire 2022–2026 B.Tech AI & ML cohort at USAR, GGSIPU for 'Vision-Tactile Guided Robotic Welding in MuJoCo'.",
    problem: "Bridging academic robotics research with real factory-floor welding constraints by proving a 5-module closed-loop perception, planning, and MuJoCo physics contact simulation pipeline.",
    pipeline: [
      { step: "01", name: "pnc-301 & api-103", desc: "3D CAD seam selection & Socket.IO orchestration" },
      { step: "02", name: "vision-301", desc: "KD-tree/PCA surface framing & BFS raycast grid" },
      { step: "03", name: "path-301", desc: "IKFast joint trajectory & MoveT probe planner" },
      { step: "04", name: "sim-301 (MuJoCo)", desc: "ABB IRB 1520ID physics touch-sense execution" }
    ],
    deepDive: [
      {
        title: "1st Rank out of AIML 2022–2026 Batch",
        detail: "Evaluated on problem formulation, mathematical rigor, real-world industrial applicability, and quantitative simulation verification. Achieved 36/40 (highest score in the batch)."
      },
      {
        title: "9 'O' (Outstanding ≥ 90/100) Practical & Engineering Grades",
        detail: "Earned Outstanding grades in Engineering Economics (99/100), Machine Learning Lab (98/100), DBMS Lab (98/100), Intro to AI Lab (96/100), Data Structures Lab (93/100), Soft Computing Lab (93/100), Summer Training Report (91/100), Java Lab (91/100), and Computer Networks Lab (90/100)."
      }
    ],
    benchmarks: [
      { metric: "8th-Sem Major Project Evaluation", baseline: "Batch Evaluation (/40)", result: "36 / 40 (90%)", delta: "1st Rank in Batch" },
      { metric: "SGPA Progression (USAR, GGSIPU)", baseline: "6.92 (3rd Sem)", result: "7.43 (4th) → 7.92 (5th)", delta: "+1.00 SGPA Trajectory" }
    ],
    stack: ["MuJoCo 3.x", "ABB IRB 1520ID", "Open3D", "FoundationPose", "IKFast", "Python"],
    links: [
      { label: "Inspect 8th-Sem Dissertation Details", url: "#inspect=proj-welding-mujoco" }
    ]
  },

  // --------------------------------------------------------------------------
  // TERAFAC TECHNOLOGIES SUBSYSTEMS
  // --------------------------------------------------------------------------
  "vision-301": {
    id: "vision-301",
    code: "SYS-TF // 01",
    category: "Terafac Core Engine",
    title: "vision-301 — Industrial 3D Vision, 6D Registration & Tactile Calibration",
    subtitle: "446 Git Commits (#1 Author) · Deployed across 5 Industrial Manufacturing Sites",
    timeline: "Jun 2024 – Sep 2026",
    commits: "446 Commits (#1 Author)",
    role: "Jr. Software Engineer — AI/ML & Vision (Contract → Intern → Jr. SWE)",
    summary: "The core perception and geometric calibration engine powering Terafac's autonomous robotic welding workcells, fusing RealSense RGB-D 6D pose estimation with physical wire touch-sensing (`MoveT`).",
    problem: "Industrial steel sub-assemblies vary by ±5–50 mm in clamping position and suffer from specular glare that degrades RGB-D depth sensors to 2.5–4.5 mm error—far too coarse for 1–2 mm MIG welding seams.",
    pipeline: [
      { step: "01", name: "RGB-D + STag Check", desc: "RealSense capture + HD15 STag PnP drift validation" },
      { step: "02", name: "Coarse 6D Pose", desc: "FoundationPose + Multiway Colored ICP registration" },
      { step: "03", name: "Coarse Touch + IK", desc: "3D torch model + 10mm/3° IK follower (282s → 58s)" },
      { step: "04", name: "9-Pt Tactile + SVD", desc: "Lever-arm gated Kabsch rotation + Ax=b intersection" },
      { step: "05", name: "Seam Shift Blend", desc: "N-way corner intersection + arc-length seam shift" }
    ],
    deepDive: [
      {
        title: "Coarse-to-Fine Vision-Tactile Calibration Loop",
        detail: "Combines coarse 6-DoF RGB-D pose estimation (`vision-106` / FoundationPose) with a <3s BFS raycast grid scanner over 50k-polygon meshes to automatically select 9 collision-free tactile probe targets across 3 orthogonal planes. Reduces weld seam error by 85–90% (from 2.5–4.5 mm down to 0.3–0.5 mm, with 0.14–0.28 mm validation residuals) in 18–22s total cycle time."
      },
      {
        title: "Coarse Touch Pre-Calibration & Analytical IK Follower (`coarse_touch.py`)",
        detail: "Models 3D torch neck bend (33°), wire stickout (18 mm), and nozzle clearance (55 mm) with step-by-step (10 mm / 3°) analytical IK joint-window tracking (A2..A6) and automatic 'via home' wrist unwinding. Tightens fine probe search windows to 12 mm, cutting fixture search cycle time by 79% (from 282s to 58s)."
      },
      {
        title: "STag Fiducial PnP Camera-to-Torch Drift Calibrator (`stag_torch_calibrator.py`)",
        detail: "Detects sub-pixel camera mount thermal or mechanical drift using HD15 STag fiducial markers and Levenberg-Marquardt `solvePnPRefineLM` iterative PnP refinement, automatically compensating `TORCH_PIXEL` offsets or halting unsafe cycles."
      },
      {
        title: "Quaternion Torch Orientation & 6,000-Line DAG CLI (`quats.py`, `vision301_cli`)",
        detail: "Authored gimbal-lock-free quaternion torch orientation generators, 180° symmetrical pose-flip detection/correction, N-way 3-plane corner intersection solvers (`INTERPOLATION_3D_NWAY`), an interactive Web/Socket Path Editor (`path_editor.py`), automated S3 regression test suites (<1 mm error), and a 6,000-line DAG CLI deployed at Faridabad, Ludhiana (Eastman), Parwanoo (Electrowave), Havells, and CS Electric."
      }
    ],
    benchmarks: [
      { metric: "Weld Seam Localization Error", baseline: "2.5 – 4.5 mm (Vision)", result: "0.3 – 0.5 mm (Hybrid)", delta: "85–90% Error Reduction" },
      { metric: "3rd-Surface Validation Residual", baseline: "Unverified", result: "0.14 – 0.28 mm", delta: "Sub-0.3mm Geometric Proof" },
      { metric: "Fixture Search Cycle Time", baseline: "282 seconds", result: "58 seconds", delta: "79% Faster Cycle" },
      { metric: "50k-Polygon Mesh Probe Planning", baseline: "Manual Teaching", result: "< 3.0 seconds", delta: "Automated BFS Grid Scan" }
    ],
    stack: ["Python", "Open3D", "Intel RealSense SDK", "NumPy / SciPy", "Kabsch / SVD", "OpenCV (solvePnPRefineLM)", "STag Fiducials", "Flask / Socket.IO", "AWS S3"],
    links: []
  },

  "api-103": {
    id: "api-103",
    code: "SYS-TF // 02",
    category: "Terafac Cloud/Edge Hub",
    title: "api-103 & pnc-api — Stateful Welding Backend & 3D Reachability Engine",
    subtitle: "104 Git Commits (#1 Author) · 178+ Projects & 2,045+ Weld Cycles Orchestrated",
    timeline: "Jan 2024 – Sep 2026",
    commits: "86 Commits (api-103) + 18 (pnc-api)",
    role: "Lead Backend & Computational Geometry Engineer",
    summary: "The central stateful backend orchestrating real-time telemetry between the React/Three.js frontend (`pnc-301`), `vision-301`, AWS S3 CAD stores, and physical robot controllers, alongside a 3D raycast reachability engine.",
    problem: "Before executing a weld cycle, the system must verify whether all weld seams on a 3D CAD assembly are physically reachable without torch collisions or Joint-6 (±180°) wrist wrap limits, and automatically find the optimal part placement rotation.",
    pipeline: [
      { step: "01", name: "CAD / S3 Ingestion", desc: "Mesh normalization, cKDTree symmetry & AABB envelope" },
      { step: "02", name: "64-Ray Hemisphere", desc: "Golden-Ratio Spiral raycasting via pyembree/trimesh" },
      { step: "03", name: "SLERP Extrapolation", desc: "Spherical Linear Interpolation at seam corners" },
      { step: "04", name: "J6 Z-Sweep (0°–360°)", desc: "Optimizes part orientation within ±180° wrist limits" }
    ],
    deepDive: [
      {
        title: "J6-Constrained 64-Ray Hemisphere Reachability (`reach_check_j6.py`)",
        detail: "Samples 64 uniformly distributed rays on a hemisphere above each weld seam waypoint using a Golden-Ratio Spiral (`pyembree` / `trimesh` batched ray-mesh intersection) to determine unobstructed torch approach cones."
      },
      {
        title: "SLERP Corner Extrapolation & 0°–360° Part Orientation Optimizer",
        detail: "Applies Spherical Linear Interpolation (SLERP) to smoothly transition torch orientations around tight seam corners and sweeps Z-axis part rotations (0°–360°) to maximize reachable seams without violating Joint-6 (±180°/±225°) wrist limits."
      },
      {
        title: "3D Mesh Symmetry & Envelope Validator (`utils.py`)",
        detail: "Built `cKDTree` mirror-plane symmetry detection (`check_symmetry`) to flag 180°-ambiguous parts and Ray-AABB spherical work-envelope auto-orientation (`check_mesh_reach`)."
      },
      {
        title: "Production Telemetry Hub",
        detail: "Manages SQLAlchemy state and real-time Socket.IO event streams across 178+ industrial projects, 2,045+ weld cycles, and 10,777+ logged machine events."
      }
    ],
    benchmarks: [
      { metric: "Torch Approach Cone Sampling", baseline: "Single Normal Check", result: "64-Ray Golden-Ratio Hemisphere", delta: "Batched pyembree Raycasting" },
      { metric: "Production Telemetry Scale", baseline: "Local Scripts", result: "2,045+ Weld Cycles / 10,777+ Events", delta: "178+ Industrial Projects" }
    ],
    stack: ["Python", "Flask", "Flask-SocketIO", "SQLAlchemy", "trimesh", "pyembree", "SciPy (cKDTree / SLERP)", "AWS S3"],
    links: []
  },

  "vision-106": {
    id: "vision-106",
    code: "SYS-TF // 03",
    category: "6D Pose Microservice",
    title: "terafac-vision-6 (vision-106) — Low-VRAM & Jetson Orin NX 6D Pose Server",
    subtitle: "60 Git Commits (#1 Author) · Runs FoundationPose on 4 GB VRAM & JetPack 6",
    timeline: "Jul 2024 – Aug 2026",
    commits: "60 Commits (#1 Author)",
    role: "Lead ML Systems & CUDA Optimization Engineer",
    summary: "Productionized NVIDIA's FoundationPose and BundleSDF into a resilient Flask + S3 microservice engineered to run without CUDA OOM crashes on budget 4 GB VRAM laptops (RTX 3050) and edge NVIDIA Jetson Orin NX devices.",
    problem: "Out-of-the-box FoundationPose requires 12–24 GB VRAM and leaks `nvdiffrast` OpenGL/CUDA contexts across consecutive HTTP requests, crashing industrial edge boxes equipped with 4 GB–8 GB GPUs.",
    pipeline: [
      { step: "01", name: "Singleton Predictor", desc: "Pre-initializes nvdiffrast & Torch models once at boot" },
      { step: "02", name: "Expandable Segments", desc: "PyTorch CUDA allocator tuning + explicit cache purge" },
      { step: "03", name: "C++17 / CUDA Port", desc: "Compiled mycuda, Eigen3 & pybind11 for CUDA 12.6" },
      { step: "04", name: "PyTorch3D Fallback", desc: "Automatic CPU/alternative rasterizer fallback path" }
    ],
    deepDive: [
      {
        title: "Eliminating `nvdiffrast` CUDA OOM Leaks on 4 GB VRAM",
        detail: "Refactored the inference lifecycle into a persistent singleton predictor with pre-allocated dr.RasterizeCudaContext, configured `expandable_segments:True` in the PyTorch CUDA caching allocator, and tuned hypothesis batch chunking so full 6-DoF pose estimation + refinement runs reliably inside 4 GB VRAM (RTX 3050)."
      },
      {
        title: "Jetson Orin NX (JetPack 6) & PyTorch 2.6 / CUDA 12.6 Port",
        detail: "Ported custom C++17/CUDA extension kernels (`mycuda`, `Eigen3`, `pybind11`) to compile cleanly on ARM64 NVIDIA Jetson Orin NX (JetPack 6) and modern x86_64 PyTorch 2.6 / CUDA 12.6 environments, adding a `PyTorch3D` fallback when hardware OpenGL contexts are unavailable."
      }
    ],
    benchmarks: [
      { metric: "Minimum GPU VRAM Requirement", baseline: "12 – 16 GB VRAM", result: "4 GB VRAM (RTX 3050 / Orin NX)", delta: "-70% VRAM Footprint" },
      { metric: "6D Pose Inference Latency", baseline: "Crashes after 2–3 runs", result: "~4.0s per cycle (Unlimited runs)", delta: "Zero CUDA Context Leaks" }
    ],
    stack: ["PyTorch 2.6", "CUDA 12.6 / C++17", "FoundationPose", "BundleSDF", "nvdiffrast", "PyTorch3D", "pybind11", "Eigen3", "Jetson Orin NX"],
    links: []
  },

  "sam-microservices": {
    id: "sam-microservices",
    code: "SYS-TF // 04",
    category: "Segmentation Microservices",
    title: "sam-101 to sam-106 — Industrial Segmentation & Shape-Matching Suite",
    subtitle: "61 Git Commits across 6 Microservices · SAM 3.1 Multiplex Video & 25× Compression",
    timeline: "Jun 2024 – Jul 2026",
    commits: "61 Commits (27 in sam-106)",
    role: "Core AI Microservices Engineer",
    summary: "A fleet of 6 specialized FastAPI/Flask segmentation microservices wrapping Meta SAM 3 / SAM 3.1, LangSAM, FastSAM, EfficientSAM, and Holistically-Nested Edge Detection (HED) for zero-shot industrial part isolation.",
    problem: "Different robotic workcells require different trade-offs between text-prompted segmentation (`LangSAM`), sub-second edge speed (`FastSAM` / `EfficientSAM`), structural edge detection (`HED`), and multi-frame video tracking (`SAM 3.1`).",
    pipeline: [
      { step: "01", name: "Multimodal Prompt", desc: "Text, point, box, or reference CAD mask query" },
      { step: "02", name: "SAM 3.1 / LangSAM", desc: "Zero-shot segmentation + multiplex video tracking" },
      { step: "03", name: "Hu-Moment Matcher", desc: "/segment/image/v4 scale-invariant shape scoring" },
      { step: "04", name: "25x Row-Run Codec", desc: "Sparse interval compression for low-latency transport" }
    ],
    deepDive: [
      {
        title: "Meta SAM 3 & SAM 3.1 Multiplex Video Tracking (`sam-106`, 27 commits)",
        detail: "Integrated Meta's latest Segment Anything 3 / 3.1 architecture for promptable image and multiplex video object tracking across moving conveyor and turntable workcells."
      },
      {
        title: "25× (2500%) Sparse Row-Run Mask Compressor",
        detail: "Replaced dense pixel mask arrays in HTTP responses with a compact row-run interval encoder/decoder, shrinking JSON payload sizes by 25× while preserving exact pixel boundaries."
      },
      {
        title: "Scale-Invariant Hu-Moment Shape Matching (`/segment/image/v4`)",
        detail: "Implemented automated candidate mask ranking using log-transformed 7 Hu invariant moments against reference CAD silhouettes, enabling zero-click part identification even under arbitrary 2D rotation and scale."
      }
    ],
    benchmarks: [
      { metric: "Network Mask Payload Size", baseline: "Dense Full-HD Array", result: "Sparse Row-Run Stream", delta: "25x (2500%) Smaller" },
      { metric: "Microservice Fleet Coverage", baseline: "1 Model", result: "sam-101, 102, 103, 105, 106", delta: "5 Model Families Productionized" }
    ],
    stack: ["Meta SAM 3 / 3.1", "LangSAM", "FastSAM", "EfficientSAM", "HED", "FastAPI", "Flask", "OpenCV", "PyTorch"],
    links: []
  },

  "obj-maker": {
    id: "obj-maker",
    code: "SYS-TF // 05",
    category: "Generative 3D CAD & STEP",
    title: "obj_maker (test-101) — Autonomous 3D CAD/STEP Compiler & Gemini Agent Pipeline",
    subtitle: "23 Git Commits (100% Author) · ISO-10303-21 AP214 STEP Exporter + Multi-Agent Reconstruction",
    timeline: "2025 – 2026",
    commits: "23 Commits (100% Sole Author)",
    role: "Sole Architect & Developer",
    summary: "A deterministic Node.js + Three.js parametric 3D welded-assembly compiler and a 5-stage Vertex AI Gemini 3.5 Flash multi-agent pipeline that crawls real manufacturer product photos and reconstructs watertight 3D CAD assemblies.",
    problem: "Generating diverse, physically valid 3D CAD weldments (with watertight STEP B-Rep topology and ground-truth weld seam labels) for training and testing robotic vision pipelines is slow and expensive when done manually in SolidWorks.",
    pipeline: [
      { step: "01", name: "Research Worker", desc: "Crawls manufacturer specs & multi-view photos" },
      { step: "02", name: "SceneSpec Worker", desc: "Synthesizes parametric primitive & port graph" },
      { step: "03", name: "3D STEP Compiler", desc: "20+ primitives → watertight ISO-10303-21 AP214 STEP" },
      { step: "04", name: "Render & Comparator", desc: "Multi-view render vs. real photo VLM critique loop" },
      { step: "05", name: "Evolution Worker", desc: "Iteratively mutates geometry until visual convergence" }
    ],
    deepDive: [
      {
        title: "Parametric 3D Welded-Assembly Compiler & Watertight STEP Exporter",
        detail: "Built a library of 20+ industrial steel primitives (I-beams, C-channels,gussets, flanged pipes, baseplates, mounting brackets) with typed port attachment constraints, a physical mesh contact/gravity support validator, and a custom topological B-Rep writer exporting valid ISO-10303-21 AP214 `.step` files."
      },
      {
        title: "5-Agent Vertex AI Gemini 3.5 Flash Reconstruction Loop",
        detail: "Orchestrates Research, SceneSpec, Render, Comparator, and Evolution workers that compare rendered 3D views against real product photographs and iteratively refine dimensions, angles, and component attachments."
      }
    ],
    benchmarks: [
      { metric: "Industrial Primitive Library", baseline: "Manual CAD Modeling", result: "20+ Parametric Steel Primitives", delta: "Typed Port Attachment Graph" },
      { metric: "CAD Export Standard", baseline: "Triangle STL Only", result: "ISO-10303-21 AP214 STEP + GLB/OBJ", delta: "Watertight B-Rep Topology" }
    ],
    stack: ["Node.js", "Three.js", "ISO-10303-21 STEP", "Vertex AI (Gemini 3.5 Flash)", "Multi-Agent Systems", "Computational Geometry"],
    links: []
  },

  "sim-pnc-301": {
    id: "sim-pnc-301",
    code: "SYS-TF // 06",
    category: "Simulation & Seam Ranking",
    title: "sim-301 & pnc-301 — MuJoCo Virtual Commissioning & BVH Seam Ranking",
    subtitle: "ABB IRB 1520ID Physics Touch-Sensing + Headless three-mesh-bvh Seam Scorer",
    timeline: "2024 – 2026",
    commits: "sim-301, pnc-301 & mini_robo_code",
    role: "Robotics Simulation & 3D Web Engineer",
    summary: "Closed the sim-to-real loop with a MuJoCo 3.x virtual commissioning environment for the ABB IRB 1520ID robot (`sim-301`) and a BVH-accelerated 3D weld seam ranker in the React/Three.js frontend (`pnc-301`).",
    problem: "Testing tactile touch-sensing and seam selection directly on physical industrial robots risks costly torch crashes. A physics-accurate virtual twin and automated seam accessibility filter were essential.",
    pipeline: [
      { step: "01", name: "VHACD Decomposition", desc: "Convex hull decomposition of CAD workpieces" },
      { step: "02", name: "BVH Seam Ranking", desc: "three-mesh-bvh raycast scoring in safeEdgeSelection.js" },
      { step: "03", name: "MuJoCo MoveT Sim", desc: "Physical wire-to-mesh contact stop trigger in sim-301" },
      { step: "04", name: "IKFast Trajectory", desc: "Closed-form 6-DoF ABB IRB 1520ID joint execution" }
    ],
    deepDive: [
      {
        title: "MuJoCo 3.x Physical Touch-Sense Simulation (`sim-301`)",
        detail: "Modeled the 6-DoF ABB IRB 1520ID robot and welding torch in MuJoCo 3.x with VHACD convex collision decomposition and high-frequency contact detection that emulates physical `MoveT` electrical wire touch-sensing."
      },
      {
        title: "BVH-Accelerated Headless Seam Ranking (`pnc-301 / safeEdgeSelection.js`)",
        detail: "Built a headless `three-mesh-bvh` Bounding Volume Hierarchy raycaster in JavaScript that evaluates candidate CAD edges, ranks inter-component weld seams, and filters out occluded interior edges."
      }
    ],
    benchmarks: [
      { metric: "Seam Raycast Acceleration", baseline: "O(N) Triangle Scan", result: "O(log N) three-mesh-bvh", delta: "Real-Time Browser & Headless Scoring" },
      { metric: "Robot Digital Twin", baseline: "Kinematic Only", result: "MuJoCo 3.x + VHACD + IKFast", delta: "Full Contact Touch-Sense Physics" }
    ],
    stack: ["MuJoCo 3.x", "IKFast", "VHACD", "React 18", "Three.js", "three-mesh-bvh", "Python"],
    links: []
  },

  // --------------------------------------------------------------------------
  // ATTENTIONVERSE & ENTERPRISE CLIENT SYSTEMS
  // --------------------------------------------------------------------------
  "thecoder-ecosystem": {
    id: "thecoder-ecosystem",
    code: "SYS-AV // 01",
    category: "AttentionVerse Core Platform",
    title: "TheCoder AppMaker Ecosystem — Dynamic API Generator & AI Text-to-App Engine",
    subtitle: "310+ Git Commits across 6 Repositories (`thecoder-backend`, `thecoder-ai`, `thecoder-feign`, `thecoder-json`)",
    timeline: "Jan 2022 – Apr 2024",
    commits: "310+ Commits",
    role: "Software Engineer (Contract) — Backend & AI Systems",
    summary: "A meta-backend and conversational AI platform that turns natural-language prompts or JSON schemas into live, deployed Django REST Framework backends, custom databases, and multi-screen mobile apps on the fly.",
    problem: "Non-technical founders and rapid prototyping teams needed a system that could synthesize not just static UI mockups, but real running REST APIs, database tables, admin panels, and reverse-proxy routes in seconds.",
    pipeline: [
      { step: "01", name: "NL Prompt / Schema", desc: "User describes app or uploads design_text / db_json" },
      { step: "02", name: "C Shared Library", desc: "json_extractor.so + multi-threaded Threads_v16 parser" },
      { step: "03", name: "Meta-Django Builder", desc: "Generates models.py, serializers, views & admin" },
      { step: "04", name: "Live Nginx Reload", desc: "Spawns isolated instance & updates Nginx routing" }
    ],
    deepDive: [
      {
        title: "On-the-Fly Django REST & Nginx Provisioner (`thecoder-backend`, 120 commits)",
        detail: "Engineered `generate_backend/` with Django, Celery, and Redis to parse user database schemas, programmatically emit standalone Django REST Framework applications (models, migrations, CRUD viewsets, admin dashboards), bind unique ports, and dynamically reload Nginx reverse-proxy configs."
      },
      {
        title: "AI Text-to-App Engine with Native C Parser (`thecoder-ai`, 43 commits)",
        detail: "Built a LLM-driven app generator accelerated by a custom compiled C shared library (`json_extractor.c` → `json_extractor.so`) and a 16-thread pipeline (`Threads_v16`) that translates natural language prompts into multi-screen mobile UIs and relational schemas."
      },
      {
        title: "Custom JSON Relational DB & Google Sheets CRUD API (`thecoder-json`, `thecoder-spreadsheet`)",
        detail: "Authored 31 commits on a lightweight relational-over-JSON storage engine and 16 commits on a Google Apps Script cloud connector that transforms any Google Spreadsheet into an authenticated REST API."
      }
    ],
    benchmarks: [
      { metric: "Commit Contributions Across Core Repos", baseline: "6 Repositories", result: "310+ Verified Git Commits", delta: "120 in thecoder-backend alone" },
      { metric: "JSON Stream Extraction Speed", baseline: "Python Regex Parser", result: "Compiled C json_extractor.so", delta: "Multi-Threaded Native Speed" }
    ],
    stack: ["Python", "Django REST Framework", "Celery", "Redis", "C (Shared Library)", "OpenAI API", "Nginx", "PostgreSQL"],
    links: []
  },

  "thecoder-search": {
    id: "thecoder-search",
    code: "SYS-AV // 02",
    category: "Developer Intelligence",
    title: "thecoder-search-2 — AST + Call-Graph Semantic GitHub Code Search",
    subtitle: "31 Git Commits · Python `ast` + JS `esprima` + LangChain + ChromaDB",
    timeline: "Oct 2023 – Mar 2024",
    commits: "31 Commits",
    role: "Lead Developer",
    summary: "An AST-aware semantic code search engine that parses Python and JavaScript repositories into syntax-tree function blocks, builds call-graph dependencies, generates LLM summaries, and indexes them in ChromaDB.",
    problem: "Naive line-chunking of source code breaks functions in half and loses caller/callee context, causing poor retrieval quality when developers search repositories with natural language queries.",
    pipeline: [
      { step: "01", name: "AST Decomposition", desc: "Python ast & JS esprima extract exact functions/classes" },
      { step: "02", name: "Call-Graph Builder", desc: "Maps inter-function invocations & imports" },
      { step: "03", name: "LLM Summarizer", desc: "Generates structured docstrings & intent tags" },
      { step: "04", name: "ChromaDB Vector Index", desc: "Serves semantic natural-language code retrieval" }
    ],
    deepDive: [
      {
        title: "Syntax-Tree Function Extraction & Call-Graph Linking",
        detail: "Uses Python's native `ast` module and JavaScript's `esprima` parser to extract complete syntactic units (functions, classes, methods) along with their caller/callee dependency graphs before embedding."
      },
      {
        title: "Asynchronous Celery Indexing Pipeline",
        detail: "Orchestrates background repository cloning, AST parsing, LangChain semantic summarization, and ChromaDB vector upserts via Celery workers and FastAPI/Flask endpoints."
      }
    ],
    benchmarks: [
      { metric: "Code Chunking Granularity", baseline: "Fixed Token Windows", result: "Exact AST Function/Class Nodes", delta: "+Call-Graph Dependency Context" }
    ],
    stack: ["Python (ast)", "JavaScript (esprima)", "LangChain", "ChromaDB", "Celery", "FastAPI", "Flask"],
    links: []
  },

  "iit-mandi-health": {
    id: "iit-mandi-health",
    code: "SYS-AV // 03",
    category: "Healthcare & OCR Backend",
    title: "iitmandi-health-api — IIT Mandi iHUB Medical OCR & Doctor Alert Backend",
    subtitle: "51 Git Commits · Deployed Healthcare Survey, Prescription OCR & Push Alert System",
    timeline: "Apr 2023 – Apr 2024",
    commits: "51 Commits",
    role: "Backend & Computer Vision Engineer",
    summary: "Production Django REST + PostgreSQL backend built for IIT Mandi iHUB's regional healthcare initiative, combining OpenCV/OCR medical report digitization with real-time abnormal-vital push alerts for doctors.",
    problem: "Patients in remote Himachal Pradesh regions needed a mobile platform to digitize paper lab reports, complete structured health surveys, and automatically alert assigned doctors when critical vitals crossed safety thresholds.",
    pipeline: [
      { step: "01", name: "OpenCV / OCR Scan", desc: "Preprocesses & extracts text from paper lab reports" },
      { step: "02", name: "Vital Anomaly Check", desc: "Evaluates patient surveys & vitals against thresholds" },
      { step: "03", name: "Firebase / Expo Push", desc: "Dispatches real-time alerts to assigned doctors" },
      { step: "04", name: "Cloud Media Sync", desc: "Stores encrypted records on AWS S3 & GCP Storage" }
    ],
    deepDive: [
      {
        title: "Medical Report OCR & Structured Survey Engine",
        detail: "Built OpenCV image preprocessing and OCR extraction endpoints alongside longitudinal health survey APIs, doctor-patient assignment workflows, and appointment scheduling."
      },
      {
        title: "Automated Doctor Push Notification Pipeline",
        detail: "Integrated Firebase Cloud Messaging (FCM) and Expo Push Notifications to immediately notify on-call doctors when patient submissions indicate high-risk vital signs."
      }
    ],
    benchmarks: [
      { metric: "Production Backend Commits", baseline: "IIT Mandi iHUB Project", result: "51 Commits", delta: "Full DRF + OCR + FCM Stack" }
    ],
    stack: ["Django REST Framework", "PostgreSQL", "OpenCV / OCR", "Firebase / Expo Push", "AWS S3", "GCP Storage"],
    links: []
  },

  "coal-india-rag": {
    id: "coal-india-rag",
    code: "SYS-CL // 02",
    category: "Client & College R&D",
    title: "Act Master — Coal India Mining Regulations Local RAG Chatbot",
    subtitle: "Quantized Falcon-Q4 Local LLM + ChromaDB Vector Retrieval for Legal Compliance",
    timeline: "Sep 2023 – Jun 2024",
    commits: "coal-india-chatbot",
    role: "Independent AI / RAG Engineer (College R&D)",
    summary: "An air-gapped / local Retrieval-Augmented Generation (RAG) compliance assistant built to query Indian mining acts, safety circulars, and statutory regulations using a quantized local Falcon LLM and ChromaDB.",
    problem: "Public-sector mining officers needed rapid, citation-backed answers across hundreds of pages of Indian mining laws without sending sensitive internal queries to external cloud APIs.",
    pipeline: [
      { step: "01", name: "Statute Ingestion", desc: "Parses Indian Mining Acts & regulatory circulars" },
      { step: "02", name: "ChromaDB Indexing", desc: "Dense semantic embeddings of legal clauses" },
      { step: "03", name: "Local Falcon-Q4", desc: "4-bit quantized GGML GPT4All Falcon inference" },
      { step: "04", name: "Django + FastAPI UI", desc: "Streams citation-grounded compliance answers" }
    ],
    deepDive: [
      {
        title: "100% Local Quantized LLM Inference (`ggml-model-gpt4all-falcon-q4_0.bin`)",
        detail: "Deployed a 4-bit quantized Falcon model via GPT4All/PrivateGPT bindings paired with ChromaDB vector search, ensuring zero external API dependency and full data privacy."
      }
    ],
    benchmarks: [
      { metric: "Model Footprint", baseline: "FP16 Cloud LLM", result: "4-Bit Quantized GGML Falcon", delta: "100% Offline CPU/Edge Execution" }
    ],
    stack: ["Python", "Django", "FastAPI", "ChromaDB", "GPT4All / Falcon-Q4 (GGML)", "LangChain"],
    links: []
  },

  "gail-backend": {
    id: "gail-backend",
    code: "SYS-CL // 01",
    category: "Client & College R&D",
    title: "GAIL (India) Limited — Petrochemical Pricing PDF & Freight Automation Engine",
    subtitle: "Automated Multi-Table PDF Extraction, RapidFuzz Normalization & SAP Grade Joining",
    timeline: "Nov 2024 – Jan 2025",
    commits: "gail-backend (Production AWS EC2 Deployment)",
    role: "Lead Backend & Document Intelligence Engineer",
    summary: "Engineered and deployed a Django 5 + DRF automation pipeline on AWS EC2 that extracts complex multi-page tables from GAIL India's monthly Stock Point and Ex-Works pricing PDFs and joins them with Freight List Excel sheets.",
    problem: "GAIL India's monthly petrochemical price revisions arrive as complex PDFs with shifting column headers, merged cells, and hundreds of SAP product grades that previously required error-prone manual spreadsheet reconciliation.",
    pipeline: [
      { step: "01", name: "PDF Table Vision", desc: "OpenCV line detection + Camelot & Tabula extraction" },
      { step: "02", name: "RapidFuzz Matcher", desc: "Levenshtein header normalization (≥ 0.95 threshold)" },
      { step: "03", name: "SAP Grade Joiner", desc: "Cross-document join with Freight List Excel workbooks" },
      { step: "04", name: "AWS EC2 Production", desc: "Served via Nginx + uWSGI + SSL REST APIs" }
    ],
    deepDive: [
      {
        title: "Hybrid OpenCV + Camelot/Tabula PDF Table Extractor",
        detail: "Combines morphological OpenCV table-grid detection with `camelot-py` and `tabula-py` lattice/stream parsers to accurately recover multi-page *Stock Point* and *Ex-Works* price matrices."
      },
      {
        title: "Fuzzy Levenshtein Schema Normalization (`RapidFuzz` ≥ 0.95)",
        detail: "Automatically resolves typographical variations and formatting shifts across monthly PDF releases using `RapidFuzz` string similarity (≥ 0.95 threshold) before joining with *Freight List* Excel sheets across SAP grades."
      }
    ],
    benchmarks: [
      { metric: "Header Schema Matching", baseline: "Brittle Exact String Match", result: "RapidFuzz Levenshtein (≥ 0.95)", delta: "Resilient to Monthly PDF Shifts" },
      { metric: "Reconciliation Speed", baseline: "Hours of Manual Excel Entry", result: "Seconds (Automated API)", delta: "Deployed on AWS EC2 (Nginx/uWSGI)" }
    ],
    stack: ["Django 5", "Django REST Framework", "Camelot", "Tabula", "OpenCV", "RapidFuzz", "Pandas", "AWS EC2", "Nginx / uWSGI"],
    links: []
  },

  "repetition-cerebro": {
    id: "repetition-cerebro",
    code: "SYS-AV // 04",
    category: "EdTech & Socratic AI Agents",
    title: "Repetition & Cerebro Coach — AI Spaced-Repetition & Socratic Discord Ecosystem",
    subtitle: "67+ Git Commits · Django + Next.js 13 + Multi-Agent Discord Socratic Tutors",
    timeline: "Jul 2022 – Jan 2024",
    commits: "67 Commits (repetition-backend) + UI & Bots",
    role: "Full-Stack & AI Agent Engineer",
    summary: "An AI-assisted active recall platform (`repetition-backend`, `repetition-ui`) paired with Socratic Discord bots (`cerebro-coach`) that ingest YouTube lectures, build vector memories, and quiz students via interactive dialogues.",
    problem: "Passive video watching leads to rapid knowledge decay. Students needed an automated system that extracts key concepts from lectures, schedules spaced-repetition reviews, and conducts Socratic questioning.",
    pipeline: [
      { step: "01", name: "YouTube / Doc Ingest", desc: "Transcript extraction & semantic chunking" },
      { step: "02", name: "Vector Memory", desc: "Pinecone & local vector indexing of concepts" },
      { step: "03", name: "Socratic Agent", desc: "OpenAI function-calling teacher-student loop" },
      { step: "04", name: "Next.js 13 + Discord", desc: "Embedded JS playground & spaced-repetition scheduler" }
    ],
    deepDive: [
      {
        title: "Spaced-Repetition Backend & Embedded Code Playground",
        detail: "Authored 67 commits on the Django REST + PostgreSQL scheduling engine and built the Next.js 13 frontend featuring an embedded JavaScript execution sandbox."
      },
      {
        title: "Multi-Agent Socratic Discord Bots (`cerebro-coach`)",
        detail: "Implemented Discord bot agents using OpenAI function calling and vector retrieval to guide learners through step-by-step Socratic debugging rather than giving away direct answers."
      }
    ],
    benchmarks: [
      { metric: "Backend Commit History", baseline: "repetition-backend", result: "67 Commits", delta: "Full DRF + Next.js 13 + Discord Stack" }
    ],
    stack: ["Django REST Framework", "PostgreSQL", "Next.js 13", "React", "OpenAI Function Calling", "Pinecone", "Discord.py"],
    links: []
  },

  "samsung-display": {
    id: "samsung-display",
    code: "SYS-MFG // 01",
    category: "High-Precision Manufacturing",
    title: "Samsung Display Noida — Assistant Engineer (OLB Core Unit)",
    subtitle: "10 Months Full-Time · Outer Lead Bonding (OLB) OLED Panel Manufacturing",
    timeline: "Apr 2021 – Jan 2022",
    commits: "Full-Time Industrial Role",
    role: "Assistant Engineer (CP / OLB Core)",
    summary: "Worked on the high-speed automated Outer Lead Bonding (OLB) production line at Samsung Display Noida, collaborating directly with South Korean equipment engineers on machine diagnostics and yield optimization.",
    problem: "Micron-level alignment tolerances in OLED Outer Lead Bonding require continuous machine vision inspection, PLC fault diagnostics, and rapid root-cause analysis to prevent panel defects.",
    pipeline: [
      { step: "01", name: "OLB Line Telemetry", desc: "High-speed automated bonding & optical inspection" },
      { step: "02", name: "PLC Diagnostics", desc: "Hardware fault isolation with Korean engineering team" },
      { step: "03", name: "Yield Optimization", desc: "Defect root-cause analysis & process tuning" }
    ],
    deepDive: [
      {
        title: "Foundation in Industrial Automation & Machine Precision",
        detail: "Hands-on experience with industrial PLCs, optical alignment systems, and factory floor quality assurance at Samsung Display laid the practical groundwork for later architecting robotic welding and 3D vision calibration systems at Terafac."
      }
    ],
    benchmarks: [
      { metric: "Tenure", baseline: "Apr 2021 – Jan 2022", result: "10 Months Full-Time", delta: "OLB Core Manufacturing Unit" }
    ],
    stack: ["Industrial Automation", "PLC Diagnostics", "OLB Bonding Systems", "Root-Cause Analysis", "Quality Assurance"],
    links: []
  },

  // --------------------------------------------------------------------------
  // FEATURED PROJECTS, DISSERTATIONS & ML COMPETITIONS
  // --------------------------------------------------------------------------
  "proj-welding-mujoco": {
    id: "proj-welding-mujoco",
    code: "PROJ // 01",
    category: "3D Vision & Robotics",
    title: "Vision-Tactile Guided Robotic Welding in MuJoCo (8th-Sem Dissertation)",
    subtitle: "Scored 36/40 (1st in Batch at USAR, GGSIPU) · 85–90% Pose Error Reduction",
    timeline: "Feb 2026 – May 2026",
    commits: "Major Dissertation (ARP 452)",
    role: "Sole Researcher & Architect",
    metricBadge: "0.3–0.5 mm Error (36/40 #1 Rank)",
    filterTag: "robotics",
    summary: "Designed a 5-module closed-loop robotic welding architecture in MuJoCo 3.x combining coarse RGB-D 6-DoF pose estimation with 9-point tactile wire touch-sensing (`MoveT`) and lever-arm gated Kabsch/SVD plane intersection.",
    problem: "Pure vision-based 6D pose estimation (`FoundationPose`) suffers from 2.5–4.5 mm localization error due to depth noise and metallic glare, whereas MIG/MAG welding requires ≤ 0.5 mm accuracy.",
    pipeline: [
      { step: "01", name: "KD-Tree + PCA Frame", desc: "Local surface framing & <3s BFS raycast grid scan" },
      { step: "02", name: "9-Pt MoveT Probing", desc: "3 orthogonal planes × 3 physical contact points" },
      { step: "03", name: "Gated Kabsch + SVD", desc: "≥50mm lever-arm gated rotation alignment" },
      { step: "04", name: "3-Plane Ax=b Solver", desc: "Exact linear intersection locks 3D translation" },
      { step: "05", name: "3rd-Surface Check", desc: "0.14–0.28 mm independent validation residuals" }
    ],
    deepDive: [
      {
        title: "5-Module Closed-Loop System Architecture",
        detail: "Integrates `pnc-301` (React/Three.js seam selection), `api-103` (Flask/Socket.IO orchestrator), `vision-301` (BFS probe planner + SVD/Kabsch solver), `path-301` (IKFast trajectory generator), and `sim-301` (MuJoCo 3.x ABB IRB 1520ID physics twin)."
      },
      {
        title: "BFS Raycast Grid Scanner (< 3 Seconds on 50k-Polygon Meshes)",
        detail: "Constructs local surface coordinate frames via KD-Tree neighborhood search and PCA, then runs Breadth-First Search (BFS) with ray-mesh collision checks to automatically place 9 collision-free tactile probe targets across 3 mutually orthogonal walls."
      },
      {
        title: "Mathematical Decoupling of Rotation & Translation",
        detail: "Solves rotation via weighted Kabsch SVD with a 50 mm minimum lever-arm gate (skipping degenerate planes), then solves the 3×3 linear system A t_corr = b of plane offsets to eliminate tangent sliding errors along the workpiece surface."
      }
    ],
    benchmarks: [
      { metric: "Test Case 1 (+15mm X, -10mm Y, +5° Yaw)", baseline: "3.1 mm (Vision)", result: "0.3 mm (Hybrid)", delta: "0.18 mm Validation Residual" },
      { metric: "Test Case 2 (-20mm X, +25mm Y, -8° Yaw)", baseline: "3.8 mm (Vision)", result: "0.4 mm (Hybrid)", delta: "0.22 mm Validation Residual" },
      { metric: "Test Case 3 (+30mm X, +15mm Y, +12° Yaw)", baseline: "4.3 mm (Vision)", result: "0.5 mm (Hybrid)", delta: "0.28 mm Validation Residual" },
      { metric: "Test Case 4 (-10mm X, -30mm Y, +3°P/-6°Y)", baseline: "2.7 mm (Vision)", result: "0.3 mm (Hybrid)", delta: "0.14 mm Validation Residual" },
      { metric: "Total End-to-End Cycle Time", baseline: "Manual Teaching", result: "18 – 22 seconds", delta: "<3s BFS Scan + ~4s Vision-6" }
    ],
    stack: ["MuJoCo 3.x", "ABB IRB 1520ID", "Open3D", "FoundationPose", "Kabsch / SVD", "IKFast", "Python"],
    links: []
  },

  "proj-dexgraspvla": {
    id: "proj-dexgraspvla",
    code: "PROJ // 02",
    category: "3D Vision & Robotics",
    title: "DexGraspVLA MuJoCo Bridge — 25-DoF Vision-Language-Action Dexterous Grasping",
    subtitle: "7th-Sem Minor Project · 7-DoF Franka Panda + 18-DoF Shadow Hand + SAM 2 + Cutie + DINOv2",
    timeline: "Nov 2025 – Dec 2025",
    commits: "DexGraspVLA Simulation Port",
    role: "Lead Robotics & VLA Researcher",
    metricBadge: "6-DoF ↔ 18-DoF Kinematic Bridge",
    filterTag: "robotics",
    summary: "Replaced proprietary physical robot hardware dependencies in DexGraspVLA with a thread-safe MuJoCo 3.x simulation bridge driving a 7-DoF Franka Emika Panda arm and an 18-DoF Shadow Dexterous Hand.",
    problem: "DexGraspVLA was hard-coupled to proprietary RealMan RM65 and PsiBot G0-R hardware APIs and a 6-DoF inspire hand, making it impossible to run or benchmark in open-source physics simulation with a high-DoF anthropomorphic hand.",
    pipeline: [
      { step: "01", name: "Lang Prompt + RGB-D", desc: "Dual MuJoCo cameras (head + wrist) @ 60Hz" },
      { step: "02", name: "SAM 2 + Cutie Tracker", desc: "Upgraded temporal object mask tracking" },
      { step: "03", name: "DINOv2 + Diffusion", desc: "VLA feature extraction & grasp trajectory policy" },
      { step: "04", name: "6-DoF ↔ 18-DoF Map", desc: "Bidirectional kinematic mapping for Shadow Hand" }
    ],
    deepDive: [
      {
        title: "Bidirectional 6-DoF ↔ 18-DoF Shadow Hand Kinematic Mapping",
        detail: "Designed an analytical joint coupling transformation that maps the Diffusion Policy's 6-DoF hand action space onto the 18-DoF actuated joints of the Shadow Dexterous Hand (distributing flexion across proximal, middle, and distal phalanges plus thumb opposition) and inversely compresses 18-DoF proprioceptive state back into 6-DoF policy observations."
      },
      {
        title: "SAM v1 → SAM 2 + Cutie Upgrade & DINOv2 Attention Visualizer",
        detail: "Upgraded the visual perception front-end to Meta SAM 2 paired with Cutie video object segmentation, and built a non-blocking multiprocess visualization dashboard streaming live DINOv2 multi-head self-attention heatmaps during grasp execution."
      }
    ],
    benchmarks: [
      { metric: "Simulated Manipulator Complexity", baseline: "Proprietary 6-DoF Hand", result: "7-DoF Panda + 18-DoF Shadow Hand", delta: "25-DoF Total Articulation" },
      { metric: "Perception Stack", baseline: "Static SAM v1", result: "SAM 2 + Cutie + DINOv2 Heatmap UI", delta: "Real-Time Temporal Tracking" }
    ],
    stack: ["MuJoCo 3.x", "PyTorch", "Diffusion Policy (VLA)", "Meta SAM 2", "Cutie", "DINOv2", "Franka Panda / Shadow Hand"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/DexGraspVLA" }
    ]
  },

  "proj-food101": {
    id: "proj-food101",
    code: "PROJ // 03",
    category: "AI/ML & Competitions",
    title: "Terafac ML Challenge 2026 — 4-Stage Progressive FOOD-101 Vision Pipeline",
    subtitle: "101,000 Images (101 Classes) · Improved Baseline from 60.43% to 84.24% Top-1 Accuracy",
    timeline: "Jan 2026",
    commits: "terafacMlChallenge2026Placement",
    role: "Sole Competitor (Selected for ₹10 LPA PPO Offer)",
    metricBadge: "84.24% Top-1 (+23.81% Gain)",
    filterTag: "aiml",
    summary: "Built a 4-stage progressive deep learning architecture on the 101-class FOOD-101 dataset (75,750 train / 25,250 test images), culminating in a custom Squeeze-and-Excitation ResNet-50, Grad-CAM explainability suite, and a 3-model weighted ensemble reaching 84.24% Top-1 accuracy.",
    problem: "Fine-grained food classification across 101 visually overlapping categories suffers from severe intra-class variance, background clutter, and rapid overfitting under naive transfer learning.",
    pipeline: [
      { step: "01", name: "Level 1 Baseline", desc: "Standard ResNet-50 transfer learning (60.43%)" },
      { step: "02", name: "Level 2 Regimen", desc: "RandAugment, Cosine Annealing & Label Smoothing (79.96%)" },
      { step: "03", name: "Level 3 SE-ResNet-50", desc: "Custom Squeeze-and-Excitation blocks + Grad-CAM" },
      { step: "04", name: "Level 4 ViT Ensemble", desc: "Fine-tuned ViT-B/16 (80.27%) + 3-Model Ensemble (84.24%)" }
    ],
    deepDive: [
      {
        title: "Custom Squeeze-and-Excitation (SE-ResNet-50) & Grad-CAM Explainability",
        detail: "Injected channel-wise Squeeze-and-Excitation attention modules into ResNet-50 bottleneck blocks to dynamically recalibrate feature maps toward discriminative food textures, verified via layer-wise Grad-CAM spatial heatmaps."
      },
      {
        title: "Complementary CNN + Vision Transformer Probability Fusion",
        detail: "Combined the local inductive bias of `ResNet-50` and `SE-ResNet-50` with the global self-attention of `vit-base-patch16-224` (80.27% standalone), achieving 84.24% Top-1 test accuracy (+23.81% over Level 1)."
      }
    ],
    benchmarks: [
      { metric: "Level 1 — Baseline ResNet-50", baseline: "101 Classes (25,250 Test)", result: "60.43% Top-1 Accuracy", delta: "Baseline Reference" },
      { metric: "Level 2 — Regularized ResNet-50", baseline: "60.43%", result: "79.96% Top-1 Accuracy", delta: "+19.53% Improvement" },
      { metric: "Level 3 — Custom SE-ResNet-50 + Grad-CAM", baseline: "Channel Attention", result: "Spatial Focus Verified", delta: "Squeeze-and-Excitation" },
      { metric: "Level 4 — Standalone ViT-Base-16", baseline: "79.96%", result: "80.27% Top-1 Accuracy", delta: "Global Self-Attention" },
      { metric: "Level 4 — Weighted 3-Model Ensemble", baseline: "60.43% Baseline", result: "84.24% Top-1 Accuracy", delta: "+23.81% Total Gain" }
    ],
    stack: ["PyTorch", "Vision Transformer (ViT-B/16)", "Custom SE-ResNet-50", "Grad-CAM", "Mixed Precision (AMP)", "Cosine Annealing"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/terafacMlChallenge2026Placement" }
    ]
  },

  "proj-i2v": {
    id: "proj-i2v",
    code: "PROJ // 04",
    category: "AI/ML & Competitions",
    title: "I2V 24-Hour Vehicle Classification & ONNX Runtime Deployment Challenge",
    subtitle: "86.35% Accuracy / 88.27% Precision / 86.80% F1 · ONNX Numerical Parity < 6.9e-4",
    timeline: "Jan 2026",
    commits: "i2v_challenge",
    role: "Sole Developer",
    metricBadge: "88.27% Precision · ONNX < 6.9e-4",
    filterTag: "aiml",
    summary: "Completed an end-to-end 24-hour industrial computer vision challenge on a noisy, heavily imbalanced 12-class Indian traffic dataset—performing CleanVision data auditing, imbalance-aware training, and verified ONNX Runtime deployment.",
    problem: "Real-world Indian CCTV vehicle crops contained corrupted files, near-duplicates, extreme class imbalance (auto-rickshaws, tempos, trucks, two-wheelers), and required production ONNX export with strict numerical equivalence.",
    pipeline: [
      { step: "01", name: "CleanVision Audit", desc: "Purged corrupt, blurry, dark & duplicate samples" },
      { step: "02", name: "Imbalance Sampler", desc: "Inverse-frequency WeightedRandomSampler + smoothing" },
      { step: "03", name: "ResNet-50 Fine-Tune", desc: "86.35% Accuracy / 88.27% Precision / 86.80% F1" },
      { step: "04", name: "ONNX Parity Check", desc: "Exported to ONNX Runtime with < 6.9e-4 max diff" }
    ],
    deepDive: [
      {
        title: "Automated Dataset Auditing (`CleanVision`) & Class Rebalancing",
        detail: "Programmatically scanned thousands of raw vehicle images to quarantine exact/near duplicates, low-information frames, and aspect-ratio outliers before applying inverse class-weight sampling (`WeightedRandomSampler`)."
      },
      {
        title: "Production ONNX Graph Export & Numerical Parity Verification",
        detail: "Exported the trained PyTorch model to ONNX with dynamic batch axes and verified tensor-level output parity between `torch.cuda` and `onnxruntime` across the test split (`max_abs_diff < 6.9e-4`)."
      }
    ],
    benchmarks: [
      { metric: "Test Accuracy (12 Indian Vehicle Classes)", baseline: "Imbalanced Raw Dataset", result: "86.35%", delta: "Balanced Multi-Class" },
      { metric: "Weighted Precision", baseline: "Imbalanced Raw Dataset", result: "88.27%", delta: "High Confidence Predictions" },
      { metric: "Weighted F1-Score", baseline: "Imbalanced Raw Dataset", result: "86.80%", delta: "86.35% Recall" },
      { metric: "PyTorch vs. ONNX Runtime Max Logit Diff", baseline: "1e-2 Tolerance", result: "< 6.9e-4", delta: "Exact Production Parity" }
    ],
    stack: ["PyTorch", "ONNX Runtime", "ResNet-50", "CleanVision", "Scikit-Learn", "OpenCV"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/i2v_challenge" }
    ]
  },

  "proj-amazon-ml": {
    id: "proj-amazon-ml",
    code: "PROJ // 05",
    category: "AI/ML & Competitions",
    title: "Amazon ML Challenge 2025 — Two-Phase Multimodal Product Pricing Engine",
    subtitle: "150,000 Products (75k Train / 75k Test) · DeBERTa-v3 + ViT + Custom SMAPE Loss + LightGBM",
    timeline: "Oct 2025",
    commits: "amazon_ml_2025",
    role: "Lead ML Architect",
    metricBadge: "150k Products · DeBERTa + ViT + GBDT",
    filterTag: "aiml",
    summary: "Architected a 2-phase multimodal pricing pipeline across 150,000 e-commerce listings, fine-tuning a joint `DeBERTa-v3 + ViT` neural feature extractor with a custom differentiable `SMAPELoss + MAE HybridLoss` and stacking a 2,500-tree `LightGBM` regressor.",
    problem: "Predicting exact product prices across 150,000 heterogeneous Amazon items requires simultaneously understanding catalog text specs, pack quantities (`ipq`), and product packaging imagery while optimizing directly for Symmetric Mean Absolute Percentage Error (SMAPE).",
    pipeline: [
      { step: "01", name: "Regex IPQ & Text", desc: "Extracts Item Pack Quantity, unit specs & DeBERTa tokens" },
      { step: "02", name: "DeBERTa-v3 + ViT", desc: "Joint multimodal neural backbone trained on Hybrid SMAPE" },
      { step: "03", name: "Penultimate Latents", desc: "Extracts dense neural embeddings + SentenceTransformers" },
      { step: "04", name: "2,500-Tree LightGBM", desc: "Gradient boosted decision tree meta-regressor" }
    ],
    deepDive: [
      {
        title: "Custom Differentiable `SMAPELoss + MAE HybridLoss` (α = 0.7)",
        detail: "Standard MSE loss over-penalizes expensive items and ignores cheap items under SMAPE evaluation. Formulated a smooth, differentiable hybrid objective `L = α · SMAPE_smooth + (1 - α) · MAE` in log-price space to align neural representation learning directly with the competition metric."
      },
      {
        title: "Two-Phase Neural-to-GBDT Stacking Architecture",
        detail: "Extracted penultimate multimodal fusion embeddings from the fine-tuned `DeBERTa-v3 + ViT` network, concatenated them with engineered regex pack-quantity (`ipq`) features, and trained a 2,500-estimator `LightGBM` gradient booster."
      }
    ],
    benchmarks: [
      { metric: "Dataset Scale", baseline: "Multimodal Text + Images", result: "150,000 Products (75k/75k)", delta: "Full Catalog Coverage" },
      { metric: "Optimization Objective", baseline: "Standard L2 / MSE", result: "Hybrid SMAPE + MAE (α=0.7)", delta: "Direct Metric Alignment" }
    ],
    stack: ["PyTorch", "DeBERTa-v3", "Vision Transformer (ViT)", "SentenceTransformers", "LightGBM (2,500 Trees)", "Custom Hybrid SMAPE Loss"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/amazon_ml_2025" }
    ]
  },

  "proj-grammar-engine": {
    id: "proj-grammar-engine",
    code: "PROJ // 06",
    category: "AI/ML & Competitions",
    title: "Spoken Grammar Scoring Engine — Whisper + Flan-T5 + DistilBERT Meta-Ensemble",
    subtitle: "SHL Assessment Challenge · 0.763 MAE / 0.911 RMSE / 0.625 Pearson r",
    timeline: "Apr 2025",
    commits: "GrammerScoringEngine",
    role: "Sole Author",
    metricBadge: "0.763 MAE · 0.625 Pearson r",
    filterTag: "aiml",
    summary: "An end-to-end spoken English grammar assessment pipeline that transcribes raw audio via OpenAI Whisper, synthesizes grammatically corrected reference text via `Flan-T5-Large` to compute structural edit distances, and fuses `DistilBERT` with gradient-boosted linguistic features.",
    problem: "Scoring spoken grammar from raw audio is challenging because ASR models auto-correct grammar Mistakes, and small training datasets overfit without synthetic linguistic signals.",
    pipeline: [
      { step: "01", name: "Whisper ASR", desc: "Raw verbatim transcription + disfluency cleaning" },
      { step: "02", name: "Flan-T5-Large Diff", desc: "Generates corrected sentence → Levenshtein edit ratio" },
      { step: "03", name: "Linguistic + BERT", desc: "spaCy POS/dependency tags + fine-tuned DistilBERT" },
      { step: "04", name: "Meta-Ensemble", desc: "XGBoost + LightGBM + MLP stack (0.763 MAE)" }
    ],
    deepDive: [
      {
        title: "Generative Grammar Edit-Ratio Feature Engineering (`Flan-T5-Large`)",
        detail: "Passes each speaker's raw Whisper transcript through `google/flan-t5-large` prompted for minimal grammatical correction, then computes token- and character-level Levenshtein edit ratios between the original speech and the T5-corrected ideal."
      },
      {
        title: "Contextual Augmentation & Multi-Model Stacking",
        detail: "Expanded training coverage with `nlpaug` contextual synonym/antonym perturbations, combined `spaCy`/`textstat` syntactic complexity metrics with fine-tuned `DistilBERT` embeddings, and stacked `XGBoost`, `LightGBM`, and `MLP` regressors."
      }
    ],
    benchmarks: [
      { metric: "Mean Absolute Error (MAE)", baseline: "1.0+ Baseline", result: "0.763 MAE", delta: "5-Point Grammar Scale" },
      { metric: "Root Mean Squared Error (RMSE)", baseline: "1.2+ Baseline", result: "0.911 RMSE", delta: "Low Variance Predictions" },
      { metric: "Pearson Correlation (r)", baseline: "Unimodal ASR", result: "0.625 Pearson r", delta: "Strong Human Rater Agreement" }
    ],
    stack: ["OpenAI Whisper", "Flan-T5-Large", "DistilBERT", "spaCy / textstat", "nlpaug", "XGBoost / LightGBM", "PyTorch"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/GrammerScoringEngine" }
    ]
  },

  "proj-chess-stream": {
    id: "proj-chess-stream",
    code: "PROJ // 07",
    category: "Backend, WebRTC & Agents",
    title: "chess_stream — Cross-Platform 1v1 Live Video & WebRTC Data-Channel Chess Arena",
    subtitle: "Flutter 3.x (3,293 LOC Dart) + Go 1.20+ Matchmaking Coordinator + LiveKit WebRTC SFU",
    timeline: "Jul 2023 – Oct 2026",
    commits: "chess_stream & reactube_project",
    role: "Sole Architect & Full-Stack Developer",
    metricBadge: "Go + Flutter + WebRTC SFU",
    filterTag: "systems",
    summary: "A cross-platform real-time 1v1 video and blitz chess application combining a concurrent Go matchmaking server with LiveKit WebRTC SFU media streams and lossless peer-to-peer WebRTC Data Channels for sub-millisecond move and clock synchronization.",
    problem: "Playing blitz chess over video call typically requires juggling Zoom/Discord alongside a separate browser tab, while relaying moves through REST APIs introduces lag into increment chess clocks.",
    pipeline: [
      { step: "01", name: "Go Matchmaker", desc: "Lock-free sync.Map queue + 6-digit private room codes" },
      { step: "02", name: "LiveKit JWT Mint", desc: "Stateless room token generation & SFU negotiation" },
      { step: "03", name: "WebRTC Video/Audio", desc: "1v1 camera & mic streaming in Flutter 3.x UI" },
      { step: "04", name: "WebRTC Data Channel", desc: "Lossless P2P chess moves, increment clocks & chat" }
    ],
    deepDive: [
      {
        title: "Stateless Go Matchmaking & LiveKit Token Coordinator",
        detail: "Built a lightweight Go 1.20+ HTTP service using concurrent `sync.Map` structures to pair players via a public FIFO matchmaking queue or 6-digit private room codes, minting cryptographically signed LiveKit JWT room tokens."
      },
      {
        title: "3,293-Line Flutter 3.x Client with WebRTC Data Channel Protocol",
        detail: "Synchronizes algebraic chess moves, Fischer increment countdown clocks, draw/resign states, and live chat directly over reliable WebRTC Data Channels alongside low-latency 1v1 camera/microphone tiles."
      }
    ],
    benchmarks: [
      { metric: "Move & Clock Sync Transport", baseline: "Centralized HTTP Polling", result: "WebRTC Reliable Data Channels", delta: "Sub-10ms P2P State Sync" },
      { metric: "Client Codebase Scale", baseline: "Cross-Platform Mobile/Web/Desktop", result: "3,293 LOC Dart (Flutter 3.x)", delta: "+ Concurrent Go Coordinator" }
    ],
    stack: ["Go 1.20+", "Flutter 3.x / Dart", "LiveKit WebRTC SFU", "WebRTC Data Channels", "JWT", "Concurrent sync.Map"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/chess_stream" }
    ]
  },

  "proj-npc-world": {
    id: "proj-npc-world",
    code: "PROJ // 08",
    category: "Backend, WebRTC & Agents",
    title: "npc_world — Persistent AI-Native 2D Multiplayer World with 7D Relationship Vectors",
    subtitle: "FastAPI Async WebSockets + PostgreSQL 16 (`pgvector`) + AWS Bedrock LiteLLM + Godot 4.7",
    timeline: "Aug 2026",
    commits: "npc_world",
    role: "System Architect",
    metricBadge: "pgvector + 7D Social Vectors",
    filterTag: "systems",
    summary: "A server-authoritative 2D multiplayer simulation where autonomous AI NPCs form episodic vector memories in `pgvector` and dynamically update a 7-dimensional psychological relationship vector toward every player.",
    problem: "Video game NPCs typically rely on static dialogue trees or stateless LLM prompts that forget past betrayals, favors, or emotional context across sessions.",
    pipeline: [
      { step: "01", name: "Godot 4.7 WebSocket", desc: "Real-time spatial proximity & dialogue events" },
      { step: "02", name: "pgvector Episodic DB", desc: "Retrieves memories weighted by importance & valence" },
      { step: "03", name: "7D Relationship Math", desc: "Updates trust, affection, respect, fear & grievance" },
      { step: "04", name: "LiteLLM / Bedrock", desc: "Synthesizes proactive greetings & actions" }
    ],
    deepDive: [
      {
        title: "7-Dimensional Relationship State Vector per Player-NPC Pair",
        detail: "Tracks `familiarity`, `trust`, `affection`, `respect`, `fear`, `obligation`, and `grievance` in PostgreSQL 16, mutating these continuous axes after every interaction and injecting them into the NPC's cognitive prompt."
      },
      {
        title: "Episodic Memory Retrieval (`pgvector` + Emotional Valence)",
        detail: "Embeds interaction summaries into `pgvector` along with `importance` and `emotional_valence` scores so NPCs recall high-impact past events and initiate proactive context-aware greetings when a player walks nearby."
      }
    ],
    benchmarks: [
      { metric: "Social State Representation", baseline: "1D Affinity Score", result: "7-Dimensional Vector", delta: "Trust, Respect, Fear, Grievance..." },
      { metric: "Memory Persistence", baseline: "Context Window Only", result: "PostgreSQL 16 + pgvector", delta: "Long-Term Episodic Recall" }
    ],
    stack: ["FastAPI", "Async WebSockets", "PostgreSQL 16", "pgvector", "SQLAlchemy Async", "LiteLLM (AWS Bedrock)", "Godot 4.7"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/npc_world" }
    ]
  },

  "proj-gemini-tutor": {
    id: "proj-gemini-tutor",
    code: "PROJ // 09",
    category: "Backend, WebRTC & Agents",
    title: "gemini_tutor — Multimodal AI Textbook-to-Podcast & Visual Tutor",
    subtitle: "Gemini 3 Pro (`thinking_level=\"high\"`) + Gemini 2.5 Flash Multi-Speaker 24kHz FLAC TTS",
    timeline: "Nov 2025",
    commits: "gemini_tutor",
    role: "Sole Developer",
    metricBadge: "Gemini 3 Pro + 24kHz FLAC TTS",
    filterTag: "systems",
    summary: "Transforms dense textbook PDFs (equations, circuit diagrams, proofs) into an interactive visual reader accompanied by a lively 2-host educational podcast (*Liam & Dr. Anya*) synthesized in lossless 24kHz FLAC audio with background page prefetching.",
    problem: "Standard screen readers fail completely on STEM textbooks filled with 2D mathematical derivations, block diagrams, and figures.",
    pipeline: [
      { step: "01", name: "2x PyMuPDF Render", desc: "High-DPI rasterization of textbook pages & figures" },
      { step: "02", name: "Gemini 3 Pro (High)", desc: "Deep visual math/diagram reasoning & 2-host script" },
      { step: "03", name: "2.5 Flash Multi-TTS", desc: "Synthesizes Liam & Dr. Anya conversational audio" },
      { step: "04", name: "FLAC + Prefetcher", desc: "Lossless 24kHz FLAC compression & daemon prefetch" }
    ],
    deepDive: [
      {
        title: "High-Reasoning Visual Stem Analysis (`thinking_level=\"high\"`)",
        detail: "Passes 2× resolution PyMuPDF page renders directly to Gemini 3 Pro with high thinking budget to unpack equations and diagrams into an intuitive two-person dialogue between a curious student (*Liam*) and an expert professor (*Dr. Anya*)."
      },
      {
        title: "Zero-Wait Background Daemon Prefetching",
        detail: "Spawns a background daemon worker that pre-generates scripts and 24kHz lossless FLAC audio (`soundfile`) for upcoming textbook pages while the user listens to the current page."
      }
    ],
    benchmarks: [
      { metric: "Audio Synthesis Quality", baseline: "Robotic Single-Voice MP3", result: "24kHz Multi-Speaker Lossless FLAC", delta: "2-Host Conversational Dialogue" },
      { metric: "Page Transition Latency", baseline: "15–20s Wait per Page", result: "Instant (Daemon Prefetch)", delta: "Background Thread Pipeline" }
    ],
    stack: ["Python", "Gemini 3 Pro", "Gemini 2.5 Flash Multi-Speaker TTS", "PyMuPDF (fitz)", "SoundFile (FLAC)", "Multithreading"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/gemini_tutor" }
    ]
  },

  "proj-synchub": {
    id: "proj-synchub",
    code: "PROJ // 10",
    category: "Backend, WebRTC & Agents",
    title: "SyncHub — Dew Computing Offline-First LAN Storage & Automatic AWS S3 Sync",
    subtitle: "Flask + SQLAlchemy Self-Referential Trees + APScheduler 60s Cloud Sync + React/Three.js UI",
    timeline: "Aug 2024 – Dec 2024",
    commits: "SyncHub",
    role: "Lead Architect",
    metricBadge: "Offline-First Edge ↔ AWS S3",
    filterTag: "systems",
    summary: "A Dew Computing storage platform that provides full hierarchical bucket/folder object storage and authentication over a local LAN during internet outages, then automatically provisions and synchronizes deltas to AWS S3 when connectivity returns.",
    problem: "Campus labs and industrial edge sites with intermittent internet connectivity needed S3-compatible object storage that never blocks local uploads or authentication when offline.",
    pipeline: [
      { step: "01", name: "8.8.8.8:53 Probe", desc: "Real-time socket connectivity & offline auth switch" },
      { step: "02", name: "Self-Referential DB", desc: "Local hierarchical bucket/folder/object tree in SQL" },
      { step: "03", name: "60s APScheduler", desc: "Background daemon detects internet restoration" },
      { step: "04", name: "Boto3 S3 Auto-Sync", desc: "Auto-provisions public/private S3 buckets & pushes deltas" }
    ],
    deepDive: [
      {
        title: "Internet-Aware Dual Authentication & Self-Referential Storage Tree",
        detail: "Performs non-blocking socket probes (`8.8.8.8:53`) to seamlessly switch between email OTP verification and offline local JWT credentials, storing arbitrary-depth directory trees via self-referential SQLAlchemy models."
      },
      {
        title: "Autonomous 60-Second Cloud Reconciliation Daemon",
        detail: "Runs an `APScheduler` background worker every 60 seconds that detects restored WAN connectivity, creates corresponding AWS S3 buckets via `boto3`, and uploads pending edge objects."
      }
    ],
    benchmarks: [
      { metric: "Offline Availability", baseline: "Cloud-Only S3", result: "100% LAN Read/Write Offline", delta: "60s Auto-Reconciliation to S3" }
    ],
    stack: ["Python", "Flask", "SQLAlchemy", "APScheduler", "AWS S3 (boto3)", "JWT", "React 18", "Three.js"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/SyncHub" }
    ]
  },

  "proj-quizzer": {
    id: "proj-quizzer",
    code: "PROJ // 11",
    category: "Backend, WebRTC & Agents",
    title: "Quizzer-Backend — Concurrent Go 1.23 Real-Time Multiplayer Quiz Engine",
    subtitle: "Gorilla WebSockets + Go Channels + `atomic.Bool` + Auto-Expiring Room Timers",
    timeline: "Apr 2025 – May 2025",
    commits: "onlineQuizSystem",
    role: "Backend Lead",
    metricBadge: "Go 1.23 Concurrent WebSocket Hub",
    filterTag: "systems",
    summary: "A high-concurrency multiplayer quiz server written in Go 1.23 using Gorilla WebSockets, Go channels, `atomic.Bool`, and mutex-guarded session maps for live lobby discovery, synchronized countdowns, and real-time leaderboards.",
    problem: "Handling hundreds of simultaneous student WebSocket connections submitting timed answers requires race-free state transitions and exact server-side timer expiration.",
    pipeline: [
      { step: "01", name: "JWT RBAC Auth", desc: "Admin, Teacher & Student role-based access control" },
      { step: "02", name: "Go Room Hub", desc: "Mutex-guarded session maps & broadcast channels" },
      { step: "03", name: "time.AfterFunc", desc: "Server-authoritative question timers & atomic locks" },
      { step: "04", name: "GORM + MySQL", desc: "Persists MCQ, MSQ & numeric evaluation scores" }
    ],
    deepDive: [
      {
        title: "Lock-Safe WebSocket Room Lifecycle in Go 1.23",
        detail: "Uses `sync.Mutex`, `atomic.Bool`, and Go channels to manage live lobby broadcasting, prevent late answer race conditions via `time.AfterFunc` triggers, and score MCQ, MSQ, and numerical questions in real time."
      }
    ],
    benchmarks: [
      { metric: "Concurrency Model", baseline: "Thread-per-Request", result: "Goroutines + Channels + atomic.Bool", delta: "Zero Race Conditions" }
    ],
    stack: ["Go 1.23", "Gorilla WebSockets", "Gorilla Mux", "GORM", "MySQL", "JWT", "React 18"],
    links: []
  },

  "proj-fcn-decode": {
    id: "proj-fcn-decode",
    code: "PROJ // 12",
    category: "From-Scratch & GPU",
    title: "FCN-DP Globally Optimal Video Tracker, PromptDA & Self-Replicating DECODE.IT",
    subtitle: "FP16 FCN_ResNet50 + Vectorized Dynamic Programming + Self-Extracting Steganographic PNG",
    timeline: "May 2025",
    commits: "computer_vision & PromptDA",
    role: "Sole Author",
    metricBadge: "Global DP Tracker + Quine PNG",
    filterTag: "scratch",
    visualAsset: "assets/DECODE.IT.png",
    visualCaption: "Actual DECODE.IT.png artifact — a self-replicating steganographic image containing its own Python source code encoded in pixel bit-planes, alongside PromptDA RGB-D depth super-resolution.",
    secondaryAsset: "assets/example_depth.png",
    summary: "Implemented 'Globally Optimal Object Tracking with Fully Convolutional Networks' using FP16 semantic probability maps and vectorized NumPy Dynamic Programming (`sliding_window_view`), alongside PromptDA depth super-resolution and `DECODE.IT`, a self-replicating steganographic PNG.",
    problem: "Greedy frame-by-frame trackers drift during occlusions, while naive Python nested loops for Viterbi/Dynamic Programming across video frames are orders of magnitude too slow.",
    pipeline: [
      { step: "01", name: "FP16 FCN_ResNet50", desc: "Extracts per-frame semantic foreground heatmaps" },
      { step: "02", name: "sliding_window_view", desc: "Vectorized NumPy spatial transition cost matrix" },
      { step: "03", name: "Global Viterbi DP", desc: "Backtracks optimal trajectory across entire video" },
      { step: "04", name: "DECODE.IT Quine PNG", desc: "Bit-plane steganography embeds own Python source" }
    ],
    deepDive: [
      {
        title: "Vectorized Dynamic Programming Trajectory Solver",
        detail: "Replaced O(T · H² · W²) Python loops with NumPy `sliding_window_view` tensor operations over FP16 `FCN_ResNet50` probability maps to find the globally optimal bounding-box path across video sequences."
      },
      {
        title: "`DECODE.IT.png` — Self-Replicating Steganographic Quine",
        detail: "Created a PNG image that embeds its own complete Python encoder/decoder script inside its pixel values; running the decoder on `DECODE.IT.png` reconstructs the exact source code byte-for-byte."
      }
    ],
    benchmarks: [
      { metric: "Tracking Optimization", baseline: "Greedy Frame-to-Frame", result: "Globally Optimal Viterbi DP", delta: "Vectorized sliding_window_view" },
      { metric: "Steganographic Reconstruction", baseline: "DECODE.IT.png", result: "100% Byte-Exact Source Recovery", delta: "Self-Replicating Image Quine" }
    ],
    stack: ["PyTorch (FP16 FCN_ResNet50)", "NumPy (sliding_window_view)", "Dynamic Programming", "OpenCV", "Steganography", "PromptDA Depth"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Anurag9689/computer_vision" }
    ]
  },

  "proj-cuda-fractal": {
    id: "proj-cuda-fractal",
    code: "PROJ // 13",
    category: "From-Scratch & GPU",
    title: "CUDA C++ Procedural Flame Renderer & From-Scratch Deep Learning Suite",
    subtitle: "CUDA `__constant__` Memory & Fast-Math Intrinsics + MiniGPT + SumTree PER-DQN (100/100 CartPole)",
    timeline: "2024 – 2025",
    commits: "math_art, transformers, RL_lab, neural_nets",
    role: "Sole Author",
    metricBadge: "CUDA C++ · 100/100 PER-DQN",
    filterTag: "scratch",
    visualAsset: "assets/fractal_art_cuda.png",
    visualCaption: "Actual high-resolution procedural flame fractal rendered on GPU via custom CUDA C++ kernels (`fractal_art.cu`) using `__constant__` memory and hardware fast-math intrinsics.",
    summary: "A collection of low-level GPU and mathematical implementations built from first principles: a CUDA C++ procedural flame renderer, a 4-layer causal MiniGPT + CuPy Word2Vec, an arbitrary-depth CuPy MLP, and a binary `SumTree` Prioritized Experience Replay DQN.",
    problem: "Mastering deep learning and GPU systems requires building core algorithms—backpropagation, attention, tree-based priority sampling, and CUDA thread-block scheduling—without high-level library abstractions.",
    pipeline: [
      { step: "01", name: "CUDA C++ Kernel", desc: "__constant__ memory, #pragma unroll & __sinf/__cosf" },
      { step: "02", name: "SumTree PER-DQN", desc: "O(log N) prioritized replay → 100/100 CartPole (499.0)" },
      { step: "03", name: "MiniGPT + Word2Vec", desc: "4-layer Flash SDPA GPT + pure CuPy skip-gram" },
      { step: "04", name: "CuPy Raw MLP", desc: "Manual forward/backward pass on raw GPU arrays" }
    ],
    deepDive: [
      {
        title: "CUDA C++ Procedural Flame Fractal Kernel (`math_art / fractal_art.cu`)",
        detail: "Wrote custom CUDA C++ kernels utilizing `__constant__` GPU memory for affine transform coefficients, `#pragma unroll` loop optimizations, and hardware SFU fast-math intrinsics (`__sinf`, `__cosf`, `__expf`) to render multi-million-point nonlinear attractors."
      },
      {
        title: "Binary `SumTree` Prioritized Experience Replay DQN (`RL_lab`)",
        detail: "Implemented a custom binary `SumTree` data structure for O(log N) proportional TD-error sampling with importance-sampling weight annealing, achieving 100 consecutive perfect evaluation episodes (499.0/500 reward) on `CartPole-v1`."
      },
      {
        title: "From-Scratch MiniGPT & Pure CuPy Neural Nets (`transformers`, `neural_nets`)",
        detail: "Built a 4-layer causal Transformer with Flash Scaled Dot-Product Attention, a pure NumPy/CuPy Word2Vec embedder, and a framework-free GPU Multi-Layer Perceptron with manual backpropagation."
      }
    ],
    benchmarks: [
      { metric: "SumTree PER-DQN (CartPole-v1 Eval)", baseline: "Standard Uniform DQN", result: "100 / 100 Perfect Episodes", delta: "499.0 Mean Reward" },
      { metric: "CUDA C++ Attractor Kernel", baseline: "CPU Single-Thread", result: "__constant__ Mem + __sinf/__cosf", delta: "Hardware SFU Accelerated" }
    ],
    stack: ["CUDA C++", "CuPy", "PyTorch (Flash SDPA)", "Reinforcement Learning (PER-DQN)", "SumTree Data Structure", "NumPy"],
    links: [
      { label: "math_art (CUDA)", url: "https://github.com/Anurag9689/math_art" },
      { label: "RL_lab (PER-DQN)", url: "https://github.com/Anurag9689/RL_lab" },
      { label: "transformers", url: "https://github.com/Anurag9689/transformers" }
    ]
  },

  "proj-sunlink-face": {
    id: "proj-sunlink-face",
    code: "PROJ // 14",
    category: "Backend, WebRTC & Agents",
    title: "Sunlink Solar AI Support, FaceConnect 128-D Recognition & FAISS Image RDBMS",
    subtitle: "FastAPI WebSocket AI Troubleshooter + 128-D dlib Face Matcher + SHA-256 FAISS Vector DB",
    timeline: "Apr 2024 – Early 2025",
    commits: "sunlink, FaceConnect, terafac_intern_work",
    role: "Full-Stack & AI Engineer",
    metricBadge: "FAISS + 128-D Face Embeddings",
    filterTag: "systems",
    summary: "Three specialized applied AI systems: `sunlink` (Geek Verse Hackathon real-time WebSocket solar troubleshooting platform), `FaceConnect` (automated group-photo 128-D facial recognition & multi-threaded SMTP delivery), and a SHA-256 content-addressed FAISS vector image RDBMS.",
    problem: "Solving practical enterprise bottlenecks across automated customer support ticketing, event photography distribution, and content-deduplicated visual similarity search.",
    pipeline: [
      { step: "01", name: "Sunlink WebSocket AI", desc: "GPT-4-Turbo multimodal solar diagnostics & ticketing" },
      { step: "02", name: "FaceConnect 128-D", desc: "dlib 128-D embeddings (tolerance=0.4) + SMTP workers" },
      { step: "03", name: "FAISS Image RDBMS", desc: "SHA-256 deduplication + IndexFlatL2 similarity search" }
    ],
    deepDive: [
      {
        title: "`sunlink` — Unified Solar AI Troubleshooting Platform (Geek Verse Hackathon)",
        detail: "Built with FastAPI, PostgreSQL, AsyncOpenAI (`gpt-4-turbo`), WebSockets, and React 18 (`shadcn/ui`), featuring live image-assisted solar panel diagnostics, automated ticket creation, and customer sentiment analysis."
      },
      {
        title: "`FaceConnect` & FAISS Content-Addressed Vector Image Search",
        detail: "`FaceConnect` extracts 128-D `dlib` facial embeddings stored as Base64 NumPy arrays in Django 5.0 and dispatches matched event photos via multi-threaded SMTP workers. Our Image RDBMS pairs `multiprocessing.Pool` SHA-256 ingestion with `FAISS IndexFlatL2` and custom min-heap Cosine ranking."
      }
    ],
    benchmarks: [
      { metric: "Face Matching Threshold", baseline: "128-D dlib Metric Space", result: "L2 Tolerance = 0.40", delta: "Multi-Threaded SMTP Dispatch" },
      { metric: "Vector Image Retrieval", baseline: "Linear Scan", result: "FAISS IndexFlatL2 + Min-Heap", delta: "SHA-256 Content Deduplicated" }
    ],
    stack: ["FastAPI", "Django 5.0", "FAISS (IndexFlatL2)", "dlib (face_recognition)", "React 18 / TypeScript", "PostgreSQL", "AWS S3"],
    links: [
      { label: "FaceConnect Repo", url: "https://github.com/Anurag9689/FaceConnect" },
      { label: "sunlink Repo", url: "https://github.com/Anurag9689/sunlink" }
    ]
  },

  // --------------------------------------------------------------------------
  // EDUCATION & ACADEMIC RECORDS
  // --------------------------------------------------------------------------
  "edu-ggsipu": {
    id: "edu-ggsipu",
    code: "EDU // 01",
    category: "Undergraduate Degree",
    title: "B.Tech in Artificial Intelligence & Machine Learning (Lateral Entry)",
    subtitle: "University School of Automation & Robotics (USAR), GGSIPU · East Delhi Campus",
    timeline: "Aug 2023 – Aug 2026",
    commits: "Enrollment: 00319071623",
    role: "CGPA: 7.43 / 10 · 8th-Sem Dissertation: 36/40 (1st in Batch)",
    summary: "Completed B.Tech in AI & ML (Lateral Entry after Diploma) with an upward semester SGPA trajectory (6.92 → 7.43 → 7.92), 9 'O' (Outstanding ≥ 90/100) practical/course grades, and the #1 ranked 8th-semester major dissertation in the batch.",
    problem: "Combining rigorous academic research in robotics and deep learning with concurrent production engineering at Terafac Technologies and AWS Cloud Club leadership.",
    pipeline: [
      { step: "01", name: "3rd Sem (6.92 SGPA)", desc: "Core Data Structures (93/100 'O') & AI Foundations" },
      { step: "02", name: "4th Sem (7.43 SGPA)", desc: "Intro to AI Lab (96), DBMS Lab (98), Java Lab (91)" },
      { step: "03", name: "5th Sem (7.92 SGPA)", desc: "ML Lab (98), Eng. Econ (99), Soft Comp (93)" },
      { step: "04", name: "7th & 8th Sem", desc: "DexGraspVLA Minor + 36/40 (#1) Welding Dissertation" }
    ],
    deepDive: [
      {
        title: "9 'O' (Outstanding, ≥ 90/100) Subject & Laboratory Distinctions",
        detail: "Scored 99/100 in Engineering Economics, 98/100 in Machine Learning Lab, 98/100 in DBMS Lab, 96/100 in Intro to AI Lab, 93/100 in Data Structures Lab, 93/100 in Soft Computing Lab, 91/100 in Summer Training Report, 91/100 in Java Lab, and 90/100 in Computer Networks Lab."
      },
      {
        title: "Campus Leadership — Cloud Computing Team Lead (AWS Cloud Club GGSIPU)",
        detail: "Led cloud architecture workshops, mentored student developers on AWS (EC2, S3, IAM, Nginx/uWSGI deployments), and spearheaded campus technical initiatives from May 2024 to Jan 2025."
      }
    ],
    benchmarks: [
      { metric: "8th-Sem Major Project / Internship Evaluation", baseline: "2022–2026 AIML Batch", result: "36 / 40 (90.0%)", delta: "Ranked 1st in Batch" },
      { metric: "Machine Learning & DBMS Labs", baseline: "100 Max Marks", result: "98 / 100 ('O' Grade)", delta: "99/100 in Eng. Economics" },
      { metric: "SGPA Growth Trajectory", baseline: "6.92 (3rd Sem)", result: "7.43 (4th) → 7.92 (5th)", delta: "Consistent Upward Curve" }
    ],
    stack: ["Artificial Intelligence", "Machine Learning", "Robotics & Automation", "Data Structures & Algorithms", "DBMS", "Computer Networks"],
    links: []
  },

  "edu-diploma": {
    id: "edu-diploma",
    code: "EDU // 02",
    category: "Engineering Diploma",
    title: "Diploma in Digital Electronics (Electrical & Electronics Engineering)",
    subtitle: "Ambedkar Institute of Technology, Shakarpur, Delhi (BTE Delhi)",
    timeline: "2017 – 2020",
    commits: "First Division with Distinction",
    role: "Aggregate Score: 80.98%",
    summary: "Three-year engineering diploma focused on digital logic design, microcontrollers, embedded systems, electronic instrumentation, and circuit analysis—graduating with 80.98% Distinction.",
    problem: "Built strong hardware-level intuition in digital electronics, sensors, and signal processing before transitioning into industrial manufacturing at Samsung Display and AI/Robotics engineering.",
    pipeline: [
      { step: "01", name: "Digital Logic & ICs", desc: "Combinational/sequential circuits & microprocessors" },
      { step: "02", name: "Instrumentation", desc: "Sensors, actuators & industrial control fundamentals" },
      { step: "03", name: "80.98% Distinction", desc: "Direct foundation for Samsung OLB & Terafac Robotics" }
    ],
    deepDive: [
      {
        title: "Hardware-to-Software Engineering Bridge",
        detail: "Graduated with 80.98% across 6 semesters, providing the electrical and instrumentation foundation that directly aided industrial PLC troubleshooting at Samsung Display and physical sensor/robot integration at Terafac."
      }
    ],
    benchmarks: [
      { metric: "Final Diploma Aggregate Percentage", baseline: "BTE Delhi Curriculum", result: "80.98%", delta: "First Division with Distinction" }
    ],
    stack: ["Digital Electronics", "Microprocessors", "Embedded Systems", "Electronic Instrumentation", "Control Systems"],
    links: []
  }
};

// ============================================================================
// INTERACTIVE SKILL NODES -> MAPPED TO PRODUCTION REPOS & PROJECTS
// ============================================================================
window.SKILL_NODES = [
  {
    name: "Open3D & 3D Geometry",
    category: "3D Vision & Robotics",
    items: ["vision-301", "api-103", "proj-welding-mujoco", "obj-maker", "sim-pnc-301"]
  },
  {
    name: "FoundationPose & 6D Pose",
    category: "3D Vision & Robotics",
    items: ["vision-106", "vision-301", "proj-welding-mujoco"]
  },
  {
    name: "MuJoCo 3.x & IKFast",
    category: "3D Vision & Robotics",
    items: ["proj-welding-mujoco", "proj-dexgraspvla", "sim-pnc-301", "vision-301"]
  },
  {
    name: "Meta SAM 3 / SAM 2 / Cutie",
    category: "3D Vision & Robotics",
    items: ["sam-microservices", "proj-dexgraspvla", "metric-compression"]
  },
  {
    name: "Kabsch / SVD & PnP Solvers",
    category: "3D Vision & Robotics",
    items: ["vision-301", "metric-precision", "proj-welding-mujoco"]
  },
  {
    name: "PyTorch & Mixed Precision",
    category: "Deep Learning & Multimodal AI",
    items: ["vision-106", "proj-food101", "proj-amazon-ml", "proj-i2v", "proj-grammar-engine", "proj-fcn-decode", "proj-cuda-fractal"]
  },
  {
    name: "ViT / DINOv2 / DeBERTa-v3",
    category: "Deep Learning & Multimodal AI",
    items: ["proj-food101", "proj-amazon-ml", "proj-dexgraspvla", "proj-grammar-engine"]
  },
  {
    name: "Whisper / Flan-T5 / Gemini 3",
    category: "Deep Learning & Multimodal AI",
    items: ["proj-grammar-engine", "proj-gemini-tutor", "obj-maker"]
  },
  {
    name: "ONNX Runtime & CUDA C++",
    category: "Deep Learning & Multimodal AI",
    items: ["proj-i2v", "vision-106", "proj-cuda-fractal"]
  },
  {
    name: "RAG / ChromaDB / pgvector / FAISS",
    category: "Deep Learning & Multimodal AI",
    items: ["thecoder-search", "coal-india-rag", "proj-npc-world", "proj-sunlink-face", "repetition-cerebro"]
  },
  {
    name: "Python (FastAPI / Flask / Django)",
    category: "Systems, Backend & Cloud",
    items: ["vision-301", "api-103", "thecoder-ecosystem", "gail-backend", "iit-mandi-health", "proj-npc-world", "proj-synchub"]
  },
  {
    name: "Go (Golang) & Concurrency",
    category: "Systems, Backend & Cloud",
    items: ["proj-chess-stream", "proj-quizzer"]
  },
  {
    name: "WebRTC (LiveKit) & WebSockets",
    category: "Systems, Backend & Cloud",
    items: ["proj-chess-stream", "api-103", "proj-npc-world", "proj-quizzer", "proj-sunlink-face"]
  },
  {
    name: "React 18 / Next.js / Three.js / Flutter",
    category: "Systems, Backend & Cloud",
    items: ["sim-pnc-301", "obj-maker", "proj-chess-stream", "repetition-cerebro", "proj-synchub"]
  },
  {
    name: "AWS (EC2 / S3) & Docker",
    category: "Systems, Backend & Cloud",
    items: ["api-103", "gail-backend", "iit-mandi-health", "proj-synchub", "edu-ggsipu"]
  }
];
