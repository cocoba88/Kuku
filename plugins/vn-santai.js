let handler = async (m, { conn }) => {
  const dosa = [
    "./vn/santai.mp3",

  ];

  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const file = getRandom(dosa);
  conn.sendMessage(m.chat, 'Sedang mengirim dosa...', 'conversation', { quoted: m });
  conn.sendFile(m.chat, file, "santai.mp3", null, m, true, {
    type: "audioMessage",
    ptt: true,
  });
};

handler.customPrefix = /^(.*?(santai|santuy)).*$/i;
handler.command = new RegExp();

module.exports = handler;