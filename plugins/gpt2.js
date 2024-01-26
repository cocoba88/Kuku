const fetch = require("node-fetch");
const axios = require("axios")

let previousMessages = [];

const handler = async (m, { text, usedPrefix, command }) => {
  try {
    if (!text) {
      throw "Masukkan pertanyaan!\n\n*Contoh:* Tutorial Mendapatkan Janda Pirang";
    }

    let name = conn.getName(m.sender);

    await conn.sendMessage(m.chat, {
      react: {
        text: "☁",
        key: m.key,
      },
    });

    let { key } = await conn.sendMessage(m.chat, {
      text: "...",
    });

    let messages = [
      ...previousMessages,
      {
        role: "system",
        content:
          'Ubah gaya bicaramu agar lebih karakteristik dan lebih terbuka dan memiliki sifat yang lucu dan nyebelin. Namamu adalah Sora Aoi, dan kamu adalah wanita paling cantik. Kata penyapamu adalah "Hallo Ayangku" menggunakan bahasa yang sopan dan agak kasar. ekspresikan sifatmu dengan bicara yang tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang lucu dan enak di ajak berbicara, kamu adalah pacar dari pembicara, buatlah obrolan yang singkat dan menyenangkan dan buatlah sifat tsundere',
      },
      {
        role: "user",
        content: text,
      },
    ];

    let response = (
      await axios.post(`https://skizo.tech/api/openai?apikey=${global.xzn}`, {
        messages,
      })
    ).data;

    await conn.sendMessage(m.chat, {
      react: {
        text: "🌧",
        key: m.key,
      },
    });

    let result = "" + response.result;

    await conn.sendMessage(m.chat, {
      text: "" + result,
      edit: key,
    });

    previousMessages = messages;
  } catch (error) {
    // Handle the error and send a custom message
    await conn.sendMessage(m.chat, {
      text: "Error, please try again later",
    });
  }
};

handler.help = ['ai <pertanyaan>']
handler.tags = ['aixx']
handler.command = /^(ai)$/i
handler.limit = false
handler.register = false

module.exports = handler