import ctaBg from "@/assets/cta-bg.jpg";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });

  return (
    <section id="kontakt" className="relative py-14 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-dark/85" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="text-primary-foreground">
            <p className="text-micro uppercase tracking-[0.25em] text-primary-foreground/60 font-medium mb-2">
              OZVITE SA NÁM
            </p>
            <h2 className="text-heading-xl lg:text-heading-2xl font-extrabold leading-tight mb-4">
              Máte projekt, pri ktorom potrebujete presné dáta?
            </h2>
            <p className="text-body-lg text-primary-foreground/70 max-w-[360px]">
              Radi sa s vami stretneme na konzultácii a pripravíme nezáväznú cenovú ponuku.
            </p>
            <p className="text-body text-primary-foreground/50 mt-4">
              Stačí sa nám len ozvať ↓
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-background rounded-lg p-6 shadow-lg">
            <h3 className="text-heading-md font-bold text-foreground mb-5">
              Potrebujem 3D skenovanie
            </h3>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Meno"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2.5 text-body-lg text-foreground placeholder:text-gray-text bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Firma"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2.5 text-body-lg text-foreground placeholder:text-gray-text bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="Mobil"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2.5 text-body-lg text-foreground placeholder:text-gray-text bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2.5 text-body-lg text-foreground placeholder:text-gray-text bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <textarea
                placeholder="Popíšte čo potrebujete naskenovať"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full border border-border rounded-md px-3 py-2.5 text-body-lg text-foreground placeholder:text-gray-text bg-background focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-body-lg uppercase tracking-wider px-6 py-3 rounded-md hover:bg-yellow-hover transition-colors w-full"
              >
                ODOSLAŤ SPRÁVU
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-micro text-gray-text text-center">
                Čoskoro sa Vám ozveme
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
