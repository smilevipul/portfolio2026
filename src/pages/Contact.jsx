import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_mdawe91",
        "template_d6i2k8c",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: "Qwzkp6we4KwKNv6Ah",
        }
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Vipul Kumar</title>

        <meta
          name="description"
          content="Get in touch with Vipul Kumar for full-stack web development opportunities, freelance projects, and meaningful collaborations."
        />

        <meta
          property="og:title"
          content="Contact | Vipul Kumar"
        />

        <meta
          property="og:description"
          content="Contact Vipul Kumar for full-stack web development opportunities, projects, and collaboration."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background px-6 pb-24 pt-28 text-text sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* =========================
              SECTION HEADER
          ========================== */}

          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              04 / CONTACT
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let's build something{" "}
              <span className="text-primary">meaningful.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              Have a project idea, collaboration opportunity, or simply want to
              connect? Send me a message and I&apos;ll get back to you as soon
              as possible.
            </p>
          </div>

          {/* =========================
              CONTACT CONTENT
          ========================== */}

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* =========================
                CONTACT INFO
            ========================== */}

            <div className="space-y-5">
              <div className="glass-card rounded-2xl p-6">
                <p className="text-sm font-medium text-text-muted">
                  Email
                </p>

                <a
                  href="mailto:vipul.kumar2902@gmail.com"
                  className="mt-2 block break-all text-base font-medium text-text transition-colors duration-300 hover:text-primary"
                >
                  vipul.kumar2902@gmail.com
                </a>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <p className="text-sm font-medium text-text-muted">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/vipul-kumar-634821222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-base font-medium text-text transition-colors duration-300 hover:text-primary"
                >
                  Connect with me on LinkedIn
                </a>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <p className="text-sm font-medium text-text-muted">
                  GitHub
                </p>

                <a
                  href="https://github.com/smilevipul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-base font-medium text-text transition-colors duration-300 hover:text-primary"
                >
                  View my GitHub
                </a>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <p className="text-sm font-medium text-text-muted">
                  Availability
                </p>

                <p className="mt-2 text-base font-medium text-primary">
                  Available for work
                </p>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  Open to full-stack development opportunities, freelance
                  projects, and meaningful collaborations.
                </p>
              </div>
            </div>

            {/* =========================
                CONTACT FORM
            ========================== */}

            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Subject */}

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your project or idea..."
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Status */}

                {status === "success" && (
                  <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary">
                    Your message has been sent successfully. I&apos;ll get
                    back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                    Something went wrong while sending your message. Please
                    try again.
                  </div>
                )}

                {/* Submit */}

                <button
                  type="submit"
                  disabled={isSending}
                  className="primary-glow inline-flex w-full items-center justify-center rounded-xl border border-primary/20 bg-primary px-6 py-3.5 text-sm font-bold text-[#031008] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                <p className="text-center text-xs text-text-muted">
                  Your message will be sent directly to my email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;