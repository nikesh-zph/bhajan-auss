import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Music2,
  Search,
  Sparkles,
  Ticket,
} from "lucide-react";


type Event = {
  id: number;
  title: string;
  artist: string;
  date: string;
  day: string;
  time: string;
  city: string;
  venue: string;
  image: string;
  category: string;
  price: string;
};

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Divine Bhajan Sandhya",
    artist: "Gajendra Pratap Singh & Team",
    date: "12 September 2026",
    day: "Saturday",
    time: "6:30 PM – 9:30 PM",
    city: "Sydney",
    venue: "Roselea Community Centre, Carlingford NSW",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10",
    category: "Bhajan",
    price: "From $35",
  },
  {
    id: 2,
    title: "Kirtan & Krishna Evening",
    artist: "Krsna Sansaar",
    date: "26 September 2026",
    day: "Saturday",
    time: "5:30 PM – 8:30 PM",
    city: "Melbourne",
    venue: "Melbourne Convention & Exhibition Centre",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10",
    category: "Kirtan",
    price: "From $30",
  },
  {
    id: 3,
    title: "The New Wave of Devotion",
    artist: "Bhajan Clubbing Australia",
    date: "10 October 2026",
    day: "Saturday",
    time: "7:00 PM – 10:00 PM",
    city: "Brisbane",
    venue: "Brisbane Convention & Exhibition Centre",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10",
    category: "Devotional Music",
    price: "From $25",
  },
  {
    id: 4,
    title: "Soulful Bhajan Evening",
    artist: "Mohit Shewani & Team",
    date: "24 October 2026",
    day: "Saturday",
    time: "6:00 PM – 9:00 PM",
    city: "Perth",
    venue: "Perth Convention and Exhibition Centre",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10",
    category: "Bhajan",
    price: "From $30",
  },
  {
    id: 5,
    title: "Hari Naam Sankirtan",
    artist: "Bhajan Australia Collective",
    date: "7 November 2026",
    day: "Saturday",
    time: "5:00 PM – 8:00 PM",
    city: "Adelaide",
    venue: "Adelaide Convention Centre",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10",
    category: "Sankirtan",
    price: "From $20",
  },
  {
    id: 6,
    title: "Diwali Bhajan Mahotsav",
    artist: "Gajendra Pratap Singh",
    date: "21 November 2026",
    day: "Saturday",
    time: "6:00 PM – 10:00 PM",
    city: "Sydney",
    venue: "Sydney Olympic Park, NSW",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10",
    category: "Special Event",
    price: "From $40",
  },
];

const cities = [
  "All Cities",
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
];

export default function UpcomingEvents() {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [search, setSearch] = useState("");

  const filteredEvents = useMemo(() => {
    return upcomingEvents.filter((event) => {
      const matchesCity =
        selectedCity === "All Cities" || event.city === selectedCity;

      const searchText = search.toLowerCase();

      const matchesSearch =
        event.title.toLowerCase().includes(searchText) ||
        event.artist.toLowerCase().includes(searchText) ||
        event.city.toLowerCase().includes(searchText) ||
        event.venue.toLowerCase().includes(searchText);

      return matchesCity && matchesSearch;
    });
  }, [selectedCity, search]);

  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#741b18]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-orange-100 bg-gradient-to-br from-[#fff8ef] via-white to-orange-50">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-orange-100" />
        <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-96 w-96 rounded-full border border-orange-100" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-orange-600 shadow-sm">
              <Sparkles size={15} />
              Bhajan Australia
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight text-[#741b18] sm:text-5xl lg:text-[3.2rem]">
              Upcoming Bhajan Events
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Discover soulful bhajan concerts, kirtan evenings, devotional
              gatherings and spiritual music experiences happening across
              Australia.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-[0_14px_36px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-serif text-xl font-bold text-[#741b18]">
                Browse by City
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                {filteredEvents.length} upcoming events
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    selectedCity === city
                      ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                      : "border border-orange-100 bg-orange-50/50 text-[#741b18] hover:bg-orange-100"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:max-w-xs">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {filteredEvents.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_38px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_48px_rgba(15,23,42,0.14)]"
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden bg-orange-50">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 to-transparent" />

                  <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-orange-600 shadow-sm">
                    Upcoming
                  </div>

                  <div className="absolute right-3 top-3 rounded-full bg-black/65 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur">
                    {event.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm font-bold text-white">
                      {event.artist}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-serif text-xl font-bold leading-tight text-[#741b18] transition-colors group-hover:text-orange-500">
                    {event.title}
                  </h2>

                  <div className="mt-4 flex-1 space-y-3 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <Calendar
                        size={17}
                        className="mt-0.5 shrink-0 text-orange-500"
                      />

                      <div>
                        <p className="font-semibold text-slate-700">
                          {event.day}, {event.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock
                        size={17}
                        className="mt-0.5 shrink-0 text-orange-500"
                      />

                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin
                        size={17}
                        className="mt-0.5 shrink-0 text-orange-500"
                      />

                      <span>
                        <strong className="text-slate-700">
                          {event.city}
                        </strong>
                        <br />
                        {event.venue}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <span className="text-xs text-slate-400">
                        Tickets
                      </span>

                      <p className="font-bold text-[#741b18]">
                        {event.price}
                      </p>
                    </div>

                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                    >
                      <Ticket size={16} />
                      Book Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-orange-100 bg-white px-6 py-16 text-center shadow-sm">
            <Music2 className="mx-auto h-12 w-12 text-orange-300" />

            <h3 className="mt-4 font-serif text-2xl font-bold text-[#741b18]">
              No events found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another city or search term.
            </p>
          </div>
        )}
      </section>

      {/* ORGANISER CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#741b18] px-6 py-10 text-center sm:px-10">
          <Music2 className="mx-auto text-orange-400" />

          <h2 className="mt-4 font-serif text-3xl font-bold text-white">
            Organising a Bhajan Event?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/70">
            Bring your devotional event to the Bhajan Australia community and
            connect with devotees across Australia.
          </p>

          <Link
            to="/list-your-event"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            List Your Event
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
