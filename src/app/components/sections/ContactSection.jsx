"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useInView from "app/hooks/useInView";
export default function ContactSection() {
  const form = useRef();
  const [success, setSuccess] = useState("");
  const [ref, visible] = useInView();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q1yqxkg",
        "template_4eq53hl",
        form.current,
        "MuHIsByv_CrRa30Zo",
      )
      .then(() => setSuccess("Message sent 💌"));
  };

  return (
    <section ref={ref} id="contact" className="bg-[#f7f3ee] py-24">
      <div
        className={`max-w-6xl mx-auto px-6 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-[#3b2f2f]">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info Side */}
          {/* Info Side */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-[#4a3f3f]">
              Visit Our Cafe
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Where coffee meets calm. Come and enjoy our cozy vibes and fresh
              brews.
            </p>

            {/* Address & Info */}
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <span className="text-[#6f4e37] font-bold">📍 Address:</span>{" "}
                123 Coffee Street, Riyadh, Saudi Arabia
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#6f4e37] font-bold">
                  ⏰ Opening Hours:
                </span>{" "}
                Mon-Sun 8:00 AM - 10:00 PM
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#6f4e37] font-bold">📞 Phone:</span> +966
                55 123 4567
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#6f4e37] font-bold">✉️ Email:</span>{" "}
                contact@ourcafe.com
              </p>
            </div>
          </div>

          {/* Form Side */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-10 rounded-3xl shadow-2xl space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6f4e37] transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6f4e37] transition-all duration-300"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6f4e37] transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full bg-[#6f4e37] text-white py-3 rounded-2xl font-semibold shadow-lg hover:bg-[#5a3e2f] hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
            {success && <p className="text-green-600 mt-2">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
