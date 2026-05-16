import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import BlueprintBg from "@/components/BlueprintBg";
import Reveal from "@/components/Reveal";
import { sortedPosts } from "@/data/blogs";

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blog() {
  const posts = sortedPosts();
  const [feature, ...rest] = posts;

  return (
    <div data-testid="page-blog">
      <section
        className="relative overflow-hidden border-b bp-spotlight"
        style={{ borderColor: "var(--bp-border)" }}
      >
        <BlueprintBg variant="hero" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-14 sm:pt-28">
          <Reveal>
            <div className="max-w-3xl">
              <div
                className="text-xs tracking-[0.2em] uppercase mono"
                style={{ color: "var(--bp-accent)" }}
              >
                Field notes
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-medium">
                Notes from inside the pipeline.
              </h1>
              <p
                className="mt-6 max-w-2xl leading-relaxed"
                style={{ color: "var(--bp-fg-2)" }}
              >
                Operator-level writing on outbound, ICP design, deliverability,
                and what we see across the engagements we run.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-20">
        {/* Featured */}
        {feature && (
          <Reveal>
            <Link
              to={`/blog/${feature.slug}`}
              data-testid="blog-feature-card"
              className="group block rounded-sm overflow-hidden bp-hover-lift"
              style={{
                border: "1px solid var(--bp-border)",
                background: "var(--bp-bg-2)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div
                  className="lg:col-span-5 relative overflow-hidden p-8 sm:p-10 flex flex-col justify-center"
                  style={{ background: "var(--bp-bg)" }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bp-grid opacity-50"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bp-radial-mask"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, var(--bp-accent-soft), transparent 60%)",
                    }}
                  />
                  <div className="relative">
                    <div
                      className="mono text-[11px] tracking-[0.2em] uppercase"
                      style={{ color: "var(--bp-accent)" }}
                    >
                      Latest
                    </div>
                    <div
                      className="mt-3 mono text-7xl sm:text-8xl tracking-tighter font-medium"
                      style={{ color: "var(--bp-fg)" }}
                    >
                      {String(posts.length).padStart(2, "0")}
                    </div>
                    <div
                      className="mt-2 mono text-xs tracking-[0.2em] uppercase"
                      style={{ color: "var(--bp-fg-3)" }}
                    >
                      Posts published
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    {feature.tags.map((t) => (
                      <span
                        key={t}
                        className="mono text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm"
                        style={{
                          background: "var(--bp-accent-soft)",
                          color: "var(--bp-accent)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2
                    className="mt-5 text-2xl sm:text-3xl tracking-tight font-medium leading-[1.15] transition-colors group-hover:text-[var(--bp-accent)]"
                    style={{ color: "var(--bp-fg)" }}
                  >
                    {feature.title}
                  </h2>
                  <p
                    className="mt-4 text-base leading-relaxed"
                    style={{ color: "var(--bp-fg-2)" }}
                  >
                    {feature.excerpt}
                  </p>
                  <div
                    className="mt-6 flex flex-wrap items-center gap-5 text-xs mono"
                    style={{ color: "var(--bp-fg-3)" }}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={11} /> {formatDate(feature.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={11} /> {feature.readTime}
                    </span>
                  </div>
                  <div
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-transform group-hover:translate-x-0.5"
                    style={{ color: "var(--bp-accent)" }}
                  >
                    Read post <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group block h-full p-7 rounded-sm bp-hover-lift"
                  style={{
                    border: "1px solid var(--bp-border)",
                    background: "var(--bp-bg-2)",
                  }}
                  data-testid={`blog-card-${p.slug}`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="mono text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm"
                        style={{
                          background: "var(--bp-bg)",
                          color: "var(--bp-fg-3)",
                          border: "1px solid var(--bp-border)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="mt-4 text-xl font-medium tracking-tight leading-snug transition-colors group-hover:text-[var(--bp-accent)]"
                    style={{ color: "var(--bp-fg)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--bp-fg-2)" }}
                  >
                    {p.excerpt}
                  </p>
                  <div
                    className="mt-6 pt-5 border-t flex items-center justify-between text-xs mono"
                    style={{ borderColor: "var(--bp-border)", color: "var(--bp-fg-3)" }}
                  >
                    <span>{formatDate(p.date)}</span>
                    <span>{p.readTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
