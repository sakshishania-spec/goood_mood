import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "public");

const app = express();
app.disable("x-powered-by");

// Basic security headers
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

// Simple health check (useful for uptime monitors)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "goood-mood-checkin", time: new Date().toISOString() });
});

// Static files (on Vercel, files in /public are served directly by the CDN)
app.use(express.static(publicDir, { extensions: ["html"], maxAge: "1h" }));

// Any other route shows the prototype
app.get("*", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

// Run a normal server locally; Vercel uses the exported app instead
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Goood running at http://localhost:${port}`);
  });
}

export default app;
