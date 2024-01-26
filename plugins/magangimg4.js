const axios = require('axios');

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("Usage:\n!magangimg4 <prompt>");
    }

    const apiUrl = 'https://aemt.me/v4/text2img';
    const encodedText = encodeURIComponent(text);

    const options = {
        method: 'GET',
        url: `${apiUrl}?text=${encodedText}`,
        headers: {
            'accept': 'application/json'
        }
    };

    try {
        // Mengambil URL gambar pertama
        const response1 = await axios.request(options);

        if (response1.headers['content-type'] && response1.headers['content-type'].startsWith('image/')) {
            // If the response is an image
            await conn.sendFile(m.chat, response1.data, 'image1.jpg', '1');

            // Mengambil URL gambar kedua
            const response2 = await axios.request(options);

            if (response2.headers['content-type'] && response2.headers['content-type'].startsWith('image/')) {
                // If the response is an image
                await conn.sendFile(m.chat, response2.data, 'image2.jpg', '2');

                // Mengambil URL gambar ketiga
                const response3 = await axios.request(options);

                if (response3.headers['content-type'] && response3.headers['content-type'].startsWith('image/')) {
                    // If the response is an image
                    await conn.sendFile(m.chat, response3.data, 'image3.jpg', '3');

                    // Mengambil URL gambar keempat
                    const response4 = await axios.request(options);

                    if (response4.headers['content-type'] && response4.headers['content-type'].startsWith('image/')) {
                        // If the response is an image
                        await conn.sendFile(m.chat, response4.data, 'image4.jpg', '4');
                    } else {
                        m.reply("Error: Invalid response from Magangimg API (4th request). It may not be an image.");
                    }

                } else {
                    m.reply("Error: Invalid response from Magangimg API (3rd request). It may not be an image.");
                }

            } else {
                m.reply("Error: Invalid response from Magangimg API (2nd request). It may not be an image.");
            }

        } else {
            m.reply("Error: Invalid response from Magangimg API (1st request). It may not be an image.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Error connecting to Magangimg API.");
    }
};

handler.help = ['magangimg4 <text>'];
handler.tags = ['api'];
handler.command = /^magangimg4/i;
handler.premium = false;
handler.diamond = false;

module.exports = handler;
