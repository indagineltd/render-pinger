const https = require('https');

const url = 'https://www.tuttowebdev.com/'

function pingSite() {
  https.get(url, (res) => {
    console.log(`Pinged ${url} - Status: ${res.statusCode}`)
  }).on('error', (err) => {
    console.error(`Error in Pinging ${url}:`, err.message)
  });
};

// Ping every 1 minute
setInterval(pingSite, 1 * 60 * 1000);

// Call the function
pingSite();
