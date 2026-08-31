import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  function validate() {
    const e: string[] = [];
    if (!name.trim()) e.push("Name is required");
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.push("Valid email is required");
    if (!message.trim()) e.push("Message cannot be empty");
    if (phone && !phone.match(/^\+?[0-9 \-]{7,20}$/)) e.push("Phone number looks invalid");
    setErrors(e);
    return e.length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-[#402919]">Contact Us</h1>

          <p className="mt-3 text-[#766451]">For enquiries, email us at <a href="mailto:info@bhajanaustralia.org" className="text-[#a95718]">info@bhajanaustralia.org</a></p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#ead9ba] bg-[#fffaf1] p-4">
              <h4 className="font-semibold">Address</h4>
              <p className="mt-2 text-sm text-[#766451]">Community Prayer Hall, Melbourne, Australia</p>

              <h4 className="mt-4 font-semibold">Phone</h4>
              <p className="mt-2 text-sm text-[#766451]">+61 400 000 000</p>
            </div>

            <div className="rounded-2xl border border-[#ead9ba] bg-[#fffaf1] p-4">
              <h4 className="font-semibold">Social</h4>
              <p className="mt-2 text-sm text-[#766451]"><a href="#" className="text-[#a95718]">Instagram</a> • <a href="#" className="text-[#a95718]">Facebook</a> • <a href="#" className="text-[#a95718]">YouTube</a></p>

              <h4 className="mt-4 font-semibold">Office Hours</h4>
              <p className="mt-2 text-sm text-[#766451]">Mon–Fri 9:00 AM — 5:00 PM</p>
            </div>
          </div>

          {sent && (
            <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3 text-green-800">Thank you — we will get back to you soon.</div>
          )}

          {errors.length > 0 && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <ul>
                {errors.map((er) => (
                  <li key={er}>• {er}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-[#6d5944]">Name <span className="text-red-500">*</span></label>
              <input value={name} onChange={(e) => setName(e.target.value)} aria-required="true" className="w-full border rounded px-3 py-2" placeholder="Your name" />
            </div>

            <div>
              <label className="block text-sm text-[#6d5944]">Email <span className="text-red-500">*</span></label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" aria-required="true" className="w-full border rounded px-3 py-2" placeholder="Email" />
            </div>

            <div>
              <label className="block text-sm text-[#6d5944]">Phone (optional)</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="+61 400 000 000" />
            </div>

            <div>
              <label className="block text-sm text-[#6d5944]">Subject</label>
              <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Short subject" />
            </div>

            <div>
              <label className="block text-sm text-[#6d5944]">Message <span className="text-red-500">*</span></label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Message" rows={5} />
              <div className="text-xs text-[#766451] mt-1">{message.length}/1000 characters</div>
            </div>

            <div>
              <button className="bg-[#a95718] text-white px-4 py-2 rounded">Send</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
