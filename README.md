# Blueprynt Frontend

React 19 + Tailwind marketing site for Blueprynt. Mobile first, light and dark themes, scroll animations, branded assets.

## Stack

- React 19 with React Router v7
- Tailwind CSS plus Shadcn/UI primitives at `src/components/ui/`
- next-themes for light and dark theme management
- framer-motion for hero entrance animations
- IntersectionObserver-based reveal animations (no library)
- Sonner for toast notifications
- react-markdown plus remark-gfm for blog rendering
- axios for API calls

## Run

The frontend is supervisor-managed and has hot reload on. To restart manually after dep changes:

```bash
cd /app/frontend
yarn install
sudo supervisorctl restart frontend
```

## Folder layout

```
src/
├── App.js               Routes and shell
├── index.js             Theme provider, root mount
├── index.css            Theme tokens, blueprint backgrounds, animations
├── App.css              Reserved
├── components/
│   ├── ui/              Shadcn primitives, do not edit by hand
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── LogoMark.jsx     Image-based logo with theme swap
│   ├── ThemeToggle.jsx
│   ├── BlueprintBg.jsx  Grid and dot patterns
│   ├── Reveal.jsx       Scroll fade-up wrapper
│   ├── CountUp.jsx      Number animation
│   ├── Marquee.jsx      Scrolling industry strip
│   ├── HeroLeadCard.jsx Animated mock of a lead record
│   ├── CaseStudies.jsx  Wall of testimonials on Home
│   ├── Comparison.jsx   Comparison table on Pricing
│   ├── CalendlyEmbed.jsx
│   ├── CookieBanner.jsx
│   └── MagneticButton.jsx
├── pages/
│   ├── Home.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── Contact.jsx
│   ├── Privacy.jsx
│   ├── Admin.jsx
│   └── NotFound.jsx
├── data/
│   └── blogs.js         All blog posts live here
├── hooks/
│   └── use-toast.js     Shadcn toast hook
└── lib/
    └── utils.js         Tailwind class merge helper
public/
├── brand/
│   ├── icon.png
│   ├── logo-dark.png
│   └── logo-light.png
├── favicon.ico
├── og-image.png
├── robots.txt
└── sitemap.xml
```

## Theming

All colour tokens live as CSS variables in `src/index.css`. The `:root` selector defines the light palette, `.dark` overrides for dark mode.

Tokens used across the codebase:

| Variable              | Purpose                                     |
| --------------------- | ------------------------------------------- |
| `--bp-bg`             | Primary background                          |
| `--bp-bg-2`           | Card and elevated surface background        |
| `--bp-bg-3`           | Highest elevation                           |
| `--bp-fg`             | Primary text                                |
| `--bp-fg-2`           | Secondary text                              |
| `--bp-fg-3`           | Muted text and mono labels                  |
| `--bp-border`         | Default border                              |
| `--bp-border-2`       | Hover border                                |
| `--bp-accent`         | Brand green                                 |
| `--bp-accent-soft`    | 12 percent green tint for fills and rings   |
| `--bp-grid-line`      | Blueprint grid colour                       |

Theme switching is handled by `next-themes` with `attribute="class"` so adding the `dark` class on `<html>` flips every variable in one go. An inline FOUC-prevention script in `public/index.html` reads localStorage before React hydrates.

## Animations

- **Hero entrance**: framer-motion with staggered delays on title, subtitle, and CTA
- **Section reveals**: `<Reveal>` wrapper uses IntersectionObserver to fade and lift content into view as the user scrolls
- **CountUp**: animated counters on hero stats
- **Marquee**: pure CSS keyframe scroll for the industry strip
- **Magnetic hover**: `<MagneticButton>` translates child by up to 6 to 8 px toward the pointer
- **Scan line**: one-shot animation on the hero lead card on first load
- **Pulse dot**: 2 second ease-in-out for status indicators
- **Hover lift**: `bp-hover-lift` utility class adds subtle transform on cards
- **Reduced motion**: media query disables all animations for users who prefer it

## Routes

| Path           | Page             | Notes                                |
| -------------- | ---------------- | ------------------------------------ |
| `/`            | Home             | Hero, problem, process, fields, cases, proof |
| `/pricing`     | Pricing          | Two plans plus comparison table      |
| `/faq`         | FAQ              | Shadcn accordion with 6 entries      |
| `/blog`        | Blog list        | Featured plus grid of all posts      |
| `/blog/:slug`  | Blog post        | Markdown rendered, related posts     |
| `/contact`     | Contact          | Form plus inline Calendly            |
| `/privacy`     | Privacy note     | 6 short sections                     |
| `/admin`       | Admin            | Password-protected lead viewer       |
| `*`            | 404              | Branded fallback                     |

## Calling the backend

Always:

```js
import axios from "axios";
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const r = await axios.post(`${API}/leads`, payload);
```

Never hardcode `localhost`, never call without the `/api` prefix.

## Adding a page

1. Create `src/pages/YourPage.jsx`. Use existing pages as a template, including the `Reveal` wrappers and theme tokens.
2. Add the route in `src/App.js`.
3. Add a link in `src/components/Navbar.jsx` if it should appear in primary nav, otherwise just in `Footer.jsx`.
4. Append the URL to `public/sitemap.xml`.

## Adding a blog post

1. Open `src/data/blogs.js`.
2. Append a new object to `posts` with `slug`, `title`, `excerpt`, `date`, `readTime`, `tags`, `author`, and a markdown `content` string.
3. Add the URL to `public/sitemap.xml`.
4. The list page and post page pick up the change on next reload.

Markdown supports headings, lists, bold, italic, links, inline code, code blocks, blockquotes, and tables (via remark-gfm). Internal links like `/contact` work and are routed client-side.

## Testid convention

Every interactive element has a `data-testid` in kebab-case, role-based naming. Examples:

- `nav-cta-claim`
- `hero-primary-cta`
- `contact-field-email`
- `theme-toggle`
- `cookie-accept`

This makes the testing agent and any QA scripts deterministic.

## Common gotchas

- Do not use `npm`. This project uses `yarn`. `npm install` will break the lockfile.
- Hot reload is on, no need to restart frontend on code changes.
- The screenshot tool sometimes returns stale images. Refresh manually if a UI change does not appear.
- Calendly URL in `CalendlyEmbed.jsx` is a placeholder. Update once the real link exists.
- Logo images have built-in whitespace padding, so the `height` prop on `LogoLockup` looks smaller than the value suggests. We render at 64 in the navbar to compensate.
