/**
 * GA4 Analytics — loads only after cookie consent is accepted.
 *
 * Usage: import and call initAnalytics() once in your App root.
 * The GA4 Measurement ID is read from VITE_GA4_ID env variable.
 */

const GA4_ID = import.meta.env.VITE_GA4_ID;
const CONSENT_KEY = "bp-consent";

let initialized = false;

function loadGA4() {
	if (initialized || !GA4_ID) return;
	initialized = true;

	// Load gtag.js script
	const script = document.createElement("script");
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
	script.async = true;
	document.head.appendChild(script);

	// Initialize dataLayer and gtag
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		window.dataLayer.push(arguments);
	}
	window.gtag = gtag;

	gtag("js", new Date());
	gtag("config", GA4_ID, {
		anonymize_ip: true,
		send_page_view: true,
	});
}

export function initAnalytics() {
	// If user already accepted in a previous session, load immediately
	if (localStorage.getItem(CONSENT_KEY) === "accepted") {
		loadGA4();
	}

	// Listen for fresh consent acceptance
	window.addEventListener("bp-consent-accepted", () => {
		loadGA4();
	});
}

/**
 * Track a custom event (only fires if GA4 is loaded).
 * Example: trackEvent("lead_form_submit", { company: "Acme" })
 */
export function trackEvent(eventName, params = {}) {
	if (window.gtag) {
		window.gtag("event", eventName, params);
	}
}
