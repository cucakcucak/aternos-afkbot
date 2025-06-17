const mineflayer = require('mineflayer');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const bot = mineflayer.createBot({
    host: config.host,
    port: config.port,
    username: config.username,
    version: '1.21.4' // Phải có dòng này để khớp Aternos server 1.21.4
});
