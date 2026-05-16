import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlueprintBg from "@/components/BlueprintBg";
import Reveal from "@/components/Reveal";

const sections = [
  {
    title: "What we collect",
    body: [
      "When you submit a form on this site (claim 20 leads, contact us), we store the information you provide: name, work email, company, website, target market description, and any notes.",
      "When you visit any page, our hosting layer logs standard request data (IP, user agent, timestamps) for security and abuse prevention. This data is rotated regularly.",
      "If you accept cookies via our banner, we may set a single first-party analytics cookie. We do not load ad-network pixels, retargeting tags, or third-party trackers.",
    ],
  },
  {
    title: "Why we collect it",
    body: [
      "To respond to your enquiry and prepare your free 20-lead research file.",
      "To send you updates relevant to the engagement you initiated. We do not sell, rent, or share your information with anyone outside Blueprynt.",
      "To keep the service fast, available, and secure.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "Form submissions are retained for the duration of the engagement and for up to 24 months after, unless you ask us to delete them sooner.",
      "Server logs are kept for 30 days. Cookie consent state is kept locally in your browser.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can ask us to access, correct, export, or delete your data at any time. Email hello@blueprynt.io with the subject \"Data request\" and we will respond within 7 business days.",
      "You can withdraw cookie consent any time by clearing the bp-consent value from your browser's local storage. The banner will reappear on your next visit.",
    ],
  },
  {
    title: "Third parties we use",
    body: [
      "Email delivery: Resend (sending notification emails to our team).",
      "Hosting: cloud infrastructure providers, used purely as a runtime.",
      "We do not use ad networks. We do not sell data.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions or requests: hello@blueprynt.io.",
      "Blueprynt, Mumbai, India.",
    ],
  },
];

export default function Privacy() {
  return (
    <div data-testid="page-privacy">
      <section
        className="relative overflow-hidden border-b bp-spotlight"
        style={{ borderColor: "var(--bp-border)" }}
      >
        <BlueprintBg variant="hero" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 pt-20 pb-12 sm:pt-24">
          <Reveal>
            <div
              className="text-xs tracking-[0.2em] uppercase mono"
              style={{ color: "var(--bp-accent)" }}
            >
              Privacy
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-medium">
              Short, plain language. No dark patterns.
            </h1>
            <p
              className="mt-6 max-w-2xl leading-relaxed"
              style={{ color: "var(--bp-fg-2)" }}
            >
              We collect what we need to do the work and nothing else. If anything
              here is unclear, email us and we will fix the wording.
            </p>
            <div
              className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-sm mono text-[11px] tracking-[0.2em] uppercase"
              style={{
                background: "var(--bp-bg-2)",
                border: "1px solid var(--bp-border)",
                color: "var(--bp-fg-3)",
              }}
            >
              <span
                className="h-1 w-1 rounded-full"
                style={{ background: "var(--bp-accent)" }}
              />
              Last updated · Feb 2026
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-14 sm:py-20">
        <div className="space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article
                data-testid={`privacy-section-${i + 1}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b last:border-b-0"
                style={{ borderColor: "var(--bp-border)" }}
              >
                <div className="md:col-span-4">
                  <div
                    className="mono text-[11px] tracking-[0.2em] uppercase"
                    style={{ color: "var(--bp-fg-3)" }}
                  >
                    Section {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-2 text-xl sm:text-2xl font-medium tracking-tight">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-8 space-y-4">
                  {s.body.map((p, j) => (
                    <p
                      key={j}
                      className="text-base leading-relaxed"
                      style={{ color: "var(--bp-fg-2)" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            className="mt-14 p-6 sm:p-8 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{
              border: "1px solid var(--bp-border)",
              background: "var(--bp-bg-2)",
            }}
          >
            <div>
              <div
                className="text-xs tracking-[0.2em] uppercase mono"
                style={{ color: "var(--bp-accent)" }}
              >
                Want to talk
              </div>
              <p
                className="mt-2 text-sm max-w-xl"
                style={{ color: "var(--bp-fg)" }}
              >
                We answer privacy and data questions the same day. No legal
                queue, no template replies.
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="privacy-cta"
              className="inline-flex items-center gap-2 btn-ghost-border px-5 py-3 rounded-sm text-sm"
            >
              Contact us <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
