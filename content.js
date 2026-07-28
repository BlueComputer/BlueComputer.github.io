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
    title: "<h1>How to Make an AI Music Video (With One Tool)",
    date: "2026-07-01",
    excerpt: "On letting three personas — Blue, Dawn, Fable — carry a project instead of a face.",
    slug: "why-no-face",
    body: "<p>&nbsp;</p>
<p>So you want to make a <strong>music video or a visualizer with AI</strong>, but the idea of generating shot after shot to get everything you need sounds a little too daunting? There's a tool for that. It can create up to 45 seconds of music video content, and all you have to do is enter an image and a prompt. Let's learn about it.</p>
<h2>Meet Flow Music</h2>
<p>Right now I've started messing around with Flow Music. This used to be Riffusion, then Producer AI . Google took it over, which I only learned about a month ago. Here, you can generate music videos based on 45 seconds (or more) of whatever song you'd like to use. At first, I thought I'd have to create the song inside Music Flow to use it. But I already have a bunch of songs in Suno that don't have music videos yet.</p>
<p>So, here's my workaround if you're in the same boat</p>
<ol>
<li>Go to Start a New Session</li>
<li>Press the plus icon</li>
<li>Select Upload Audio and upload your track</li>
</ol>
<h2>The Fade-Out Trick</h2>
<p>Once you upload your song, ask Flow Music to either fade it out at the end or add reverb. It doesn't really matter what you choose. If you already love the song you made (in Suno, or one you wrote yourself), this step isn't going to change anything. You can always mute it in the final video and drop your original track back in later. This step is really just so the system recognizes it as an option you can select to build the video.</p>
<h2>Choosing Your Character</h2>
<p>After uploading, head over to Flow to decide who you want in the video. I use three avatars across most of my music. This one is Juno Blue, so we're using Blue for this video. Flow is the easiest way to do this because Nano Banana is free to use inside it. Once you have your main source image for your character, the next step is to make a grid of images. Just ask: "Please make a grid of images" and specify how many shots you need (12, 13, 15, however many).</p>
<p>Then describe the aesthetic you're going for. Use this same prompt later in Flow Music, so keep it detailed:</p>
<ul>
<li>Time of day (day vs. night)</li>
<li>Character details (e.g., "female character, Alien, etc.")</li>
<li>No illustrations</li>
</ul>
<p>Don't skip this step and let it swap your character's details! Google and Nano Banana are usually good about sticking to your prompt for images, but the video generation step is where things are more likely to get tricky. Being specific up front really helps. Especially since this is a tool that is still improving.</p>
<h2>Generating the Video</h2>
<p>Once you've got your prompt, drop it into Flow Music ( this could be the same prompt you used for the image grid or the prompt it builds for you &mdash; just make sure it doesn't say "collage" or anything like that). Hit create video.</p>
<p>It'll show you a preview of what to expect:</p>
<ul>
<li>Subject accuracy</li>
<li>Style -Aspect ratio</li>
<li>Resolution</li>
<li>Duration</li>
<li>Estimated credit cost</li>
</ul>
<p>If you're already a Google subscriber, sign in with that email and you might just get a solid chunk of credits to start. I haven't paid for any additional credits outside my Google Pro trial. It's all through my existing Google account. The tool is still being updated, but for fast music videos or quick B-roll, or lip-sync, it's pretty decent.</p>
<p>For reference: 30 seconds costs about 375 credits. From here, you can edit any settings you want: extend it to 45 seconds, change the aspect ratio, whatever you need before confirming.</p>
<h2>The Wait (and the Result)</h2>
<p>It normally estimates about a 45 minute wait time, but honestly? It never takes that long. In about 12 minutes, it's ready to go and you cn view what you like and dislike about the output.</p>
<p>For one of my last MV's "Run For IT" I used the word "urban" in my prompt and it leaned into a dark, neon aesthetic that I couldn't use at all; I prefer daytime music videos, with that grainy vhs effect.</p>
<p>Being intentional in your prompting, understanding what you're asking for. That's the real lesson here. Be exact about the environment and mood you want, and don't be afraid to reroll if it's not quite right. That said, the lip-syncing is solid, the style holds up, and character consistency is closer than I expected.</p>
<h2>Wrap-Up</h2>
<p>And that's it! That's how you make an AI music video on the easiest level. Is it the best? Maybe not, but whether you're a small creator, just getting into AI music, or you want to build a visualizer using your own face, this could be a fun way to go about it.&nbsp;</p>
<p>Learn more about AI music &amp; music video tools with me by joining the learning journey! All the best, Blues, and happy generating.</p>"
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
