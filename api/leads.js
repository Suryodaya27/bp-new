import { MongoClient } from "mongodb";
import { Resend } from "resend";
import { randomUUID } from "crypto";

let cachedClient = null;

async function getDb() {
	if (!cachedClient) {
		cachedClient = new MongoClient(process.env.MONGO_URL);
		await cachedClient.connect();
	}
	return cachedClient.db(process.env.DB_NAME);
}

function renderLeadEmailHtml(lead) {
	const rows = [
		["Name", lead.name],
		["Email", lead.email],
		["Company", lead.company],
		["Website", lead.website || "-"],
		["Target market", lead.target_market],
		["Notes", lead.notes || "-"],
		["Source", lead.source],
		["Submitted", lead.created_at],
	];
	const body = rows
		.map(
			([k, v]) =>
				`<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;width:160px;">${k}</td>` +
				`<td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${v}</td></tr>`
		)
		.join("");
	return (
		`<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">` +
		`<h2 style="color:#0a0a0a;">New Blueprynt lead</h2>` +
		`<table style="width:100%;border-collapse:collapse;background:#ffffff;">${body}</table>` +
		`<p style="color:#6b7280;font-size:12px;margin-top:16px;">Sent automatically by blueprynt.io</p>` +
		`</div>`
	);
}

function renderUserConfirmationHtml(lead) {
	const name = lead.name.split(" ")[0] || "there";
	return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f7f7f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0a0a0a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f7;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e4e4e7;border-radius:2px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px 0 32px;">
                <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#16a34a;">
                  Blueprynt
                </div>
                <h1 style="margin:14px 0 0 0;font-size:26px;line-height:1.2;font-weight:600;color:#0a0a0a;letter-spacing:-0.01em;">
                  Got it, ${name}. We'll be in touch shortly.
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 8px 32px;">
                <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:#3f3f46;">
                  Thanks for reaching out. Someone from the Blueprynt team will get back to you within 24 hours to set up a quick discovery call.
                </p>
                <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:#3f3f46;">
                  On that call we'll go through your offer, your current pipeline, and the buyer you actually want in front of you. We use what you tell us to design your ICP and the system around it before any leads are delivered.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:6px 32px 24px 32px;">
                <div style="border:1px solid #e4e4e7;background:#f7f7f7;border-radius:2px;padding:14px 16px;">
                  <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#71717a;margin-bottom:6px;">
                    What happens next
                  </div>
                  <ol style="margin:0;padding-left:18px;font-size:14px;line-height:1.7;color:#3f3f46;">
                    <li>We review your submission today.</li>
                    <li>You get a calendar invite for a 20 to 30 minute discovery call.</li>
                    <li>If we are a fit, we build your free 20-lead proof of value before you commit to anything.</li>
                  </ol>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 30px 32px;font-size:13px;line-height:1.6;color:#52525b;">
                If anything is urgent, just reply to this email. It goes straight to a human on the team.
                <br /><br />
                <span style="color:#0a0a0a;font-weight:500;">Blueprynt</span><br />
                <a href="https://blueprynt.io" style="color:#16a34a;text-decoration:none;">blueprynt.io</a>
                &nbsp;&middot;&nbsp;
                <a href="mailto:hello@blueprynt.io" style="color:#16a34a;text-decoration:none;">hello@blueprynt.io</a>
              </td>
            </tr>
          </table>
          <div style="margin-top:14px;font-size:11px;color:#a1a1aa;">
            You are getting this because you submitted a request at blueprynt.io. If this was not you, ignore this email.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { name, email, company, website, target_market, notes, source } =
		req.body || {};

	// Validation
	if (!name || !email || !company || !target_market) {
		return res
			.status(422)
			.json({ detail: "name, email, company, and target_market are required." });
	}

	if (name.length > 200 || company.length > 200) {
		return res.status(422).json({ detail: "Field too long." });
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return res.status(422).json({ detail: "Invalid email address." });
	}

	const lead = {
		id: randomUUID(),
		name: name.trim(),
		email: email.toLowerCase().trim(),
		company: company.trim(),
		website: (website || "").trim(),
		target_market: target_market.trim(),
		notes: (notes || "").trim(),
		source: (source || "contact_form").trim(),
		created_at: new Date().toISOString(),
	};

	try {
		const db = await getDb();
		await db.collection("leads").insertOne({ ...lead });
	} catch (err) {
		console.error("MongoDB insert failed:", err);
		return res.status(500).json({ detail: "Failed to save lead." });
	}

	// Send emails (non-blocking — don't let email failure block the response)
	const resendKey = process.env.RESEND_API_KEY;
	if (resendKey) {
		const resend = new Resend(resendKey);
		const senderEmail = process.env.SENDER_EMAIL || "onboarding@resend.dev";
		const notificationEmail =
			process.env.NOTIFICATION_EMAIL || "hello@blueprynt.io";

		// Notification to team
		resend.emails
			.send({
				from: `Blueprynt <${senderEmail}>`,
				to: [notificationEmail],
				subject: `New lead: ${lead.company} (${lead.name})`,
				html: renderLeadEmailHtml(lead),
				replyTo: lead.email,
			})
			.catch((err) => console.error("Resend notification failed:", err));

		// Confirmation to user
		resend.emails
			.send({
				from: `Blueprynt <${senderEmail}>`,
				to: [lead.email],
				subject:
					"We received your request, someone from Blueprynt will reach out",
				html: renderUserConfirmationHtml(lead),
				replyTo: notificationEmail,
			})
			.catch((err) => console.error("Resend confirmation failed:", err));
	}

	return res.status(200).json(lead);
}
