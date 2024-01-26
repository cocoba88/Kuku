const fetch = require('node-fetch');

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("Usage:\n!bose <prompt>");
    }

    const url = 'https://midjourney13.p.rapidapi.com/images';
    const apiKey = 'eec836627dmsh1f5ef7f852cc725p17953djsnae472d927df7';

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Processor': 'sync',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'midjourney13.p.rapidapi.com'
        },
        body: JSON.stringify({
            prompt: text
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        await conn.sendFile(m.chat, result, 'image.jpg', m);
    } catch (error) {
        console.error(`Error generating and sending image: ${error.message}`);
        m.reply("Error generating and sending image.");
    }
};

handler.help = ['bose <prompt>'];
handler.tags = ['ai'];
handler.command = /^lose4/i;
handler.premium = false;
handler.diamond = false;

module.exports = handler;
