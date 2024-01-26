const fetch = require('node-fetch');
const imageType = require('image-type');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) {
      throw `*This command generates images from text prompts*\n\n*𝙴xample usage*\n*◉ ${usedPrefix + command} Beautiful anime girl*\n*◉ ${usedPrefix + command} A CAT WITH DOG*`;
    }

    m.reply('*Please wait, generating images...*');

    const endpoint = `https://www.bing.com/images/create?q=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);

    if (response.ok) {
      // Mengambil konten sebagai array buffer
      const buffer = await response.arrayBuffer();

      // Menggunakan image-type untuk menentukan apakah itu gambar
      const type = imageType(buffer);

      if (type && type.mime.includes('image')) {
        const imageBuffer = Buffer.from(buffer);
        await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
      } else {
        throw '*The generated file is not an image*';
      }
    } else {
      throw '*Image generation failed*';
    }
  } catch (error) {
    console.error(error);
    throw '*Oops! Something went wrong while generating images. Please try again later.*';
  }
};

handler.help = ['bingimg2'];
handler.tags = ['AI'];
handler.command = ['cobax', 'bingimgx2'];

module.exports = handler;
