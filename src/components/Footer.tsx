import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#392317] text-[#f8e7c8] mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#a95718] text-white">ॐ</div>
              <div>
                <div className="font-bold">Bhajan Australia</div>
                <div className="text-xs text-[#d7b783]">Australia</div>
              </div>
            </div>

            <p className="mt-4 text-[#cdb99a] max-w-md">A community united by devotional music, culture and togetherness.</p>
          </div>

          <div className="flex gap-8">
            <div>
              <h4 className="font-semibold">Explore</h4>
              <div className="mt-3 space-y-2 text-[#cdb99a]">
                <Link to="/home">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/about">About</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Connect</h4>
              <div className="mt-3 space-y-2 text-[#cdb99a]">
                <Link to="/contact">Contact</Link>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-[#a9957c] flex justify-between">
          <div>© {new Date().getFullYear()} Bhajan Australia. All rights reserved.</div>
          <div>Made with ❤️ for the community.</div>
        </div>
      </div>
    </footer>
  );
}
