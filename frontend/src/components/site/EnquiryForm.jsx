import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PRODUCTS = [
  "Labels",
  "Thermal Transfer Ribbons",
  "Rigid Boxes",
  "Protective Film",
  "Phone Packaging",
  "Barcoding & Die-Cutting",
  "Other",
];

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product_interest: "",
  message: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const submit = async (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.product_interest ||
      !form.message
    ) {
      toast.error("Please complete the required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/quote`, form);
      setSubmitted(true);
      toast.success("Enquiry received — our team will reply within one business day.");
      setForm(initial);
    } catch (err) {
      const msg =
        err?.response?.data?.detail || "Something went wrong. Please retry.";
      toast.error(typeof msg === "string" ? msg : "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="enquiry"
      className="relative bg-[#0A0A0A] text-[#F7F6F2] py-24 md:py-40"
      data-testid="enquiry-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#F7F6F2]/60 mb-4">
            §&nbsp;Get a Quote
          </div>
          <h2 className="font-display font-bold tracking-[-0.035em] text-5xl md:text-7xl leading-[0.9] text-[#F7F6F2]">
            Tell us
            <br />
            what you're
            <br />
            <span className="text-[#FFF200]">shipping</span>.
          </h2>
          <p className="mt-8 text-lg text-[#F7F6F2]/70 leading-relaxed max-w-md">
            Share your product, volume and timeline. A named specialist replies within one business day with material recommendations, MOQ and indicative pricing.
          </p>

          <div className="mt-10 space-y-4 font-mono-ind text-[12px] uppercase tracking-[0.18em] text-[#F7F6F2]/85">
            <a
              href="mailto:info@mindfulprints.org"
              data-testid="contact-email"
              className="flex items-center gap-3 mp-link"
            >
              <Mail size={14} strokeWidth={1.6} />
              info@mindfulprints.org
            </a>
            <a
              href="tel:+917678352190"
              data-testid="contact-phone"
              className="flex items-center gap-3 mp-link"
            >
              <Phone size={14} strokeWidth={1.6} />
              +91 76783 52190
            </a>
            <div
              data-testid="contact-address"
              className="flex items-start gap-3 text-[#F7F6F2]/70"
            >
              <MapPin size={14} strokeWidth={1.6} className="mt-1" />
              <span>
                B126, First Floor, B Block
                <br />
                Sector 63, Noida — India
              </span>
            </div>
          </div>

          <div className="mt-10 aspect-[4/3] border border-white/10 overflow-hidden">
            <iframe
              title="Mindful Prints — Sector 63 Noida"
              data-testid="map-iframe"
              src="https://www.google.com/maps?q=B+Block+Sector+63+Noida&output=embed"
              className="w-full h-full grayscale invert-[.92] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pl-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-white/15 p-10 md:p-14"
              data-testid="enquiry-success"
            >
              <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#FFF200] mb-6">
                Received ✓
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#F7F6F2] leading-tight mb-6">
                Thanks — your enquiry is with our team.
              </h3>
              <p className="text-[#F7F6F2]/70 text-lg leading-relaxed max-w-lg">
                You'll receive a reply from a specialist within one business day. Meanwhile, feel free to explore the rest of the catalogue.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                data-testid="enquiry-new-btn"
                className="mt-10 mp-pill inline-flex items-center gap-2 rounded-full bg-[#F7F6F2] text-[#0A0A0A] px-6 py-3 text-sm font-mono-ind uppercase tracking-[0.16em]"
              >
                Send another
                <ArrowUpRight size={14} />
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={submit}
              className="space-y-6"
              data-testid="enquiry-form"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="font-mono-ind text-[10.5px] uppercase tracking-[0.22em] text-[#F7F6F2]/55">
                    Name*
                  </span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    data-testid="input-name"
                    placeholder="Your full name"
                    className="mp-input text-[#F7F6F2] placeholder-[#F7F6F2]/30"
                    style={{ borderBottomColor: "rgba(247,246,242,0.25)" }}
                  />
                </label>
                <label className="block">
                  <span className="font-mono-ind text-[10.5px] uppercase tracking-[0.22em] text-[#F7F6F2]/55">
                    Company
                  </span>
                  <input
                    type="text"
                    value={form.company}
                    onChange={set("company")}
                    data-testid="input-company"
                    placeholder="Company / brand"
                    className="mp-input text-[#F7F6F2] placeholder-[#F7F6F2]/30"
                    style={{ borderBottomColor: "rgba(247,246,242,0.25)" }}
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="font-mono-ind text-[10.5px] uppercase tracking-[0.22em] text-[#F7F6F2]/55">
                    Email*
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    data-testid="input-email"
                    placeholder="you@company.com"
                    className="mp-input text-[#F7F6F2] placeholder-[#F7F6F2]/30"
                    style={{ borderBottomColor: "rgba(247,246,242,0.25)" }}
                  />
                </label>
                <label className="block">
                  <span className="font-mono-ind text-[10.5px] uppercase tracking-[0.22em] text-[#F7F6F2]/55">
                    Phone*
                  </span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    data-testid="input-phone"
                    placeholder="+91 …"
                    className="mp-input text-[#F7F6F2] placeholder-[#F7F6F2]/30"
                    style={{ borderBottomColor: "rgba(247,246,242,0.25)" }}
                  />
                </label>
              </div>

              <div>
                <span className="font-mono-ind text-[10.5px] uppercase tracking-[0.22em] text-[#F7F6F2]/55">
                  Product Interest*
                </span>
                <Select
                  value={form.product_interest}
                  onValueChange={set("product_interest")}
                >
                  <SelectTrigger
                    data-testid="select-product"
                    className="mt-2 w-full bg-transparent border-0 border-b border-white/25 rounded-none px-0.5 py-3 h-auto text-left text-[#F7F6F2] focus:ring-0 focus:border-[#F7F6F2] hover:border-[#F7F6F2]/60 transition"
                  >
                    <SelectValue placeholder="Select a product line" />
                  </SelectTrigger>
                  <SelectContent
                    data-testid="select-product-content"
                    className="bg-[#0A0A0A] border-white/20 text-[#F7F6F2]"
                  >
                    {PRODUCTS.map((p) => (
                      <SelectItem
                        key={p}
                        value={p}
                        data-testid={`select-option-${p.toLowerCase().replace(/[^a-z]/g, "-")}`}
                        className="text-[#F7F6F2] focus:bg-white/10 focus:text-[#FFF200]"
                      >
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <label className="block">
                <span className="font-mono-ind text-[10.5px] uppercase tracking-[0.22em] text-[#F7F6F2]/55">
                  Project Brief*
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  data-testid="input-message"
                  placeholder="Volumes, timeline, application, materials you've used before…"
                  className="mp-input text-[#F7F6F2] placeholder-[#F7F6F2]/30 resize-none pt-3"
                  style={{ borderBottomColor: "rgba(247,246,242,0.25)" }}
                />
              </label>

              <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="font-mono-ind text-[10.5px] uppercase tracking-[0.22em] text-[#F7F6F2]/45 max-w-sm">
                  Replies within one business day. Your details are kept confidential.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="enquiry-submit-btn"
                  className="mp-pill inline-flex items-center gap-3 rounded-full bg-[#F7F6F2] text-[#0A0A0A] pl-6 pr-4 py-3.5 text-sm font-mono-ind uppercase tracking-[0.16em] disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Enquiry"}
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0A0A0A] text-[#F7F6F2]">
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
