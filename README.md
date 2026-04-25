Render Pinger 🔔
This project keeps a Render‑hosted HTTP service awake by periodically pinging it using GitHub Actions.
A Node.js script is included for optional use with a Render worker, but workers on the free plan sleep after 15 minutes — so GitHub Actions is the reliable method.

📂 Project Structure
.github/workflows/pinger.yml → GitHub Actions workflow that pings your site every 15 minutes.

index.js → Optional Node.js script for a Render worker (runs continuously only on paid plans).

package.json / package-lock.json → Node.js project metadata and dependencies.

⚙️ How It Works
The GitHub Actions workflow runs on a schedule (cron: */15 * * * *) and sends a request to one of several URLs.

Random user agents are used to simulate different clients.

This keeps your Render app awake on the free plan, without needing a Render worker.

The index.js script can be used on Render if you upgrade to a paid worker plan.

🚀 Usage
Clone this repository.

Install dependencies:

bash
npm install
Commit the GitHub Actions workflow — it will automatically run every 15 minutes.

📝 Notes
Render free workers sleep after 15 minutes, so GitHub Actions is the recommended method for uptime on the free plan.

If 
