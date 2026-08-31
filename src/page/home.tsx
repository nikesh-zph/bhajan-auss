import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  ChevronRight,
  MapPin,
  Music2,
  ShieldCheck,
  Sparkles,
  Star,
  Ticket,
  Users,
  Building2,
} from "lucide-react";

// Header provided by Layout; remove duplicate import

const cities = [
  {
    name: "Sydney",
    description: "Bhajan & Kirtan Events",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Melbourne",
    description: "Devotional Gatherings",
    image:
      "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Brisbane",
    description: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Perth",
    description: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1552589253-2f5f1f1f6e8e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Adelaide",
    description: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1549180030-48bf079fb38a?auto=format&fit=crop&w=900&q=80",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Curated Devotional Events",
    description:
      "Discover bhajan, kirtan, satsang and devotional music experiences across Australia.",
  },
  {
    icon: Building2,
    title: "Trusted Venues",
    description:
      "Find devotional events hosted at trusted temples, halls, auditoriums and community venues.",
  },
  {
    icon: Ticket,
    title: "Easy Ticket Booking",
    description:
      "Discover an event, choose your seats and receive your booking confirmation with ease.",
  },
  {
    icon: Star,
    title: "Artist-Led Experiences",
    description:
      "Experience talented bhajan singers, kirtan groups and devotional artists from Australia and India.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    description:
      "Enjoy transparent event information and a simple, reliable booking experience.",
  },
  {
    icon: MapPin,
    title: "City-Wise Discovery",
    description:
      "Find devotional events happening near you across Sydney, Melbourne, Brisbane, Perth and Adelaide.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#741b18]">

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-orange-100 bg-gradient-to-br from-[#fffaf5] via-white to-[#fff1e5]">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full border border-orange-100" />
          <div className="pointer-events-none absolute -bottom-48 -right-40 h-[500px] w-[500px] rounded-full border border-orange-100" />

          {/* Decorative dots */}
          <div className="pointer-events-none absolute right-[15%] top-24 h-3 w-3 rounded-full bg-orange-300/50" />
          <div className="pointer-events-none absolute right-[10%] top-40 h-2 w-2 rounded-full bg-orange-400/40" />
          <div className="pointer-events-none absolute left-[45%] bottom-20 h-2 w-2 rounded-full bg-orange-300/50" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            {/* Hero Text */}
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-bold text-orange-600 shadow-sm">
                <Sparkles size={16} />
                Bringing Devotion to Australia
              </div>

              <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-[#741b18] sm:text-6xl lg:text-7xl">
                Experience the
                <span className="block text-orange-500">
                  Divine Through Music
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Discover soulful bhajan concerts, kirtan evenings, satsang,
                devotional gatherings and spiritual music events across
                Australia.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_34px_rgba(243,112,33,0.25)] transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Explore Events
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/list-your-event"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#741b18]/20 bg-white px-6 py-3.5 text-sm font-bold text-[#741b18] shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-500"
                >
                  List Your Event
                  <ChevronRight size={17} />
                </Link>
              </div>

              {/* Trust */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Music2 size={17} />
                  </div>
                  <span>Bhajan & Kirtan</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Users size={17} />
                  </div>
                  <span>Community</span>
                </div>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="rounded-[2rem] border border-orange-100 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-orange-100 via-white to-orange-50">
                  <div className="flex aspect-[4/3] items-center justify-center p-8">
                    <div className="text-center">
                      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-2xl shadow-orange-200">
                        <Music2 size={55} strokeWidth={1.5} />
                      </div>

                      <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                        Bhajan Australia
                      </p>

                      <h2 className="mt-2 font-serif text-3xl font-bold text-[#741b18]">
                        Music • Devotion • Community
                      </h2>

                      <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                        A place to discover and celebrate devotional music
                        experiences across Australia.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-orange-100 bg-orange-50/70 p-5">
                  <div className="flex items-center gap-2 text-orange-600">
                    <Sparkles size={16} />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      Upcoming Experiences
                    </span>
                  </div>

                  <h3 className="mt-2 font-serif text-xl font-bold text-[#741b18]">
                    Soulful devotional evenings across Australia
                  </h3>

                  <div className="mt-4 grid gap-2 text-xs text-slate-500 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CalendarCheck size={14} />
                      Events throughout the year
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      Multiple Australian cities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-orange-100 bg-white p-4 shadow-[0_16px_42px_rgba(15,23,42,0.07)] sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Stat
                icon={<CalendarCheck size={20} />}
                value="0"
                label="Upcoming Events"
              />

              <Stat
                icon={<MapPin size={20} />}
                value="5"
                label="Cities"
              />

              <Stat
                icon={<Users size={20} />}
                value="0"
                label="Artists"
              />

              <Stat
                icon={<Building2 size={20} />}
                value="0"
                label="Trusted Venues"
              />
            </div>
          </div>
        </section>

        {/* CITIES */}
        <section
          id="cities"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
        >
          <SectionHeading
            title="Explore by City"
            description="Discover devotional experiences happening across Australia."
            link="/events"
            linkText="View all events"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {cities.map((city) => (
              <Link
                key={city.name}
                to="/events"
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.16)]"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="font-serif text-xl font-bold">
                    {city.name}
                  </h3>

                  <p className="mt-1 text-xs text-white/80">
                    {city.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* EVENTS */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Upcoming Events"
            description="Find your next spiritual music experience."
            link="/events"
            linkText="View all events"
          />

          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 text-center">
            <Music2 className="mx-auto mb-4 h-12 w-12 text-orange-400" />

            <h3 className="font-serif text-2xl font-bold text-[#741b18]">
              Events are coming soon
            </h3>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              We are preparing beautiful bhajan, kirtan and devotional
              experiences across Australia. Check back soon for upcoming
              events.
            </p>

            <Link
              to="/events"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Explore Events
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* WHY BHAJAN AUSTRALIA */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-orange-50/50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] lg:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Why Bhajan Australia
              </span>

              <h2 className="mt-3 font-serif text-3xl font-bold text-[#741b18] sm:text-4xl">
                Bringing the Joy of Bhajan to Australia
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Bhajan Australia connects devotees, artists, organisers and
                communities through meaningful devotional music experiences.
                From intimate kirtan gatherings to large spiritual concerts,
                discover everything in one place.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                      <Icon size={21} />
                    </div>

                    <h3 className="font-bold text-[#741b18]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#741b18] px-6 py-12 text-center shadow-[0_25px_60px_rgba(116,27,24,0.2)] sm:px-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-orange-300/20" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-orange-300/20" />

            <div className="relative">
              <Sparkles className="mx-auto mb-4 text-orange-400" />

              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                Be Part of the Bhajan Community
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Whether you are looking for your next devotional experience or
                want to organise an event, Bhajan Australia is here to connect
                the community.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/events"
                  className="rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Discover Events
                </Link>

                <Link
                  to="/list-your-event"
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
                >
                  List Your Event
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

 
    </div>
  );
}

/* -------------------------------- */
/* Reusable Components */
/* -------------------------------- */

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-white to-orange-50/70 p-4">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
        {icon}
      </div>

      <div className="font-serif text-3xl font-bold text-[#741b18]">
        {value}
      </div>

      <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
    </div>
  );
}

function SectionHeading({
  title,
  description,
  link,
  linkText,
}: {
  title: string;
  description: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="font-serif text-3xl font-bold text-[#741b18]">
          {title}
        </h2>

        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </div>

      <Link
        to={link}
        className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 transition hover:text-orange-500"
      >
        {linkText}
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h3 className="font-semibold uppercase tracking-[0.12em] text-slate-300">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map(([label, path]) => (
          <li key={path}>
            <Link
              to={path}
              className="inline-flex items-center gap-2 text-sm transition hover:text-orange-400"
            >
              <ChevronRight size={14} className="text-orange-500" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}