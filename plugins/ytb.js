const axios = require('axios');

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("Usage:\n!magangimg <video_url>");
    }

    try {
        // Mengambil informasi video
        const response = await axios.get(`https://aemt.me/download/ytdl?url=${encodeURIComponent(text)}`);
        console.log(response.data);

        if (response.data.status && response.data.result) {
            const videoInfo = response.data.result;

            // Jika video memiliki kualitas HD
            if (videoInfo.quality === 'HD' && videoInfo.id) {
                // Mengirimkan video
                await conn.sendFile(m.chat, `https://www.youtube.com/watch?v=${videoInfo.id}`, 'video.mp4', '');

            } else {
                m.reply("The video quality is not HD or the video ID is not available. Please try with a different video.");
            }

        } else {
            m.reply("Error getting response from Magangimg API.");
        }

    } catch (error) {
        console.error(error);
        m.reply("Error connecting to Magangimg API.");
    }
};

handler.help = ['magangimg <video_url>'];
handler.tags = ['api'];
handler.command = /^ytb/i;
handler.premium = false;
handler.diamond = false;

module.exports = handler;
