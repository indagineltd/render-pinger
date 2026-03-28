const https = require('https');

const urls = [
  'https://www.tuttowebdev.com/',
  'https://www.tuttowebdev.com/about',
  'https://www.tuttowebdev.com/amico',
  'https://www.tuttowebdev.com/scrivo',
  'https://www.tuttowebdev.com/webdev',
  'https://www.tuttowebdev.com/webdev#fullstack',
  'https://www.tuttowebdev.com/webdev#seo',
  'https://www.tuttowebdev.com/webdev#frontend',
  'https://www.tuttowebdev.com/webdev#backend',
  'https://www.tuttowebdev.com/contact'
];

function pingSite() {
  const url = urls[Math.floor(Math.random() * urls.length)];
  https.get(url, (res) => {
    console.log(`[${new Date().toLocaleTimeString()}] Pinged ${url} - Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] Error in Pinging ${url}:`, err.message);
  });
}

// Ping every 12 minutes
setInterval(pingSite, 12 * 60 * 1000);
pingSite(); // Initial ping
