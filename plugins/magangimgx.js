const axios = require('axios');

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("Usage:\n!magangimg <prompt>");
    }

    try {
        // Mengambil URL gambar pertama
        const response1 = await axios.get(`https://aemt.me/bingimg?text=${encodeURIComponent(text)}`);
        console.log(response1.data);

        if (response1.data.status && response1.data.result) {
            const imageUrl1 = response1.data.result;

            // Mengirimkan file pertama
            await conn.sendFile(m.chat, imageUrl1, 'image1.jpg', 'Nih Kak!');

            // Mengambil URL gambar kedua
            const response2 = await axios.get(`https://aemt.me/bingimg?text=${encodeURIComponent(text)}`);
            console.log(response2.data);

            if (response2.data.status && response2.data.result) {
                const imageUrl2 = response2.data.result;

                // Mengirimkan file kedua
                await conn.sendFile(m.chat, imageUrl2, 'image2.jpg', 'Nih Kak!');

                // Mengambil URL gambar ketiga
                const response3 = await axios.get(`https://aemt.me/bingimg?text=${encodeURIComponent(text)}`);
                console.log(response3.data);

                if (response3.data.status && response3.data.result) {
                    const imageUrl3 = response3.data.result;

                    // Mengirimkan file ketiga
                    await conn.sendFile(m.chat, imageUrl3, 'image3.jpg', 'Nih Kak!');

                    // Mengambil URL gambar keempat
                    const response4 = await axios.get(`https://aemt.me/bingimg?text=${encodeURIComponent(text)}`);
                    console.log(response4.data);

                    if (response4.data.status && response4.data.result) {
                        const imageUrl4 = response4.data.result;

                        // Mengirimkan file keempat
                        await conn.sendFile(m.chat, imageUrl4, 'image4.jpg', 'Nih Kak!');

                    } else {
                        m.reply("Error getting response from Magangimg API (4th request).");
                    }

                } else {
                    m.reply("Error getting response from Magangimg API (3rd request).");
                }

            } else {
                m.reply("Error getting response from Magangimg API (2nd request).");
            }

        } else {
            m.reply("Error getting response from Magangimg API (1st request).");
        }
    } catch (error) {
        console.error(error);
        m.reply("Error connecting to Magangimg API.");
    }
};

handler.help = ['magangimg <text>'];
handler.tags = ['api'];
handler.command = /^testmagang/i;
handler.premium = false;
handler.diamond = false;

module.exports = handler;
