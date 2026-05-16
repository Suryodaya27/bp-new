/**
 * Blog posts data.
 *
 * To publish a new post:
 * 1. Add a new object to the `posts` array below.
 * 2. Markdown is supported in `content` (headings, bold, italic, lists, links, code, blockquotes).
 * 3. The slug becomes the URL: /blog/<slug>.
 * 4. Posts render in reverse chronological order based on `date` (YYYY-MM-DD).
 * 5. Update /app/frontend/public/sitemap.xml when you add a post.
 */

export const posts = [
  {
    slug: "trigger-events-12-signals",
    title: "Trigger events: the 12 signals that predict a buyer is ready",
    excerpt:
      "A complete list of the trigger events we track for B2B outbound, why each one matters, and how to source them at scale without manual research.",
    date: "2026-02-12",
    readTime: "8 min read",
    tags: ["Trigger Events", "Outbound"],
    author: "Blueprynt team",
    content: `Most outbound emails open with "I noticed your company is doing great." Buyers ignore them because the line is generic. Trigger events fix that. A trigger event is a specific, recent change in the buyer's world that gives you a real reason to reach out today.

Here are the 12 we track on every Blueprynt engagement, ordered by buying-intent strength.

## 1. New funding round

A Series A, B, or C round usually unlocks budget for the categories we sell into. Watch the announcement window. Reach out 7 to 21 days after the announcement, not the same day. That timing lands when the team is hiring and procuring, not when they are doing press.

## 2. New executive hire

A new VP of Engineering, CRO, CFO, or Head of RevOps almost always brings a tooling review. New hires are tasked with proving impact in their first 90 days. They are open to switching vendors. Reach out in the first 30 to 60 days.

## 3. New product launch

A launch creates new operational pressure: more support load, more deliverability scaling, more pipeline. If you sell into any of those, the launch is your trigger.

## 4. Hiring spree in a relevant function

Five open SDR roles means the GTM team is scaling outbound. Five open security roles means a SOC build out. The job board tells you where the budget is going.

## 5. Public RFP or vendor search

Some teams publish their procurement intent. If you find an RFP that matches your offer, reach out before the formal process starts. Vendors that are on the team's radar before the RFP win disproportionately.

## 6. Compliance or regulatory change

GDPR, SOC2, HIPAA, DORA, ISO 27001. Each new framework or audit creates predictable buying motion in adjacent categories. If your offer reduces audit risk or compliance overhead, this is your highest-converting trigger.

## 7. Negative review or churn pattern

Public G2 or Capterra reviews that mention your competitor's weakness are actionable. Same for Twitter or Reddit threads complaining about a category you compete in.

## 8. Tech stack change detected

You can detect tech stack changes via tools that watch DNS, JS bundles, or job-listing tech mentions. A team that just removed Hubspot is a team mid-transition. A team that just added Snowflake is a team building a data platform.

## 9. Office or geography expansion

A US-only company opening in London or Singapore needs new vendors who serve those regions. Cybersecurity, payroll, legal, recruiting all care.

## 10. M&A activity

Acquired or acquiring teams have to consolidate vendors. There is a 6 to 12 month window where every renewal is on the table.

## 11. Leadership departure

When a senior leader leaves, their tooling decisions get reviewed. The replacement often brings their own preferred stack.

## 12. Seasonal cycles specific to the industry

Retail Q4, fintech end of fiscal year, B2B SaaS budget cycles in November and February. If your buyer follows a pattern, your outbound should match it.

## How we source these at scale

For each engagement we set up automated watch lists tied to the ICP. Funding announcements come from Crunchbase or PitchBook feeds. Executive moves come from LinkedIn job-change notifications. Job-board signals come from scrapers. We score every contact in the research file with the strongest trigger we found, so the sequence opens with that line, not a generic one.

That is the difference between a 0.6 percent reply rate and a 3 percent one.

[Claim your free 20-lead proof of value](/contact) and we will deliver 20 contacts with the trigger event already attached to each row.`,
  },
  {
    slug: "cold-email-2026",
    title: "How to write cold emails that get replies in 2026",
    excerpt:
      "The four-line cold email template that works for B2B founders today, why every line earns its place, and the patterns that get filtered to spam.",
    date: "2026-02-09",
    readTime: "7 min read",
    tags: ["Outreach", "Email"],
    author: "Blueprynt team",
    content: `Cold email is not dead. Cold email written like it is 2021 is dead. Here is the four-line template we run for our clients, why each line is there, and what to avoid.

## The four-line template

\`\`\`
Hey [first name],

[Trigger line. Specific, public, recent.]

[Pain hypothesis tied to the trigger.]

Worth a 15 minute call this week to see if [outcome] matches what you are working on?

[Sender first name]
\`\`\`

That is it. No greeting paragraph, no "I hope this email finds you well", no five-paragraph product pitch.

## Why each line earns its place

### Line 1: the trigger

The opener tells the buyer you read about them, not that you scraped their email. A trigger line looks like this.

> Saw your Series B announcement last week and the new VP of Engineering hire.

Generic versions get filtered immediately.

### Line 2: the pain hypothesis

State the problem you think they have, anchored to the trigger. Be specific enough that you could be wrong.

> I am guessing scaling SOC coverage to the new EU offices is on the radar in the next 90 days.

This is a falsifiable claim. If you are right, you get a reply. If you are wrong, the buyer often corrects you, which is also a reply.

### Line 3: the ask

Specific time commitment, specific outcome. No "let me know when you have time" hedging.

> Worth 15 minutes this week to compare notes on how teams in your stage handle this without doubling headcount?

### Line 4: just your first name

No sign-off paragraph. No 5-line signature with logos. Buyers know who you are because the from-line shows.

## Patterns that get filtered

The ML filters at Google and Microsoft tag these patterns now.

1. **Marketing language**: "best-in-class", "industry-leading", "next generation"
2. **Long paragraphs**: 3 plus sentences in a row
3. **Multiple links**: more than one URL in the first email
4. **Generic personalisation**: {{First Name}} that did not render, or "I noticed you are at [Company]"
5. **Image signatures**: company logos and headshots embedded in the email body
6. **Spam-trigger words**: "free", "guaranteed", "limited time"
7. **Cold-call language**: "circle back", "touch base", "reach out"
8. **Caps in the subject**: anything with all caps gets demoted

## Subject line that works

Three to five words, lowercase, no punctuation. Examples that consistently land.

- quick question on EU expansion
- on your Series B
- 15 min for next week

## Volume guidance

Send 30 to 60 emails per day per inbox, not 200. Use multiple inboxes if you need more volume. The provider reputation budget is the constraint, not the time the sequence takes to write.

## Multi-step sequences

A 4 step sequence beats a single email by 2 to 3x reply rate. Spread across email and LinkedIn. Day 1 email, day 4 LinkedIn connection request, day 8 short email referencing the LinkedIn request, day 14 break-up email.

## What we do for clients

Every Blueprynt engagement includes the full sequence written for your offer, plus the deliverability infrastructure and the sending schedule. If the lines above feel generic when written for your business, we wrote them wrong. [Claim your free 20-lead proof of value](/contact) and we will show you exactly how the email writes itself when the research is right.`,
  },
  {
    slug: "email-deliverability-checklist",
    title: "Email deliverability checklist for B2B founders",
    excerpt:
      "A 14-point setup checklist that gets your sending domain into the inbox, not the spam folder. Skip any one and your reply rate is wrong, not your messaging.",
    date: "2026-02-06",
    readTime: "6 min read",
    tags: ["Deliverability", "Operations"],
    author: "Blueprynt team",
    content: `Founders run a 90-day outbound test, see a 0.4 percent reply rate, and conclude their offer is wrong. Half the time the offer is fine. The emails are landing in spam.

Use this checklist before you blame the message.

## Domain setup

### 1. Use a separate sending domain
Send outbound from \`get.yourcompany.com\` or \`yourcompany.io\`, not from your primary domain. If a sequence burns reputation, your transactional and corporate email is unaffected.

### 2. SPF record set
Publish an SPF TXT record on the sending domain. List your sending provider explicitly. \`v=spf1 include:_spf.yourprovider.com ~all\`.

### 3. DKIM signing enabled
Generate a DKIM key from your sending provider, publish the TXT record. Verify it returns when you send a test email.

### 4. DMARC policy published
Start with \`v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com\`. After 30 days of clean reports, move to \`p=quarantine\`. Production-grade goes to \`p=reject\`.

### 5. MX record on the sending domain
Even if you are sending from a subdomain, an MX record makes the domain look real to receivers.

### 6. Custom tracking domain
Replace your provider's link tracker with your own subdomain. Shared tracker domains get blocklisted.

## Mailbox setup

### 7. One mailbox per persona, not per volume
Send 30 to 50 emails per day per mailbox. If you need more volume, add mailboxes, not emails per box.

### 8. Real human-looking signature
First name, last name, role, company, link. No images, no banners.

### 9. Mailbox warmed up for 14 days minimum
Use a warmup tool to send and receive 20 to 30 emails per day for 14 days before any cold campaign. Brand-new mailboxes get auto-flagged.

## Sending behaviour

### 10. Throttle the send rate
Email providers detect bursts. Spread sends over a 4 to 6 hour window with random spacing.

### 11. Plain text only on first send
Plain text mail outperforms HTML by a wide margin in 2026. Save HTML for transactional and broadcast.

### 12. Keep links to one per email
The first email should have at most one link, and that link should be to a calendar or a personal landing page, not a marketing site.

### 13. Track replies, not opens
Apple Mail Privacy Protection broke open tracking. Open rates above 70 percent are a measurement artifact. Reply rate is the only metric that matters.

### 14. Monitor blocklists weekly
Check Spamhaus, Barracuda, and Sender Score every Monday. If you land on a blocklist, pause sending and request delisting before it spreads.

## What this gets you

A correctly set up sending stack delivers 95 plus percent of emails to the primary inbox. A misconfigured stack delivers 40 to 60 percent. The reply-rate difference is multiplicative, not additive.

## What we do for clients

Every Blueprynt engagement includes the full deliverability setup on your accounts, owned by you. We configure the records, warm up the mailboxes, and monitor blocklists. The leads we deliver come with email status flagged so your sequence skips risky addresses automatically.

[Claim your free 20-lead proof of value](/contact) and see what a clean send looks like.`,
  },
  {
    slug: "icp-redesign-vs-list-rental",
    title: "ICP redesign beats another list rental every time",
    excerpt:
      "Why founders keep buying lists, why the lists keep failing, and the four-hour exercise that fixes the leak at the source.",
    date: "2026-02-04",
    readTime: "6 min read",
    tags: ["ICP", "Strategy"],
    author: "Blueprynt team",
    content: `Most founders we talk to have already tried two or three lead vendors before they reach us. The story is consistent. The list looked good in the spreadsheet. Half the contacts bounced. Of the half that did not bounce, almost none replied. The conclusion they draw is "outbound does not work for our market." That conclusion is wrong.

The lists were fine. The buyer was wrong.

## What "wrong buyer" actually means

When a list does not produce conversations, the question is rarely sourcing. It is targeting. Eight times out of ten the team is sending to a job title that approves the purchase but has no reason to take a meeting today.

A Head of Engineering at a Series B fintech does not open a cold email about CI tooling because their week is already booked. The same email lands with a Staff DevOps Engineer who just got handed a release-velocity OKR. Same product, same offer, opposite outcome.

## The four-hour ICP exercise

Before we run a single query against any data source, we do this with the founder.

1. **List your last ten closed-won deals.** Not the ones that almost closed. Closed.
2. **For each, write the trigger event.** What changed in their world the week they started looking? New funding round, new exec hire, regulatory change, scaling pain.
3. **Write the persona who held the pen.** Not the title on the contract. The person whose problem we solved.
4. **Cluster.** Three to five tight personas usually fall out of ten deals.

That is your ICP. Everything we do downstream is in service of those clusters.

## Why this beats a bigger list

A list of 5,000 random VPs of Engineering is worse than a list of 200 named buyers who match a real persona we have closed before. Reply rates do not scale linearly with volume. They scale with relevance.

If you are about to renew a data subscription or buy another list, do this exercise first. Most teams find that two of their three personas were not in the lists they were already buying.

## Want us to run it with you?

We do this in 90 minutes on a call and hand you the persona doc the same day. It is free. We use it to decide whether your market is one we can build a system for. [Claim your free 20-lead proof of value](/contact).`,
  },
  {
    slug: "21-fields-research-file",
    title: "Why we ship 21 fields per lead, not five",
    excerpt:
      "A breakdown of the 21 data points in every Blueprynt research file and why each one moves a deal forward.",
    date: "2026-01-28",
    readTime: "5 min read",
    tags: ["Operations", "Data"],
    author: "Blueprynt team",
    content: `Most lead vendors ship five fields. Name, email, title, company, LinkedIn. We ship 21. Founders sometimes ask if that is overkill. It is not. Here is what each tier of data does and why we refuse to drop any of it.

## Tier 1: Identity

* First name, Last name, Job title, Seniority, Persona type
* Company, Industry, Employee size

This is the floor. Without it, no outreach is possible.

## Tier 2: Geography and reach

* Country, City
* LinkedIn URL, Professional email, Personal email, Phone
* Company website, Company LinkedIn

City matters more than founders expect. A buyer in London on a Friday at 4pm is not the same buyer as one in San Francisco at 8am. Multi-channel reach lets the sequence pivot if email gets quiet.

## Tier 3: Why this person, this week

* Trigger event, Pain point, General notes
* ICP tier, Email status

This tier is what changes a generic message into a relevant one. A trigger event is the reason the contact would reply today. The pain point is the language we use in the first line. ICP tier orders the contact list by likelihood to convert. Email status tells the sender whether to use the address or skip it.

## What gets dropped if you skip the bottom tier

A list with only Tier 1 and Tier 2 looks the same as the list your competitor bought. Reply rates land between 0.5 and 1 percent. Adding Tier 3 takes the same list to between 2 and 4 percent. The cost of the data is similar. The cost of the research is not. That is what we are actually selling.

## Read the deliverable yourself

Every engagement starts with a free 20-lead proof of value. You see the file before you commit to anything. [Claim it here](/contact).`,
  },
  {
    slug: "outbound-pipeline-math",
    title: "B2B SaaS pipeline math: how to set realistic outbound targets",
    excerpt:
      "How many leads, replies, and meetings you need to hit a quarterly revenue target, with a worked example founders can plug their numbers into.",
    date: "2026-01-22",
    readTime: "6 min read",
    tags: ["Pipeline", "Strategy"],
    author: "Blueprynt team",
    content: `Founders pick outbound targets by feel. Then they get surprised when revenue lags by two quarters. The math is not hard. Here is the model we use to set targets on every engagement.

## The funnel

Five conversion rates compound.

1. **Lead-to-reply** rate (what percentage of contacts reply)
2. **Reply-to-meeting** rate (what percentage of replies turn into a booked call)
3. **Meeting-to-opportunity** rate (what percentage of meetings become real pipeline)
4. **Opportunity-to-close** rate (what percentage of pipeline closes won)
5. **Average deal size**

Multiply them and you get revenue per lead. Divide your revenue target by that number and you get the lead volume you need.

## Example

A B2B SaaS founder targeting $250,000 in new ARR per quarter, average deal size $20,000.

* Deals needed: 250000 / 20000 = 13 deals
* Opportunity to close: 25 percent. Opportunities needed: 52.
* Meeting to opportunity: 40 percent. Meetings needed: 130.
* Reply to meeting: 50 percent. Replies needed: 260.
* Lead to reply: 3 percent. Leads needed: ~8700 across the quarter.

That is roughly 2,900 leads a month. If your reply rate is half what you assumed, you need 5,800 a month. If your meeting-to-opportunity rate is 25 percent instead of 40 percent, you need almost 14,000.

## Where founders break the math

Three places.

1. **They assume reply rates from the wrong era.** A 2 percent reply rate in 2026 is a healthy benchmark. 5 percent is a great month. 8 percent is a unicorn campaign.
2. **They underestimate the sales cycle.** A 60-day cycle means leads sourced in January close in March. Plan around that lag.
3. **They count MQLs instead of replies.** MQL definitions are arbitrary. Replies are not. Use replies.

## The quality lever

The fastest way to fix the model is not more leads. It is a higher reply rate. A reply rate that moves from 1 percent to 3 percent triples the top of the funnel without paying for more data. That is what an ICP redesign and trigger-led copy buys you.

## Plug your numbers in

If you want help running this for your business, [book a discovery call](/contact). We do the funnel math on the call and tell you whether outbound is actually the right channel for the target you have set.`,
  },
  {
    slug: "outbound-in-2026",
    title: "Outbound in 2026 is not dead, it is filtered",
    excerpt:
      "Reply rates are down across the board. Volume is not the answer. Here is what works in inboxes that learned to ignore you.",
    date: "2026-01-15",
    readTime: "7 min read",
    tags: ["Outreach", "Deliverability"],
    author: "Blueprynt team",
    content: `Every quarter someone publishes a post titled "outbound is dead." It gets shared. The next quarter someone else publishes the same post. Meanwhile, our pipeline keeps running. So what is actually happening?

## The macro shift

Inboxes have learned to filter. Three things changed.

1. **Provider-side filtering** is now machine-learned, not rule-based. Templated language and unfamiliar senders get tagged as promotional before a human sees them.
2. **Buyer attention is fractured.** Slack, LinkedIn, and Loom replaced "I will read it later" email habits.
3. **Sender reputation matters more than the message.** A single domain warming up wrong burns the whole sequence.

Volume strategies that worked in 2021 fail because all three filters now compound.

## What still works

### 1. Tighter targeting, smaller lists

Six hundred relevant contacts beat six thousand random ones. Every time. The math is simple. Reply rates above two percent require relevance. Relevance does not scale with volume.

### 2. Trigger-led first lines

The opening line of every email should reference a real change in the buyer's world that week. New hire, new round, new product, new regulation. If you cannot find a trigger, the contact does not belong on the list this month.

### 3. Multi-channel sequencing

Email plus LinkedIn plus a smart follow-up beats six emails in a row. Use the channel the buyer answers on, not the channel that is cheap to send.

### 4. Deliverability hygiene

Custom domain. Warmed up properly. SPF, DKIM, DMARC set. Send under your reputation budget every day. This is unglamorous but it is the difference between a sequence that lands and one that does not.

## What we do for our clients

All four. Every engagement. We rebuild the targeting, write the sequences, set up the deliverability layer, and hand over a dashboard that shows you exactly which leads moved which way. [See the full process](/#how-it-works) or [claim a free 20-lead proof of value](/contact).`,
  },
];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
