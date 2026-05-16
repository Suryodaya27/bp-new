import React, { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import BlueprintBg from "@/components/BlueprintBg";
import Reveal from "@/components/Reveal";
import { getPostBySlug, sortedPosts } from "@/data/blogs";

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  // SEO: structured data per post
  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} - Blueprynt`;
    const ld = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      author: { "@type": "Organization", name: "Blueprynt" },
      datePublished: post.date,
      keywords: post.tags.join(", "),
    };
    let s = document.getElementById("bp-ld-article");
    if (!s) {
      s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "bp-ld-article";
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify(ld);
    return () => {
      if (s) s.remove();
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <article data-testid="page-blog-post">
      <section
        className="relative overflow-hidden border-b bp-spotlight"
        style={{ borderColor: "var(--bp-border)" }}
      >
        <BlueprintBg variant="hero" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 pt-16 pb-10 sm:pt-20">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--bp-accent)]"
              style={{ color: "var(--bp-fg-2)" }}
              data-testid="blog-back"
            >
              <ArrowLeft size={14} /> All posts
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm"
                  style={{
                    background: "var(--bp-accent-soft)",
                    color: "var(--bp-accent)",
                    border: "1px solid var(--bp-accent)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium leading-[1.1]">
              {post.title}
            </h1>
            <div
              className="mt-6 flex flex-wrap items-center gap-5 text-xs mono"
              style={{ color: "var(--bp-fg-3)" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={12} /> {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} /> {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16">
        <Reveal>
          <div
            className="prose-bp"
            data-testid="blog-content"
            style={{ color: "var(--bp-fg)" }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: (p) => (
                  <h1
                    className="text-3xl font-medium tracking-tight mt-10 mb-4"
                    {...p}
                  />
                ),
                h2: (p) => (
                  <h2
                    className="text-2xl font-medium tracking-tight mt-12 mb-3"
                    {...p}
                  />
                ),
                h3: (p) => (
                  <h3
                    className="text-xl font-medium tracking-tight mt-8 mb-2"
                    {...p}
                  />
                ),
                p: (p) => (
                  <p
                    className="text-base leading-relaxed mb-5"
                    style={{ color: "var(--bp-fg-2)" }}
                    {...p}
                  />
                ),
                ul: (p) => (
                  <ul className="list-disc pl-6 space-y-2 mb-5" {...p} />
                ),
                ol: (p) => (
                  <ol className="list-decimal pl-6 space-y-2 mb-5" {...p} />
                ),
                li: (p) => (
                  <li
                    className="leading-relaxed"
                    style={{ color: "var(--bp-fg-2)" }}
                    {...p}
                  />
                ),
                a: (p) => (
                  <a
                    className="green-underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--bp-accent)" }}
                    {...p}
                  />
                ),
                blockquote: (p) => (
                  <blockquote
                    className="border-l-2 pl-4 my-5 italic"
                    style={{
                      borderColor: "var(--bp-accent)",
                      color: "var(--bp-fg-2)",
                    }}
                    {...p}
                  />
                ),
                code: ({ children, className }) => {
                  const isBlock = /language-/.test(className || "");
                  return (
                    <code
                      className={`mono ${isBlock ? "" : "text-[0.9em] px-1.5 py-0.5 rounded-sm"}`}
                      style={
                        isBlock
                          ? { color: "var(--bp-fg)" }
                          : {
                              background: "var(--bp-bg-2)",
                              color: "var(--bp-accent)",
                            }
                      }
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre
                    className="mono text-sm p-4 rounded-sm overflow-x-auto my-5"
                    style={{
                      background: "var(--bp-bg-2)",
                      border: "1px solid var(--bp-border)",
                      color: "var(--bp-fg)",
                    }}
                  >
                    {children}
                  </pre>
                ),
                strong: (p) => (
                  <strong style={{ color: "var(--bp-fg)" }} {...p} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </Reveal>

        {/* CTA */}
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
                Build pipeline
              </div>
              <p
                className="mt-2 text-sm max-w-xl"
                style={{ color: "var(--bp-fg)" }}
              >
                See your free 20-lead proof of value. Real contacts from your
                exact target market, in 48 hours.
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="blog-post-cta"
              className="inline-flex items-center gap-2 btn-primary font-medium px-5 py-3 rounded-sm"
            >
              Claim 20 free leads <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <div
              className="text-xs tracking-[0.2em] uppercase mono mb-5"
              style={{ color: "var(--bp-fg-3)" }}
            >
              Continue reading
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="block p-5 rounded-sm bp-hover-lift"
                  style={{
                    border: "1px solid var(--bp-border)",
                    background: "var(--bp-bg-2)",
                  }}
                  data-testid={`blog-related-${r.slug}`}
                >
                  <div
                    className="text-[10px] tracking-[0.2em] uppercase mono"
                    style={{ color: "var(--bp-fg-3)" }}
                  >
                    {formatDate(r.date)}
                  </div>
                  <div
                    className="mt-2 font-medium tracking-tight"
                    style={{ color: "var(--bp-fg)" }}
                  >
                    {r.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
