import { useParams, Link } from "react-router-dom";

type Event = {
  id: number;
  title: string;
  description: string;
  time?: string;
  location?: string;
  venue?: string;
  image?: string;
};

const EVENTS: Event[] = [
  { id: 1, title: "Evening Bhajan Sandhya", description: "An evening of bhajans and community prayer.", time: "6:00 PM", location: "Kathmandu", venue: "Community Hall", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10" },
  { id: 2, title: "Ganesh Bhajan Celebration", description: "Devotional celebration with songs and prasadam.", time: "5:30 PM", location: "Lalitpur", venue: "Cultural Center", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10" },
  { id: 3, title: "Morning Satsang", description: "Satsang and meditation followed by bhajans.", time: "7:00 AM", location: "Bhaktapur", venue: "Temple Hall", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIkqXPC8kcXq5bvTy7T5YHko__D1wGlNgalwVD_Agg&s=10" },
];

function EventDetail() {
  const { id } = useParams();
  const event = EVENTS.find((e) => String(e.id) === id);

  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Event not found</h2>
          <Link to="/events" className="mt-4 inline-block text-[#a95718]">Back to events</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="soft-card rounded-2xl p-8">
            {event.image && (
              <div className="mb-6 h-56 w-full overflow-hidden rounded-lg">
                <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
              </div>
            )}
            <h1 className="text-3xl font-serif font-bold text-[#402919]">{event.title}</h1>
            <p className="mt-4 text-[#766451]">{event.description}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold">When</h4>
                <p className="mt-1">{event.time}</p>
              </div>

              <div>
                <h4 className="font-semibold">Where</h4>
                <p className="mt-1">{event.location}</p>
                <p className="mt-1 text-sm text-[#a18c75]">{event.venue}</p>
              </div>

              <div>
                <h4 className="font-semibold">Members</h4>
                <p className="mt-1 text-sm">Lead singer: Siddharth Sharma</p>
                <p className="text-sm">Coordinator: Anjali Patel</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Link to="/register" state={{ eventId: event.id }} className="rounded-full bg-[#a95718] px-5 py-2 text-white">Register</Link>
              <Link to="/events" className="rounded-full border px-5 py-2">Back</Link>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-[#49301f]">Event Schedule</h3>
              <ul className="mt-3 list-inside list-disc text-[#6d5944]">
                <li>6:00 PM — Welcome & Opening Bhajan</li>
                <li>6:30 PM — Group Kirtan</li>
                <li>7:15 PM — Short Talk & Prayers</li>
                <li>7:45 PM — Closing Bhajan</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-[#49301f]">FAQ</h3>
              <div className="mt-3 text-[#6d5944]">
                <p className="font-semibold">Do I need experience to join?</p>
                <p className="mt-1">No — everyone is welcome. We encourage participation at any level.</p>

                <p className="mt-3 font-semibold">Is there an entry fee?</p>
                <p className="mt-1">Most gatherings are free; occasional events may request a small donation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventDetail;
