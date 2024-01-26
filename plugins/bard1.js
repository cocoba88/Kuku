const fetch = require("node-fetch");
const axios = require("axios");

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let handler = async (m, { conn, text }) => {
    if (!text) throw `✳️ Masukkan Teks\n\nContoh: .bardx Tutorial Mendapatkan Janda Pirang`;
    
    // Respond to the message with a random emoji
    conn.sendMessage(m.chat, {
        react: {
            text: `${pickRandom(['🗿','🦍','🦝','☢️','⚠', '🙈', '🔞','🚭','❌','🐤','🗿','🐦','🤨','❎','😐','👆','🖤','👀','☠'])}`,
            key: m.key,
        }
    });

    try {
        // Respond to the message with a random text message
        m.reply(
            `${pickRandom([
                'Ganggu Aja, Lagi Enak Nidurin Janda!',
                // ... (messages from your friend's script)
            ])}`
        );

        // Make a request to the bard API using your friend's logic
        let bard = await fetch(`https://api.guruapi.tech/api/bard?text=${encodeURIComponent(text)}`);
        let res = await bard.json();
        
        // Respond to the message with the API response
        await m.reply(res.respon);

    } catch (error) {
        // Handle errors
        m.reply(`⚠️ Maaf, aku lagi nggak bisa bantuin kamu. Aku harus selesaiin dulu misi rahasia dari pemerintah.`);
    }
}

// Additional configuration for your handler
handler.help = ['bard <text>']
handler.tags = ['ai']
handler.command = ['bardx11','bardaix1'];
handler.premium = false
handler.diamond = false

module.exports = handler;
