const fetch = require('node-fetch');

// Function to pick a random element from an array
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (command === 'bingx2') {
        if (!text) {
            return m.reply(`Usage: ${usedPrefix + command} <prompt>\n\nExample: ${usedPrefix + command} Tutorial Mendapatkan Janda Pirang`);
        }

        conn.sendMessage(m.chat, {
            react: {
                text: `${pickRandom(['🗿','🦍','🦝','☢️','⚠', '🙈', '🔞','🚭', '❌', '🐤','🗿','🐦','🤨','❎','😐','👆','🖤','👀','⏱'])}`,
                key: m.key,
            }
        });

        try {
            m.reply(`${pickRandom([
                'Ganggu Aja, Lagi Enak Nidurin Janda!',
                // ... (other responses)
                'Aku Lagi Di Pantai. Nanti Aku Kirim Pas Aku Udah Pulang, Ya.'
            ])}`);

            let response = await fetch('https://api.betabotz.eu.org/api/search/bing-chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: text,
                    apikey: 'fXgfnHZa' // Replace with your actual API key
                })
            }).then(res => res.json());

            await conn.sendMessage(m.chat, {
                text: response.message,
                contextInfo: {
                    externalAdReply: {
                        title: 'Bing-Ai',
                        body: '',
                        thumbnailUrl: "https://telegra.ph/file/b6a2e82f30570afa1d082.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        } catch (e) {
            console.log(e);
            throw `*Error:* ${e}`;
        }
    }

    if (command === 'bingimgx2') {
        if (!text) throw `Example: ${usedPrefix + command} anak berlari menggunakan pakaian merah 3d animations`;

        try {
            m.reply(wait);
            let response = await fetch('https://api.betabotz.eu.org/api/search/bing-img', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: text,
                    apikey: 'fXgfnHZa' // Replace with your actual API key
                })
            }).then(res => res.json());

            for (let i = 0; i < 4; i++) {
                let img = response.result[i];
                await sleep(3000);
                await conn.sendFile(m.chat, img, 'bing_img.png', `*PROMPT:* ${text}`, m);
            }
        } catch (error) {
            throw `Error: ${error}`;
        }
    }
};

handler.command = handler.help = ['bingx2', 'bingaix2', 'bingx2', 'bingimgx2'];
handler.tags = ['tools'];
handler.limit = false;

module.exports = handler;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
