import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your message. Please try again or contact me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Let's work together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Have a project, opportunity, or idea in mind?
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col justify-center">

            <div className="rounded-2xl bg-gray-50 p-7 sm:p-8">

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Mail size={21} />
              </div>

              <h3 className="text-2xl font-bold text-gray-950">
                Get in touch
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                I'm always open to discussing new projects, internship
                opportunities, freelance work, collaborations, or interesting
                ideas.
              </p>

              {/* Contact Details */}
              <div className="mt-7 space-y-5 border-t border-gray-200 pt-6">

                {/* Email */}
                <a
                  href="mailto:kumawathemant059@gmail.com"
                  className="group flex items-center gap-4 no-underline"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600">
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-medium text-gray-800 transition-colors group-hover:text-blue-600">
                      kumawathemant059@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917737364751"
                  className="group flex items-center gap-4 no-underline"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600">
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-800 transition-colors group-hover:text-blue-600">
                      +91 7737364751
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-800">
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-7 border-t border-gray-200 pt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Connect with me
                </p>

                <div className="flex gap-3">

                  <a
                    href="https://github.com/hemantkumawat05"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-700 no-underline transition-colors hover:bg-gray-900 hover:text-white"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href="https://linkedin.com/in/hemant-kumawat-93196b35a"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-700 no-underline transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <FaLinkedin size={18} />
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Your Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    minLength={2}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Message
                </label>

                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell me about your project or opportunity..."
                    required
                    minLength={10}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm leading-6 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-xl px-4 py-3.5 text-sm ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={17} />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-gray-400">
                Your message will be sent directly to my email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
