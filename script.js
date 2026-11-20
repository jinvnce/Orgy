const M = [
  {
    n: "John Vincent Bugarin",
    r: "Leader · Chief Executive",
    ic: "crown",
    photo: "../assets/bins.png",
    mail: "jvbugarin@fluvb.ph",
    bio: " I’m John Vincent, the one guiding FLUVB toward its goals. Together with my four teammates, I lead our ideas, encourage innovation, and keep our shared vision moving forward..",
    duty: ["Sets the vision and direction", "Leads all team meetings", "Approves major decisions"],
    refl: "Through working on group projects, I have learned that organizational culture is far more than a mission statement written at the start—it is the operating system that quietly governs how decisions are made, how tasks are prioritized, and how people treat one another under pressure. Looking through Schein’s Three-Level Model, it is easy for a team to focus only on visible artifacts like logos, slide templates, or stated values while overlooking the unspoken assumptions that actually drive daily behavior. In my role as leader, I have seen how silence in a group chat or vague updates quickly breed uncertainty and second-guessing. Practicing transparent, two-way communication—listening actively and setting clear expectations rather than simply issuing directives—eliminates guesswork, builds mutual trust, and keeps the entire team aligned.",
  },
  {
    n: "Angelo Louis Faustino",
    r: "Member · Operations",
    ic: "user",
    photo: "../assets/minji.png",
    mail: "alfaustino@fluvb.ph",
    bio: " I’m Angelo, responsible for making sure our operations run smoothly. My goal is to provide reliable comfort and create a refreshing environment that you can enjoy throughout the day.",
    duty: ["Plans daily work", "Tracks deadlines", "Reports progress to the leader"],
    refl: "Stepping into a group environment makes you acutely aware of how unwritten norms shape daily work long before anyone reads a formal set of rules. You quickly observe which behaviors get praised, which get ignored, and which get quietly shut down. Learning about Cooke’s Behavioral Culture Styles really resonated with me because it explains how teams either develop constructive habits centered on collaboration and growth, or slip into passive rule-following where members simply wait to be told what to do—or worse, aggressive win-lose dynamics that drain morale. Through this, I realized that I am not a passive bystander; every team member is an active culture carrier. The way we communicate, offer support, and follow through on everyday tasks directly shapes the group's energy and operational reliability.",
  },
  {
    n: "Moebius Zeth Urmenita",
    r: "Member · Communications",
    ic: "user",
    photo: "../assets/moe.png",
    mail: "mzurmenita@fluvb.ph",
    bio: "I’m Moebius, dedicated to maintaining clear communication and high standards of quality. I help ensure that our commitment to smooth and consistent airflow reaches every customer.",
    duty: ["Shares updates with the team", "Handles announcements", "Keeps feedback flowing"],
    refl: "In collaborative work, bottlenecks and delays rarely happen from a lack of effort; they happen when division of labor, formal rules, and chains of command are not supported by clear communication. Breaking down the communication process—from encoding a message and selecting the right channel to decoding, navigating noise, and giving timely feedback—shows just how easily intent can be distorted by poor timing or distractions. I have also seen how informal grapevine networks, such as single-strand, gossip, probability, and cluster chains, naturally emerge to fill the vacuum whenever official updates are delayed or unclear. Consistent integration and open information-sharing ensure that every member stays coordinated and moves toward shared goals rather than working in disconnected silos.",
  },
  {
    n: "Nhed Jhyro Valdez",
    r: "Member · Finance",
    ic: "user",
    photo: "../assets/nhed.png",
    mail: "njvaldez@fluvb.ph",
    bio: " I’m Nhed Jhyro, overseeing the financial side of our business to keep everything organized and sustainable. With proper financial management and teamwork, we can turn our goals into reality and make everyday comfort achievable.",
    duty: ["Manages the budget", "Records expenses", "Prepares reports"],
    refl: "What stood out to me most is how vital interpersonal trust and psychological safety become when a team is working under tight deadlines. In high-pressure moments, the quality of our communication determines whether stress brings people together or drives them apart. I have observed that teams perform far better when disagreements are treated as healthy discussions of ideas rather than personal attacks or sources of humiliation. When members feel genuinely included, respected, and safe to voice concerns or ask questions without fear of judgment, accountability strengthens naturally. Maintaining open, respectful dialogue allows us to catch mistakes early, manage resources responsibly, and collaborate smoothly toward our goals.",
  },
  {
    n: "Jobelyn Lulu",
    r: "Member · Marketing",
    ic: "user",
    photo: "../assets/jobe.png",
    mail: "jlulu@fluvb.ph",
    bio: "I’m Jobelyn, responsible for introducing FLUVB to more people. Through creative promotions and fresh ideas, I help share our mission of bringing better air circulation and comfort to everyone.",
    duty: ["Designs campaigns", "Manages social media", "Builds the brand"],
    refl: "Stepping back to examine organizations through foundational perspectives—from Weber’s bureaucracy and Taylor’s scientific management to Mayo’s human relations, McGregor’s Theory Y, and Deetz’s critical theory—reveals how structure and authority deeply shape the way people communicate. It is equally insightful to look at organizations through Etzioni’s compliance typology, distinguishing between utilitarian and normative motivations, alongside Blau and Scott’s prime beneficiary framework. Who an organization exists to serve and how it guides its members directly influence whether voices are heard or silenced. Ultimately, every organization is a living system built around shared objectives, and intentional, inclusive communication is what turns passive members into motivated contributors.",
  },
];
const F = [
  ["landmark", "Classical Theory", "Weber · Taylor · Fayol", "Sees the organization as a machine. Clear rules, a strict chain of command and efficient tasks keep work running."],
  ["heart", "Human Relations", "Elton Mayo", "Workers are people, not parts. Attention, teamwork and good relationships raise morale and output."],
  ["user", "Human Resources", "McGregor · Likert", "People want meaningful work. Involving employees in decisions helps them and the organization grow."],
  ["star", "Two-Factor Theory", "Frederick Herzberg", "Our chosen framework. Satisfaction and dissatisfaction come from different factors. Motivators lift people up; hygiene factors prevent unhappiness.", "feat"],
  ["refresh", "Systems Theory", "Katz · Kahn", "An organization is a living system of connected parts that exchanges information with its environment."],
  ["sliders", "Contingency Theory", "Lawrence · Lorsch", "There is no one best way to organize. The right structure and communication depend on the situation."],
  ["globe", "Cultural Approach", "Pacanowsky · Schein", "Shared stories, rituals and values shape how members communicate and what they believe."],
  ["scale", "Critical Theory", "Stanley Deetz", "Asks who holds power in communication and pushes for fairer, more open participation."],
];
const I = {
  home: '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  lightbulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.3 1 2.3h6c0-1 .3-1.7 1-2.3A7 7 0 0 0 12 2z"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  network: '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
  play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  crown: '<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7z"/><path d="M5 20h14"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5H4v7h4M14 21c3 0 7-1 7-8V5h-6v7h4"/>',
  landmark: '<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 8h20z"/>',
  refresh: '<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5M3 12a9 9 0 0 0 15 6.7L21 16"/><path d="M16 16h5v5"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
  scale: '<path d="M12 3v18M5 7h14M8 21h8"/><path d="m5 7-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2 2 9.3l6.9-1z"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
};
const ic = (n) => `<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;
const $ = (s) => document.querySelector(s);
const pic = (m, k) => (m.photo ? `<img src="../assets/${m.photo}" alt="${m.n}">` : `<span class="av">${k + 1}</span>`);

/* ===== GLOBAL LAYOUT: header (logos), sidebar nav, footer =====
   Edit these once and every page updates. */
const SITE = {
  name: "COOL-IT",
  brand: "FLUVB",
  course: "Organizational Communication - II - ACSAD",
  school: "University of Makati",
  address: "88 Breeze Avenue, Makati City, Metro Manila",
  email: "hello@fluvb.ph",
  members: ["BUGARIN, JOHN VINCENT", "FAUSTINO, ANGELO LOUIS", "LULU, JOBELYN", "URMENITA, MOEBIUS ZETH", "VALDEZ, NHED JHYRO"],
  /* Sidebar: a plain entry is [href, icon, label].
     A category with more than one page is { group, icon, items: [[href, label], ...] }
     and becomes a dropdown. Home stays a single link. */
  nav: [
    ["main.html", "home", "Home"],
    {
      group: "Organization",
      icon: "building",
      items: [
        ["structure.html", "Structure"],
        ["about.html", "About Us"],
      ],
    },
    {
      group: "Theory",
      icon: "book",
      items: [
        ["frameworks.html", "Frameworks"],
        ["theory.html", "Our Theory"],
      ],
    },
    {
      group: "Purpose",
      icon: "target",
      items: [
        ["commitment.html", "Commitment"],
        ["reflection.html", "Reflection"],
      ],
    },
  ],
};
(function buildLayout() {
  const page = location.pathname.split("/").pop() || "main.html";

  const head = document.getElementById("site-header");
  if (head)
    head.innerHTML = `<div class="logo logo-umak"><img src="../assets/umak-logo.png" alt="UMak logo"></div>
      <div class="title">
        <h1>${SITE.name}</h1>
        <p>${SITE.course}</p>
        <ul class="members">${Array.from({ length: 20 }, () => SITE.members.map((n) => `<li>${n}</li>`).join("")).join("")}</ul>
      </div>
      <div class="logo logo-own"><img src="../assets/logo.png" alt="Company logo"></div>`;

  const layout = document.querySelector(".layout");
  if (layout) {
    const here = (href) => href === page;
    const single = ([href, icon, label]) => `<a class="nav${here(href) ? " active" : ""}"${here(href) ? ' aria-current="page"' : ""} href="${href}" data-ic="${icon}">${label}</a>`;
    const group = (g, i) => {
      const open = g.items.some((it) => here(it[0]));
      return `<div class="grp${open ? " open has-active" : ""}">
        <button type="button" class="nav grp-btn" id="grp-btn-${i}" aria-expanded="${open}" aria-controls="grp-${i}">${ic(g.icon)}<span>${g.group}</span>${ic("chevron").replace('class="i"', 'class="i chev"')}</button>
        <div class="sub" id="grp-${i}" role="group" aria-labelledby="grp-btn-${i}"><div class="sub-in">${g.items.map(([href, label]) => `<a class="sub-link${here(href) ? " active" : ""}"${here(href) ? ' aria-current="page"' : ""} href="${href}">${label}</a>`).join("")}</div></div>
      </div>`;
    };
    const nav = document.createElement("nav");
    nav.className = "side";
    nav.setAttribute("aria-label", "Main");
    nav.innerHTML = `<button type="button" class="side-toggle" aria-expanded="false" aria-controls="side-menu" aria-label="Open menu">${ic("menu")}${ic("close")}</button>
      <div class="side-menu" id="side-menu">${SITE.nav.map((n, i) => (n.items ? group(n, i) : single(n))).join("")}</div>`;
    layout.prepend(nav);

    // Dropdowns: click to open or close a category
    nav.querySelectorAll(".grp-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const g = btn.parentElement;
        const open = !g.classList.contains("open");
        // Accordion: opening one category closes the others
        nav.querySelectorAll(".grp.open").forEach((o) => {
          o.classList.remove("open");
          o.querySelector(".grp-btn").setAttribute("aria-expanded", false);
        });
        g.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open);
      }),
    );
    // Phones: the whole menu collapses behind one hamburger button
    const tog = nav.querySelector(".side-toggle");
    const setOpen = (open) => {
      nav.classList.toggle("open", open);
      tog.setAttribute("aria-expanded", open);
      tog.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    tog.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
    addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        tog.focus();
      }
    });
    // Tap anywhere outside the menu to close it
    document.addEventListener("click", (e) => {
      if (nav.classList.contains("open") && !nav.contains(e.target)) setOpen(false);
    });
  }

  const setHdr = () => head && document.documentElement.style.setProperty("--hdr", head.offsetHeight + "px");
  const setFtr = () => document.getElementById("site-footer") && document.documentElement.style.setProperty("--ftr", document.getElementById("site-footer").offsetHeight + "px");
  setHdr();
  addEventListener("resize", () => (setHdr(), setFtr()));
  addEventListener("load", () => (setHdr(), setFtr()));

  const foot = document.getElementById("site-footer");
  if (foot) {
    const year = new Date().getFullYear();
    const links = SITE.nav.map((n) => (n.items ? `<li class="fl-h">${n.group}</li>${n.items.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}` : `<li><a href="${n[0]}">${n[2]}</a></li>`)).join("");
    foot.innerHTML = `<div class="foot-in">
        <div class="foot-col foot-brand">
          <div class="foot-logos"><img src="../assets/umak-logo.png" alt="${SITE.school} logo"><img src="../assets/logo.png" alt="${SITE.brand} logo"></div>
          <h4>${SITE.name} · ${SITE.brand}</h4>
        </div>
        <nav class="foot-col" aria-label="Footer"><h4>Explore</h4><ul class="foot-links">${links}</ul></nav>
        <div class="foot-col"><h4>Contact</h4>
          <address>
            <p>${ic("pin")}<span>${SITE.address}</span></p>
            <p>${ic("mail")}<a href="mailto:${SITE.email}">${SITE.email}</a></p>
          </address>
        </div>
      </div>
      <div class="foot-bar">
        <span>© ${year} ${SITE.name} · ${SITE.brand}. All rights reserved.</span>
        <button type="button" class="to-top">${ic("up")}Back to top</button>
      </div>`;
    foot.querySelector(".to-top").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
    setFtr();
  }
})();

if ($("#fw")) $("#fw").innerHTML = F.map((f) => `<article class="card rv ${f[4] || ""}"><span class="badge">${ic(f[0])}</span>${f[4] ? '<em class="ours">Our framework</em>' : ""}<h3>${f[1]}</h3><small>${f[2]}</small><p>${f[3]}</p>${f[4] ? `<div class="two"><div><b>${ic("star")}Motivators</b>Achievement · Recognition · Growth</div><div><b>${ic("shield")}Hygiene</b>Pay · Policies · Conditions</div></div>` : ""}</article>`).join("");

if ($("#team-grid")) $("#team-grid").innerHTML = M.map((m, k) => `<a class="card rv tm" href="about.html?m=${k}#profile"><span class="pic">${pic(m, k)}</span><h3>${m.n}</h3><small>${m.r}</small><span class="more">View profile ${ic("arrow")}</span></a>`).join("");

const node = (m, k) => `<a class="node ${k ? "" : "lead"}" style="--k:${k}" href="about.html?m=${k}#profile" data-k="${k}"><span class="pic">${pic(m, k)}</span><span class="tip"><b>${m.n}</b>${m.r}</span></a>`;
if ($("#chart")) {
  $("#chart").innerHTML = `<div class="tree">${node(M[0], 0)}<div class="kids">${M.slice(1)
    .map((m, i) => node(m, i + 1))
    .join("")}</div></div>`;
  if ($("#profile"))
    document.querySelectorAll(".node").forEach(
      (a) =>
        (a.onclick = (e) => {
          e.preventDefault();
          profile(+a.dataset.k);
          $("#profile").scrollIntoView({ behavior: "smooth", block: "center" });
        }),
    );
}

function profile(k) {
  const m = M[k],
    p = $("#profile");
  p.classList.remove("in");
  void p.offsetWidth;
  p.innerHTML = `<div class="info"><span class="chip">${ic(m.ic)}${m.r}</span><h2>${m.n}</h2><p>${m.bio}</p><h3>${ic("target")}Responsibilities</h3><ul>${m.duty.map((d) => `<li>${ic("check")}${d}</li>`).join("")}</ul><a class="btn" href="mailto:${m.mail}">${ic("mail")}${m.mail}</a></div><div class="shot"><span class="q">${ic("quote")}</span><div class="frame">${pic(m, k)}</div><div class="band"><b>${m.n}</b><small>${m.r}</small></div></div>`;
  p.classList.add("in");
  document.querySelectorAll(".node").forEach((n) => n.classList.toggle("sel", +n.dataset.k === k));
  try {
    history.replaceState(null, "", "?m=" + k);
  } catch (e) {}
}
if ($("#profile")) {
  const wantsProfile = location.hash === "#profile"; // read before profile() rewrites the URL
  profile(Math.min(M.length - 1, +new URLSearchParams(location.search).get("m") || 0));
  // Only jump to the profile when the link asked for it (#profile, e.g. from the
  // Structure chart or team cards). A normal visit to About starts at the top.
  if (wantsProfile)
    requestAnimationFrame(() => $("#profile").scrollIntoView({ block: "center" }));
  else {
    history.scrollRestoration = "manual";
    scrollTo(0, 0);
  }
}

/* ===== REFLECTIONS: one profile-style card per member (reflection.html) =====
   Fill in `refl` on each member in M above. Separate paragraphs with a blank
   line (\n\n). Leave it empty to show the placeholder text. */
const reflCard = (m, k) => {
  const text = m.refl || [`This is a placeholder for ${m.n}'s reflection. Write what you learned about organizational communication from this subject, and what stood out to you most while studying the theories we covered.`, `Describe how Herzberg's Two-Factor Theory showed up in our work as FLUVB, from the motivators that kept the team inspired to the hygiene factors that kept everything running smoothly.`, `Close with how your role shaped your experience, what you would do differently next time, and how you plan to apply these lessons in your future studies and work.`, `End with a closing thought or a piece of advice for anyone studying this subject next.`].join("\n\n");
  const paras = text
    .split(/\n\s*\n/)
    .map((p) => `<p>${p.trim()}</p>`)
    .join("");
  return `<article class="profile refl rv" id="reflection-${k}"><div class="info"><h2>${m.n}</h2>${paras}</div><div class="shot"><span class="q">${ic("quote")}</span><div class="frame">${pic(m, k)}</div><div class="band"><b>${m.n}</b><small>${m.r}</small></div></div></article>`;
};
if ($("#reflections")) $("#reflections").innerHTML = M.map(reflCard).join("");

document.querySelectorAll("[data-ic2]").forEach((e) => e.insertAdjacentHTML("beforeend", ic("arrow")));
document.querySelectorAll("[data-ic]").forEach((e) => e.insertAdjacentHTML("afterbegin", ic(e.dataset.ic)));
const io =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("show");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.15 },
      )
    : null;
document.querySelectorAll(".rv").forEach((e, i) => {
  e.style.transitionDelay = (i % 4) * 70 + "ms";
  io ? io.observe(e) : e.classList.add("show");
});

const bar = $("#bar");
addEventListener(
  "scroll",
  () => {
    bar.style.width = (scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)) * 100 + "%";
  },
  { passive: true },
);