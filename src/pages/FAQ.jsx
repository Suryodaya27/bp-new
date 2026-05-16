import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlueprintBg from "@/components/BlueprintBg";
import Reveal from "@/components/Reveal";

const faqs = [
  { q: "What tools do I need to buy?", a: "Typically a sending domain and mailbox setup, a data or enrichment source, and a sequencing tool. Total tool cost lands between $250 and $750 per month. We set everything up on your accounts so you own it." },
  { q: "Do you do the outreach for me?", a: "We write and schedule sequences, and we can run them on your infrastructure. If you have an in-house SDR team, we hand them a ready system with playbooks, lists, and reporting." },
  { q: "How long before I see results?", a: "Day 1 to 30 is system build. By day 30 your pipeline is live and sending. Qualified replies usually start in week 2 of sending. Closed revenue depends on your sales cycle." },
  { q: "What if the leads aren't a fit?", a: "Every lead is scored against your ICP tier before delivery. If a contact does not match the agreed criteria, we replace it. Fit is measurable, not a guess." },
  { q: "Is there a contract lock-in?", a: "The engagement is 90 days so the system has time to produce data. After that it is month to month. No auto-renewal traps." },
  { q: "What markets do you work in?", a: "Primarily US, UK, EU, and Australia. We build for B2B SaaS, consulting, agencies, and professional services. If you sell to businesses and have a working offer, we can build your pipeline." },
];

export default function FAQ() {
  // FAQPage structured data for SEO/AEO
  useEffect(() => {
    document.title = "FAQ - Blueprynt";
    const ld = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    let s = document.getElementById("bp-ld-faq");
    if (!s) {
      s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "bp-ld-faq";
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify(ld);
    return () => {
      if (s) s.remove();
    };
  }, []);
  return (
    <div data-testid="page-faq">
      <section className="relative overflow-hidden border-b bp-spotlight" style={{ borderColor: "var(--bp-border)" }}>
        <BlueprintBg variant="hero" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-14 sm:pt-28">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-accent)" }}>
                FAQ
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-medium">
                Questions, without the fluff.
              </h1>
              <p className="mt-6 max-w-2xl leading-relaxed" style={{ color: "var(--bp-fg-2)" }}>
                If something isn't covered here, email us. We'll answer the same day.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <Accordion
            type="single"
            collapsible
            className="rounded-sm overflow-hidden"
            style={{ border: "1px solid var(--bp-border)", background: "var(--bp-bg-2)" }}
            data-testid="faq-accordion"
          >
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="px-5 sm:px-6 border-b last:border-b-0"
                style={{ borderColor: "var(--bp-border)" }}
                data-testid={`faq-item-${i + 1}`}
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed pb-5" style={{ color: "var(--bp-fg-2)" }}>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="mt-12 p-6 sm:p-8 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{ border: "1px solid var(--bp-border)", background: "var(--bp-bg-2)" }}
          >
            <div>
              <div className="text-xs tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-accent)" }}>
                Still deciding
              </div>
              <p className="mt-2 text-sm max-w-xl" style={{ color: "var(--bp-fg)" }}>
                See the work before you commit. Free <span className="green-underline">20-lead</span> proof of value, delivered in <span className="green-underline">48 hours</span>.
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="faq-cta"
              className="inline-flex items-center gap-2 btn-primary font-medium px-5 py-3 rounded-sm"
            >
              Claim your free 20 leads <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
