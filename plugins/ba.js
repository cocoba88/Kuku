const fetch = require("node-fetch");

let handler = async (m, { text }) => {
    try {
        if (!text) throw `✳️ Masukkan Teks\n\nContoh: .bardx Tutorial Mendapatkan Janda Pirang`;

        let bard = await fetch(`https://api.betabotz.eu.org/api/search/bing-chat?text=${encodeURIComponent(text)}&apikey=fXgfnHZa`);
        
        if (!bard.ok) {
            throw new Error(`HTTP error! Status: ${bard.status}`);
        }

        let res = await bard.json();
        
        if (res && res.message) {
            await m.reply(res.message);
        } else {
            console.error('Invalid API response:', res);
            throw new Error('No valid response received from the API');
        }
    } catch (error) {
        console.error('Error:', error);
        m.reply(`❎ Error: ${error.message || 'Ada sebuah kesalahan'}`);
    }
}

handler.help = ['bard <text>'];
handler.tags = ['ai'];
handler.command = ['banx','bardaixx'];
handler.premium = false;
handler.diamond = false;

module.exports = handler;
