const axios = require('axios');

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("Usage:\n!bose <prompt>");
    }

    const options = {
        method: 'GET',
        url: 'https://free-ai-image-generator-midjourney1.p.rapidapi.com/start/mj',
        params: {
            prompt: text
        },
        headers: {
            'X-RapidAPI-Key': 'eec836627dmsh1f5ef7f852cc725p17953djsnae472d927df7',
            'X-RapidAPI-Host': 'free-ai-image-generator-midjourney1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        await conn.sendFile(m.chat, response.data, 'image.jpg', m);
    } catch (error) {
        console.error(error);
        m.reply("Error generating and sending image.");
    }
};

handler.help = ['bose <text>'];
handler.tags = ['ai'];
handler.command = /^bose/i;
handler.premium = false;
handler.diamond = false;

module.exports = handler;
