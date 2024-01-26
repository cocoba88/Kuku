let handler = async (m, { conn }) => {
  const dosa = [
    "./vn/tabrak.mp3",

  ];

  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const file = getRandom(dosa);
  conn.sendMessage(m.chat, 'Sedang mengirim dosa...', 'conversation', { quoted: m });
  conn.sendFile(m.chat, file, "tabrak.mp3", null, m, true, {
    type: "audioMessage",
    ptt: true,
  });
};

handler.customPrefix = /^(.*?(tabrak|nabrak)).*$/i;
handler.command = new RegExp();

module.exports = handler;