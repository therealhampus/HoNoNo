# ❌ HoNoNo

Ever needed an even tinier API to say no? Look no further!

---

## 🚀 API Usage

**Method:** `GET`  

### 🔄 Example Request
```http
GET /no
```

### ✅ Example Response
```json
{
  "reason": "This feels like something Future Me would yell at Present Me for agreeing to."
}
```

Use it in apps, bots, landing pages, Slack integrations, rejection letters, or wherever you need a polite (or witty) no.

---

## 🛠️ Self-Hosting

Want to run it yourself? It’s lightweight and simple.

### 1. Clone this repository
```bash
git clone https://github.com/therealhampus/HoNoNo.git
cd HoNoNo
```

### 2. Install dependencies
```bash
bun install
```

### 3. Start the server
```bash
bun run start
```

The API will be live at:
```
http://localhost:3000/no
```

You can also change the port using an environment variable:
```bash
PORT=5000 bun run start
```

---

## 📁 Project Structure

```
HoNoNo/
├── index.js            # Hono API
├── reasons.json        # 1000+ universal rejection reasons
├── package.json
├── bun.lock
└── README.md
```

---

## 👤 Author

Created with creative stubbornness by [hotheadhacker](https://github.com/hotheadhacker)

Slightly modified by me [therealhampus](https://github.com/therealhampus)

---

## 📄 License

MIT — do whatever, just don’t say yes when you should say no.
