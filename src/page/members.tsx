import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Music2, Mic2, Drum, Sparkles, Guitar } from "lucide-react";

type Artist = {
  id: number;
  name: string;
  slug: string;
  role: string;
  description: string;
  image: string;
  instruments?: string[];
  experience?: string;
  socials?: { instagram?: string; twitter?: string; website?: string };
  icon?: React.ElementType;
};

const artists: Artist[] = [
  {
    id: 1,
    name: "Aadesh",
    slug: "aadesh",
    role: "Kirtan Artist",
    description:
      "A soulful singer bringing devotion and heartfelt expression to every gathering.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
    instruments: ["Harmonium", "Vocals"],
    experience: "8 years performing at community satsangs and festivals",
    socials: { instagram: "https://instagram.com/aadesh_music" },
    icon: Mic2,
  },
  {
    id: 2,
    name: "Anjuli Hamal",
    slug: "anjuli-hamal",
    role: "Kirtan Artist",
    description:
      "A devotional voice creating intimate and uplifting moments through chanting.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
    instruments: ["Vocals"],
    experience: "6 years leading kirtan circles",
    socials: { instagram: "https://instagram.com/anjuli_hamal" },
    icon: Music2,
  },
  {
    id: 3,
    name: "Sabin Ghising",
    slug: "sabin-ghising",
    role: "Flute Artist",
    description:
      "A flutist blending eastern classical tones with contemporary expression.",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
    instruments: ["Flute"],
    experience: "12 years in classical and devotional performance",
    icon: Music2,
  },
  {
    id: 4,
    name: "Rozan Subedi",
    slug: "rozan-subedi",
    role: "Kirtan Artist",
    description:
      "A musician connecting traditional chanting with a contemporary spirit.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    instruments: ["Vocals", "Guitar"],
    experience: "7 years performing at festivals and satsangs",
    icon: Sparkles,
  },
  {
    id: 5,
    name: "Om B Shrestha",
    slug: "om-b-shrestha",
    role: "Percussionist",
    description:
      "A versatile percussionist experienced with tabla, madal, and hand percussion.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5",
    instruments: ["Tabla", "Madal"],
    experience: "10 years collaborating across devotional and fusion projects",
    icon: Drum,
  },
  {
    id: 6,
    name: "Nischal Bista",
    slug: "nischal-bista",
    role: "Kirtan Artist",
    description:
      "A young devotional artist sharing music that inspires connection and joy.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6",
    instruments: ["Vocals"],
    experience: "5 years leading community kirtans",
    icon: Music2,
  },
  {
    id: 7,
    name: "Aantariksha Dahal",
    slug: "aantariksha-dahal",
    role: "Guitarist",
    description:
      "A guitarist whose musical journey spans original music and devotional collaboration.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7",
    instruments: ["Guitar"],
    experience: "9 years performing live and recording",
    icon: Guitar,
  },
  {
    id: 8,
    name: "AVI",
    slug: "avi",
    role: "Tabla Artist",
    description:
      "A tabla artist adding rhythm, depth, and traditional percussion to devotional performances.",
    image:
      "https://images.unsplash.com/photo-1514518726530-8f9d5d99b5b1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8",
    instruments: ["Tabla"],
    experience: "10 years of classical and devotional collaborations",
    icon: Drum,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.33, 0.1, 0.3, 1],
    },
  },
};

export default function Artists() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const roles = ["All", ...Array.from(new Set(artists.map((a) => a.role)))];

  const filtered = artists.filter((a) => {
    const q = search.toLowerCase().trim();
    if (!q && roleFilter === "All") return true;

    const matchesSearch =
      a.name.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      (a.instruments || []).join(" ").toLowerCase().includes(q);

    const matchesRole = roleFilter === "All" || a.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <main className="min-h-screen bg-[#fffaf1]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6f2e12] via-[#9b4a17] to-[#c67524] px-6 py-24 text-white lg:py-32">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10"
            >
              <Music2 size={28} className="text-[#ffdc91]" />
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-[#ffdc91]"
            >
              Voices of Devotion
            </motion.p>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              Meet Our <span className="text-[#ffdc91]">Artists</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#ffe4ad]"
            >
              Meet the voices and musicians who bring bhajan, kirtan, rhythm, and devotional music to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="artists" className="section bg-[#fffaf1] px-6 py-20 lg:py-28">
        <div className="sectionHeading centered mx-auto max-w-7xl text-center">
          <p className="sectionEyebrow text-xs font-bold uppercase tracking-[0.25em] text-[#b36b1c]">Featured artists</p>
          <h2 className="mt-4 text-4xl font-bold text-[#402919] sm:text-5xl">Voices of the evening</h2>
          <p className="mt-3 text-base leading-relaxed text-[#786653]">Select an artist to view their profile and introduction.</p>
        </div>

        <div className="artistGrid mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          {artists.map((artist) => (
            <Link
              key={artist.slug}
              to={`/artists/${artist.slug}`}
              className="artistCard group block rounded-2xl bg-white shadow-sm overflow-hidden border border-[#ead9ba] transition hover:shadow-xl"
            >
              <div className="artistPortrait relative h-48 w-full bg-[#f5e8ce]">
                <img
                  src={`https://satchitananda.com.au/artists/${artist.slug}.jpg`}
                  alt={`${artist.name} performing at Bhajan Australia`}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.onerror = null;
                    el.src = artist.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10";
                  }}
                  loading="lazy"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#49301f]">{artist.name}</h3>
                <p className="mt-1 text-sm text-[#786653]">{artist.role}</p>
                <span className="mt-3 inline-block text-sm text-[#a95718]">View Profile →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#fff7e7] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#8d4016] via-[#a95718] to-[#c67524] px-7 py-14 text-center shadow-2xl sm:px-12 lg:px-20 lg:py-16">
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border-[30px] border-white/5" />

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[30px] border-white/5" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Music2 size={24} className="text-[#ffdc91]" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#ffdc91]">Join the Celebration</p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Experience the <span className="text-[#ffdc91]">Music</span></h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#ffe4ad] sm:text-lg">Come together with our artists and community for evenings of bhajan, kirtan, rhythm, prayer, and joyful devotion.</p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/events" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#975019] transition-colors hover:bg-[#fff4da]">Explore Events <ArrowRight size={18} /></Link>

                <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10">Back Home</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
