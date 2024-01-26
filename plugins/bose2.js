const fetch = require('node-fetch');

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("Usage:\n!bose <prompt>");
    }

    const url = 'https://stable-diffusion9.p.rapidapi.com/generate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'eec836627dmsh1f5ef7f852cc725p17953djsnae472d927df7',
            'X-RapidAPI-Host': 'stable-diffusion9.p.rapidapi.com'
        },
        body: JSON.stringify({
            prompt: text,
            style: 'photographic'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.status === "success" && result.url) {
            await conn.sendFile(m.chat, result.url, 'image.jpg', 'Generated Image', m);
        } else {
            console.error(result);
            m.reply("Error generating and sending image.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Error generating and sending image.");
    }
};

handler.help = ['bose <prompt>'];
handler.tags = ['ai'];
handler.command = /^lose2/i;
handler.premium = false;
handler.diamond = false;

module.exports = handler;
