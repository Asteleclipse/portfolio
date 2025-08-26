// Cargo-Style Light Portfolio (3-column, airy, editorial)
// Vibe: off-white background, fine rules, mono smallcaps, left profile, center works, right material list.
// Edit CONFIG only. Works great as static export.

const CONFIG = {
  NAME: "YOUR NAME",
  PROFILE_LINES: [
    "PROFILE",
    "email@example.com",
    "Instagram",
    "",
    "Short bio here. Keep it concise; 2–3 lines look best in this narrow column.",
  ],
  CONTACT: ["CONTACT"],
  TIMEFOOTER: true,
  // Center column projects
  PROJECTS: [
    {
      title: "Test Project",
      hero: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
      captionTitle: "Bark Barque Baroque",
      captionLines: [
        "Artist Name (1980–)",
        "Collection / Venue",
        "",
        "Two to three sentences of artwork notes. Keep lines short; the tone should feel like catalog captions.",
      ],
    },
  ],
  // Right column: material / exhibition list
  MATERIAL: [
    { year: "2025", lines: ["Upcoming Solo, Venue", "City"] },
    { year: "2024", lines: ["Group Show", "Another Venue"] },
    { year: "2023", lines: ["Award / Residency", "Institution"] },
  ],
};

function Rule() {
  return <div className="h-px bg-zinc-300/60" />;
}

function LeftProfile() {
  return (
    <aside className="px-5 py-6 flex flex-col gap-3 text-[13px] leading-relaxed">
      <div className="tracking-[0.08em] uppercase text-[12px] text-zinc-600">Cargo_Demo_Template</div>
      <Rule />
      <div className="whitespace-pre-wrap text-zinc-800">
        {CONFIG.PROFILE_LINES.join("\n")}
      </div>
      <Rule />
      <div className="text-zinc-800 whitespace-pre-wrap">{CONFIG.CONTACT.join("\n")}</div>
      <div className="mt-auto text-[11px] text-zinc-500 tabular-nums">
        {CONFIG.TIMEFOOTER && new Date().toLocaleTimeString([], {hour12:false})}
      </div>
    </aside>
  );
}

function Project({ p, i }) {
  return (
    <article className="px-6 py-6">
      <div className="rounded border border-zinc-300/60 bg-white p-3">
        <img src={p.hero} alt={p.title} className="w-full rounded shadow-sm" />
      </div>
      <div className="grid grid-cols-12 gap-4 mt-3 text-[13px] leading-relaxed">
        <div className="col-span-12 md:col-span-6">
          <div className="text-zinc-800">{i + 1}. {p.title}</div>
        </div>
        <div className="col-span-12 md:col-span-6 text-zinc-700">
          <em className="not-italic italic">{p.captionTitle}</em>
          <div className="whitespace-pre-wrap mt-1">{p.captionLines.join("\n")}</div>
        </div>
      </div>
      <div className="h-6" />
    </article>
  );
}

function CenterWorks() {
  return (
    <main className="bg-transparent">
      {CONFIG.PROJECTS.map((p, i) => (
        <Project key={p.title + i} p={p} i={i} />
      ))}
    </main>
  );
}

function RightMaterial() {
  return (
    <aside className="px-5 py-6 text-[13px] leading-relaxed text-zinc-800">
      <div className="tracking-[0.08em] uppercase text-[12px] text-zinc-600">Material (Sample)</div>
      <Rule />
      <div className="space-y-4 mt-3">
        {CONFIG.MATERIAL.map((m, idx) => (
          <div key={idx}>
            <div className="font-medium tabular-nums">{m.year}</div>
            <div className="whitespace-pre-wrap text-zinc-700">{m.lines.join("\n")}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-zinc-900">
      <div className="mx-auto max-w-[1200px] grid grid-cols-12 gap-0 border-x border-zinc-300/70">
        {/* Left */}
        <div className="hidden md:block col-span-3 border-r border-zinc-300/70 bg-[#fcfbf7] sticky top-0 self-start" style={{height:'100dvh'}}>
          <LeftProfile />
        </div>
        {/* Center */}
        <div className="col-span-12 md:col-span-6 border-r border-zinc-300/70">
          <CenterWorks />
        </div>
        {/* Right */}
        <div className="hidden md:block col-span-3">
          <RightMaterial />
        </div>
      </div>
    </div>
  );
}