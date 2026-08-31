import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#fff8eb] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-serif font-bold text-[#402919]">About Bhajan Australia</h1>

          <p className="mt-4 text-lg text-[#766451]">Bhajan Australia began as a small circle of devotees who met monthly to sing together. Over time it grew into a loving community that hosts regular bhajan gatherings, satsangs and cultural events across cities.</p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-[#49301f]">Our Mission</h3>
              <p className="mt-2 text-[#766451]">To create welcoming spaces where devotional music brings people together for peace, reflection and joyful celebration.</p>

              <h3 className="mt-6 font-semibold text-[#49301f]">Our Values</h3>
              <ul className="mt-2 list-inside list-disc text-[#766451]">
                <li>Inclusiveness — everyone is welcome</li>
                <li>Devotion — heart-led practice</li>
                <li>Community — caring for one another</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#49301f]">How We Gather</h3>
              <p className="mt-2 text-[#766451]">Most events include singing bhajans together, short readings or kirtan, and a time for community sharing. Many gatherings finish with tea and simple prasadam.</p>

              <div className="mt-6">
                <Link to="/events" className="inline-flex rounded-full bg-[#a95718] px-6 py-3 text-white font-semibold">View Events</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
