import React, { useState } from "react";

const IMAGES = [
  {
    src: "https://www.pujasarthi.in/_next/image?q=75&url=%2Fimages%2Fkirtan_devotees.png&w=1080",
    alt: "Devotees participating in a devotional kirtan",
    caption: "Bhajan Night — Community Singing",
  },
  {
    src: "https://sgspanchamukhahanuman.org/Admin/EventPhotos/266A2818.jpg",
    alt: "Devotional music performance inside a temple",
    caption: "Kirtan — Group Devotional Singing",
  },
  {
    src: "https://www.hindustantimes.com/ht-img/img/2023/09/07/original/https_1694093198841.jpg",
    alt: "Devotees singing bhajans during a festival",
    caption: "Festival — Krishna Janmashtami Celebration",
  },
  {
    src: "https://iskcondhule.com/assets/images/program_satsang_v2.png",
    alt: "Devotees gathered for a temple kirtan",
    caption: "Satsang — Shared Devotion",
  },
  {
    src: "https://hkmchennai.org/assets/discover-v2/1_Sri_Vaikuntha_Ekadashi.JPG",
    alt: "Devotees participating in a flower offering ceremony",
    caption: "Offerings — Flowers & Prasad",
  },
  {
    src: "https://ulagatamil.in/uploads/2025/01/thumbnail-understanding-worship-practices-in-tamil-culture.webp",
    alt: "Devotees making flower offerings at a temple",
    caption: "Temple Celebration — Flower Offerings",
  },
];

function Gallery() {
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [rsvpEvent, setRsvpEvent] = useState("");
  const [rsvpMessage, setRsvpMessage] = useState("");
  const [rsvpErrors, setRsvpErrors] = useState<string[]>([]);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  function validateRsvp() {
    const e: string[] = [];
    if (!rsvpName.trim()) e.push("Name is required");
    if (!rsvpEmail.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.push("Valid email is required");
    if (!rsvpEvent) e.push("Please select an event to RSVP for");
    setRsvpErrors(e);
    return e.length === 0;
  }

  function submitRsvp(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validateRsvp()) return;
    setRsvpSubmitted(true);
    setRsvpMessage("");
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-serif font-bold text-[#402919]">Gallery</h1>
          <p className="mt-3 text-[#766451]">Moments from our gatherings, bhajans, and community celebrations. Photos sourced from Unsplash.</p>

          <div className="mt-8 grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {IMAGES.map((img, i) => (
                <figure key={i} className="overflow-hidden rounded-2xl bg-[#fffaf1] shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />

                  <figcaption className="p-4 text-sm text-[#6d5944]">
                    <div className="font-semibold text-[#49301f]">{img.caption}</div>
                    <div className="mt-1">Photo from <a href="https://unsplash.com" target="_blank" rel="noreferrer" className="text-[#a95718] underline">Unsplash</a></div>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[#49301f]">Video Highlights</h3>
              <p className="mt-2 text-[#766451]">Short video clips from selected events will appear here. For now, browse photos to feel the atmosphere.</p>
            </div>

            <section className="mt-8">
              <h3 className="text-xl font-semibold text-[#49301f]">Bhajan Event Management</h3>
              <p className="mt-2 text-[#766451]">We organise regular bhajan evenings, satsangs and festival events — complete with volunteers, sound and stage management, prasadam distribution, and community outreach. If you'd like to help or host an event, register through the <a href="/register" className="text-[#a95718] underline">registration page</a>.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#ead9ba] bg-[#fffaf1] p-4">
                  <h4 className="font-semibold">What we manage</h4>
                  <ul className="mt-2 text-sm text-[#766451] list-disc list-inside">
                    <li>Event scheduling & coordination</li>
                    <li>Volunteer management</li>
                    <li>Audio/visual & seating</li>
                    <li>Prasadam & community outreach</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#ead9ba] bg-[#fffaf1] p-4">
                  <h4 className="font-semibold">Get involved</h4>
                  <p className="mt-2 text-sm text-[#766451]">We welcome musicians, hosts, and helpers. If you'd like to join our team, RSVP below or contact us through the <a href="/contact" className="text-[#a95718] underline">contact page</a>.</p>
                </div>
              </div>

              <div className="mt-6 max-w-xl">
                {rsvpErrors.length > 0 && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    <ul>
                      {rsvpErrors.map((er) => (
                        <li key={er}>• {er}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {!rsvpSubmitted ? (
                  <form onSubmit={submitRsvp} className="mt-4 space-y-3">
                    <div>
                      <label className="block text-sm text-[#6d5944]">Name <span className="text-red-500">*</span></label>
                      <input value={rsvpName} onChange={(e) => setRsvpName(e.target.value)} aria-required="true" aria-invalid={!rsvpName.trim()} className="w-full border rounded px-3 py-2" placeholder="Full name" />
                    </div>

                    <div>
                      <label className="block text-sm text-[#6d5944]">Email <span className="text-red-500">*</span></label>
                      <input value={rsvpEmail} onChange={(e) => setRsvpEmail(e.target.value)} type="email" aria-required="true" aria-invalid={!rsvpEmail.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)} className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm text-[#6d5944]">Event <span className="text-red-500">*</span></label>
                      <select value={rsvpEvent} onChange={(e) => setRsvpEvent(e.target.value)} className="w-full border rounded px-3 py-2">
                        <option value="">Choose an event...</option>
                        <option value="evening-bhajan">Evening Bhajan Sandhya — 15 SEP</option>
                        <option value="ganesh-bhajan">Ganesh Bhajan Celebration — 21 SEP</option>
                        <option value="morning-satsang">Morning Satsang — 28 SEP</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-[#6d5944]">Message (optional)</label>
                      <input value={rsvpMessage} onChange={(e) => setRsvpMessage(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Any notes for organisers" />
                    </div>

                    <div>
                      <button type="submit" className="rounded-full bg-[#a95718] px-5 py-2 text-white">RSVP</button>
                    </div>
                  </form>
                ) : (
                  <div className="mt-3 rounded-2xl border border-[#e6d7bd] bg-[#fffaf1] p-4">
                    <strong>Thanks — RSVP recorded</strong>
                    <p className="mt-2 text-sm text-[#6d5944]">We will contact you at <span className="font-semibold">{rsvpEmail}</span> with further details.</p>
                  </div>
                )}
              </div>
            </section>

            <section className="mt-8">
              <h3 className="text-xl font-semibold text-[#49301f]">Supporting Nepali Brands</h3>
              <p className="mt-2 text-[#766451]">We partner with local Nepali brands and artisans who support our events. Below are some friendly names — click to learn more.</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Himalayan Crafts", logo: "https://via.placeholder.com/300x150?text=Himalayan+Crafts", url: "https://example.com" , desc: "Handmade malas, offering trays and ritual items."},
                  { name: "Nepal Sweets", logo: "https://via.placeholder.com/300x150?text=Nepal+Sweets", url: "https://example.com", desc: "Traditional sweets for prasadam and events."},
                  { name: "Kathmandu Threads", logo: "https://via.placeholder.com/300x150?text=Kathmandu+Threads", url: "https://example.com", desc: "Temple-friendly garments and stage decor."},
                ].map((b) => (
                  <a key={b.name} href={b.url} target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl border border-[#ead9ba] bg-white p-3 shadow-sm hover:shadow-md">
                    <img src={b.logo} alt={b.name} className="h-28 w-full object-contain" />
                    <div className="mt-3 text-sm text-[#6d5944]"><strong className="text-[#49301f]">{b.name}</strong> — {b.desc}</div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
