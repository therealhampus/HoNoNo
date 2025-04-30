import { Hono } from "hono";
import fs from "fs";

const app = new Hono();
const PORT = process.env.PORT || 3000;

// Load reasons from JSON
const reasons = JSON.parse(fs.readFileSync("./reasons.json", "utf-8"));

// Random rejection reason endpoint
app.get("/no", (c) => {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  return c.text(reason);
});

export default {
  port: PORT,
  fetch: app.fetch,
};
