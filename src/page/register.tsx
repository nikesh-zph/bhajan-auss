import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Ticket,
  User,
  Users,
} from "lucide-react";

export default function EventRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    attendees: "1",
    ticketType: "General Admission",
    specialRequirements: "",
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#fffaf5] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-[0_20px_60px_rgba(116,27,24,0.10)] sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
              <CheckCircle2
                size={45}
                className="text-green-600"
              />
            </div>

            <h1 className="mt-6 font-serif text-3xl font-bold text-[#741b18]">
              Registration Successful
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Thank you for registering for Divine Bhajan Sandhya. Your
              registration details have been successfully submitted.
            </p>

            <div className="mt-7 rounded-2xl bg-orange-50 p-5 text-left">
              <div className="flex justify-between border-b border-orange-100 pb-3">
                <span className="text-sm text-slate-500">
                  Registration ID
                </span>

                <span className="font-bold text-[#741b18]">
                  BA-2026-1048
                </span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-sm text-slate-500">
                  Attendee
                </span>

                <span className="text-sm font-semibold text-[#741b18]">
                  {formData.firstName} {formData.lastName}
                </span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-sm text-slate-500">
                  Tickets
                </span>

                <span className="text-sm font-semibold text-[#741b18]">
                  {formData.attendees}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-7 rounded-xl bg-orange-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Register Another Attendee
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffaf5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-7 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
            <Ticket size={27} />
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
            Bhajan Australia
          </p>

          <h1 className="mt-2 font-serif text-3xl font-bold text-[#741b18] sm:text-4xl">
            Event Registration
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
            Reserve your place for an unforgettable devotional experience.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_20px_60px_rgba(116,27,24,0.10)]"
        >
          {/* EVENT INFORMATION */}
          <div className="bg-gradient-to-r from-[#741b18] to-[#8d2822] px-6 py-6 text-white sm:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                  You are registering for
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold">
                  Divine Bhajan Sandhya
                </h2>

                <p className="mt-1 text-sm text-white/70">
                  Gajendra Pratap Singh & Team
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={17}
                    className="text-orange-300"
                  />
                  <span>12 Sep 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3
                    size={17}
                    className="text-orange-300"
                  />
                  <span>6:30 PM</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin
                    size={17}
                    className="text-orange-300"
                  />
                  <span>Sydney, NSW</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">

            {/* SECTION 1 */}
            <FormSection
              number="01"
              title="Personal Information"
              description="Please provide the primary attendee's details."
            />

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <InputField
                label="First Name"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                icon={<User size={17} />}
                required
              />

              <InputField
                label="Last Name"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                icon={<User size={17} />}
                required
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                icon={<Mail size={17} />}
                required
              />

              <InputField
                label="Mobile Number"
                name="phone"
                type="tel"
                placeholder="+61 400 000 000"
                value={formData.phone}
                onChange={handleChange}
                icon={<Phone size={17} />}
                required
              />

              <SelectField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                icon={<MapPin size={17} />}
                required
                options={[
                  "Sydney",
                  "Melbourne",
                  "Brisbane",
                  "Perth",
                  "Adelaide",
                ]}
                placeholder="Select your city"
              />
            </div>

            {/* DIVIDER */}
            <div className="my-9 border-t border-slate-100" />

            {/* SECTION 2 */}
            <FormSection
              number="02"
              title="Ticket Information"
              description="Choose your ticket type and number of attendees."
            />

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <SelectField
                label="Ticket Type"
                name="ticketType"
                value={formData.ticketType}
                onChange={handleChange}
                icon={<Ticket size={17} />}
                options={[
                  "General Admission - $35",
                  "Premium - $55",
                  "VIP - $85",
                ]}
              />

              <SelectField
                label="Number of Attendees"
                name="attendees"
                value={formData.attendees}
                onChange={handleChange}
                icon={<Users size={17} />}
                options={[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                ]}
              />
            </div>

            {/* TICKET PRICE */}
            <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                    Selected Ticket
                  </p>

                  <p className="mt-1 font-bold text-[#741b18]">
                    {formData.ticketType}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-slate-500">
                    Quantity
                  </p>

                  <p className="font-bold text-[#741b18]">
                    {formData.attendees}
                  </p>
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="my-9 border-t border-slate-100" />

            {/* SECTION 3 */}
            <FormSection
              number="03"
              title="Additional Information"
              description="Optional information to help us prepare for your visit."
            />

            <div className="mt-6">
              <label className="mb-2 block text-sm font-bold text-[#741b18]">
                Special Requirements
              </label>

              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                rows={4}
                placeholder="Dietary requirements, accessibility needs or any other information..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />

              <p className="mt-2 text-xs text-slate-400">
                Optional
              </p>
            </div>

            {/* DIVIDER */}
            <div className="my-9 border-t border-slate-100" />

            {/* SECTION 4 */}
            <FormSection
              number="04"
              title="Confirmation"
              description="Please review and confirm your registration."
            />

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 accent-orange-500"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I agree to the{" "}
                  <span className="font-semibold text-orange-500">
                    Bhajan Australia Terms & Conditions
                  </span>{" "}
                  and understand that event registration is subject to the
                  organiser's event and cancellation policy.
                </span>
              </label>
            </div>

            {/* SUBMIT */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck
                  size={18}
                  className="text-green-600"
                />

                <span>
                  Your information is securely submitted.
                </span>
              </div>

              <button
                type="submit"
                className="rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(243,112,33,0.25)] transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Complete Registration
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* FORM SECTION */
/* -------------------------------- */

function FormSection({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-orange-500">
        {number}
      </div>

      <div>
        <h2 className="font-serif text-xl font-bold text-[#741b18]">
          {title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* INPUT */
/* -------------------------------- */

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#741b18]">
        {label}

        {required && (
          <span className="ml-1 text-orange-500">
            *
          </span>
        )}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-orange-400">
          {icon}
        </div>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
        />
      </div>
    </div>
  );
}

/* -------------------------------- */
/* SELECT */
/* -------------------------------- */

function SelectField({
  label,
  name,
  value,
  onChange,
  icon,
  options,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  icon: React.ReactNode;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#741b18]">
        {label}

        {required && (
          <span className="ml-1 text-orange-500">
            *
          </span>
        )}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-orange-400">
          {icon}
        </div>

        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm text-slate-700 outline-none transition focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
        >
          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}
