# Render Pinger 🔔

This project keeps a Render‑hosted HTTP service awake by periodically pinging it using **GitHub Actions** and a simple Node.js script.

## 📂 Project Structure
- `.github/workflows/pinger.yml` → GitHub Actions workflow that pings your site every 12 minutes.
- `.render.yaml` → Render configuration for deploying the worker service.
- `index.js` → Node.js script that randomly selects a URL and sends an HTTPS request.
- `package.json` / `package-lock.json` → Node.js project metadata and dependencies.

## ⚙️ How It Works
- The GitHub Actions workflow runs on a schedule (`cron: */12 * * * *`) and sends requests to a list of URLs.
- The Node.js script (`index.js`) also pings the same URLs every 12 minutes when deployed as a Render worker.
- Random user agents are used to simulate different clients.

## 🚀 Usage
1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
