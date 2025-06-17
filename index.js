const mineflayer = require('mineflayer');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const bot = mineflayer.createBot({
    host: config.host,
    port: config.port,
    username: config.username,
    version: '1.21.4' // Thêm dòng này cho đúng phiên bản server
});

bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    bot.chat('Tôi đang online để giữ slot!');
});

bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot bị ngắt kết nối, đang khởi động lại...'));
