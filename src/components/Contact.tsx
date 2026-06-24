import { useState, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Globe,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const rawPhone = "+201061841206";
  const displayPhone = "+20 10 61841206";
  const emailAddress = "ezzatabdeen.dev@gmail.com";

  const handleCopy = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");

    emailjs
      .sendForm(
        "service_whr1lig",
        "template_u86xh1r",
        formRef.current!,
        "LEMZUB3GJn4cB9T1Z",
      )
      .then(
        () => {
          setFormStatus("success");
          setShowPopup(true);
          setFormData({ name: "", email: "", company: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setFormStatus("error");
          alert(
            "Sorry, there was an error while sending the message. Please try again!",
          );
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-32 relative bg-[#030712] overflow-hidden selection:bg-blue-500/30"
    >
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-600/10 to-indigo-500/5 blur-[120px] pointer-events-none z-0 animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/60 shadow-[inset_0_1px_12px_rgba(59,130,246,0.1)] text-xs font-mono text-blue-400 mb-5"
          >
            <Sparkles
              className="w-3.5 h-3.5 animate-spin"
              style={{ animationDuration: "4s" }}
            />
            <span>// AVAILABLE FOR NEW OPPORTUNITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500"
          >
            Let's Craft Something Exceptional
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Have an idea, a job opening, or a project that needs a professional
            touch? Drop a message and let's align our vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/50 shadow-xl relative overflow-hidden group grow flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />

              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Globe
                    className="w-5 h-5 animate-spin"
                    style={{ animationDuration: "10s" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    Direct Channels
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Skip the forms and ping me directly anytime.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mt-8">
                {/* Email Row */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800/80 transition-all group/item">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="w-4 h-4 text-slate-400 group-hover/item:text-blue-400 transition-colors shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300 font-medium truncate max-w-[140px] sm:max-w-none">
                      {emailAddress}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(emailAddress, "email")}
                    className="p-1.5 rounded-md text-slate-500 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
                  >
                    {copiedType === "email" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone Row */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800/80 transition-all group/item">
                  <div className="flex items-center gap-3 min-w-0">
                    <Phone className="w-4 h-4 text-slate-400 group-hover/item:text-emerald-400 transition-colors shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300 font-medium truncate">
                      {displayPhone}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(rawPhone, "phone")}
                    className="p-1.5 rounded-md text-slate-500 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
                  >
                    {copiedType === "phone" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-900/80 flex items-center gap-4 group hover:border-slate-800 transition-all"
            >
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 group-hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Based In
                </p>
                <h5 className="text-sm font-bold text-white">Sohag, Egypt</h5>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Open to Remote & Relocation
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/70 to-slate-950/70 backdrop-blur-xl border border-slate-900/90 shadow-2xl shadow-black/50 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Send a Secure Message</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Directly connected to my main workspace ecosystem.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-500 bg-slate-950 px-3 py-1 rounded-md border border-slate-900 self-start sm:self-auto">
                  ⚡ End-to-End Delivery
                </div>
              </div>

              <form
                ref={formRef}
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-medium"
                    >
                      Full Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="user_name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-900 text-white text-sm focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/10 focus:outline-none transition-all placeholder:text-slate-700 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-medium"
                    >
                      Email Address <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="user_email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-900 text-white text-sm focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/10 focus:outline-none transition-all placeholder:text-slate-700 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-company"
                    className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-medium"
                  >
                    Company Name{" "}
                    <span className="text-slate-600">(Optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company_name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="e.g. Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-900 text-white text-sm focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/10 focus:outline-none transition-all placeholder:text-slate-700 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-medium"
                  >
                    Message Details <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project scope, timeline, or open role requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-900 text-white text-sm focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/10 focus:outline-none transition-all placeholder:text-slate-700 font-medium resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex justify-center">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="premium-btn group sm:max-w-xs"
                  >
                    <div className="premium-outline" />
                    <div className="flex items-center justify-center space-x-2 relative z-10">
                      {formStatus === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span className="tracking-wide">Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <div className="premium-icon-wrap">
                            <svg
                              className="premium-svg"
                              width="1.1em"
                              height="1.1em"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                                fill="currentColor"
                              />
                              <path
                                d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <span className="premium-text select-none">
                            {"Send Message".split("").map((char, i) => (
                              <span
                                key={i}
                                style={{ "--i": i } as React.CSSProperties}
                              >
                                {char === " " ? "\u00A0" : char}
                              </span>
                            ))}
                          </span>
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 p-8 rounded-3xl max-w-md w-full text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] z-10 overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />

              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-5 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <Check className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                Transmission Complete
              </h3>

              <p className="text-slate-400 text-sm mt-3 leading-relaxed px-2">
                Thank you, your message has bypassed the noise and landed safely
                in my inbox. I’ll review your inquiry and connect with you
                shortly.
              </p>

              <div className="mt-8">
                <button
                  onClick={() => {
                    setShowPopup(false);
                    setFormStatus("idle");
                  }}
                  className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-950 font-semibold text-sm rounded-xl shadow-lg hover:bg-slate-100 transition-all w-full cursor-pointer overflow-hidden"
                >
                  <span>Return to Workspace</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
