let handler = async (m, { conn }) => {
  const dosa = [
	"./vn/clara.mp3",
	"./vn/clara1.mp3",
	"./vn/clara2.mp3",
	"./vn/clara3.mp3"
  ];

  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const file = getRandom(dosa);
  conn.sendMessage(m.chat, 'Sedang mengirim dosa...', 'conversation', { quoted: m });
  conn.sendFile(m.chat, file, "sepi.mp3", null, m, true, {
    type: "audioMessage",
    ptt: true,
  });
};

handler.customPrefix = /^(.*?(sepi)).*$/i;
handler.command = new RegExp();

module.exports = handler;
