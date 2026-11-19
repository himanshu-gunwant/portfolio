import { ProjectDetail } from "@/lib/types";

export const projectsData: ProjectDetail[] = [
  {
    slug: "relay-x",
    name: "Relay X",
    tagline: "Mobile companion for remote development and autonomous AI coding workflows.",
    description:
      "A cross-device bridge connecting desktop AI coding workflows with remote mobile management, real-time agent telemetry, workspace inspection, and hardware controls.",
    tag: "Flutter · Fastify · WebSockets · TypeScript · Android",
    href: "/projects/relay-x",
    githubUrl: "https://github.com/himanshu-gunwant/Relay-X",
    status: "Active Open Source",
    role: "Creator & Core Maintainer",
    timeline: "2026",
    whatItDoes: [
      "Relay X bridges desktop AI coding workflows with mobile devices, allowing developers to monitor, steer, and verify long-running agent tasks without remaining anchored to their physical desks.",
      "The system pairs a lightweight TypeScript daemon (`relay-server`) running on the host machine with a cross-platform Flutter application (`mobile_app`). The server detects active coding agent runtimes, watches workspace transcripts, tracks git diffs, and streams live agent actions, hardware telemetry, and build notifications over encrypted WebSockets directly to the phone.",
      "From mobile, developers can inspect agent reasoning traces, review line-by-line file diffs, answer clarifying questions, upload camera photos for visual bug context, and manage host power states via Wake-on-LAN.",
    ],
    whyIBuiltIt: {
      summary:
        "Modern autonomous coding agents perform extensive multi-file refactors, dependency upgrades, and test suites that run for tens of minutes. However, developers remained physically tethered to their workstation screens to approve tool permissions, answer prompts, or catch compiler failures.",
      points: [
        {
          title: "The Desktop Tether Problem",
          description:
            "Stepping away from a workstation during an autonomous coding run meant either returning to a prompt that stalled 45 minutes earlier waiting for confirmation, or discovering that a runaway loop overheated the CPU or crashed the build.",
        },
        {
          title: "Ergonomics of Existing Remote Tools",
          description:
            "Standard remote access tools like VNC or Microsoft RDP are painful on mobile screens, drain phone batteries rapidly, and lack awareness of coding agent semantics. Raw SSH sessions lack touch-friendly diff viewers and real-time structured telemetry.",
        },
        {
          title: "Untethered Developer Freedom",
          description:
            "Relay X was built to provide high-fidelity agent observability and control in a calm, mobile-native interface: real-time streaming when active, instant push alerts when input is needed, and total control over host hardware.",
        },
      ],
    },
    problemSolved: {
      summary:
        "Relay X eliminates the blind spot of autonomous desktop workflows by translating raw agent runtime processes, transcript streams, and system hardware metrics into an actionable, secure mobile feed.",
      painPoints: [
        {
          title: "Silent Agent Stalls",
          description:
            "When an agent encounters ambiguous requirements or requests permission to run a sensitive command, it pauses. Relay X dispatches Firebase Cloud Messaging (FCM) push notifications immediately, preventing wasted developer hours.",
        },
        {
          title: "Zero Visibility into Workstation Strain",
          description:
            "Heavy agent builds and local LLM inferences push workstation hardware to its limits. Relay X monitors real-time CPU load, RAM allocation, package temperatures, and fan speeds directly from the host.",
        },
        {
          title: "Cumbersome Mobile Image Context",
          description:
            "Sharing a physical UI bug or whiteboard sketch with an agent typically requires taking a photo, emailing it to oneself, downloading it on the desktop, and saving it to the workspace. Relay X lets developers snap a photo in the mobile app and inject it directly into the agent's context.",
        },
      ],
    },
    howItWorks: {
      summary:
        "The system operates across a peer-to-peer architecture between the host workstation and mobile client, communicating over encrypted local-network or VPN WebSockets.",
      steps: [
        {
          number: "01",
          title: "Daemon Initialization & Process Discovery",
          description:
            "The developer launches the `relay-x` daemon CLI on their workstation. Fastify starts an HTTP/WebSocket server on port 3579, discovers running coding agent runtimes, and attaches file watchers to active workspace directories and JSONL transcript files.",
        },
        {
          number: "02",
          title: "Bcrypt Pre-Shared Key Authentication",
          description:
            "The Flutter mobile client initiates an encrypted WebSocket handshake using a pre-shared API key hashed with bcrypt. Upon verification, the server issues a session token for subsequent stateful streaming.",
        },
        {
          number: "03",
          title: "Real-Time Event Streaming & Tailing",
          description:
            "As the agent acts, the daemon tails JSONL transcript streams and parses agent thoughts, tool executions, and file modifications, broadcasting them to the Flutter client with sub-millisecond local latency.",
        },
        {
          number: "04",
          title: "FCM Push Dispatch for Interventions",
          description:
            "If the daemon detects a user question, confirmation gate, or build failure while the mobile app is backgrounded, it fires an instant push notification via Firebase Admin SDK.",
        },
        {
          number: "05",
          title: "Interactive Steering & Hardware Management",
          description:
            "The developer submits responses, uploads photos, inspects side-by-side git diffs, triggers APK artifact downloads, or issues Wake-on-LAN (WOL) packets to manage workstation power remotely.",
        },
      ],
    },
    keyFeatures: [
      {
        title: "Real-Time Agent Task & Chat Feed",
        description:
          "Streams reasoning steps, plan modifications, tool calls, and command outputs over WebSockets with zero HTTP polling overhead.",
      },
      {
        title: "Interactive Mobile Steering & Photo Upload",
        description:
          "Reply to agent clarification prompts, approve terminal actions, and upload mobile photos directly into the active agent workspace context.",
      },
      {
        title: "Workspace File Explorer & Git Diff Viewer",
        description:
          "Browse project trees, inspect modified files, and review syntax-highlighted side-by-side or unified line diffs on a responsive mobile interface.",
      },
      {
        title: "Automated Build Detection & Artifact Delivery",
        description:
          "Detects Gradle/APK compilation and Node.js build runs, sending notifications on completion and enabling direct APK downloads to mobile for testing.",
      },
      {
        title: "Workstation Hardware Telemetry",
        description:
          "Real-time visual gauges and cards for CPU utilization, RAM consumption, package thermal sensors, and fan profile speeds.",
      },
      {
        title: "Wake-on-LAN & Remote Terminal Access",
        description:
          "Send UDP magic packets to power on sleeping desktop workstations remotely, paired with integrated SSH terminal connectivity.",
      },
      {
        title: "Turnkey CLI Daemon (`relay-x`)",
        description:
          "A global CLI providing `relay-x setup`, `relay-x status`, and `relay-x start` for effortless daemon configuration and service management.",
      },
    ],
    architecture: {
      summary:
        "Relay X is architected as an event-driven decoupled client-server system. The daemon acts as an unobtrusive telemetry probe and bridge, while the Flutter client provides an offline-tolerant, reactive control surface.",
      components: [
        {
          name: "Relay-X Server & CLI",
          tech: "Node.js 20+, TypeScript, Fastify 4, @fastify/websocket",
          role: "Runs on the host workstation. Intercepts workspace transcripts, watches filesystem events, monitors hardware metrics, and broadcasts over WebSockets.",
        },
        {
          name: "Mobile Client Application",
          tech: "Flutter 3, Dart 3.12, Material 3 Dark System",
          role: "Native Android application providing real-time task chat, touch-friendly git diffing, file browsing, and telemetry gauges.",
        },
        {
          name: "Push Notification Gateway",
          tech: "Firebase Admin SDK, Firebase Cloud Messaging (FCM)",
          role: "Delivers high-priority background push alerts when the agent requires user attention or when compilation completes.",
        },
        {
          name: "Hardware Telemetry Engine",
          tech: "systeminformation, Native OS hooks",
          role: "Samples CPU load, memory pressure, thermal sensors, and fan speeds at configurable polling intervals.",
        },
        {
          name: "Security & Tunneling",
          tech: "Bcrypt, Tokenized sessions, Tailscale / WireGuard mesh",
          role: "Restricts access to authenticated clients without routing private codebase transcripts through public cloud third parties.",
        },
      ],
    },
    techStack: [
      {
        category: "Mobile Client",
        technologies: [
          { name: "Flutter 3 & Dart 3.12", purpose: "Cross-platform mobile UI framework with 60fps reactive rendering" },
          { name: "Material 3 Dark Theme", purpose: "Custom high-contrast theme optimized for code diffs and dark room development" },
          { name: "WebSocket Client & Offline Queue", purpose: "Persistent streaming connection with automatic reconnection and queued action replay" },
        ],
      },
      {
        category: "Host Server & CLI",
        technologies: [
          { name: "Node.js 20+ & TypeScript", purpose: "Strictly typed asynchronous runtime for daemon and CLI operations" },
          { name: "Fastify & @fastify/websocket", purpose: "Lightweight, high-throughput HTTP and WebSocket server engine" },
          { name: "systeminformation", purpose: "Deep OS-level CPU, memory, thermal, and fan speed telemetry" },
          { name: "Pino", purpose: "Structured high-speed logging with low event loop latency" },
        ],
      },
      {
        category: "Notifications & Remote Ops",
        technologies: [
          { name: "Firebase Cloud Messaging (FCM)", purpose: "Background push alerts for agent pauses, question prompts, and build completions" },
          { name: "Wake-on-LAN (WOL)", purpose: "UDP magic packet broadcasting to wake sleeping host workstations" },
          { name: "Bcrypt & CSPRNG", purpose: "Secure pre-shared key hashing and cryptographic token generation" },
        ],
      },
    ],
    engineeringDecisions: [
      {
        title: "Decoupled Host Daemon vs. Proprietary IDE Extension",
        context:
          "Building an IDE plugin creates brittle dependencies that break across editor releases and requires maintaining separate plugins for each IDE.",
        decision:
          "Relay X was engineered as an external daemon that non-invasively tails workspace JSONL transcript logs, inspects git state via CLI, and monitors processes externally.",
        outcome:
          "Zero coupling to editor internal APIs, broad compatibility with diverse agent runtimes, and the ability to keep monitoring even when editors restart.",
      },
      {
        title: "WebSocket Event Streaming vs. Periodic REST Polling",
        context:
          "Polling REST endpoints from a mobile device wastes cellular bandwidth, increases latency, and quickly drains device battery.",
        decision:
          "Implemented persistent bidirectional WebSockets over Fastify with an event-driven pub/sub architecture and heartbeat keep-alives.",
        outcome:
          "Sub-millisecond local updates, instant keystroke-level agent streaming, and minimal mobile battery consumption.",
      },
      {
        title: "Client-Side Offline Action Queue",
        context:
          "Mobile developers moving between Wi-Fi and mobile data experience transient network dropouts while reviewing or sending prompts.",
        decision:
          "Engineered an optimistic offline queue in Flutter that buffers user prompts and actions locally, automatically flushing in FIFO order once connectivity resumes.",
        outcome:
          "Seamless developer experience without losing prompts or suffering dropped input during network handoffs.",
      },
      {
        title: "Bcrypt Pre-Shared Key Architecture without Cloud Middlemen",
        context:
          "Routing proprietary codebase files, diffs, and LLM conversations through an intermediate SaaS server poses severe privacy and security risks.",
        decision:
          "Adopted a peer-to-peer security model using bcrypt-hashed pre-shared keys, encouraging direct connections over local Wi-Fi or private Tailscale/WireGuard VPNs.",
        outcome:
          "Zero third-party data leakage; code, logs, and tokens remain strictly contained on the developer's private hardware.",
      },
    ],
    screenshots: [
      {
        src: "/projects/relay-x/relay-x-banner.png",
        alt: "Relay X Brand Identity & Emblem",
        caption: "Official Relay X identity emblem: designed for modern, high-velocity developer tooling.",
        width: 1536,
        height: 1024,
      },
    ],
  },
  {
    slug: "paste",
    name: "Paste",
    tagline: "Modern, production-grade, open-source pastebin platform.",
    description:
      "A high-performance full-stack paste-sharing platform featuring atomic burn-after-read, revision diffing, Argon2id encryption, developer APIs with idempotency keys, and moderation tools.",
    tag: "Next.js 15 · Express 5 · PostgreSQL 16 · Redis 7 · Prisma 7 · Docker",
    href: "/projects/paste",
    githubUrl: "https://github.com/himanshu-gunwant/Paste",
    liveUrl: "https://paste.himanshugunwant.com",
    status: "Live in Production · Open Source",
    role: "Creator & Full-Stack Architect",
    timeline: "2026",
    whatItDoes: [
      "Paste is a modern, production-ready, open-source pastebin platform engineered for speed, privacy, and developer ergonomic excellence.",
      "The application pairs a reactive Next.js 15 App Router frontend powered by CodeMirror 6 with a high-throughput Express 5 modular monolith backend, backed by PostgreSQL 16 as the authoritative source of truth and Redis 7 for rate limits, queues, and buffered view counters.",
      "Beyond basic text sharing, Paste offers atomic single-query burn-after-reading, Argon2id password protection, snapshot revision histories with side-by-side visual diffing, an anonymous paste vault in `localStorage`, full-text keyset search, and bearer-token developer APIs with daily quotas and idempotency keys.",
    ],
    whyIBuiltIt: {
      summary:
        "Public paste services have progressively degraded into ad-cluttered, slow web pages burdened with tracking cookies and fragile security. I wanted to build a self-hostable, production-grade alternative that treats code and text snippets as first-class citizens.",
      points: [
        {
          title: "Eliminating Ad Bloat & Tracking",
          description:
            "Most commercial pastebins load dozens of ad networks and tracking scripts before rendering a simple code block. Paste renders instantly in a clean, quiet, distraction-free environment.",
        },
        {
          title: "Guaranteed Atomic Privacy",
          description:
            "Standard burn-after-read implementations frequently suffer from race conditions where two simultaneous requests can view the same 'burned' snippet. Paste guarantees single-query atomic destruction at the database level.",
        },
        {
          title: "Developer-First Tooling",
          description:
            "Developers need more than raw text boxes: they need CodeMirror syntax highlighting for 15+ languages, side-by-side revision diffs to review changes, sandboxed iframe embeds, and robust REST APIs with idempotency protections.",
        },
      ],
    },
    problemSolved: {
      summary:
        "Paste solves the privacy, speed, and maintainability pitfalls of legacy snippet sharing platforms while introducing production-ready architectural rigor.",
      painPoints: [
        {
          title: "Race Conditions in Burn-After-Reading",
          description:
            "Traditional two-step checks (read record, then delete record) allow concurrent requests to read sensitive credentials or logs before deletion occurs. Paste executes a single conditional SQL statement to ensure exactly-once consumption.",
        },
        {
          title: "The Anonymous Editor Dilemma",
          description:
            "Users often want to edit or delete anonymous pastes without creating an account. Paste solves this by generating a cryptographically secure token stored in the browser's `localStorage` vault, enabling full ownership without mandatory signups.",
        },
        {
          title: "Database Saturation from High Read Volumes",
          description:
            "Incrementing view counts in PostgreSQL on every page hit exhausts database I/O under viral traffic. Paste buffers view counters in Redis and flushes them to PostgreSQL via BullMQ background workers.",
        },
      ],
    },
    howItWorks: {
      summary:
        "A full-stack modular architecture routing browser traffic through Next.js and API calls through Express 5, coordinated with PostgreSQL 16, Redis 7, and BullMQ workers.",
      steps: [
        {
          number: "01",
          title: "Code Authoring in CodeMirror 6",
          description:
            "The author writes or pastes code into an editor equipped with line numbering, bracket matching, syntax detection across 15+ languages, and live byte/character metrics.",
        },
        {
          number: "02",
          title: "Policy & Security Configuration",
          description:
            "Pastes can be configured with visibility (PUBLIC, UNLISTED, PRIVATE), optional Argon2id password protection, custom vanity slugs, and burn-after-reading or time-to-live expirations.",
        },
        {
          number: "03",
          title: "Cryptographic Vaulting & Token Generation",
          description:
            "Upon creation, anonymous authors receive a CSPRNG management token stored in their browser vault (`localStorage`). Passwords and tokens are stored in PostgreSQL exclusively as cryptographic hashes; raw tokens are never persisted.",
        },
        {
          number: "04",
          title: "Express 5 Gateway & Service Validation",
          description:
            "The Express backend validates requests with strict TypeScript schemas, applies IP and API-key rate limits via Redis, assigns correlation IDs with Pino-HTTP, and persists data via Prisma 7 driver adapters.",
        },
        {
          number: "05",
          title: "Background Sweeping & Worker Aggregation",
          description:
            "BullMQ background workers process asynchronous jobs: flushing Redis view counts to PostgreSQL in bulk, sweeping expired pastes, and dispatching transactional emails.",
        },
      ],
    },
    keyFeatures: [
      {
        title: "Instant CodeMirror 6 Editor",
        description:
          "Equipped with line numbering, bracket auto-closing, syntax detection for 15+ languages, and live byte/character count telemetry.",
      },
      {
        title: "Atomic Burn-After-Reading",
        description:
          "Conditional SQL update query ensures that burn-after-read pastes are destroyed immediately on first access, eliminating race-condition disclosures.",
      },
      {
        title: "Argon2id Password Protection",
        description:
          "Constant-time verification with 19 MiB memory cost and 2 iterations protects sensitive pastes against brute-force and timing attacks.",
      },
      {
        title: "Snapshot Revisions & Visual Diffing",
        description:
          "Capped at 20 snapshots per paste, featuring side-by-side and unified diff viewers with one-click rollback capabilities.",
      },
      {
        title: "Anonymous Paste Vault",
        description:
          "Cryptographically random tokens stored in client `localStorage` grant anonymous creators full edit and delete rights without requiring an account.",
      },
      {
        title: "Developer REST API & OpenAPI Docs",
        description:
          "Bearer-authenticated API keys (`pb_...`), daily quotas, `Idempotency-Key` replay protection, and interactive Swagger UI documentation.",
      },
      {
        title: "PostgreSQL Full-Text Search",
        description:
          "English dictionary `tsvector` index supporting instant search across public pastes, language facet aggregations, and cursor-based keyset pagination.",
      },
      {
        title: "Admin Moderation & Abuse Triage Suite",
        description:
          "Comprehensive moderation workspace for abuse report review, automated unlisting thresholds, user suspensions, audit logs, and IP bans.",
      },
    ],
    architecture: {
      summary:
        "Engineered as a modular monolith on Express 5 with TypeScript strict mode, separating concerns into presentation, domain services, database persistence, and background task queues.",
      components: [
        {
          name: "Frontend (Next.js 15 App Router)",
          tech: "Next.js 15.1, React 19, CodeMirror 6, TanStack Query 5, Tailwind CSS 3.4",
          role: "Server-rendered and client-hydrated UI for snippet authoring, diff visualization, and responsive viewing.",
        },
        {
          name: "Backend API (Express 5)",
          tech: "Express 5.1, TypeScript Strict, Prisma 7, Pino",
          role: "Modular monolith handling REST endpoints, input validation, authentication, and service-layer authorization.",
        },
        {
          name: "Primary Database (PostgreSQL 16)",
          tech: "PostgreSQL 16, @prisma/adapter-pg, pg",
          role: "Authoritative persistent store for users, pastes, revisions, tokens, and full-text search indexes.",
        },
        {
          name: "Cache & Queue Layer (Redis 7)",
          tech: "Redis 7 (AOF enabled), BullMQ 5",
          role: "Ephemeral storage for sliding-window rate limiters, buffered view count increments, and job queues.",
        },
        {
          name: "Background Worker Process",
          tech: "BullMQ Worker, Node.js",
          role: "Consumes asynchronous jobs: periodic view buffer flushing, expired paste sweeping, and email notifications.",
        },
      ],
    },
    techStack: [
      {
        category: "Backend & Systems",
        technologies: [
          { name: "Node.js 22+ (ESM)", purpose: "Modern runtime utilizing native ES modules and performance enhancements" },
          { name: "Express 5.1", purpose: "Strict TypeScript modular monolith with native async error handling" },
          { name: "Prisma 7 (7.10.1)", purpose: "Type-safe query compiler with @prisma/adapter-pg driver adapter" },
          { name: "PostgreSQL 16", purpose: "Relational database with tsvector full-text search and transactional integrity" },
          { name: "Redis 7 & BullMQ 5", purpose: "In-memory caching, rate limiting, and asynchronous background worker queues" },
          { name: "Argon2id (argon2)", purpose: "Memory-hard password hashing protecting private paste access" },
        ],
      },
      {
        category: "Frontend & UI",
        technologies: [
          { name: "Next.js 15.1 (App Router)", purpose: "React 19 framework with Turbopack and Standalone Docker build output" },
          { name: "CodeMirror 6", purpose: "Extensible code editor with 15+ syntax highlighters and line diffing" },
          { name: "TanStack React Query 5", purpose: "Asynchronous client state management with optimistic UI updates" },
          { name: "Tailwind CSS 3.4 & Radix UI", purpose: "Accessible, unstyled UI primitives styled with utility classes" },
          { name: "KaTeX & Mermaid", purpose: "In-editor preview of mathematical equations and architectural diagrams" },
        ],
      },
      {
        category: "DevOps & Observability",
        technologies: [
          { name: "Docker & Docker Compose", purpose: "Turnkey multi-container production deployment orchestration" },
          { name: "Pino & Pino-HTTP", purpose: "Structured JSON logging with request-correlation ID tracing" },
          { name: "Prometheus (prom-client)", purpose: "Application and HTTP request metrics endpoint for monitoring" },
          { name: "OpenAPI 3.1 & Swagger UI", purpose: "Live interactive API documentation hosted at /api/docs" },
        ],
      },
    ],
    engineeringDecisions: [
      {
        title: "ADR D-001: Modular Monolith Architecture on Express 5",
        context:
          "Microservices introduce distributed tracing complexity, network hop latency, and multi-repo deployment overhead that is unwarranted for high-throughput snippet sharing.",
        decision:
          "Adopted an Express 5 modular monolith in strict TypeScript. PostgreSQL serves as the single source of truth; Redis is strictly ephemeral for rate limits, queues, and view buffers.",
        outcome:
          "Rapid local development, zero inter-service network latency, simplified single-command Docker deployments, and robust transactional integrity.",
      },
      {
        title: "ADR D-002: Upgrade to Prisma 7 with Driver Adapters",
        context:
          "Prisma 6 carried a high-severity transitive advisory (`deepmerge-ts` GHSA-ggr8-5vv4-36mx via `@prisma/config`).",
        decision:
          "Upgraded to Prisma 7.10.1 with `@prisma/adapter-pg` and `pg`. Configured queries to compile via the runtime driver adapter without native engine binaries.",
        outcome:
          "High-severity transitive advisory completely eliminated, smaller production container size, and clean separation between CLI configuration and runtime database pooling.",
      },
      {
        title: "ADR D-003: Single Unified Slug Namespace with VARCHAR(64)",
        context:
          "Generated 10-character short IDs and custom alphanumeric slugs originally had conflicting column sizing, causing database constraint errors on vanity URLs.",
        decision:
          "Widened `pastes.id` and related foreign keys to `VARCHAR(64)`, allowing custom vanity slugs to serve directly as the primary key.",
        outcome:
          "Eliminated duplicate index lookups and join queries; all pastes resolve through a single uniform primary key index.",
      },
      {
        title: "Single-Query Atomic Burn-After-Reading",
        context:
          "A naive check-then-delete approach creates race conditions where two simultaneous HTTP GET requests both succeed before the delete executes.",
        decision:
          "Implemented a conditional SQL update: `UPDATE pastes SET is_burned = true WHERE id = $1 AND is_burned = false RETURNING id` inside a transaction.",
        outcome:
          "Strict guarantee that exactly one requester can read the payload before it becomes inaccessible forever.",
      },
      {
        title: "Buffered Redis View Analytics with BullMQ Flushing",
        context:
          "Writing view count updates to PostgreSQL on every page request causes database write saturation under viral snippet links.",
        decision:
          "Buffered view counts using atomic Redis increments (`HINCRBY`), flushed periodically in batches to PostgreSQL by BullMQ worker jobs.",
        outcome:
          "Protects primary database I/O while ensuring sub-millisecond page response times under high concurrency.",
      },
    ],
    screenshots: [
      {
        src: "/projects/paste/home-editor-updated.jpg",
        alt: "Paste Live Home Editor & Creation Interface",
        caption: "CodeMirror 6 live editor at paste.himanshugunwant.com with language selection, privacy options, expiration controls, and live character/byte counters.",
        width: 1843,
        height: 890,
      },
      {
        src: "/projects/paste/admin-dashboard-updated.jpg",
        alt: "Paste Live Admin Workspace & Abuse Triage Queue",
        caption: "Live admin workspace at paste.himanshugunwant.com: real-time telemetry, user management, abuse report queue, and security policy enforcement.",
        width: 1843,
        height: 890,
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((project) => project.slug);
}
