const https = require('https');
// # Updating with a comment to keep alive
const urls = [
  'https://tutto-passforte.onrender.com/',
  'https://www.tuttowebdev.com/',
  'https://www.tuttowebdev.com/about',
  'https://www.tuttowebdev.com/amico',
  'https://www.tuttowebdev.com/scrivo',
  'https://www.tuttowebdev.com/webdev',
  'https://www.tuttowebdev.com/contact'
];

function pingSite() {
  const url = urls[Math.floor(Math.random() * urls.length)];

  https.get(url, (res) => {
    console.log(`[${new Date().toLocaleTimeString()}] Pinged ${url} - Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] Error pinging ${url}: ${err.message}`);
  });
}

// Ping every 12 minutes (only works 24/7 on paid Render workers)
setInterval(pingSite, 15 * 60 * 1000);
pingSite(); // Initial ping
