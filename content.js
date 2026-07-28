/* ==========================================================================
   BLUE COMPUTER — content data
   Add new songs / tutorials / posts here. Nothing else needs to change —
   the pages render from these arrays.
   ========================================================================== */

const SONGS = [
  {
    title: "Freaked Out",
    persona: "blue",
    blurb: "Restless, wide-eyed indie cut — the anxious-energy anchor track for the Blue channel.",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID"
  },
  {
    title: "Storage",
    persona: "blue",
    blurb: "A quieter, held-together indie track about what gets packed away and kept.",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID"
  },
  {
    title: "DEMISE",
    persona: "Dawn/Blue Mix",
    blurb: "Dawn's darker rock register — heavier, more corrosive material.",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    title: "Waiting Line",
    persona: "None",
    blurb: "Hauntingly cinematic vibe.",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID"
  },
  {
    title: "Lazy",
    persona: "Fable",
    blurb: "The newest release — laid-back and unhurried, true to its name.",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID"
  }
];

const TUTORIALS = [
  {
    title: "Building a lyric video with an earthy aesthetic",
    blurb: "A walkthrough of the lyric-video-maker tool used across Blue Computer releases — the look, the pacing, the type choices.",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID"
  },
  {
    title: "Writing an anchor description for AI song generators",
    blurb: "Why a broader, meaning-first prompt beats an overly specific one when working with tools like Suno or Flow — and how to write one.",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID"
  }
];

const POSTS = [
  {
    title: "Why Blue Computer stays no-face",
    date: "2026-07-01",
    excerpt: "On letting three personas — Blue, Dawn, Fable — carry a project instead of a face.",
    slug: "why-no-face",
    body: "Replace this paragraph with the real post. Write in plain HTML — <strong>, <em>, and <br><br> between paragraphs all work."
  },
  {
    title: "Notes on writing 'Lazy'",
    date: "2026-07-15",
    excerpt: "How the newest track came together, and why it needed to feel unhurried.",
    slug: "notes-on-lazy",
    body: "Replace this paragraph with the real post."
  }
];

/* ---------- persona filter (used on songs.html + home) ---------- */

function initPersonaFilter(selectorRoot, cardRoot) {
  const buttons = selectorRoot.querySelectorAll(".persona-btn");
  const cards = cardRoot.querySelectorAll("[data-persona]");
  const emptyState = cardRoot.parentElement.querySelector(".empty-state");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const persona = btn.dataset.persona;
      let visibleCount = 0;

      cards.forEach((card) => {
        const match = persona === "all" || card.dataset.persona === persona;
        card.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  });
}
