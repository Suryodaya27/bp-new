import { MongoClient } from "mongodb";

let cachedClient = null;

async function getDb() {
	if (!cachedClient) {
		cachedClient = new MongoClient(process.env.MONGO_URL);
		await cachedClient.connect();
	}
	return cachedClient.db(process.env.DB_NAME);
}

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const adminPassword = process.env.ADMIN_PASSWORD;
	if (!adminPassword) {
		return res.status(500).json({ detail: "Admin not configured" });
	}

	const auth = req.headers.authorization;
	if (!auth || !auth.startsWith("Bearer ")) {
		return res.status(401).json({ detail: "Unauthorized" });
	}

	const token = auth.split(" ")[1].trim();
	if (token !== adminPassword) {
		return res.status(401).json({ detail: "Unauthorized" });
	}

	try {
		const db = await getDb();
		const docs = await db
			.collection("leads")
			.find({}, { projection: { _id: 0 } })
			.sort({ created_at: -1 })
			.limit(1000)
			.toArray();
		return res.status(200).json(docs);
	} catch (err) {
		console.error("Failed to fetch leads:", err);
		return res.status(500).json({ detail: "Failed to fetch leads." });
	}
}
