import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Music2 } from "lucide-react";

const navItems = [
  { label: "Upcoming Events", path: "/events" },
  { label: "Past Events", path: "/past-events" },
  { label: "List Your Event", path: "/list-your-event" },
  { label: "About", path: "/about" },
  { label: "Members", path: "/members" },
    { label: "Contact", path: "/contact" },

];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.07)] backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-h-14 items-center justify-between gap-5">

          {/* Logo / Brand */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-200">
              <Music2 size={23} strokeWidth={2.2} />
            </div>

            <div className="leading-none">
              <div className="font-serif text-xl font-bold tracking-tight text-[#741b18] sm:text-2xl">
                Bhajan
                <span className="text-orange-500"> Australia</span>
              </div>

              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Devotion • Music • Community
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-full px-4 py-2.5 text-sm font-semibold text-[#741b18] transition-all duration-200 hover:bg-orange-50 hover:text-orange-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/login"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-[#741b18] transition hover:bg-orange-50 hover:text-orange-500"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(243,112,33,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-100 bg-white text-[#741b18] shadow-sm lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-orange-100 pb-4 pt-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold text-[#741b18] transition hover:bg-orange-50 hover:text-orange-500"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-orange-100 pt-4">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-orange-200 px-4 py-3 text-center text-sm font-bold text-[#741b18]"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}