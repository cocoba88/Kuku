let handler = async (m, { conn }) => {
  const dosa = [
    "./vn/baka2.mp3"
  ];

  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const file = getRandom(dosa);
  conn.sendMessage(m.chat, 'Sedang mengirim dosa...', 'conversation', { quoted: m });
  conn.sendFile(m.chat, file, "baka2.mp3", null, m, true, {
    type: "audioMessage",
    ptt: true,
  });
};

handler.customPrefix = /^(.*?(anjing|anjink|anjnk|anjng|kakeane|koplak|tlol|tolol|bego|anjim|pekok|jmbt|jembut|jmbut)).*$/i;
handler.command = new RegExp();

module.exports = handler;
